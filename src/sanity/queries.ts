import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...3]{
            _id,
            publishedAt,
            title,
            excerpt,
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            categories[]->,
            body,
        }`;
