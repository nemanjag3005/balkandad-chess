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

export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc){
            _id,
            publishedAt,
            title,
            excerpt,
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            categories[]->,
            body,
        }`;

export const balkanRepertoirePostsQuery = groq`
  *[_type == "post" && "Balkan Repertoire" in categories[]->title] | order(publishedAt desc) {
    _id,
    publishedAt,
    title,
    excerpt,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    categories[]->,
    body
  }
`;

export const otherPostsQuery = groq`*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]{
            _id,
            publishedAt,
            title,
            excerpt,
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            categories[]->,
            body,
        }`;

export const lessonsListQuery = groq`
  *[_type == "lessonChapter"] {
    title,
    chapterNumber,
    "lessons": lessons[]-> {
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      duration,
      isFree
    }
  }
`;

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

export const lessonQuery = groq`*[_type == "lesson" && slug.current == $slug][0]{
           _id,
            publishedAt,
            title,
            videoUrl,
            isFree,
            description,
            "slug": slug.current,
            "thumbnail": thumbnail.asset->url,
            duration,
            body,
            number
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
