// Convert the white-on-dark signature screenshot into a clean
// black-on-transparent PNG for use in app/page.tsx.
//
// Approach: read greyscale, then map brightness to alpha with a
// hard threshold so dark-but-not-pure-black background pixels
// become fully transparent (no grey haze), while anti-aliased
// stroke edges (higher brightness) get proportional alpha.
import sharp from "sharp";

const input = "signature-raw.png";
const output = "public/mehak-signature.png";

const LOW = 60; // below this brightness → fully transparent
const HIGH = 180; // above this brightness → fully opaque

const { data, info } = await sharp(input)
  .greyscale()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;
const rgba = Buffer.alloc(width * height * 4);
for (let i = 0; i < data.length; i++) {
  const b = data[i];
  let alpha;
  if (b <= LOW) alpha = 0;
  else if (b >= HIGH) alpha = 255;
  else alpha = Math.round(((b - LOW) / (HIGH - LOW)) * 255);
  rgba[i * 4 + 0] = 0;
  rgba[i * 4 + 1] = 0;
  rgba[i * 4 + 2] = 0;
  rgba[i * 4 + 3] = alpha;
}

await sharp(rgba, { raw: { width, height, channels: 4 } })
  .trim({ threshold: 10 })
  .png()
  .toFile(output);

console.log(`wrote ${output}`);
