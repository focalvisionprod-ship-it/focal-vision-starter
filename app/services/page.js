import { services } from "@/data/services";import Link from "next/link";
export const metadata={title:"Services — Focal Vision",description:"Video Production, Photography, Editing & Post, Event Coverage, Talking Head Videos, and Aerial Filming & Photography."};
export default function Services(){return(<main className="bg-white"><div className="max-w-6xl mx-auto px-4 py-16">
<h1 className="text-3xl font-extrabold">Services</h1><p className="text-slate-600 mt-2">Pick a service to explore how we deliver.</p>
<div className="grid md:grid-cols-3 gap-6 mt-8">{services.map(s=>(<Link href={`/services/${s.slug}`} key={s.slug} className="block border rounded-xl p-6 bg-white hover:shadow-soft transition-shadow"><h3 className="font-bold">{s.title}</h3><p className="text-slate-600 text-sm mt-2">{s.excerpt}</p></Link>))}</div>
</div></main>)}