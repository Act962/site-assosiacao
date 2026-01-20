import {
  FixedToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { Field } from "payload";

export const GroupField: Field = {
  type: "group",
  fields: [
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
    },
  ],
  admin: {
    hideGutter: true,
  },
};
