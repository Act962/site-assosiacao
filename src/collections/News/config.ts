import { CollectionConfig } from "payload";
import { generateSlugHook } from "./hooks/generate-slug.hook";
import { STATUS_OPTIONS } from "./constants";
import {
  FixedToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const News: CollectionConfig = {
  slug: "news",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      required: true,
      hooks: {
        beforeValidate: [generateSlugHook],
        beforeChange: [generateSlugHook],
      },
      localized: true,
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
        ],
      }),
      required: true,
      localized: true,
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
    },
    {
      name: "publishedAt",
      type: "date",
    },
    {
      name: "status",
      type: "select",
      required: true,
      options: Object.values(STATUS_OPTIONS),
      defaultValue: STATUS_OPTIONS.DRAFT,
    },
  ],
};
