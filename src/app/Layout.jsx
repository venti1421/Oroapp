import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="p-5">{children}</main>
    </div>
  );
}