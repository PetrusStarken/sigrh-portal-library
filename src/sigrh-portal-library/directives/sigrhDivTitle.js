(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhDivTitle', SigrhDivTitle);

  function SigrhDivTitle() {
    return {
      templateUrl: 'sigrh-portal-library/templates/sigrhDivTitle.html',
      replace: true,
      restrict: 'E',
      scope: {
        tituloPagina: '@',
        rotaRetorno: '@'
      }
    };
  }
})(angular);
