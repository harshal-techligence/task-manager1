export default function ToastContainer({ toasts }) {
  return (
    <div className="fixed bottom-7 left-1/2 -translate-x-1/2 flex flex-col gap-2 z-[99999] pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="bg-ink text-sand text-xs px-5 py-2 rounded-full shadow-lg toast"
        >
          {t.msg}
        </div>
      ))}
    </div>
  );
}
