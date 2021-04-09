const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  

  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/svg");
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/alpine.js': './js/alpine.js',
  });
  eleventyConfig.addWatchTarget("./src/assets/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  // eleventyConfig.addFilter("randomItem", (arr) => {
  //     arr.sort(() => {
  //       return 0.5 - Math.random();
  //     });
  //     return arr.slice(0, 1);
  // });

    /**
	* Add layout aliases
	* @link https://www.11ty.dev/docs/layouts/#layout-aliasing
	*/
	eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')
	eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')
	eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')
  eleventyConfig.setDataDeepMerge(true)

    return {
        dir: {
            input: "src",
            output: "public"
        },
        passthroughFileCopy: true,
		    templateFormats: ['html', 'njk', 'md'],
		    htmlTemplateEngine: 'njk',
		    markdownTemplateEngine: 'njk',
    };
};