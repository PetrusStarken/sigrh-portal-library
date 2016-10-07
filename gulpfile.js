var fs = require('fs');
var gulp = require('gulp');
var karma = require('karma').server;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var path = require('path');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var es = require('event-stream');
var minifyHtml = require('gulp-minify-html');
var templateCache = require('gulp-angular-templatecache');
var header = require('gulp-header');

/**
 * File patterns
 **/
 
 var config = {
  pkg : JSON.parse(fs.readFileSync('./package.json')),
  banner:
      '/*!\n' +
      ' * <%= pkg.name %>\n' +
      ' * <%= pkg.homepage %>\n' +
      ' * Version: <%= pkg.version %> - <%= timestamp %>\n' +
      ' * License: <%= pkg.license %>\n' +
      ' */\n\n\n'
};

// Root directory
var rootDirectory = path.resolve('./');

// Source directory for build process
var sourceDirectory = path.join(rootDirectory, './src');

// tests
var testDirectory = path.join(rootDirectory, './test/unit');

var sourceFiles = [

  // Make sure module files are handled first
  path.join(sourceDirectory, '/**/*.module.js'),

  // Then add all JavaScript files
  path.join(sourceDirectory, '/**/*.js')
];

var lintFiles = [
  'gulpfile.js',
  // Karma configuration
  'karma-*.conf.js'
].concat(sourceFiles);

gulp.task('build', function() {
  function buildTemplates() {
    return gulp.src('src/**/*.html')
      .pipe(minifyHtml({
             empty: true,
             spare: true,
             quotes: true
            }))
      .pipe(templateCache({
		  templateHeader: '(function (angular) { \'use strict\'; angular.module(\'<%= module %>\'<%= standalone %>).run([\'$templateCache\', function($templateCache) {',
		  templateFooter: '}]);})(angular);',
		  module: 'sigrhPortalLibrary'
	  }));
  }
  
  function buildDistJS(){
	return gulp.src(sourceFiles)
	  .pipe(plumber())
	  .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
  }
  
  es.merge(buildDistJS(), buildTemplates())
	.pipe(plumber())
	.pipe(concat('sigrh-portal-library.js'))
	.pipe(header(config.banner, {
      timestamp: (new Date()).toISOString(), pkg: config.pkg
    }))
	.pipe(gulp.dest('./dist/'))
	.pipe(rename({suffix: '.min.js'}))
	.pipe(uglify())
	.pipe(gulp.dest('./dist'));
});

/**
 * Process
 */
gulp.task('process-all', function (done) {
  runSequence('jshint', 'build', done);//'test-src', 
});

/**
 * Watch task
 */
gulp.task('watch', function () {

  // Watch JavaScript files
  gulp.watch(sourceFiles, ['process-all']);

  // watch test files and re-run unit tests when changed
  gulp.watch(path.join(testDirectory, '/**/*.js'), ['test-src']);
});

/**
 * Validate source JavaScript
 */
gulp.task('jshint', function () {
  return gulp.src(lintFiles)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

/**
 * Run test once and exit
 */
gulp.task('test-src', function (done) {
  karma.start({
    configFile: __dirname + '/karma-src.conf.js',
    singleRun: true
  }, done);
});

/**
 * Run test once and exit
 */
gulp.task('test-dist-concatenated', function (done) {
  karma.start({
    configFile: __dirname + '/karma-dist-concatenated.conf.js',
    singleRun: true
  }, done);
});

/**
 * Run test once and exit
 */
gulp.task('test-dist-minified', function (done) {
  karma.start({
    configFile: __dirname + '/karma-dist-minified.conf.js',
    singleRun: true
  }, done);
});

gulp.task('default', function () {
  runSequence('process-all', 'watch');
});
