(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhLabelInput', SigrhLabelInput);

  function SigrhLabelInput() {
    return {
      templateUrl: 'sigrh-portal-library/templates/sigrhLabelInput.html',
      replace: false,
      restrict: 'E',
      scope: {
        field: '=',
        model: '=',
        label: '@',
        fieldName: '@',
        placeholder: '@',
        required: '@',
        type: '@',
        maskFormat: '@',
        change: '@',
        minlength: '@',
        maxlength: '@',
        index: '@'
      }
    };
  }
})(angular);
