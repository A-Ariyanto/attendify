export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center p-6">
        <div className="w-full rounded-lg border border-slate-200 p-6">
          <h1 className="text-2xl font-semibold tracking-tight">Attendify</h1>
          <p className="mt-2 text-sm text-slate-600">
            Clean slate: React + Tailwind. Start building in <span className="font-mono">src/App.tsx</span>.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">
              Primary action
            </button>
            <button className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900">
              Secondary action
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
