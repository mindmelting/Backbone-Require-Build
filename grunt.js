module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    watch: { // for development run 'grunt watch'
      compass: {
        files: ['development/styles/sass/*.scss'],
        tasks: ['compass:dev']
      }
    },
    bower: {
      dev: {
        dest: 'development/js/libs'
      }
    },
    jasmine:{
      all:{
        src:['tests/SpecRunner.html'],
        errorReporting:true
      }
    },
    compass: {
      dev: {
        src: 'development/styles/sass',
        dest: 'development/styles',
        outputstyle: 'expanded',
        linecomments: true
      },
      prod: {
        src: 'development/styles/sass',
        dest: 'development/styles',
        outputstyle: 'compressed',
        linecomments: false,
        forcecompile: true
      }
    },
    requirejs: {
      compile: {
        options: {
          optimize:"uglify",
          optimizeCss:'none',
          useSourceUrl: false,
          appDir:"./development",
          baseUrl:"js",
          dir:"./production",
          mainConfigFile:"./development/js/main.js",
          name:"main",
          fileExclusionRegExp: /^(docs|r.js)$|.sass-cache|scss|.DS_Store/,
          removeCombined : true,
          skipDirOptimize: true
          
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-jasmine-task');
  grunt.loadNpmTasks('grunt-bower');

  grunt.registerTask('default', 'bower:dev jasmine compass:prod requirejs');};