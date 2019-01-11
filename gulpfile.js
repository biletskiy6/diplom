'use strict';

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),
	del: require('del'),
	gcmq: require('gulp-group-css-media-queries'),
	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function(taskPath){
	require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
	'clean',
	$.gulp.parallel('html', 'sass:dev', 'video', 'scripts', 'img:dev', 'svg'),
	$.gulp.parallel('watch', 'serve'),
	));

$.gulp.task('build',$.gulp.series(
	'clean',
	$.gulp.parallel('html', 'sass:build', 'video', 'scripts', 'img:build'),
	$.gulp.parallel('watch', 'serve'),
	));


$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel('sass:dev', 'html', 'scripts', 'video', 'fonts', 'svg', 'img:dev')));

$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel('sass:build', 'html', 'scripts', 'video', 'fonts', 'svg', 'img:build')));

$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel(
		'watch',
		'serve'
		)
	));