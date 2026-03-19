"use client";

import { useState } from "react";

type Course = {
  id: string;
  title: string;
  next: string;
};

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([
    { id: "biology-101", title: "Biology 101", next: "Chapter 3 – Cells" },
    { id: "calculus", title: "Calculus", next: "Integration practice" },
    { id: "history", title: "History", next: "WWI timeline" },
  ]);

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [form, setForm] = useState({ title: "", next: "" });

  const canCreate =
    form.title.trim().length > 0 && form.next.trim().length > 0;

  function createCourse() {
    if (!canCreate) return;

    const id = `course-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setCourses((prev) => [
      { id, title: form.title.trim(), next: form.next.trim() },
      ...prev,
    ]);
    setForm({ title: "", next: "" });
    setIsCreateOpen(false);
  }

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-6 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      {/* Top bar */}
      <header className="mx-auto flex max-w-6xl items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-indigo-600 px-2 py-1 text-xs font-semibold text-white">
            Lume.ai
          </span>
          <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <button className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900">
            Today
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400" />
        </div>
      </header>

      {/* Main dashboard layout */}
      <main className="mx-auto mt-6 grid max-w-6xl gap-6 md:grid-cols-[260px,1fr]">
        {/* Courses section */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold tracking-tight">My courses</h2>

            <div className="flex items-center gap-2">
              <button className="text-xs font-medium text-indigo-600 hover:text-indigo-500">
                Manage
              </button>
              <button
                type="button"
                className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white hover:bg-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-200 dark:hover:bg-indigo-500/30"
                onClick={() => setIsCreateOpen(true)}
              >
                Create course
              </button>
            </div>
          </div>

          {isCreateOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
              role="dialog"
              aria-modal="true"
              onMouseDown={(e) => {
                // Close when clicking the overlay, not the dialog itself.
                if (e.target === e.currentTarget) setIsCreateOpen(false);
              }}
            >
              <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold tracking-tight">
                    Create course
                  </h3>
                  <button
                    type="button"
                    className="text-xs font-medium text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                    onClick={() => setIsCreateOpen(false)}
                  >
                    Close
                  </button>
                </div>

                <form
                  className="mt-4 space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    createCourse();
                  }}
                >
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                      Course name
                    </label>
                    <input
                      value={form.title}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, title: e.target.value }))
                      }
                      className="h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-indigo-500 dark:border-zinc-800 dark:bg-zinc-950"
                      placeholder="e.g. Chemistry 101"
                      autoFocus
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                      Next up
                    </label>
                    <input
                      value={form.next}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, next: e.target.value }))
                      }
                      className="h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-indigo-500 dark:border-zinc-800 dark:bg-zinc-950"
                      placeholder="e.g. Chapter 1 - Matter"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-1">
                    <button
                      type="button"
                      className="h-8 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900"
                      onClick={() => setIsCreateOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!canCreate}
                      className="h-8 rounded-lg bg-indigo-600 px-3 text-xs font-medium text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-500/30 dark:hover:bg-indigo-500/40"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="rounded-xl border border-zinc-100 bg-zinc-50 p-3 text-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="font-medium">{course.title}</p>
                <p className="mt-1 text-xs text-zinc-500">Next: {course.next}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
