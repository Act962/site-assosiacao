import { CollectionConfig } from "payload";
import { TYPE_CATEGORY } from "../Categories/constants";
import {
  FixedToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "name",
  },
  labels: {
    singular: "Evento",
    plural: "Eventos",
  },
  fields: [
    {
      name: "name",
      label: "Nome",
      type: "text",
      required: true,
      localized: true,
      admin: {
        placeholder: "Digite o nome do evento",
      },
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      localized: true,
      admin: {
        placeholder: "Ex.: titulo-do-evento",
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
      name: "categories",
      label: "Categoria",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
    },
    {
      name: "coverImage",
      label: "Imagem de capa",
      type: "upload",
      relationTo: "media",
      required: true,
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
      name: "type",
      label: "Tipo",
      type: "select",
      required: true,
      options: Object.values(TYPE_CATEGORY),
      defaultValue: TYPE_CATEGORY.NEWS,
    },
  ],
};
