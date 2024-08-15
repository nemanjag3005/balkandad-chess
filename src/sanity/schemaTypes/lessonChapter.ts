import { defineField, defineType } from "sanity";

export default defineType({
  name: "lessonChapter",
  title: "Lesson Chapter",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "chapterNumber",
      title: "Chapter Number",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "lessons",
      title: "Lessons",
      type: "array",
      of: [{ type: "reference", to: { type: "lesson" } }],
    }),
  ],
});
