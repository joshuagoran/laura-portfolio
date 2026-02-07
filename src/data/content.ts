const content = {
    hero: {
        headline: "Landscapes That Live",
        subheadline:
            "Thoughtful landscape design rooted in place, ecology, and how people actually use their outdoor spaces.",
    },
    about: {
        title: "About",
        bio: "Laura is a landscape designer based in the Pacific Northwest with over a decade of experience creating spaces that balance beauty, function, and ecological responsibility. Her work spans residential gardens, commercial campuses, and public parks.",
        philosophy:
            "Good landscape design starts with listening — to the land, the climate, and the people who will inhabit the space. Every project is an opportunity to strengthen the relationship between built and natural environments.",
    },
    contact: {
        heading: "Get In Touch",
        description:
            "Have a project in mind? Reach out to start a conversation about your space.",
    },
    footer: {
        text: "Laura Noël Landscape Design",
    },
};

type ContentSection = keyof typeof content;

export async function getContent<T extends ContentSection>(
    section: T,
): Promise<(typeof content)[T] | null> {
    return content[section] || null;
}

export async function getAllContent(): Promise<typeof content> {
    return content;
}
