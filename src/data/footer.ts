import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering desiction making with cutting-edge data driven technology solutions.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        // {
        //     text: "Pricing",
        //     url: "#pricing"
        // },
        {
            text: "Testimonials",
            url: "#testimonials"
        }
    ],
    email: 'jason@geoxc.com',
    telephone: '+886 928-867-725',
    socials: {
        // github: 'https://github.com/Jasonch321',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/company/geoxc',
        // threads: 'https://www.threads.net',
        // instagram: 'https://www.instagram.com',
    }
}