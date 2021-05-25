'use strict';

module.exports.generateRandomNumber = event => {
  const randomNumber = parse(Math.random() * 100);
  console.log("The random number generator", randomNumber);
  return randomNumber;
};
