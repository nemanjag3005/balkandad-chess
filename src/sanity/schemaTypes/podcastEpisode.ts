import { defineField, defineType } from "sanity";

export default defineType({
  name: "podcastEpisode",
  title: "Podcast Episode",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "audioUrl",
      title: "Audio URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration (in seconds)",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "topics",
      title: "Topics",
      type: "blockContent",
      description: "List of topics discussed in this episode",
    }),
    defineField({
      name: "sponsors",
      title: "Sponsors",
      type: "blockContent",
      description: "Detailed descriptions of the sponsors for this episode.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "blockContent",
      description:
        "Relevant links mentioned in this episode, including profiles, websites, and resources.",
    }),
  ],
});
