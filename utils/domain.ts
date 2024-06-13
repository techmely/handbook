export interface Domain {
  param: string;
  name: string;
  description: string;
  iconId: string;
}

export const domains: Domain[] = [
  {
    name: "Teams",
    param: "teams",
    description: "Overview our teams",
    iconId: "teams",
  },
  {
    name: "Products",
    param: "products",
    description: "The product we built",
    iconId: "products",
  },
  {
    name: "Engineering",
    param: "engineering",
    description: "we are product's engineering",
    iconId: "engineering",
  },
  {
    name: "Finance",
    param: "finance",
    description: "We love money",
    iconId: "finance",
  },
  {
    name: "Partnership",
    param: "partnership",
    description: "Build project togethers",
    iconId: "partnership",
  },
];
