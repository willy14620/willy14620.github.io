var gulp = require('gulp')
var cleancss = require('gulp-clean-css')
var uglify = require('gulp-uglify')
var htmlmin = require('gulp-htmlmin')
var htmlclean = require('gulp-htmlclean')
var prettyData = require('gulp-pretty-data')
var dom = require('gulp-dom')

gulp.task('css', function() {
	//處理css
	return gulp
		.src('./public/**/*.css')
		.pipe(cleancss({ compatibility: 'ie8' }))
		.pipe(gulp.dest('./public'))
})
gulp.task('html', function() {
	//處理html
	return gulp
		.src('./public/**/*.html')
		.pipe(
			dom(function() {
				//這會把每個外連的連結加上rel="noopener noreferrer"(為了安全性)
				var links = Array.from(this.querySelectorAll('a'))
				links.filter(link => link.target === '_blank').forEach(link => (link.rel = 'noopener noreferrer'))
				return this
			})
		)
		.pipe(htmlclean())
		.pipe(
			htmlmin({
				removeComments: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			})
		)
		.pipe(gulp.dest('./public'))
})
gulp.task('js', function() {
	//處理javascript
	return gulp
		.src('./public/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public'))
})
gulp.task('xml-json', function() {
	//處理xml與json(選擇性，如果不要的話就把這一段移除掉並把下面'xml-json'也移除)
	return gulp
		.src('./public/**/*.(xml|json)')
		.pipe(
			prettyData({
				type: 'minify',
				preserveComments: true,
				extensions: {
					xlf: 'xml',
					svg: 'xml'
				}
			})
		)
		.pipe(gulp.dest('public'))
})
gulp.task('default', [
	//執行tasks
	'css',
	'html',
	'js',
	'xml-json'
])