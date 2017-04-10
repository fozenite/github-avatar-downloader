// ---- Load the request Module ---- //
var request = require('request');
//---- Welcome message to users ----//
console.log('Welcome to the GitHub Avatar Downloader!');



//---- Get Repo Contributors function ----//
// -> Uses the request library to fetch                //
//    the list of contributors via HTTPS               //
//    for a given repo                                 //
//    ---> Inputs : repoOwner - User Name of Rep Owner //
//                  repoName  - Name of the Repo       //
//                        cb  - callback function      //
//                              handles asynch results //
//                              returned from function //
function getRepoContributors(repoOwner, repoName, cb) {

  // ------------------- //

}

  //---- Passing some hardcoded values to our getRepo ---- //
getRepoContributors("jquery", "jquery" , function(err,result) {
  console.log("Errors:", err);
  console.log("Result" , result);
});
