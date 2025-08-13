export async function GET(){
  const base="https://example.com";
  const urls=["/","/services","/contact","/services/video-production","/services/photography","/services/editing-post-production","/services/event-coverage","/services/talking-head-videos","/services/aerial-filming-photography","/(auth)/start-your-project","/thank-you"];
  const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u=>`<url><loc>${base}${u}</loc></url>`).join("\n")}\n</urlset>`;
  return new Response(xml,{headers:{"Content-Type":"application/xml"}});
}