import { defineField } from "sanity";

export const newsType = defineField({
  name: "new",
  title: "News",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "body",
      type: "block",
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
      media: "mainImage",
    },
    prepare(selection) {
      const { title, slug, media } = selection;
      return {
        title,
        subtitle: slug.current,
        media,
      };
    },
  },
});
