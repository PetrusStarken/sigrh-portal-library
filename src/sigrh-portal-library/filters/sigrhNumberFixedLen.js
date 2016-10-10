(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').filter('numberFixedLen', SigrhNumberFixedLen);

  function SigrhNumberFixedLen() {
    return function (n, len) {
      var num = parseInt(n, 10);
      len = parseInt(len, 10);
      return (isNaN(num) || isNaN(len)) ? n : ( 1e10 + '' + num ).slice(-len);
    };
  }
})(angular);
