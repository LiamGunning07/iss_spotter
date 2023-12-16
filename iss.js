const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);
  
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
  
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};
  
const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) return callback(error, null);
  
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    
    const data = JSON.parse(body);
    const coords = {
      latitude: data.latitude,
      longitude: data.longitude
    };
  
    callback(null, coords);
  });

};
module.exports = { fetchMyIP, fetchCoordsByIP };

