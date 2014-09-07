var connect = require('connect'); 
module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      files: ['scss/*.{scss,sass}'],
      tasks: ['sass']
    },
    requirejs: {
      options: {
        baseUrl: 'js',
        mainConfigFile: "js/init.js",
        optimize: 'uglify2',
        generateSourceMaps: true,
        preserveLicenseComments: false
      },
      main: {
        options: {
          name: "main",
          out: "js/main.min.js"
        }
      },
    },
    connect: {
      server: {
        options: {
          port: 8082,
          hostname: '*',
          keepalive: true,
          middleware: [
            function (req, res, next) {
              res.setHeader("Access-Control-Allow-Origin", "*");
              return next();
            },
            connect.static(require('path').resolve('.'))
          ]
        }
      }
    },
    sass: {
      dist: {
        options: {
          loadPath: 'js/libs/bootstrap-sass/assets/stylesheets/'
        },
        files: {
          'styles/main.css':'scss/main.scss'
        }
      }
    },
    csscomb: {
      dynamic_mappings: {
          expand: true,
          cwd: 'scss/',
          src: ['*.scss'],
          dest: 'scss/'
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    jshint: {
      hint: {
        files: {
          src: ['js']
        },
        options: {
          force: true,
          jshintrc: true,
          reporter: 'checkstyle',
          reporterOutput: 'jshint.xml'
        }
      }
    },
    coveralls: {
      options: {
        coverage_dir: 'coverage/',
        force: true
      }
    }
  });

  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma-coveralls');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-csscomb');

  grunt.registerTask('default', ['karma', 'requirejs', 'sass', 'csscomb', 'jshint']);
  grunt.registerTask('travis', ['karma', 'coveralls']);

};