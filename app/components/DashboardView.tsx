"use client";
import type { Task, TaskActions } from "../types";
import { byDeadline, matches } from "../lib/utils";
import TaskCard from "./TaskCard";

export default function DashboardView({ name, tasks, a, onAdd }: { name: string; tasks: Task[]; a: TaskActions; onAdd: () => void }) {
  const active = tasks.filter((t) => !t.done && matches(t, a.q)).sort(byDeadline);
  const stats = [
    { label: "Total Tugas", v: tasks.length, icon: "📚" },
    { label: "Tugas Aktif", v: tasks.filter((t) => !t.done).length, icon: "🐾" },
    { label: "Selesai", v: tasks.filter((t) => t.done).length, icon: "🏆" },
  ];
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-[2rem] bg-btn p-6 text-btnink sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h1 className="font-display text-3xl font-semibold">Halo, {name}! 👋</h1>
          <p className="mt-1 opacity-80">selesaikan tugas kamu</p>
        </div>
        <button onClick={onAdd} className="rounded-2xl bg-card px-5 py-2.5 font-bold text-[#6b4c3b] transition hover:opacity-90 active:scale-95">+ Tambah Tugas Baru</button>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map((s) => (
          <div key={s.label} className="card p-4 text-center">
            <div className="text-2xl" aria-hidden>{s.icon}</div>
            <p className="font-display text-3xl font-semibold">{s.v}</p>
            <p className="text-xs text-muted sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
      <section>
        <h2 className="mb-3 font-display text-xl font-semibold">Prioritas Terdekat</h2>
        {active.length === 0 ? (
          <p className="card text-center text-muted">{a.q ? "Tidak ada tugas yang cocok 🔍" : "Semua beres! Tambah tugas baru untuk mulai 🐶"}</p>
        ) : (
          <ul className="space-y-3">{active.map((t) => <TaskCard key={t.id} t={t} a={a} />)}</ul>
        )}
      </section>
    </div>
  );
}
