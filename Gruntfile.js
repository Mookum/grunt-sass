module.exports = function(grunt) {

    // Project configuration.
    // npm install grunt-contrib-contrib --save-dev
    // npm install grunt-contrib-watch --save-dev
    // npm install grunt-contrib-sass --save-dev
    grunt.initConfig({
        concat: {
            js: {
                src: ['assets/sass/js/phpcms.js'],
                dest: 'assets/js/scripts.js',
            },
            css: {
                src: ['assets/sass/css/main.css', 'assets/sass/css/theme.css'],
                dest: 'assets/css/styles.css',
            }
        },
        watch: {
            js: {
                files: ['assets/sass/js/*.js'],
                tasks: ['concat:js'],
            },
            sass: {
                files: ['assets/sass/css/*.scss'],
                tasks: ['sass:dist'],
            }
        },
        sass: {
            dist: {
                files: {
                    'assets/css/main.css': 'assets/sass/css/main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['concat'], ['watch'], ['sass']);

};