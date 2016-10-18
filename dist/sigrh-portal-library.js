/*!
 * sigrh-portal-library
 * 
 * Version: 0.1.0 - 2016-10-18T18:33:21.171Z
 * License: 
 */


(function (angular) {
  'use strict';
  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('sigrhPortalLibrary.config', [])
  .value('sigrhPortalLibrary.config', {
    debug: true
  });

  // Modules
  angular.module('sigrhPortalLibrary.directives', [
    'ngMessages',
    'ngMask'
  ]);
  angular.module('sigrhPortalLibrary.filters', []);
  angular.module('sigrhPortalLibrary',
  [
    'sigrhPortalLibrary.config',
    'sigrhPortalLibrary.directives',
    'sigrhPortalLibrary.filters'
  ]);

})(angular);

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

(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhLabelInput', SigrhLabelInput);

  function SigrhLabelInput() {
    return {
      templateUrl: 'sigrh-portal-library/templates/sigrhLabelInput.html',
      replace: false,
      restrict: 'E',
      scope: {
        classe: '@',
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

(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').filter('sigrhConvertToDate', SigrhConvertToDate);

  function SigrhConvertToDate() {
    return function (value) {
      var arrData = value.split('/');
      return new Date(arrData[2], arrData[1] - 1, arrData[0]);
    };
  }
})(angular);

(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').filter('numberFixedLen', SigrhNumberFixedLen);

  function SigrhNumberFixedLen() {
    return function (n, len) {
      var num = parseInt(n, 10);
      len = parseInt(len, 10);
      return (isNaN(num) || isNaN(len)) ? n : ( 1e10 + '' + num ).slice(-len);
    };
  }
})(angular);

(function (angular) {
  'use strict';

  angular.module('sigrhPortalLibrary.directives').directive('sigrhValidateDate', SigrhValidateDate);

  function SigrhValidateDate() {
    return {
      require: 'ngModel',
      restrict: 'A',
      priority: 2,
      link: function ($scope, $elem, $attrs, $ctrl) {
        $ctrl.$validators.date = function (valor) {
          if (valor.length < 10) {
            return false;
          }

          if (!new Date(valor.split('/')[2], valor.split('/')[1], valor.split('/')[0])) {
            return false;
          }

          return true;
        };
      }
    };
  }
})(angular);

(function (angular) { 'use strict'; angular.module('sigrhPortalLibrary').run(['$templateCache', function($templateCache) {$templateCache.put("sigrh-portal-library/templates/sigrhDivTitle.html","<div class=\"panel-heading\">{{tituloPagina}}<div class=\"btn-group pull-right\"><a class=\"hidden-print\" style=\"text-decoration:none; cursor:pointer; color:white;\" ui-sref=\"{{rotaRetorno || \'app\'}}\" id=\"linkvoltar\" tabindex=\"499\" accesskey=\"V\" aria-label=\"Voltar para o menu príncipal\">Voltar</a></div></div>");
$templateCache.put("sigrh-portal-library/templates/sigrhFooter.html","<footer class=\"hidden-print container\"><p class=\"text-muted credit\">{{::nomeCliente}} | {{::nomeSistema}} versão <b>{{::versao}}</b> - <a href=\"http://www.indracompany.com/pt-br\">Desenvolvido por {{::desenvolvidoPor}}</a>.</p></footer>");
$templateCache.put("sigrh-portal-library/templates/sigrhHeader.html","<header class=\"navbar navbar-default navbar-static-top\"><div tabindex=\"{{::tabIndex}}\" aria-label=\"Página carregada\" aria-live=\"assertive\"></div><div class=\"hidden-xs col-sm-3\"><img src=\"{{::logo}}\" class=\"header_image_left\" alt=\"Logomarca Portal do Servidor\"></div><div class=\"visible-xs text-center\"><img src=\"{{::logoXs}}\" class=\"header_image_left_xs\" alt=\"Logomarca Portal do Servidor\"></div><div id=\"text-header\" class=\"hidden-xs col-sm-8\"><h3>{{tituloSistema}}</h3><h3>{{subtituloSistema}}</h3></div><div class=\"col-sm-1\"><div class=\"nav navbar-nav navbar-right\"><a id=\"linkSair\" ng-show=\"{{possuiSessao}}\" ng-click=\"funcaoSair()\" class=\"float-right cursor-pointer\" tabindex=\"500\" role=\"link\" accesskey=\"B\" aria-label=\"Para sair do sistema utilize a tecla de atalho\">Sair</a></div></div></header>");
$templateCache.put("sigrh-portal-library/templates/sigrhLabelInput.html","<div ng-class=\"classe ? classe : \'col-sm-6 col-lg-4\'\"><div class=\"form-group\" ng-class=\"field.$invalid && field.$dirty ? \'has-error\': {\'has-success\': field.$dirty && required}\"><label class=\"control-label\" for=\"{{::fieldName}}\">{{::label}}</label><div ng-show=\"field.$invalid && field.$dirty\" ng-messages=\"field.$error\" class=\"float-right text-danger\"><div ng-message=\"required\">Campo obrigatório</div><div ng-message=\"email\">Formato de e-mail inválido</div><div ng-message=\"mask\">Formato inválido: {{::maskFormat}}</div><div ng-message=\"minlength\">Deve conter ao menos {{::minlength}} caracteres</div><div ng-message=\"maxlength\">Deve conter no máximo {{::maxlength}} caracteres</div><div ng-message=\"forca\">Senha fraca</div><div ng-message=\"senha\">Senhas não conferem</div><div ng-message=\"dominio\">Deve pertencer ao domínio sc.gov.br</div></div><input ng-if=\"fieldName !== \'usuario\'\" type=\"{{::type}}\" name=\"{{::fieldName}}\" placeholder=\"{{::placeholder}}\" ng-model=\"model\" ng-required=\"required\" ng-attr-ng-change=\"change\" ng-attr-ng-minlength=\"minlength\" ng-attr-ng-maxlength=\"maxlength\" class=\"form-control\" ng-attr-mask=\"{{::maskFormat}}\" ng-attr-tabindex=\"{{::index}}\"> <input ng-if=\"fieldName === \'usuario\'\" sigrh-mascara-usuario=\"\" type=\"{{::type}}\" name=\"{{::fieldName}}\" placeholder=\"{{::placeholder}}\" ng-model=\"model\" ng-required=\"required\" class=\"form-control\" ng-attr-tabindex=\"{{::index}}\"></div></div>");
$templateCache.put("sigrh-portal-library/templates/sigrhLabelKeyValue.html","<div ng-class=\"classe ? classe : \'col-sm-6\'\"><b><span ng-class=\"{\'hidden-xs hidden-sm\': descricaoReduzida}\">{{::descricao}}:</span> <span class=\"visible-xs-inline visible-sm-inline\" ng-if=\"descricaoReduzida\">{{::descricaoReduzida}}:</span></b><ng-transclude></ng-transclude></div>");
$templateCache.put("sigrh-portal-library/templates/sigrhLabelKeyValueGrid.html","<div ng-class=\"classeKey\"><b class=\"pull-right\"><span ng-class=\"{\'hidden-xs hidden-sm\': descricaoReduzida}\">{{::descricao}}:</span> <span class=\"visible-xs-inline visible-sm-inline\" ng-if=\"descricaoReduzida\">{{::descricaoReduzida}}:</span></b></div><div ng-class=\"classeValue\"><span ng-transclude=\"\"></span></div>");
$templateCache.put("sigrh-portal-library/templates/sigrhLabelSelect.html","<div class=\"form-group\" ng-class=\"field.$invalid && field.$dirty ? \'has-error\': {\'has-success\': field.$dirty && required}\"><label class=\"control-label\" for=\"{{::fieldName}}\">{{::label}}</label><div ng-show=\"field.$invalid\" ng-messages=\"field.$error\" class=\"float-right text-danger\"><div ng-message=\"required\">Campo obrigatório</div></div><select class=\"form-control\" name=\"{{::fieldName}}\" ng-model=\"model\" ng-options=\"l.{{::key}} as l.{{::value}} for l in list {{::filter}}\" ng-attr-ng-required=\"required\" ng-attr-tabindex=\"{{::index}}\"><option ng-if=\"mensagemPadrao\" value=\"\">{{::mensagemPadrao}}</option></select></div>");}]);})(angular);