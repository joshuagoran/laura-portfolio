export type Project = {
    /** URL path segment — used in /projects/:slug route */
    slug: string;
    /** Project name — page title, card heading, detail page h1 */
    title: string;
    /** Short secondary heading — shown below title on detail page */
    subtitle?: string;
    /** One-line teaser — shown on project cards in the grid */
    summary: string;
    /** Full write-up — main body text on the project detail page */
    description: string;
    /** Paths relative to /public — first image is the cover (card + detail hero) */
    images: `/images/projects/${string}`[];
    /** Completion year — shown in detail page metadata */
    year?: number;
    /** City/region — shown in detail page metadata */
    location: string;
    /** Show on homepage "Featured Projects" section? */
    featured?: boolean;
    /** Editorial pullquote — displayed as a blockquote on the detail page */
    designThesis?: string;
    /** People/firms credited — listed at the bottom of the detail page */
    collaborators?: string[];
    /** Project type label (e.g. "Residential", "Retreat Center") — detail page metadata */
    category?: string;
    /** Laura's specific contribution — e.g. "Planting design", "Concept design and master plan", "Full design" */
    role?: string;
    /** Project origin — e.g. "Independent commission", "Master's thesis", "Collaborative at XYZ Firm" */
    context?: string;
    /** Project status — controls how the detail page presents the project */
    status?: "completed" | "in-progress" | "design-phase";
    /** Key plants used — common name (Botanical name) — shown on detail page */
    plantPalette?: string[];
    /** Key materials used — shown on detail page */
    materials?: string[];
};

