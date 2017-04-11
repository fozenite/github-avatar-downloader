// ---- Load the request Module ---- //
var request = require('request');
// ---- Load the file system Module --- //
var fs = require('fs');



// -- Setting up constants for our getRepoContributors function ---//
var GITHUB_USER = "fozenite";                                      // Github username
var GITHUB_TOKEN = "09e760f4dbf619994b498911ef38dfe495c86136";     // GIthub access token



// -----------Get Repo Contributors function --------- //
// -> Uses the request library to fetch                //
//    the list of contributors via HTTPS               //
//    for a given repo                                 //
//    ---> Inputs : repoOwner - User Name of Rep Owner //
//                  repoName  - Name of the Repo       //
//                        cb  - callback function      //
//                              handles asynch results //
//                              returned from function //
// --------------------------------------------------- //
function getRepoContributors(repoOwner, repoName, cb) {
  // ---- Concatenate all the data required to make our request URL --- //
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  //----Define URL an headers for our github complete request ----//
  var options = {
  url:  requestURL,
  headers: {
    'User-Agent': 'Student-Proj-Avatar-Downloader'
    }
  };



  request(options, function(err, response, body) {
  if (err) throw err;
  console.log('Response Status Code:', response.statusCode);
  // ----- Parse the received data in the body --- //
  var myParsedData = JSON.parse(body);
  cb(err, myParsedData);

});

}



// ---- Download each Image in the url --- //
function downloadImageByURL(url, filePath) {
  // Making a full path to store all the images
  var fullFilePath = './' + filePath + '.jpg';
  // GET images from each url and store it
  request.get(url)
       .on('error', function (err) {
         throw err;
       })
       .pipe(fs.createWriteStream(fullFilePath));

}

// Getting command line arguments for our Repo Owner and User Name //
var repoOwner = process.argv[2];
var repoName  = process.argv[3];

if((!repoOwner) || (!repoName)){
  console.log("Error you not specified Repo Owner Name or Repo Name ");
} else {

//---- Welcome message to users ----//
console.log('Welcome to the GitHub Avatar Downloader!');

//---- Passing some hardcoded values to our getRepo ---------- //
getRepoContributors(repoOwner, repoName, function(err,result) {
  console.log("Errors:", err);
// ---- Print out each URL seperately --- //
  for(eachURL of result){
  downloadImageByURL(eachURL.avatar_url, eachURL.login);
  }

  });
}


