import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Categorias",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
    }),
  ],
});
