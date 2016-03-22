module.exports = function(grunt) {
  "use strict";
  // Project configuration.
  grunt.initConfig({
    test: {
      files: ['test/**/*.js']
    },
		nodeunit: {
			all: ['test/**/*.js'],
			options: {
				reporter: 'junit',
				reporterOptions: {
					output: 'outputdir'
				}
			}
		},
    jshint: {
			src: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
	
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Default task.
  grunt.registerTask('default', [ 'jshint', 'nodeunit' ]);

};
