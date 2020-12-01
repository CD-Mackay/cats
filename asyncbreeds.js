const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: returning from *inner* callback function, not breedDetailsFromFile
    if(!error)  callback(data);
    else if (error) callback(undefined);
  });
  //ISSUE Attempting to return data out here will also not work.
  //      Currently not returning anything from here so breedDetailsFromFile function returns undefined
};

//we try to get the return value

const callback = function(input) {
  console.log(input);
}


module.exports = breedDetailsFromFile;
