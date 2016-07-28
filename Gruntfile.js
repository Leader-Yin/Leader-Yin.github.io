module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  cssmin:{

    target:{

     files: {
      'build/main.min.css': ['css/index.css']


    }


    }


  }
    
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['cssmin']);

};