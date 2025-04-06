import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Buy Once',
        price: 29,
        features: [
            'Geospatial data cleasing',
            'Transform to any format',
            '20GB storage',
            'Email support',
        ],
    },
    {
        name: 'Subscribe',
        price: 99,
        features: [
            'Advanced cloud integration',
            'Up to 20 team members',
            '100GB storage',
            'Priority email & phone support',
            'Advanced analytics',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Full cloud integration',
            'Unlimited team members',
            'Unlimited storage',
            '24/7 dedicated support',
            'Custom solutions',
            'On-site training',
        ],
    },
]