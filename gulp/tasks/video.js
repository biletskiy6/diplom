module.exports = function(){
	$.gulp.task('video', function(){
		return $.gulp.src('src/static/video/*')
		.pipe($.gulp.dest('build/static/video/'))
		.on('end', $.bs.reload);
	});
}