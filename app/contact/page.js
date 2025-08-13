export const metadata={title:"Contact — Focal Vision",description:"Get in touch about your next video or photo project."};
export default function Contact(){return(<main className="bg-white"><div className="max-w-2xl mx-auto px-4 py-16">
<h1 className="text-3xl font-extrabold">Contact</h1><p className="text-slate-600 mt-2">Tell us about your project. We’ll reply quickly.</p>
<form action="/api/start-project" method="post" className="mt-6 grid gap-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-3"><div><label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label><input name="firstName" required className="h-10 w-full rounded-md border px-3 py-2 text-sm"/></div>
<div><label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label><input name="lastName" required className="h-10 w-full rounded-md border px-3 py-2 text-sm"/></div></div>
<div><label className="block text-sm font-semibold text-gray-700 mb-2">Email</label><input type="email" name="email" required className="h-10 w-full rounded-md border px-3 py-2 text-sm"/></div>
<div><label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label><input type="tel" name="phone" className="h-10 w-full rounded-md border px-3 py-2 text-sm"/></div>
<div><label className="block text-sm font-semibold text-gray-700 mb-2">Message</label><textarea name="message" rows={4} className="w-full rounded-md border px-3 py-2 text-sm"/></div>
<button type="submit" className="font-bold text-sm shadow-lg py-3 px-5 mt-2 w-full rounded-lg text-white bg-primary hover:bg-tertiary">Send</button>
</form><p className="text-sm text-slate-500 mt-4">Or call <a className="underline" href="tel:+61450090491">0450 090 491</a></p></div></main>)}