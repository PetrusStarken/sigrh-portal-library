(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhLabelSelect', SigrhLabelSelect);

  function SigrhLabelSelect() {
    return {
      templateUrl: 'sigrh-portal-library/templates/sigrhLabelSelect.html',
      replace: false,
      restrict: 'E',
      scope: {
          field: '=',
          model: '=',
          list: '=',
          key: '@',
          value: '@',
          label: '@',
          fieldName: '@',
          placeholder: '@',
          required: '@',
          mensagemPadrao: '@',
          filter: '@',
          index: '@'
      }
    };
  }
})(angular);
