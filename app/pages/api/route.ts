// app/api/fb-photos/route.ts

export async function GET() {
  const PAGE_ID = process.env.FB_PAGE_ID;
  const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

  const url = `https://graph.facebook.com/${PAGE_ID}/photos?type=uploaded&fields=images,name,created_time&access_token=${ACCESS_TOKEN}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch Facebook photos." }), {
      status: 500
    });
  }
}
