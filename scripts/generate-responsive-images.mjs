import { mkdir, readdir } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const SIZES = [640, 1024, 1440, 1920];
const INPUT_DIR = "public/images";
const OUTPUT_DIR = "public/images/responsive";

const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function generate() {
    await mkdir(OUTPUT_DIR, { recursive: true });

    const files = await readdir(INPUT_DIR);
    const images = files.filter((f) =>
        EXTENSIONS.has(parse(f).ext.toLowerCase()),
    );

    console.log(`Processing ${images.length} images...`);

    for (const file of images) {
        const { name } = parse(file);
        const inputPath = join(INPUT_DIR, file);

        for (const width of SIZES) {
            const outputPath = join(OUTPUT_DIR, `${name}-${width}w.webp`);
            await sharp(inputPath)
                .resize(width, null, { withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`  ${outputPath}`);
        }
    }

    console.log("Done.");
}

generate().catch(console.error);
