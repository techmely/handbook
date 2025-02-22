/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://techmely.com",
  generateRobotsTxt: true,
  exclude: ["/blog/tags/*"],
  outDir: "./out",
};
