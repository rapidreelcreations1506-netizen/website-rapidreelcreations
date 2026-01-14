import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "RapidReel Creations",
        short_name: "RapidReel",
        description: "Professional Video Editing Services",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#DC2626",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
