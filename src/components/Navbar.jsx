export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[color:var(--secondary)] text-white shadow-md">
      <h1 className="font-bold text-lg text-[color:var(--primary)]">
        OroApp 💰
      </h1>

      <div className="flex gap-4">
        <a href="/home" className="hover:text-[color:var(--accent)]">
          Inicio
        </a>
        <a href="/favorites" className="hover:text-[color:var(--accent)]">
          Favoritos
        </a>
      </div>
    </nav>
  );
}