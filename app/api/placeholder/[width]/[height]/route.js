export async function GET(_req, { params }) {
  const width = Number(params.width) || 100;
  const height = Number(params.height) || 100;
  const bg = "#1f2937"; // gray-800
  const fg = "#9ca3af"; // gray-400
  const text = `${width}×${height}`;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <rect width="100%" height="100%" fill="${bg}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="${Math.max(10, Math.min(width, height) / 5)}"
        fill="${fg}">${text}</text>
</svg>`;
  return new Response(svg, { status: 200, headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=31536000, immutable" } });
}
