// Renders public/og-image.png (1200x630) for social previews. Run: npm run og
import sharp from "sharp"

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#030712"/>
  <rect x="0" y="0" width="14" height="630" fill="#c2410c"/>
  <text x="80" y="170" font-family="Arial, Helvetica, sans-serif" font-size="26" letter-spacing="6" fill="#ea7f4d">DESARROLLADOR FULLSTACK · FULLSTACK DEVELOPER</text>
  <text x="80" y="300" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="700" fill="#ffffff">Nahuel Soria Parodi</text>
  <text x="80" y="380" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#a3a3a3">Plataformas administrativas, dashboards</text>
  <text x="80" y="428" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#a3a3a3">y sistemas de gestión modernos.</text>
  <text x="80" y="548" font-family="monospace" font-size="26" fill="#d4d4d4">React · Next.js · Astro · TypeScript · Laravel</text>
  <text x="80" y="590" font-family="monospace" font-size="22" fill="#737373">portfolionahuelsoriaparodi.netlify.app</text>
</svg>`

await sharp(Buffer.from(svg)).png().toFile("public/og-image.png")
console.log("public/og-image.png generated")
