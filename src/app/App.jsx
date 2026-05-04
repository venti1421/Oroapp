import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import ProductDetail from "../pages/ProductDetail";
import Informe from "../pages/Informe";
import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Layout>
                <Favorites />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <Layout>
                <ProductDetail />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/informe"
          element={
            <ProtectedRoute>
              <Layout>
                <Informe />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/informe/:id"
          element={
            <ProtectedRoute>
              <Layout>
                <Informe />
              </Layout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}