/*
 * grunt-html2json
 * https://github.com/minddriven/grunt-html2json
 *
 * Copyright (c) 2012 Tom Tang
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  "use strict";
  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('html2json', 'Compile html or any txt files into a json file.', function() {
    var _self = this;
    this.files.map(function(file) {
      var files = grunt.file.expand(file.src);
      
      // Construct the JSON file.
      var content = processHtmlToJson(files, {separator: _self.data.separator});
      
      grunt.file.write(file.dest, JSON.stringify(content, null, '\t'));
      // if you don't want the pretty_print, use following line
      //grunt.file.write(this.file.dest, JSON.stringify(content));
      
      // Fail task if errors were logged.
      if (_self.errorCount) { return false; }
      
      // Otherwise, print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  function filename_to_key(filename){
      var filename_new = filename.split('/').pop();
      filename_new = filename_new.split('.').shift();
      return filename_new;
  }

  // Concat source files and/or directives.
  function processHtmlToJson(files, options) {
    options = grunt.util._.defaults(options || {}, {
      separator: grunt.util.linefeed
    });
    var ret = {};

    files.map(function(filepath) {
      var filenames = filepath.split('/');
      ret[filename_to_key(filepath)]= grunt.file.read(filepath, grunt.file.read);
    });

    return ret;
  }

};
