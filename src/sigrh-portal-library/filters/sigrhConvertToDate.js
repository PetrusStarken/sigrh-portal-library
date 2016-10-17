(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').filter('sigrhConvertToDate', SigrhConvertToDate);

  function SigrhConvertToDate() {
    return function (value) {
      var arrData = value.split('/');
      return new Date(arrData[2], arrData[1] - 1, arrData[0]);
    };
  }
})(angular);
