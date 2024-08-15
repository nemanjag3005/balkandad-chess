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

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
           _id,
            publishedAt,
            title,
            excerpt,
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            categories[]->,
            body,

        }`;

export const podcastsQuery = groq`*[_type == "podcastEpisode"] | order(publishedAt asc){
            _id,
            publishedAt,
            title,
            description,
            audioUrl,
            duration,
            "slug": slug.current,
            topics,
            sponsors,
            links,
            
        }`;

export const episodeQuery = groq`*[_type == "podcastEpisode" && slug.current == $slug][0]{
           _id,
            publishedAt,
            title,
            description,
            audioUrl,
            duration,
            "slug": slug.current,
            topics,
            sponsors,
            links,

        }`;
