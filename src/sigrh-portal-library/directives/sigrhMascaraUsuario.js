(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhMascaraUsuario', SigrhMascaraUsuario);

  function SigrhMascaraUsuario() {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function ($scope, element, attrs, ctrl) {
        function isCpf(value) {
          if (isNaN(value.substring(0, 11))) {
            return false;
          }
          return true;
        }

        function formatarCpf(value) {
          var valueD = desformatarCpf(value);
          if (!isCpf(valueD)) {
            return value;
          }

          return valueD
            .substring(0, 11)
            .replace(/(\d{3})(\d{1,3})/, '$1.$2')
            .replace(/(\d{3})(\d{1,3})/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        }

        function desformatarCpf(cpf) {
          return cpf
            .replace(/(\d{3})(\.)/, '$1')
            .replace(/(\d{3})(\.)/, '$1')
            .replace(/(\d{3})(\-)/, '$1')
            .replace(/(\d{1,2})/, '$1');
        }

        function formatarCampo() {
          if (ctrl.$viewValue === undefined) {
            return;
          }
          ctrl.$setViewValue(formatarCpf(ctrl.$viewValue));
          ctrl.$render();
        }

        $scope.$watch(function () { return ctrl.$modelValue; }, formatarCampo);

        ctrl.$parsers.push(function (value) {
          return desformatarCpf(value);
        });
      }
    };
  }
})(angular);
