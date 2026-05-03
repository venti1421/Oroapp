import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3042B3] via-[#6579F7] to-[#3042B3] relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-[#6579F7] opacity-30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-[#D4AF37] opacity-20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="relative z-10">
        <Navbar />
        <main className="p-5">{children}</main>
      </div>

    </div>
  );
}