import Link from "next/link";
export default function Home(){return(<main>
<section className="bg-white"><div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
<div><h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Transforming Ideas Into <span className="text-primary">Engaging Visual Narratives</span></h1>
<p className="text-slate-600 mt-4">High-quality video production and photography in Sydney — fast, flexible, and on brand.</p>
<div className="mt-6 flex gap-3">
<Link href="/(auth)/start-your-project" className="inline-flex items-center rounded-lg px-5 py-3 font-semibold text-white bg-primary hover:bg-tertiary shadow">Start Your Project</Link>
<Link href="/services" className="inline-flex items-center rounded-lg px-5 py-3 font-semibold border">View Services</Link>
</div></div>
<div className="rounded-2xl bg-slate-100 aspect-video shadow-soft"/></div></section>
<section className="bg-white border-t"><div className="max-w-6xl mx-auto px-4 py-16"><h2 className="text-2xl font-bold">What we do</h2>
<p className="text-slate-600 mt-2">Purpose-driven content. Real business outcomes.</p>
<div className="grid md:grid-cols-3 gap-6 mt-8">
<Card title="Video Production" href="/services/video-production"/>
<Card title="Talking Head Videos" href="/services/talking-head-videos"/>
<Card title="Event Coverage" href="/services/event-coverage"/>
<Card title="Photography" href="/services/photography"/>
<Card title="Aerial Filming & Photography" href="/services/aerial-filming-photography"/>
<Card title="Editing & Post-Production" href="/services/editing-post-production"/>
</div></div></section></main>)} 
function Card({title,href}){return(<a href={href} className="block border rounded-xl p-6 bg-white hover:shadow-soft transition-shadow"><h3 className="font-bold">{title}</h3><p className="text-slate-600 text-sm mt-2">Learn more</p></a>)}