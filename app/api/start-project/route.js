export async function POST(req) {
  const form = await req.formData();
  const data = Object.fromEntries(form.entries());
  // TODO: connect to email or Google Sheet/DB
  return new Response(JSON.stringify({ ok: true, received: data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
