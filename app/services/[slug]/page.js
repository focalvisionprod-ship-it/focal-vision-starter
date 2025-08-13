import { services } from "@/data/services";import Link from "next/link";import { notFound } from "next/navigation";
export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}){const s=services.find(x=>x.slug===params.slug);if(!s)return{};return{title:`${s.title} — Focal Vision`,description:s.excerpt};}
export default function ServicePage({params}){const s=services.find(x=>x.slug===params.slug);if(!s)return notFound();return(<main className="bg-white"><div className="max-w-6xl mx-auto px-4 py-16">
<Link href="/services" className="text-sm underline">Back to Services</Link>
<h1 className="text-3xl font-extrabold mt-2">{s.hero}</h1><p className="text-slate-600 mt-1">{s.sub}</p>
<div className="grid md:grid-cols-2 gap-10 mt-8"><div className="space-y-8">{s.sections.map((sec,i)=>(<section key={i}><h2 className="text-xl font-bold">{sec.h}</h2><p className="text-slate-700 mt-2">{sec.p}</p></section>))}
<div className="mt-6"><a href="/(auth)/start-your-project" className="inline-flex items-center rounded-lg px-5 py-3 font-semibold text-white bg-primary hover:bg-tertiary shadow">Start Your Project</a></div>
</div><div className="rounded-2xl bg-slate-100 aspect-video shadow-soft"/></div></div></main>)}