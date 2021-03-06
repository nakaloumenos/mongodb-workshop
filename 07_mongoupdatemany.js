var MongoClient = require('mongodb').MongoClient ;

var url = 'mongodb://localhost:27017/MUGS';


MongoClient.connect(url, function(err, client) {

    if ( err ) {
        console.log( err );
        process.exit( 1 ) ;
    } else {
        console.log("Successfully connected to server: ", url );
    }

    db = client.db( "MUGS" ) ;

    updater = { "$set" : { 'registration_url' : "eventbrite"}}
    db.collection( "mug_groups" ).updateMany( {}, updater, ( err, res ) => {
        if ( err ) {
            throw err ;
        } else {
            console.log( `Modified ${res.modifiedCount }` )
        }
        client.close();
    } );

    // Declare success
    console.log("updateMany");
});


