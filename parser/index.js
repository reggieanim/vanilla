"use strict";
const colors = require("colors");
const getFeel = temp => {
    if (temp < 5) {
        return "shivering cold";
      } else if (temp >= 5 && temp < 15) {
        return "pretty cold";
      } else if (temp >= 15 && temp < 25) {
        return "moderately cold";
      } else if (temp >= 25 && temp < 32) {
        return "quite warm";
      } else if (temp >= 32 && temp < 40) {
        return "very hot";
      } else {
        return "super hot";
      }
    };


const currentWeather = response => {
    if (response.location) {
        const {
            location, condition , code, temperature
        } = response;

        return `Right now, it is ${condition.toLowerCase().red} in ${location}. It is ${getFeel(Number(temperature))} at ${String(temperature).red} degrees Celsius...`
    } 

}

module.exports = { 
    currentWeather
}