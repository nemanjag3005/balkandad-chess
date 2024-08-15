import { type SchemaTypeDefinition } from "sanity";
import post from "./post";
import blockContent from "./blockContent";
import category from "./category";
import lessonChapter from "./lessonChapter";
import lesson from "./lesson";
import podcastEpisode from "./podcastEpisode";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, category, lessonChapter, lesson, podcastEpisode],
};
