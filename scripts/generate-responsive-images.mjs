import { mkdir, readdir, stat, unlink } from "node:fs/promises";
import { join, parse, relative } from "node:path";
import sharp from "sharp";

const MAX_WIDTH = 1920;
const QUALITY = 80;
const INPUT_DIR = "originals";
const OUTPUT_DIR = "public/images";

const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function getImages(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await getImages(fullPath)));
        } else if (EXTENSIONS.has(parse(entry.name).ext.toLowerCase())) {
            files.push(fullPath);
        }
    }

    return files;
}

async function optimize() {
    const images = await getImages(INPUT_DIR);
    console.log(`Found ${images.length} images in ${INPUT_DIR}/\n`);

    let totalBefore = 0;
    let totalAfter = 0;

    for (const filePath of images) {
        const before = (await stat(filePath)).size;
        const rel = relative(INPUT_DIR, filePath);
        const { dir, name } = parse(rel);
        const outDir = join(OUTPUT_DIR, dir);
        const outPath = join(outDir, `${name}.webp`);

        await mkdir(outDir, { recursive: true });

        const buf = await sharp(filePath)
            .resize(MAX_WIDTH, null, { withoutEnlargement: true })
            .webp({ quality: QUALITY })
            .toBuffer();

        if (buf.length >= before) {
            // Optimized is larger — copy original as-is
            await sharp(filePath).toFile(outPath);
            const afterSize = (await stat(outPath)).size;
            console.log(
                `  copy  ${rel} (${fmt(before)}, optimized was larger)`,
            );
            totalBefore += before;
            totalAfter += afterSize;
            continue;
        }

        await sharp(buf).toFile(outPath);
        totalBefore += before;
        totalAfter += buf.length;
        console.log(
            `  ${rel} → ${fmt(before)} → ${fmt(buf.length)} (${Math.round((1 - buf.length / before) * 100)}% saved)`,
        );

        // Clean up old non-webp version in output if the original was a different format
        const origExt = parse(rel).ext.toLowerCase();
        if (origExt !== ".webp") {
            const oldPath = join(OUTPUT_DIR, rel);
            try {
                await unlink(oldPath);
            } catch {}
        }
    }

    console.log(
        `\nTotal: ${fmt(totalBefore)} → ${fmt(totalAfter)} (${Math.round((1 - totalAfter / totalBefore) * 100)}% saved)`,
    );
}

function fmt(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    return `${(bytes / 1024).toFixed(0)} KB`;
}

optimize().catch(console.error);
