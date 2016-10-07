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
