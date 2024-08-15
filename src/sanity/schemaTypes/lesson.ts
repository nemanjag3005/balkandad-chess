import { defineField, defineType } from "sanity";

export default defineType({
  name: "lesson",
  title: "Lesson",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isFree",
      title: "Is Free?",
      type: "boolean",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
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
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "thumbnail",
    },
  },
});
