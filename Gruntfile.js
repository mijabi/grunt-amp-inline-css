// var grant = require('grunt');

module.exports = function (grunt) {

    grunt.initConfig({
        ampicss: {
        	dev: {
            	hoge: 'hogehogedev'

        	},
        	prod: {
            	hoge: 'hogehogeprod'

        	}
        }
    });  

    // grunt.loadNpmTasks('grunt-amp-inline-css');
	grunt.task.loadTasks("tasks");

	grunt.registerTask('amp', ['ampicss']);

};
