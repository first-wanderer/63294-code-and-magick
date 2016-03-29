'use strict';

var getMessage = function(a, b) {
  var sum = function(arr) {
    return arr.reduce(function(total, item) {
      return total + item;
    });
  };

  var length = function(arr1, arr2) {
    return arr1.reduce(function(total, item, index) {
      return total + item * arr2[index];
    }, 0);
  };

  if (typeof a === 'boolean') {
    return a ? 'Я попал в ' + b : 'Я никуда не попал';
  }

  if (typeof a === 'number') {
    return 'Я прыгнул на ' + (a * 100) + ' сантиметров';
  }

  if (Array.isArray(a)) {
    return Array.isArray(b) ? 'Я прошёл ' + length (a, b) + ' метров' : 'Я прошёл ' + sum(a) + ' шагов';
  }
};
