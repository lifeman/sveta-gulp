module.exports = {
  src: {
    html: 'src/html/**/*.html',
    css: 'src/sass/main.scss',
    js: 'src/js/**/*.js',
    images: 'src/img/**/*',
  },
  static: {
    lib: {src: 'src/lib/**/*', dest: 'build/lib'},
    contactform: {src: 'src/contactform/**/*', dest: 'build/contactform'},
  },
  watch: {
    html: 'src/**/*.html',
    css: 'src/sass/**/*.scss',
    js: 'src/js/**/*.js',
    images: 'src/img/**/*',
    fonts: 'src/fonts/**/*',
  },
  build: {
    html: 'build/',
    css: 'build/css',
    js: 'build/js',
    images: 'build/img',
    fonts: 'build/fonts',
  },
  clean: 'build/',
};
