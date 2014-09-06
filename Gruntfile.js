/*
 * borrowed from
 * http://sideroad.secret.jp/articles/grunt-on-jenkins/
 */
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	protractor_webdriver: {
            your_target: {
		options: {
                    path: 'node_modules/protractor/bin/',
                    command: 'webdriver-manager start'
		}
            }
	}, 
	protractor: {
            options: {
		configFile: "node_modules/protractor/referenceConf.js", // Default config file
		keepAlive: true, // If false, the grunt process stops when the test fails.
		noColor: false, // If true, protractor will not use colors in its output.
		args: {
		    // Arguments passed to the command
		}
            },
            your_target: {
		options: {
                    configFile: "test/e2e/*.spec", // Target-specific config file
                    args: {} // Target-specific arguments
		}
            }
	},
	clean: ['dist/*.js', 'test/testem.tap'],
	jshint: {
	    all: ['src/*.js'],
	    options: grunt.file.readJSON('.jshintrc')
	},
	concat: {
	    build: {
		files: {
		    'dist/<%= pkg.name %>.js': [
			'src/superb.js',
			'src/impressive.js'
		    ]
		}
	    }
	},
	uglify: {
	    options: {
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	    },
	    build: {
		src: 'dist/<%= pkg.name %>.js',
		dest: 'dist/<%= pkg.name %>.min.js'
	    }
	},
	testem: {
	    options: {
		launch_in_ci: ['PhantomJS']
	    },
	    'test/testem.tap': ['test/*.html']
	},
	"qunit-cov": {
	    test: {
		minimum: 0.9,
		srcDir: 'src',
		depDirs: ['test'],
		outDir: 'dist/cov',
		testFiles: ['test/*.html']
	    }
	},
	plato: {
	    options: {
		title: 'Awesome Project',
		jshint: grunt.file.readJSON('.jshintrc')
	    },
	    metrics: {
		files: {
		    'dist/metrics': [ 'src/*.js' ]
		}
	    }
	}
    });
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-testem');
    grunt.loadNpmTasks('grunt-qunit-cov');
    grunt.loadNpmTasks('grunt-plato');
    // Default task(s).
    grunt.registerTask('pro', [
	'protractor_webdriver',
	'protractor'
    ]);
    grunt.registerTask('default', ['jshint', 'testem', 'clean', 'qunit-cov']);
    grunt.registerTask('jenkins', ['jshint', 'testem', 'clean', 'qunit-cov', 'plato', 'concat', 'uglify']);
};
//stuff
