export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-6 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      {/* Top bar */}
      <header className="mx-auto flex max-w-6xl items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-indigo-600 px-2 py-1 text-xs font-semibold text-white">
            Lume.ai
          </span>
          <h1 className="text-xl font-semibold tracking-tight">
            Dashboard
          </h1> 
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
        {/* Sidebar - Study overview */}
        <aside className="space-y-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <section>
            <h2 className="text-sm font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Today&apos;s Focus
            </h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Choose 1–3 topics to concentrate on so you don&apos;t feel overwhelmed.
            </p>
          </section>

          <section className="space-y-2 text-sm">
            <label className="block text-xs font-medium uppercase tracking-wide text-zinc-500">
              Main goal
            </label>
            <input
              type="text"
              placeholder="Finish chapter 3 notes..."
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:ring-indigo-500/30"
            />
          </section>

          <section className="space-y-2 text-sm">
            <label className="block text-xs font-medium uppercase tracking-wide text-zinc-500">
              Time block
            </label>
            <div className="flex gap-2">
              <button className="flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-xs font-medium hover:border-indigo-500 hover:bg-indigo-50 dark:border-zinc-700 dark:hover:bg-indigo-500/10">
                25 min
              </button>
              <button className="flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-xs font-medium hover:border-indigo-500 hover:bg-indigo-50 dark:border-zinc-700 dark:hover:bg-indigo-500/10">
                50 min
              </button>
              <button className="flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-xs font-medium hover:border-indigo-500 hover:bg-indigo-50 dark:border-zinc-700 dark:hover:bg-indigo-500/10">
                Custom
              </button>
            </div>
          </section>
        </aside>

        {/* Main content */}
        <section className="space-y-6">
          {/* Study streak & progress */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Streak
              </p>
              <p className="mt-3 text-3xl font-semibold">3</p>
              <p className="mt-1 text-xs text-zinc-500">days in a row</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Focus time
              </p>
              <p className="mt-3 text-3xl font-semibold">1.5h</p>
              <p className="mt-1 text-xs text-zinc-500">average per day</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Tasks
              </p>
              <p className="mt-3 text-3xl font-semibold">4/7</p>
              <p className="mt-1 text-xs text-zinc-500">completed today</p>
            </div>
          </div>

          {/* Courses section */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight">
                My courses
              </h2>
              <button className="text-xs font-medium text-indigo-600 hover:text-indigo-500">
                Manage
              </button>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3 text-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="font-medium">Biology 101</p>
                <p className="mt-1 text-xs text-zinc-500">Next: Chapter 3 – Cells</p>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3 text-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="font-medium">Calculus</p>
                <p className="mt-1 text-xs text-zinc-500">Next: Integration practice</p>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3 text-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="font-medium">History</p>
                <p className="mt-1 text-xs text-zinc-500">Next: WWI timeline</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
