import { CollectionConfig } from "payload";
import { TYPE_CATEGORY } from "../Categories/constants";
import { generateSlugHook } from "./hooks/generate-slug.hook";

export const Events: CollectionConfig = {
  slug: "events",
  trash: true,
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
      unique: true,
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
      unique: true,
      index: true,
      admin: {
        placeholder: "Ex.: titulo-do-evento",
        description: "O slug é o endereço do evento",
        // readOnly: true,
      },
      hooks: {
        beforeChange: [generateSlugHook],
        beforeValidate: [generateSlugHook],
      },
    },
    {
      name: "description",
      label: "Descrição",
      type: "textarea",
      localized: true,
      admin: {
        placeholder: "Digite a descrição do evento",
      },
    },
    {
      name: "location",
      label: "Local",
      type: "text",
      required: true,
      localized: true,
      admin: {
        placeholder: "Ex.: Sede da Associação - Centro SP",
        description: "Local do evento",
      },
    },
    {
      name: "categories",
      label: "Categoria",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
      filterOptions: {
        type: {
          equals: TYPE_CATEGORY.EVENT,
        },
      },
      admin: {
        description: "Selecione uma categoria de evento",
      },
    },
    {
      name: "coverImage",
      label: "Imagem de capa",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "eventDate",
      label: "Data do evento",
      type: "date",
      defaultValue: new Date().toISOString(),
      admin: {
        placeholder: "Selecione a data do evento",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "eventEndDate",
      label: "Data final do evento",
      type: "date",
      defaultValue: new Date().toISOString(),
      admin: {
        placeholder: "Selecione a data final do evento",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
  ],
};
