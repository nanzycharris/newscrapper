// Controller for our headlines
// ============================
var db = require("../models");

module.exports = {
    // Find all headlines, sort them by date, send them back to the user
    findAll: function (req, res) {
        db.Headline
            .find(req.query)
            .sort({ date: -1 })
            .then(function (dbHeadline) {
                res.json(dbHeadline);
            });
    },
    // Delete the specified headline
    delete: function (req, res) {
        db.Headline.remove({ _id: req.params.id }).then(function (dbHeadline) {
            res.json(dbHeadline);
        });
    },
    // Update the specified headline
    update: function (req, res) {
        db.Headline.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function (dbHeadline) {
            res.json(dbHeadline);
        });
    }
};





// =================================
// // Bring in our scrape script and makeDate scripts
// var scrape = require("../scripts/scrape");
// var makeDate = require("../scripts/date");

// // Bring in the Headline and Note mongoose models
// var Headline = require("../models/Headline");

// module.exports = {
//     // first, we state that whenever we run 'fetch' we run a function with a callback as parameter
//     fetch: function (cb) {
//         scrape(function (data) {
//             var articles = data;
//             for (var i = 0; i < articles.length; i++) {
//                 articles[i].date = makeDate();
//                 articles[i].saved = false;
//             }
//             // mongo function. It doesn't matter if articles are ordered
//             Headline.collection.insertMany(articles, { ordered: false }, function (err, docs) {
//                 cb(err, docs);
//             });
//         });
//     },
//     // next, we write our 'delete' property so we can remove articles
//     delete: function (query, cb) {
//         Headline.remove(query, cb);
//     },
//     // get all of the items in the collection out with a 'get' function
//     get: function (query, cb) {
//         Headline.find(query)
//             .sort({
//                 _id: -1
//             })
//             .exec(function (err, doc) {
//                 cb(doc);
//             });
//     },
//     update: function (query, cb) {
//         Headline.update({ _id: query._id }, {
//             $set: query
//         }, {}, cb);
//     }
// }