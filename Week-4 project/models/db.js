var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url,{ useNewUrlParser: true }, function(err,db) {
    console.log("connected");
    if (err) throw err;
    var dbs = db.db("Desktop");
    dbs.collection("data").find({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        result.each(function(err,doc) {
            console.log(doc);
        });
        db.close();
    });
});

