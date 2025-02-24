export const blogAuthors: Record<string, AuthorData> = {
  harry: {
    name: "Harry Tran",
    title: "Founder Techmely",
    url: "https://github.com/harrytran998",
    image_url: "/images/blog/authors/harrytran998.webp",
  },
  thaycacac: {
    name: "Thaycacac",
    title: "Founder Techmely",
    url: "https://github.com/thaycacac",
    image_url: "/images/blog/authors/thaycacac.webp",
  },
  flamedo: {
    name: "Flame Do",
    title: "Co-Founder Techmely",
    url: "https://github.com/hiepdqflame",
    image_url: "/images/blog/authors/hiepdqflame.webp",
  },
  yusaki: {
    name: "Yusaki Trung",
    title: "Mobile Dev",
    url: "https://github.com/yusaki0998",
    image_url: "/images/blog/authors/yusaki0998.webp",
  },
  tungkun: {
    name: "Tung Kun",
    title: "Core Member - BE",
    url: "https://github.com/TungBeo199x",
    image_url: "/images/blog/authors/TungBeo199x.webp",
  },
};

export type AuthorData = {
  name: string;
  url?: string;
  title?: string;
  image_url?: string;
};