export const projects: Project[] = [
    {
        slug: "firestone-plant-1",
        title: "Firestone Plant 1",
        subtitle: "Cultural Landscape, Policy, and Adaptive Reuse",
        summary:
            "Advocacy and historic research for cultural landscape designation of a legacy industrial site in Akron.",
        description:
            "This project grew out of my involvement with a multi-disciplinary group of preservation professionals, architects, planners, and community stakeholders examining the future of Firestone Plant 1 in Akron, Ohio. My role has focused on advocacy and historic research for cultural landscape designation application.\n\nThe potential demolition of Firestone Plant 1 raises broader questions about how post-industrial cities manage legacy assets. In this case, the discussion around Firestone has highlighted the importance of distinguishing between structural feasibility and policy direction. How do municipal systems handle complex historic properties when they become difficult? What are the metrics and framing being used to justify demolition, how are they pliable, where can existing policies be updated to favor adaptive reuse just as equally demolition?\n\nThis research reflects my interest in approaching complex sites through integrated analysis, and research in: history, environmental systems, and policy.",
        images: [
            "/images/projects/placeholder.webp",
            "/images/projects/placeholder.webp",
        ],
        year: 2026,
        location: "Akron, OH",
        featured: true,
        category: "Preservation",
        status: "in-progress",
    },
    {
        slug: "glendale-steps",
        title: "Glendale Steps",
        summary:
            "Historical research and planting design for the restoration of a 1936 stone staircase and unrealized Warren Manning park in Akron.",
        description:
            "At the foot of a parking lot adjacent to I-59, a monolithic stone staircase descends toward what was intended to be a public park designed by landscape architect Warren Manning. Built in 1936, the stairs appear like a mirage, ceremonial in stature, but unresolved. It stands as one of the few built remnants of the larger civic landscape that was never completed.\n\nManning's plan envisioned the stairs as a threshold and transition from the West Hill neighborhood to downtown through a public park.\n\nHistorical research of the site and a planting design was developed in collaboration with Progress Through Preservation Akron and was awarded a lease agreement for restoration from the City of Akron. The project was also a featured project for MKSK's Community Impact Studio.\n\nFundraising efforts for restoration and replanting will begin March 2026.",
        images: [
            "/images/projects/glendale steps.webp",
            "/images/projects/placeholder.webp",
            "/images/projects/placeholder.webp",
            "/images/projects/placeholder.webp",
        ],
        year: 2024,
        location: "Akron, OH",
        featured: true,
        category: "Preservation",
        status: "in-progress",
        collaborators: [
            "Progress Through Preservation Akron",
            "MKSK Community Impact Studio",
            "Katie Kelleher",
        ],
    },
    {
        slug: "cascade-plaza",
        title: "Cascade Plaza",
        subtitle:
            "Lawrence Halprin + Warren Manning's Lost Plans for Green Infrastructure",
        summary:
            "Historical research into unrealized mid-century landscape plans for downtown Akron's Cascade Plaza.",
        description:
            "More than one plan in Akron's past has tried to connect the canals in Akron's downtown surrounded by trees and ravines with a park to the surrounding neighborhoods.\n\nDuring the era of urban renewal, a highway paired with a park, plaza, and shopping mall was promoted as the promotional image for downtown redevelopment. In the mid 1960s, the city brought in landscape architect Lawrence Halprin to draft a plan. Halprin proposed a design that aimed to minimize disruption to residential and commercial areas by circumventing the plan around a neighborhood and capping the new expressway with open space. His vision imagined a sunken expressway built beneath a civic park and sought to preserve some pedestrian access and greenspace while reconnecting downtown to the canal by integrating it into new public space.\n\nAfter decades of demolition, however, the final built condition diverged dramatically from this vision. The highway infrastructure was only partially completed, and terminates abruptly at the edge of downtown, while the envisioned civic plaza was never realized as intended. Rather than a lively public realm and cohesive superblock, the site today is defined by a federal office building, a central lawn, and surrounding buildings and parking lots that have long struggled with occupancy and activation.\n\nYears earlier, in 1936, the renowned American landscape architect Warren Manning was involved in the initial design of a park that sits directly across the highway from Cascade Plaza, at the foot of the historic Glendale Steps. He worked with Gertrude Seiberling and the Akron City Women's Club on the project in their hopes that it would be a \"beauty spot\" in which to view downtown.\n\nCascade Plaza occupies the former convergence of movement, commerce, and water, marking a shift from incremental urban growth to large-scale clearance and redevelopment.",
        images: [
            "/images/projects/placeholder.webp",
            "/images/projects/placeholder.webp",
        ],
        year: 2019,
        location: "Akron, OH",
        featured: true,
        category: "Preservation",
    },
    {
        slug: "brave-earth",
        title: "Brave Earth Retreat Center",
        summary:
            "Concept master plan integrating medicinal plant gardens, food forest, and communal gathering spaces in the Costa Rican jungle.",
        description: "",
        images: [
            "/images/projects/Brave Earth Retreat Center.webp",
            "/images/projects/aerial-costa-rica.webp",
            "/images/projects/costa-rica-retreat-center.webp",
        ],
        year: 2019,
        location: "Costa Rica",
        featured: true,
        category: "Retreat Center",
        collaborators: ["Brave Earth Foundation", "Finca Tierra Viva"],
    },
    {
        slug: "urban-farming-fine-gardening",
        title: "Urban Farming + Fine Gardening",
        summary:
            "Community-focused farming and horticultural practice across North Brooklyn Farms, Veterans Healing Farm, and fine gardening companies.",
        description:
            "Through my work at community-focused farms such as North Brooklyn Farms and the Veterans Healing Farm, I learned not only successful organic growing practices, but also how agricultural projects can function as hybrid models\u2014operating semi-privately while remaining publicly engaged through community programming, education, and open access. These experiences shaped my understanding of farms as civic and cultural infrastructure, not solely productive landscapes.\n\nMy horticultural studies also include a Certificate in Herbalism from the Northeast School of Botanical Medicine, where intensive study of botany, field identification formed the core of the curriculum. I further studied Planting Design at the London College of Garden Design and have worked professionally for fine gardening companies in Asheville, North Carolina, and Akron, Ohio.",
        images: [
            "/images/projects/North Brooklyn Farms.webp",
            "/images/projects/placeholder.webp",
        ],
        location: "Asheville, NC / Brooklyn, NY",
        category: "Urban Agriculture",
    },
];
