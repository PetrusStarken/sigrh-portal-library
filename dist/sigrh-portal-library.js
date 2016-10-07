/*!
 * sigrh-portal-library
 * 
 * Version: 0.1.0 - 2016-10-07T19:53:51.548Z
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
    'ngMessages'
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

  angular.module('sigrhPortalLibrary.directives').directive('sigrhHeader', SigrhHeader);

  function SigrhHeader() {
    return {
      templateUrl: 'sigrh-portal-library/templates/sigrhHeader.html',
      replace: false,
      restrict: 'E'
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

(function (angular) { 'use strict'; angular.module('sigrhPortalLibrary').run(['$templateCache', function($templateCache) {$templateCache.put("sigrh-portal-library/templates/sigrhHeader.html","<header class=\"navbar navbar-default navbar-static-top\"><div aria-label=\"Página carregada\" aria-live=\"assertive\"></div><div class=\"hidden-xs col-sm-3\"><img src=\"images/logoHeader.png\" class=\"header_image_left\" alt=\"Logomarca Portal do Servidor\"></div><div class=\"visible-xs text-center\"><img src=\"images/logoHeaderXS.png\" class=\"header_image_left_xs\" alt=\"Logomarca Portal do Servidor\"></div><div id=\"text-header\" class=\"hidden-xs col-sm-8\"><h3>Governo do estado de Santa Catarina</h3><h3>Emiss&atilde;o e valida&ccedil;&atilde;o de certificados</h3></div><div id=\"text-header\" class=\"visible-xs text-center\"><h3>SEA/SC</h3></div><div class=\"col-sm-1\"><div class=\"nav navbar-nav navbar-right\"><a id=\"linkSair\" ng-show=\"participante || certificado\" ng-click=\"sair()\" class=\"float-right cursor-pointer\" tabindex=\"500\" role=\"link\" accesskey=\"B\" aria-label=\"Para sair do sistema utilize a tecla de atalho\">Sair</a></div></div></header>");
$templateCache.put("sigrh-portal-library/templates/sigrhLabelInput.html","<div class=\"form-group\" ng-class=\"field.$invalid && field.$dirty ? \'has-error\': {\'has-success\': field.$dirty && required}\"><label class=\"control-label\" for=\"{{::fieldName}}\">{{::label}}</label><div ng-show=\"field.$invalid\" ng-messages=\"field.$error\" class=\"float-right text-danger\"><div ng-message=\"required\">Campo obrigatório</div><div ng-message=\"email\">Formato de e-mail inválido</div><div ng-message=\"mask\">Formato inválido: {{::maskFormat}}</div><div ng-message=\"minlength\">Deve conter ao menos {{::minlength}} caracteres</div><div ng-message=\"maxlength\">Deve conter no máximo {{::maxlength}} caracteres</div><div ng-message=\"forca\">Senha fraca</div><div ng-message=\"senha\">Senhas não conferem</div><div ng-message=\"dominio\">Deve pertencer ao domínio sc.gov.br</div></div><input type=\"{{::type}}\" name=\"{{::fieldName}}\" placeholder=\"{{::placeholder}}\" ng-model=\"model\" ng-required=\"required\" ng-attr-ng-change=\"change\" ng-attr-ng-minlength=\"minlength\" ng-attr-ng-maxlength=\"maxlength\" class=\"form-control\" ng-attr-mask=\"{{::maskFormat}}\" ng-attr-tabindex=\"{{::index}}\"></div>");}]);})(angular);