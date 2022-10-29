const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-js");
const htmlmin = require("html-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItEmoji = require("markdown-it-emoji");
const markdownItContainer = require("markdown-it-container");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {

  // Adding Experimentational 'Netlify Edge' Support
  // See https://www.11ty.dev/docs/plugins/edge/
  // eleventyConfig.addPlugin(EleventyEdgePlugin);

  // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Configuration API: use eleventyConfig.addLayoutAlias(from, to) to add
  // layout aliases! Say you have a bunch of existing content using
  // layout: post. If you don’t want to rewrite all of those values, just map
  // post to a new file like this:
  // eleventyConfig.addLayoutAlias("post", "layouts/my_new_post_layout.njk");

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Add support for maintenance-free post authors
  // Adds an authors collection using the author key in our post frontmatter
  // Thanks to @pdehaan: https://github.com/pdehaan
  eleventyConfig.addCollection("authors", collection => {
    const blogs = collection.getFilteredByGlob("posts/*.md");
    return blogs.reduce((coll, post) => {
      const author = post.data.author;
      if (!author) {
        return coll;
      }
      if (!coll.hasOwnProperty(author)) {
        coll[author] = [];
      }
      coll[author].push(post.data);
      return coll;
    }, {});
  });

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  // Where filter {{ array | where: key,value }}
  eleventyConfig.addFilter('where', function (array, key, value) {
    return array.filter(item => {
      const keys = key.split('.');
      const reducedKey = keys.reduce((object, key) => {
        return object[key];
      }, item);
      return (reducedKey === value ? item : false);
    });
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy({"src/site/_includes/assets": "assets"});
  eleventyConfig.addPassthroughCopy("admin");

  /* Markdown Plugins */

  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: false
  };
  let containerOpts = {
    marker: '^',
    endMarker: '^'
  }

  eleventyConfig.setLibrary("md", markdownIt(options));

  eleventyConfig.amendLibrary(
    "md", mdLib => mdLib
    .use(markdownItAnchor, opts)
    .use(markdownItEmoji)
    .use(markdownItContainer, 'container', containerOpts) // Adds '::: container' fenced code-block.
    .use(markdownItContainer, 'row')       // Adds '::: row' fenced code-block.
    .use(markdownItContainer, 'column')    // Adds '::: column' fenced code-block.
  );


  // Configure Sass
  eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src/site",
      includes: "_includes", // Relative to the 'dir.input' directory.
      data: "_data", // Relative to the 'dir.input' directory.
      output: "_site"
    }
  };
};
