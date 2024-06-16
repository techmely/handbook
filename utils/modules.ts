export interface DocsModule {
  param: string;
  name: string;
  description: string;
  iconId: string;
}

export const docsModules: DocsModule[] = [
  {
    name: "Teams",
    param: "teams",
    description: "Overview our teams",
    iconId: "teams",
  },
  {
    name: "Products",
    param: "products",
    description: "The problem we solves",
    iconId: "products",
  },
  {
    name: "Engineering",
    param: "engineering",
    description: "How we do science",
    iconId: "engineering",
  },
  {
    name: "Finance",
    param: "finance",
    description: "Money is the ven",
    iconId: "finance",
  },
];
