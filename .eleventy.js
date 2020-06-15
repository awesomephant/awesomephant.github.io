const typesetPlugin = require('eleventy-plugin-typeset');
const pluginSass = require("eleventy-plugin-sass");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(
        typesetPlugin({
            only: '.post-content',
            disable: ['ligatures']
        })
    );

    eleventyConfig.addPairedShortcode("footnotes", function (todoItems) {
        return (
            `<aside class='footnotes'>
            ${todoItems}
</aside>
            `
        );
    })
    
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("./*.png");
    eleventyConfig.addPassthroughCopy("./*.xml");
    eleventyConfig.addPassthroughCopy("./*.txt");
    eleventyConfig.addPassthroughCopy("_redirects");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("site.webmanifest");
    
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginSass, {});
    return {}
};