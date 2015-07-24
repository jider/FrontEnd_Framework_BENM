// -----------------------------------------------------------------------------
// Default Framework Task
// -----------------------------------------------------------------------------

var gulp 	= require('gulp');
var config 	= require('../config');


gulp.task('default-fw', ['sass-fw', 'markup-fw', 'watch-fw']);