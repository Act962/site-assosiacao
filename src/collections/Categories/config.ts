import { CollectionConfig } from "payload";
import { TYPE_CATEGORY } from "./constants";

export const Categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: "Categoria",
    plural: "Categorias",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "type", "slug"],
  },
  fields: [
    {
      name: "name",
      label: "Nome",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      localized: true,
      admin: {
        description: "URL amigável da categoria",
      },
    },
    {
      name: "type",
      label: "Tipo",
      type: "select",
      required: true,
      options: [
        {
          label: "Notícia",
          value: TYPE_CATEGORY.NEWS,
        },
        {
          label: "Evento",
          value: TYPE_CATEGORY.EVENT,
        },
      ],
      defaultValue: TYPE_CATEGORY.NEWS,
      admin: {
        description: "Defina se esta categoria é para Notícias ou Eventos",
      },
    },
    {
      name: "color",
      label: "Cor",
      type: "text",
      defaultValue: "#000000",
      admin: {
        description: "Código hexadecimal da cor (ex: #FF5733)",
        placeholder: "#000000",
      },
    },
    {
      name: "description",
      label: "Descrição",
      type: "textarea",
      localized: true,
      admin: {
        description: "Descrição opcional da categoria",
      },
    },
  ],
};
