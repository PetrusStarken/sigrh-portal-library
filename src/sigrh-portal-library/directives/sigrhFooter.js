(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhFooter', SigrhFooter);

  function SigrhFooter() {
    return {
      templateUrl: 'sigrh-portal-library/templates/sigrhFoter.html',
      replace: false,
      restrict: 'E',
      scope: {
        nomeCliente: '@',
        nomeSistema: '@',
        versao: '@'
      }
    };
  }
})(angular);
