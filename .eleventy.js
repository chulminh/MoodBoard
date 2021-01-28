// docs: https://www.11ty.io/docs/config/

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.setTemplateFormats([
    "css",
    "html",
    "liquid",
    "jpg",
    "png",
    "svg",
    "js",
  ]);

  function sortByPageOrder(values) {
    return values.slice().sort((a, b) => a.data.order - b.data.order);
  }

  eleventyConfig.addFilter("sortByPageOrder", sortByPageOrder);

  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts",
      input: "src",
      output: "dist",
    },
  };
};
