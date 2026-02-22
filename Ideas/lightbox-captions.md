# Lightbox Captions

Add optional captions to images when viewed in the lightbox, displayed over a dark gradient scrim.

## Approach

1. Change `images` type in `projects.ts` from `string[]` to `{ src: string; caption?: string }[]` (or add a parallel `imageCaptions` array)
2. In `ImageGallery` lightbox, wrap image in `<figure>` + `<figcaption>` when a caption exists
3. CSS: position caption at bottom of lightbox image with a dark gradient scrim behind white text

## Scope

- `src/data/projects.ts` — type change + add captions to projects
- `src/components/ImageGallery.tsx` — render `<figure>` + `<figcaption>` in lightbox
- `src/styles/ImageGallery.module.css` — scrim gradient + caption text styles
- Project detail page image rendering may need updating if type changes
