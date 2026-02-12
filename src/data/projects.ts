export type Project = {
    slug: string;
    title: string;
    summary: string;
    description: string;
    images: string[];
    year: number;
    location: string;
};

export const projects: Project[] = [
    {
        slug: "brave-earth",
        title: "Brave Earth Retreat Center",
        summary:
            "A neglected backyard transformed into a layered perennial garden with stone pathways and a water feature.",
        description:
            "This half-acre residential property had been left untended for years. We redesigned the space around a central bluestone patio, introducing native plantings in layered beds, a recirculating stone fountain, and meandering gravel paths that connect seating areas throughout the garden.",
        images: [
            "/images/projects/Brave Earth Retreat Center.webp",
            "/images/projects/thornwood-2.jpg",
        ],
        year: 2024,
        location: "Costa Rica",
    },
    {
        slug: "glendale-steps",
        title: "Glendale Steps",
        summary:
            "A corporate campus entry redesigned with drought-tolerant plantings and sculptural hardscape.",
        description:
            "Meridian's aging entry landscape was replaced with a modern, low-maintenance design featuring ornamental grasses, cor-ten steel planters, and a geometric paver layout. The result is a welcoming, professional arrival sequence that reduces water use by 60%.",
        images: [
            "/images/projects/glendale steps.webp",
            "/images/projects/meridian-2.jpg",
        ],
        year: 2024,
        location: "Akron, OH",
    },
    {
        slug: "north-brooklyn-farms",
        title: "North Brooklyn Farms",
        summary:
            "A woodland property with naturalistic plantings and an outdoor living room.",
        description:
            "Nestled among mature cedars, this design embraces the existing canopy while adding understory plantings, a flagstone terrace with a built-in fire pit, and landscape lighting that highlights the tree forms at night. Privacy screening was achieved with evergreen hedging rather than fencing.",
        images: [
            "/images/projects/North Brooklyn Farms.webp",
            "/images/projects/cedar-hollow-2.jpg",
        ],
        year: 2023,
        location: "Brooklyn, NY",
    },
    {
        slug: "riverside-park-restoration",
        title: "Riverside Park Restoration",
        summary:
            "A community park revitalized with native riparian plantings and accessible trails.",
        description:
            "Working with the city parks department, we restored a degraded riverbank with native willows, sedges, and wildflower meadows. New ADA-accessible crushed stone trails connect the parking area to overlook platforms and a nature play area for children.",
        images: [
            "/images/projects/Wild+Cultivation+201026 (1).webp",
            "/images/projects/riverside-2.jpg",
        ],
        year: 2023,
        location: "Bend, OR",
    },
    {
        slug: "hartwell-commercial-campus",
        title: "Hartwell Tech Campus",
        summary:
            "A tech campus with bioswales, pollinator gardens, and employee gathering spaces.",
        description:
            "This 5-acre campus landscape integrates stormwater management with bioswales and rain gardens while creating inviting outdoor break areas. Pollinator-friendly plantings, shade structures, and a central lawn for company events complete the design.",
        images: [
            "/images/projects/hartwell-1.jpg",
            "/images/projects/hartwell-2.jpg",
        ],
        year: 2024,
        location: "Raleigh, NC",
    },
    {
        slug: "linnton-community-garden",
        title: "Linnton Community Garden",
        summary:
            "An unused lot converted into a thriving community garden and gathering space.",
        description:
            "A vacant city lot was transformed into 24 raised bed plots, a shared herb spiral, composting stations, and a covered pavilion for workshops. The design prioritizes accessibility, with wide pathways and raised beds at multiple heights.",
        images: [
            "/images/projects/linnton-1.jpg",
            "/images/projects/linnton-2.jpg",
        ],
        year: 2025,
        location: "Portland, OR",
    },
];
