const gulp = require('gulp');
const paths = require('../paths');

const lib = () => {
  return gulp.src(paths.static.lib.src).pipe(gulp.dest(paths.static.lib.dest));
};

const contactform = () => {
  return gulp.src(paths.static.contactform.src).pipe(gulp.dest(paths.static.contactform.dest));
};

module.exports = gulp.parallel(lib, contactform);
