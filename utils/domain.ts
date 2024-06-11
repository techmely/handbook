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
    name: "Business",
    param: "business",
    description: "The product we built",
    iconId: "business",
  },
  {
    name: "Partnership",
    param: "partnership",
    description: "Build project togethers",
    iconId: "partnership",
  },
];
