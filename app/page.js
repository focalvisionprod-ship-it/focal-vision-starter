export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-10 border">
        <h1 className="text-3xl font-extrabold mb-4">Focal Vision</h1>
        <p className="text-slate-700 mb-6">
          Transforming Ideas Into Engaging Visual Narratives.
        </p>
        <a
          href="/(auth)/start-your-project"
          className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-white bg-primary hover:bg-tertiary shadow-lg"
        >
          Start Your Project
        </a>
        <div className="mt-4">
          Or call <a className="underline" href="tel:+61450090491">0450 090 491</a>
        </div>
      </div>
    </main>
  );
}
