import { CollectionConfig } from "payload";
import { generateSlugHook } from "./hooks/generate-slug.hook";
import { STATUS_OPTIONS } from "./constants";
import {
  FixedToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Título",
      type: "text",
      required: true,
      localized: true,
      admin: {
        placeholder: "Digite o título da notícia",
      },
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      unique: true,
      required: true,
      hooks: {
        beforeValidate: [generateSlugHook],
        beforeChange: [generateSlugHook],
      },
      localized: true,
      admin: {
        placeholder: "Ex.: titulo-da-noticia",
      },
    },
    {
      name: "content",
      label: "Conteúdo",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
        ],
        admin: {
          placeholder: "Digite o conteúdo da notícia",
        },
      }),
      required: true,
      localized: true,
    },
    {
      name: "coverImage",
      label: "Imagem de capa",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "categories",
      label: "Categoria",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
    },
    {
      name: "publishedAt",
      label: "Data de publicação",
      type: "date",
      defaultValue: new Date().toISOString(),
      admin: {
        placeholder: "Selecione a data de publicação",
      },
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      required: true,
      options: Object.values(STATUS_OPTIONS),
      defaultValue: STATUS_OPTIONS.DRAFT,
    },
  ],
};
