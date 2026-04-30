import { projects } from "./data/projects";

type HeadElement = {
    type: string;
    props: Record<string, string>;
};

type Head = {
    title: string;
    elements: Set<HeadElement>;
};

const DEFAULT_DESCRIPTION =
    "Thoughtful landscape design rooted in place, ecology, and how people actually use their outdoor spaces. Based in Akron, OH.";

type PageMeta = {
    title: string;
    description: string;
    /** Optional OG/Twitter share image. Defaults to /images/hero.webp. */
    ogImage?: string;
    /**
     * Optional favicon override. When set, these `<link>` tags are appended
     * to the prerendered head and take precedence over the defaults in
     * index.html (browsers use the last matching icon link). The studio's
     * `/favicon.ico` in index.html serves as the legacy fallback.
     */
    favicon?: {
        png32: string;
        appleTouch: string;
    };
};

const pageMeta: Record<string, PageMeta> = {
    "/": {
        title: "Laura Noël | Landscape Studio",
        description: DEFAULT_DESCRIPTION,
    },
    "/about": {
        title: "About | Laura Noël",
        description:
            "Akron-based landscape designer creating spaces rooted in ecology, place, and people.",
    },
    "/projects": {
        title: "Projects | Laura Noël",
        description:
            "Selected landscape design projects spanning residential gardens, retreat centers, and community spaces.",
    },
    "/services": {
        title: "Services | Laura Noël",
        description:
            "Landscape design services from garden visions to full site plans. Based in Akron, OH.",
    },
    "/process": {
        title: "Process | Laura Noël",
        description:
            "Process photos, sketches, and conceptual drawings by Laura Noël.",
    },
    "/contact": {
        title: "Contact | Laura Noël",
        description:
            "Get in touch about your landscape design project. Based in Akron, OH.",
    },
    "/firestone": {
        title: "Save Firestone Plant 1 | Akron, Ohio",
        description:
            "A campaign for cultural landscape designation and adaptive reuse of Firestone Plant 1 in Akron, Ohio. Sign the petition and stay updated.",
        ogImage:
            "/images/projects/firestone-plant-1/firestone-plant-1-clocktower-bw.webp",
        favicon: {
            png32: "/firestone-favicon-32.png",
            appleTouch: "/firestone-apple-touch-icon.png",
        },
    },
};

function meta(props: Record<string, string>): HeadElement {
    return { type: "meta", props };
}

function link(props: Record<string, string>): HeadElement {
    return { type: "link", props };
}

function ogElements(
    title: string,
    description: string,
    image: string,
): Set<HeadElement> {
    return new Set([
        meta({ property: "og:type", content: "website" }),
        meta({ property: "og:title", content: title }),
        meta({ property: "og:description", content: description }),
        meta({ property: "og:image", content: image }),
        meta({ name: "twitter:card", content: "summary_large_image" }),
        meta({ name: "twitter:title", content: title }),
        meta({ name: "twitter:description", content: description }),
        meta({ name: "twitter:image", content: image }),
    ]);
}

export function getHeadForRoute(url: string): Head {
    const projectMatch = url.match(/^\/projects\/(.+)$/);
    if (projectMatch) {
        const project = projects.find((p) => p.slug === projectMatch[1]);
        if (project) {
            const title = `${project.title} | Laura Noël`;
            return {
                title,
                elements: ogElements(title, project.summary, project.images[0]),
            };
        }
    }

    const pageMeta_ = pageMeta[url] ?? pageMeta["/"];
    const elements = ogElements(
        pageMeta_.title,
        pageMeta_.description,
        pageMeta_.ogImage ?? "/images/hero.webp",
    );

    if (pageMeta_.favicon) {
        elements.add(
            link({
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: pageMeta_.favicon.png32,
            }),
        );
        elements.add(
            link({
                rel: "apple-touch-icon",
                href: pageMeta_.favicon.appleTouch,
            }),
        );
    }

    return {
        title: pageMeta_.title,
        elements,
    };
}
