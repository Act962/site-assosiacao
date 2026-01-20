import { CollectionConfig } from "payload";
import { generateSlugHook } from "./hooks/generate-slug.hook";
import { STATUS_OPTIONS } from "./constants";
import {
  AlignFeature,
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  ItalicFeature,
  lexicalEditor,
  OrderedListFeature,
  UnorderedListFeature,
  HorizontalRuleFeature,
} from "@payloadcms/richtext-lexical";

export const News: CollectionConfig = {
  slug: "news",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      hooks: { beforeValidate: [generateSlugHook] },
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features: () => [
          BoldFeature(),
          ItalicFeature(),
          AlignFeature(),
          HeadingFeature(),
          OrderedListFeature(),
          UnorderedListFeature(),
          HorizontalRuleFeature(),
          FixedToolbarFeature(),
        ],
      }),
      required: true,
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
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
