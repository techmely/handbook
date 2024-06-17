import { generateFiles } from "fumadocs-openapi";

void generateFiles({
  input: ["./docs-techmely.yaml"],
  output: "./content/docs",
});
