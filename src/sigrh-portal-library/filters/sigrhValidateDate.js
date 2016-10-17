(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhValidateDate', SigrhValidateDate);

  function SigrhValidateDate() {
    return {
      require: 'ngModel',
      restrict: 'A',
      priority: 2,
      link: function ($scope, $elem, $attrs, $ctrl) {
        $ctrl.$validators.date = function (valor) {
          if (valor.length < 10) {
            return false;
          }

          if (!new Date(valor.split('/')[2], valor.split('/')[1], valor.split('/')[0])) {
            return false;
          }

          return true;
        };
      }
    };
  }
})(angular);
