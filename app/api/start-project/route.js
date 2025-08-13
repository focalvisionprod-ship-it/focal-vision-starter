export async function POST(req){
  const form=await req.formData(); const data=Object.fromEntries(form.entries());
  const url=new URL(req.url); // redirect to thank-you page
  return new Response(null,{status:302,headers:{Location:`${url.origin}/thank-you`}});
}