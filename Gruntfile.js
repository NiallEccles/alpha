module.exports = function(grunt){

	//Configure main project settings
	grunt.initConfig({

		//Basic settings and info about our plugins
		pkg: grunt.file.readJSON('package.json'),

		//minify css
		cssmin: {
			combine: {
				files:{
					'css/style.min.css':['css/style.css']
				}
			}

		} 

	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//grunt build
	grunt.registerTask('build', ['cssmin'])

};