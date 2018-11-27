module.exports = function(){
	$.gulp.task('scripts', function(){
		return $.gulp.src
		([
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/svg4everybody/dist/svg4everybody.min.js',
			'node_modules/picturefill/dist/picturefill.min.js',
			'node_modules/vide/dist/jquery.vide.js',
			'src/static/js/scripts.js',
			])
		.pipe($.gp.concat('scripts.min.js'))
		.pipe($.gp.uglify())
		.pipe($.gulp.dest('build/static/js/'))
		.pipe($.bs.reload({
			stream:true
		}));
	});
}