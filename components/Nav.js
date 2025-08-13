import Link from "next/link";
export default function Nav(){return(<header className="bg-white sticky top-0 z-40 shadow-soft">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<Link href="/" className="flex items-center gap-2"><img src="/focal-vision-logo.svg" alt="Focal Vision" width={130} height={32}/></Link>
<nav className="hidden md:flex items-center gap-6 text-sm">
<Link href="/services" className="hover:underline">Services</Link>
<Link href="/contact" className="hover:underline">Contact</Link>
<Link href="/(auth)/start-your-project" className="inline-flex items-center rounded-lg px-4 py-2 font-semibold text-white bg-primary hover:bg-tertiary shadow">Start Your Project</Link>
</nav></div></header>)}