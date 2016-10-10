(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').filter('converterStringParaData', SigrhConverterStringParaData);

  function SigrhConverterStringParaData(value, len) {
    var arrData = value.split('/');
    return new Date(arrData[2], arrData[1] - 1, arrData[0]);
  }
})(angular);
