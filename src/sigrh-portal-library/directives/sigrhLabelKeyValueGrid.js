(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhLabelKeyValueGrid', SigrhLabelKeyValueGrid);

  function SigrhLabelKeyValueGrid() {
    return {
      templateUrl: 'sigrh-portal-library/templates/sigrhLabelKeyValueGrid.html',
      replace: false,
      restrict: 'E',
      transclude: true,
      scope: {
        descricao: '@',
        descricaoReduzida: '@',
        qtColunas: '@'
      },
      compile: function compile(element, attrs, transclude) {
        return {
          pre: function preLink(scope) {
            if (scope.qtColunas === 3 || !scope.qtColunas) {
              scope.classeKey = 'col-xs-4 col-sm-2 col-lg-2';
              scope.classeValue = 'col-xs-8 col-sm-4 col-lg-2';
            }
            else if (scope.qtColunas === 2) {
              scope.classeKey = 'col-xs-4 col-sm-2';
              scope.classeValue = 'col-xs-8 col-sm-4';
            }
            else if (scope.qtColunas === 1) {
              scope.classeKey = 'col-xs-6';
              scope.classeValue = 'col-xs-6';
            }
          }
        };
      }
    };
  }
})(angular);
