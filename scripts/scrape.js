// scrape script
// =============

// Require axios and cheerio, making our scrapes possible
var axios = require("axios");
var cheerio = require("cheerio");

// This function will scrape the NYTimes website
var scrape = function () {
    // Scrape the NYTimes website
    return axios.get("http://www.nytimes.com").then(function (res) {
        var $ = cheerio.load(res.data);
        console.log("scraping");
        // Make an empty array to save our article info
        var articles = [];

        // Now, find and loop through each element that has the ".assetWrapper" class
        // (i.e, the section holding the articles)
        $(".assetWrapper").each(function (i, element) {
            // In each article section, we grab the headline, URL, and summary

            // Grab the headline of the article
            var head = $(this)
                .find("h2")
                .text()
                .trim();

            // Grab the URL of the article
            var url = $(this)
                .find("a")
                .attr("href");

            // Grab the summary of the article
            var sum = $(this)
                .find("p")
                .text()
                .trim();

            // So long as our headline and sum and url aren't empty or undefined, do the following
            if (head && sum && url) {
                // This section uses regular expressions and the trim function to tidy our headlines and summaries
                // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
                var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                // Initialize an object we will push to the articles array
                var dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat,
                    url: "https://www.nytimes.com" + url
                };

                // Push new article into articles array
                articles.push(dataToAdd);
            }
        });
        return articles;
    });
};

// Export the function, so other files in our backend can use it
module.exports = scrape;






// // Scrape script
// // ========================

// // Require request and cheerio, making our scrapes possible
// var request = require("request");
// var cheerio = require("cheerio");

// var scrape = function (cb) {
//     request("https://www.nytimes.com/", function (err, res, body) {
//         var $ = cheerio.load(body);
//         var articles = [];
//         // article class 
//         $(".css-8atqhb").each(function (i, element) {
//             // h2 class .css-1m5bs2v esl82me0
//             var head = $(this).children(".css-1m5bs2v esl82me0").text().trim();
//             // p class .css-1pfq5u e1n8kpyg0
//             var sum = $(this).children(".css-1pfq5u e1n8kpyg0").text().trim();

//             if (head && sum) {
//                 var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
//                 var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

//                 var dataToAdd = {
//                     headline: headNeat,
//                     summary: sumNeat
//                 };
//                 articles.push(dataToAdd);
//             }
//         });
//         cb(articles);
//     });
// };

// module.exports = scrape;