import { CollectionConfig } from "payload";

export const Author: CollectionConfig = {
  slug: "authors",
  trash: true,
  labels: {
    singular: "Autor",
    plural: "Autores",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Nome",
      type: "text",
      required: true,
      admin: {
        placeholder: "Willian",
        description: "Nome do autor",
      },
    },
    {
      name: "position",
      label: "Cargo",
      type: "text",
      required: true,
    },
    {
      name: "avatar",
      label: "Foto do autor",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "socialLinks",
      label: "Links Sociais",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          options: ["twitter", "linkedin", "instagram", "github", "website"],
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
