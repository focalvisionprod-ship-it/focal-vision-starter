export default function StartYourProject() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="max-w-2xl w-full mx-auto p-4 mt-10">
        <a href="/" className="inline-block mb-4">
          <img src="/focal-vision-logo.svg" alt="Focal Vision" width={160} height={40} />
        </a>

        <div className="rounded-2xl border border-slate-200 p-8 shadow-2xl bg-white">
          <h1 className="text-2xl font-bold">Start your project</h1>
          <p className="text-slate-600 mt-2">Tell us a little about your video needs and we’ll get back to you quickly.</p>

          <form action="/api/start-project" method="post" className="mt-4 grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input name="firstName" required className="h-10 w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input name="lastName" required className="h-10 w-full rounded-md border px-3 py-2 text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input type="email" name="email" required className="h-10 w-full rounded-md border px-3 py-2 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
              <input type="tel" name="phone" required className="h-10 w-full rounded-md border px-3 py-2 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
              <select name="projectType" className="h-10 w-full rounded-md border px-3 py-2 text-sm">
                <option>Talking Head Video</option>
                <option>Video Production</option>
                <option>Event Coverage</option>
                <option>Photography</option>
                <option>Aerial Filming & Photography</option>
                <option>Editing & Post-Production</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea name="message" rows={4} className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Tell us about goals, timeline, budget..."></textarea>
            </div>

            <button type="submit" className="font-bold text-sm shadow-lg py-3 px-5 mt-2 w-full rounded-lg text-white bg-primary hover:bg-tertiary">
              Send
            </button>
          </form>

          <div className="text-sm text-slate-500 mt-4">
            Prefer to chat? Call <a className="underline" href="tel:+61450090491">0450 090 491</a>
          </div>
        </div>
      </div>
    </main>
  );
}
