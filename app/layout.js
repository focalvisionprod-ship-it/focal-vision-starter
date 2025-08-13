import "./globals.css";import Nav from "@/components/Nav";import Footer from "@/components/Footer";
export const metadata={title:"Focal Vision — Video Production & Photography in Sydney",description:"Focal Vision creates purpose-driven video and photography — Talking Head Videos, Event Coverage, Aerial, Editing & Post. Start your project today.",metadataBase:new URL("https://example.com"),openGraph:{title:"Focal Vision — Video Production & Photography in Sydney",description:"Purpose-driven video production with fast turnaround.",url:"https://example.com",siteName:"Focal Vision",locale:"en_AU",type:"website"}};
export default function RootLayout({children}){
const org={"@context":"https://schema.org","@type":"Organization","name":"Focal Vision","url":"https://example.com","logo":"https://example.com/focal-vision-logo.svg","sameAs":[]};
const site={"@context":"https://schema.org","@type":"WebSite","name":"Focal Vision","url":"https://example.com","potentialAction":{"@type":"SearchAction","target":"https://example.com/?q={search_term_string}","query-input":"required name=search_term_string"}};
return(<html lang="en"><head>
<script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`}/>
<script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','G-XXXXXXX');`}}/>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(org)}}/>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(site)}}/>
</head><body><Nav/>{children}<Footer/></body></html>)}