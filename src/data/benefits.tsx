import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Geospatial Data Processing",
        description: "We streamline your geospatial pipeline—from raw imagery and shapefiles to structured, standardized datasets.",
        bullets: [
            {
                title: "Multi-format Support",
                description: "Handle raster, vector, remote sensing, and photo-based data.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Noise-Free Cleaning",
                description: "Remove duplication and errors with smart automation",
                icon: <FiTarget size={26} />
            },
            {
                title: "Cross-Platform Conversion",
                description: "Seamlessly bridge formats like GeoTIFF, SHP, CSV, and more.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-11.png"
    },
    {
        title: "Knowledge Graph & Semantic Structuring",
        description: "We transform your data into semantic knowledge structures that are searchable, scalable, and logically connected.",
        bullets: [
            {
                title: "Ontology-Based Modeling",
                description: "Create structured meaning behind every location or asset.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Knowledge Graph Construction",
                description: "Link entities, time, space, and relationships into one view.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Query-Ready Architecture",
                description: "Enable AI-driven analysis and easy cross-filtering.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-22.png"
    },
    {
        title: "Insight-to-Action Pipeline",
        description: "We don’t just process data—we help you make better decisions and uncover opportunities.",
        bullets: [
            {
                title: "Product Strategy Alignment",
                description: "Use data to solve real product pain points.",
                icon: <FiLock size={26} />
            },
            {
                title: "Decision Intelligence",
                description: "Turn complex spatial data into strategic insights.",
                icon: <FiUser size={26} />
            },
            {
                title: "Innovation Acceleration",
                description: "Discover what’s next through smart visual analytics.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-33.png"
    },
]