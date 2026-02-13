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
    "Thoughtful landscape design rooted in place, ecology, and how people actually use their outdoor spaces. Based in Portland, OR.";

const pageMeta: Record<string, { title: string; description: string }> = {
    "/": {
        title: "Laura Noël | Landscape Studio",
        description: DEFAULT_DESCRIPTION,
    },
    "/about": {
        title: "About | Laura Noël",
        description:
            "Portland-based landscape designer creating spaces rooted in ecology, place, and people.",
    },
    "/projects": {
        title: "Projects | Laura Noël",
        description:
            "Selected landscape design projects spanning residential gardens, retreat centers, and community spaces.",
    },
    "/services": {
        title: "Services | Laura Noël",
        description:
            "Landscape design services from garden visions to full site plans. Based in Portland, OR.",
    },
    "/sketches": {
        title: "Sketches | Laura Noël",
        description:
            "Hand-drawn landscape sketches and conceptual drawings by Laura Noël.",
    },
    "/contact": {
        title: "Contact | Laura Noël",
        description:
            "Get in touch about your landscape design project. Based in Portland, OR.",
    },
};

function meta(props: Record<string, string>): HeadElement {
    return { type: "meta", props };
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
    return {
        title: pageMeta_.title,
        elements: ogElements(
            pageMeta_.title,
            pageMeta_.description,
            "/images/hero.webp",
        ),
    };
}
