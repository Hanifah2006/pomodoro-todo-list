"use client";
export default function LandingView({ onStart }: { onStart: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="card w-full max-w-xl rounded-[2.5rem] p-8 text-center sm:p-12">
        <div className="sway text-7xl sm:text-8xl" aria-hidden>🐶🐾</div>
        <h1 className="mt-6 font-display text-4xl font-semibold sm:text-5xl">welcome to your to do list</h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          Teman setiamu untuk mencatat tugas, mengatur waktu fokus dengan Pomodoro, dan menjalani hari dengan penuh semangat!! ✨☕
        </p>
        <button onClick={onStart} className="btn mt-8 px-8 py-3 text-lg">start</button>
      </div>
    </main>
  );
}
