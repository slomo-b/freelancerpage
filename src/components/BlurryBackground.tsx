export function BlurryBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background"
        style={{
          backgroundImage: 'repeating-radial-gradient(circle at center, rgba(128, 128, 128, 0.2) 0px, rgba(128, 128, 128, 0.2) 1px, transparent 1px, transparent 10px)',
          backgroundSize: '10px 10px',
        }}
      />
      <div className="absolute left-[max(50%,25rem)] top-0 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute left-1/2 top-[max(20%,40rem)] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-sky-300/30 blur-3xl" />
    </div>
  );
}