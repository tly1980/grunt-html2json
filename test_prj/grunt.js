module.exports = function(grunt) {

  // // Project configuration.
  grunt.initConfig({
    html2json: {
      dist: {
         src: ['src/*.txt', 'src/*.html'],
         dest: 'dist/built.json',
         pretty_print:false
      }
    },
    watch: {
      files: '<config:html2json.dist.src>',
      tasks: 'default'
    }
  });

  // Load local tasks.
  grunt.loadTasks('../tasks');

  // Default task.
  grunt.registerTask('default', 'html2json');

};
