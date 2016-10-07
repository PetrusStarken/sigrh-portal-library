'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('sigrhPortalLibrary');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('sigrhPortalLibrary.config')).to.be.ok;
  });

  
  it('should load filters module', function() {
    expect(hasModule('sigrhPortalLibrary.filters')).to.be.ok;
  });
  

  
  it('should load directives module', function() {
    expect(hasModule('sigrhPortalLibrary.directives')).to.be.ok;
  });
  

  

});