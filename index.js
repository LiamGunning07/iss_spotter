const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('199.53.18.24', (error, data) => {
  if (error) {
    console.error("it didn't work!", error);
    return;
  }
  console.log('It worked! Returned coordinates:', data);
});
