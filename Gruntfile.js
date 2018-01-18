module.exports = function(grunt) {

    // Project configuration.
    // npm install grunt-contrib-contrib --save-dev
    // npm install grunt-contrib-watch --save-dev
    // npm install grunt-contrib-sass --save-dev
    grunt.initConfig({
        concat: {
            js: {
                src: ['assets/project/js/document.ready.js'],
                dest: 'assets/js/scripts.js',
                src: ['assets/project/bower_components/jquery/dist/jquery.min.js'],
                dest: 'assets/js/jquery.js',
            },
        },
        watch: {
            js: {
                files: ['assets/project/js/*.js'],
                tasks: ['concat:js'],
            },
            sass: {
                files: ['assets/project/sass/*.scss'],
                tasks: ['sass:dist'],
            }
        },
        sass: {
            dist: {
                files: {
                    'assets/css/main.css': 'assets/project/sass/main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['concat'], ['watch'], ['sass']);

};