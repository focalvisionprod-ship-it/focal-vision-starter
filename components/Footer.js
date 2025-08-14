export default function Footer(){return(<footer className="bg-white mt-16">
<div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
<div><h3 className="font-bold">Focal Vision</h3>
<p className="text-slate-600 text-sm mt-2">Transforming Ideas Into Engaging Visual Narratives.</p>
<p className="text-slate-600 text-sm mt-2">Phone: <a className="underline" href="tel:+61450090491">0450 090 491</a><br/>Email: <a className="underline" href="mailto:info@focalvision.com.au">hello@focalvision.com.au</a><br/>Location: Sydney, NSW</p></div>
<div><h3 className="font-bold">Services</h3>
<ul className="text-slate-600 text-sm mt-2 space-y-1">
<li><a href="/services/video-production" className="hover:underline">Video Production</a></li>
<li><a href="/services/photography" className="hover:underline">Photography</a></li>
<li><a href="/services/editing-post-production" className="hover:underline">Editing &amp; Post-Production</a></li>
<li><a href="/services/event-coverage" className="hover:underline">Event Coverage</a></li>
<li><a href="/services/talking-head-videos" className="hover:underline">Talking Head Videos</a></li>
<li><a href="/services/aerial-filming-photography" className="hover:underline">Aerial Filming &amp; Photography</a></li>
</ul></div>
<div><h3 className="font-bold">Quick Links</h3>
<ul className="text-slate-600 text-sm mt-2 space-y-1">
<li><a href="/contact" className="hover:underline">Contact</a></li>
<li><a href="/(auth)/start-your-project" className="hover:underline">Start Your Project</a></li>
<li><a href="/sitemap.xml" className="hover:underline">Sitemap</a></li>
</ul></div></div>
<div className="border-t"><div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500">© {new Date().getFullYear()} Focal Vision. All rights reserved.</div></div>
</footer>)}
