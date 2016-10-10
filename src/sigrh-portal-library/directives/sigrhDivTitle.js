(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhDivTitle', SigrhDivTitle);

  function SigrhDivTitle() {
    return {
      templateUrl: 'sigrh-portal-library/templates/sigrhDivTitle.html',
      replace: false,
      restrict: 'A',
      scope: {
        tituloPagina: '=',
        rotaRetorno: '@'
      }
    };
  }
})(angular);
