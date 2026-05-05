export default function InlineAlert({ type = "error", children }) {
  const styles = {
    error: "bg-red-500/10 border-red-500/30 text-red-100",
    success: "bg-emerald-500/10 border-emerald-500/30 text-emerald-100",
    info: "bg-sky-500/10 border-sky-500/30 text-sky-100",
  };

  return (
    <div className={`rounded-lg border px-4 py-3 text-sm ${styles[type]}`}>
      {children}
    </div>
  );
}
