const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const cleanCSS = require('clean-css');
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/svg");
  eleventyConfig.addPassthroughCopy({'./node_modules/alpinejs/dist/alpine.js': './assets/js/alpine.js',});
  eleventyConfig.addWatchTarget("./src/assets/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // clean css inline for code in markdown 
  eleventyConfig.addFilter("cssmin", (code) => {
    return new cleanCSS({}).minify(code).styles;
  })

  //HIDE tag post default for show loop tags in posts
  eleventyConfig.addFilter("hideTagPosts", tags => {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  })


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