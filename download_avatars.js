// ---- Load the request Module ---- //
var request = require('request');
// ---- Load the file system Module --- //
var fs = require('fs');
//---- Welcome message to users ----//
console.log('Welcome to the GitHub Avatar Downloader!');


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

//---- Passing some hardcoded values to our getRepo ---------- //
getRepoContributors("jquery", "jquery" , function(err,result) {
  console.log("Errors:", err);
// ---- Print out each URL seperately
  for(eachURL of result){
  console.log("URL:" , eachURL.avatar_url);
  }

});
