const request = require('request-promise-native');
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss_promised');
const {printPassTimes} = require('./index')

nextISSTimesForMyLocation() 
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.error("It didn't work: ", error.message)
  });

module.exports = { nextISSTimesForMyLocation };