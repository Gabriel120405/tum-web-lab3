import { promises as fs } from 'fs';

export async function post({ request }) {
  const body = await request.json();
  const landingPath = new URL('../../src/content/landing.json', import.meta.url);
  await fs.writeFile(landingPath, JSON.stringify(body, null, 2) + '\n', 'utf-8');

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
