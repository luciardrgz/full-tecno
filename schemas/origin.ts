import { defineField, defineType } from "sanity";

export default defineType({
  name: "origin",
  title: "País de origen",
  type: "document",
  fields: [
    defineField({
      name: "c_name",
      title: "Pais",
      type: "string",
    }),
  ],
});
