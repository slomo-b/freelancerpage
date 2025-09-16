export function BlurryBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-50 overflow-hidden"
    >
      <div className="absolute left-[max(50%,25rem)] top-0 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet-300/20 blur-3xl" />
      <div className="absolute left-1/2 top-[max(20%,40rem)] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
    </div>
  );
}