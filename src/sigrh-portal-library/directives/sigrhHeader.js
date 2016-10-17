(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhHeader', SigrhHeader);

  function SigrhHeader() {
    return {
      templateUrl: 'sigrh-portal-library/templates/sigrhHeader.html',
      replace: false,
      restrict: 'E',
      scope: {
        logo: '@',
        logoXs: '@',
        subtituloSistema: '@',
        tituloSistema: '@',
        tabIndex: '@',
        possuiSessao: '@',
        funcaoSair: '&'
      }
    };
  }
})(angular);
