import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

function safeParse(value) {
  try {
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error("AuthContext parse error:", e);
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const parsed = safeParse(stored);

    if (parsed && parsed.email) {
      setUser(parsed);
    } else if (stored) {
      localStorage.removeItem("user");
    }
  }, []);

  const login = (userData) => {
    const normalized = {
      email: userData.email,
    };

    localStorage.setItem("user", JSON.stringify(normalized));
    setUser(normalized);
  };

  const register = (newUser) => {
    const users = safeParse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === newUser.email);
    if (exists) {
      return { ok: false, error: "Usuario ya existe" };
    }

    const toSave = {
      email: newUser.email,
      password: newUser.password,
    };

    users.push(toSave);
    localStorage.setItem("users", JSON.stringify(users));

    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
      register,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);