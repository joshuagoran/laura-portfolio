const content = {
    hero: {
        headline: "Landscapes That Live",
        subheadline:
            "Thoughtful landscape design rooted in place, ecology, and how people actually use their outdoor spaces.",
        backgroundImage: "/images/hero.jpg",
    },
    about: {
        title: "About",
        image: "/images/about.jpg",
        bio: "Laura Noel is a landscape designer whose work bridges landscape architecture, garden design, and urban planning. Raised in the post-industrial city of Akron, Ohio, her practice explores how landscape design can help restore ecosystems and cultural memory.\n\nLaura combines her background in ecological planting design and urban policy to advocate for adaptive reuse and sustainable development.\n\nShe holds a Bachelor's in Urban Planning and a Master's in Landscape Architecture from the University of Cincinnati, along with a Planting Design Diploma from the London College of Garden Design. Her training in herbalism and botany at the Northeast School of Botanical Medicine also continues to shape her approach to design.",
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
