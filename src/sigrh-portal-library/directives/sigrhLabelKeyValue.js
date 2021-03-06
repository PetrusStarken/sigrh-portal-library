(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhLabelKeyValue', SigrhLabelKeyValue);

  function SigrhLabelKeyValue() {
    return {
      templateUrl: 'sigrh-portal-library/templates/sigrhLabelKeyValue.html',
      replace: true,
      restrict: 'E',
      scope: {
        descricao: '@',
        descricaoReduzida:'@',
        classe: '@'
      },
      transclude: true
    };
  }
})(angular);
