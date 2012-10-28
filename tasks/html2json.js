/*
 * grunt-html2json
 * https://github.com/minddriven/grunt-html2json
 *
 * Copyright (c) 2012 Tom Tang
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('html2json', 'Compile html or any txt files into a json file.', function() {

    var files = grunt.file.expandFiles(this.file.src);

    // Construct the JSON file.
    var content = grunt.helper('html2json', files, {separator: this.data.separator});

    grunt.file.write(this.file.dest, JSON.stringify(content, null, '\t'));
    // if you don't want the pretty_print, use following line
    //grunt.file.write(this.file.dest, JSON.stringify(content));

    // Fail task if errors were logged.
    if (this.errorCount) { return false; }

    // Otherwise, print a success message.
    grunt.log.writeln('File "' + this.file.dest + '" created.');
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  function filename_to_key(filenmame){
      ret = filenmame.split('/').pop();
      ret = ret.split('.').shift();
      return ret;
  }

  // Concat source files and/or directives.
  grunt.registerHelper('html2json', function(files, options) {
    options = grunt.utils._.defaults(options || {}, {
      separator: grunt.utils.linefeed
    });
    var ret = {};

    files.map(function(filepath) {
      var filenames = filepath.split('/');
      ret[filename_to_key(filepath)]= grunt.task.directive(filepath, grunt.file.read);
    });

    return ret;
  });

};
