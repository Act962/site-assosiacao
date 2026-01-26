import { CollectionConfig } from "payload";

export const Register: CollectionConfig = {
  slug: "register",
  trash: true,
  labels: {
    singular: "Cadastro",
    plural: "Cadastros",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "phone", "address", "city", "state"],
  },
  fields: [
    {
      name: "name",
      label: "Nome",
      type: "text",
      required: true,
      admin: {
        placeholder: "Digite o nome",
      },
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      required: true,
      admin: {
        placeholder: "Digite o email",
      },
    },
    {
      name: "phone",
      label: "Telefone",
      type: "text",
      admin: {
        placeholder: "Digite o telefone",
      },
    },
    {
      name: "address",
      label: "Endereço",
      type: "text",
      admin: {
        placeholder: "Digite o endereço",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "city",
          label: "Cidade",
          type: "text",
          admin: {
            placeholder: "Digite a cidade",
          },
        },
        {
          name: "state",
          label: "Estado",
          type: "text",
          admin: {
            placeholder: "Digite o estado",
          },
        },
        {
          name: "zipCode",
          label: "CEP",
          type: "text",
          admin: {
            placeholder: "Digite o CEP",
          },
        },
      ],
    },
  ],
};
