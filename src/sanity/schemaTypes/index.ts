import { type SchemaTypeDefinition } from "sanity";
import { newsType } from "./newType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsType],
};
