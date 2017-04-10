// ---- Load the request Module ---- //
var request = require('request');
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
  console.log(requestURL); // Testing



}

//---- Passing some hardcoded values to our getRepo ---------- //
getRepoContributors("jquery", "jquery" , function(err,result) {
  console.log("Errors:", err);
  console.log("Result" , result);
});
