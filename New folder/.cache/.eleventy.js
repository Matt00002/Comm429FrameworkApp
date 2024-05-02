const Card = require('./src/_includes/components/Card');
const YugiohCard = require('./src/_includes/components/YugiohCard');

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/scripts/");

    eleventyConfig.addShortcode("Card", Card);
    eleventyConfig.addShortcode("YugiohCard", YugiohCard);

    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.enable("code"));

    eleventyConfig.addCollection('posts', function(collectionApi) {
        return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md');
    });
    //eleventyConfig.addWatchTarget("src/css/");
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: ' njk',
    }
}