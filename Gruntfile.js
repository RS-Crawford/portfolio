module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'client/**/*.js', 'server/**/*.js']
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangleProperties: true,
        mangle: {
          except: ['jQuery', 'Angular']
        }
      },
      my_target: {
        options: {
          sourceMap: true
        },
        files: {
          'build/output.min.js' : ['client/**/*.js']//['client/**/<%= pkg.name %>.js', 'server/**/<%= pkg.name %>.js']
        }
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'build/output.min.css' : ['client/styles/css/styles.css']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'client/styles/css/styles.css' : 'client/styles/sass/app.scss'
        }
      }
    },

    watch: {
      scripts: {
        files: ['client/**/*.js', 'server/**/*.js'],
        tasks: ['jshint', 'uglify:my_target']
      },
      css: {
        files: 'client/**/*.scss',
        tasks: ['sass', 'cssmin:target']
      }
    },

    nodemon: {
      dev: {
        script: 'server/server.js'
      }
    },

    concurrent: {
      dev: {
        tasks: ['jshint', 'nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  // Task(s).
  grunt.registerTask('default2', ['uglify']);
  grunt.registerTask('default', '', function () {
    var tasks = [
      'concurrent',
      'jshint',
      'nodemon',
      'watch'
    ];
    grunt.task.run(tasks);
  });

};
