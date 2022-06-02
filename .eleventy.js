const yaml = require("js-yaml");

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "assets/img" });
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
  return {
    templateFormats: ["html", "liquid", "njk"]
  };
};