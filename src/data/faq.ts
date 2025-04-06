import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `What kind of geospatial data does ${siteDetails.siteName} support?`,
        answer: 'GeoXC supports a wide range of geospatial formats including satellite imagery, vector shapefiles, raster datasets, point cloud data, and GTFS feeds. We also handle APIs, CSVs, and custom schemas for seamless integration with your systems.',
    },
    {
        question: `How does ${siteDetails.siteName} ensure data accuracy and consistency?`,
        answer: 'We apply rigorous data validation, semantic structuring, and standardization workflows. Our knowledge-graph-based pipeline ensures spatial and temporal coherence, minimizing noise and redundancy for high-quality outputs.',
    },
    {
        question: `Can ${siteDetails.siteName} help us integrate geospatial data from multiple sources?`,
        answer: `Absolutely. ${siteDetails.siteName}  specializes in harmonizing geospatial data from disparate sources, including government open data, satellite feeds, and IoT systems—standardizing them into unified, query-ready datasets.`
    },
    {
        question: `What industries does ${siteDetails.siteName} serve?`,
        answer: 'We primarily work with transportation, urban planning, tourism, disaster prevention, and cross-border data exchange sectors. Our solutions are scalable for both public agencies and private enterprises.',
    },
    {
        question: `Is ${siteDetails.siteName} customizable for our organization’s specific needs?`,
        answer: 'Yes. We offer modular services ranging from data cleaning to knowledge graph construction. Whether you need API access, custom ontology modeling, or analytics-ready formats, GeoXC can tailor the solution to fit your goals.'
    }
];