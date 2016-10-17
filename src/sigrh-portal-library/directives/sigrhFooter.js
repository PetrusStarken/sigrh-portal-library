(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhFooter', SigrhFooter);

  function SigrhFooter() {
    return {
      templateUrl: 'sigrh-portal-library/templates/sigrhFooter.html',
      replace: false,
      restrict: 'E',
      scope: {
        nomeCliente: '@',
        nomeSistema: '@',
        desenvolvidoPor: '@',
        versao: '@'
      }
    };
  }
})(angular);
