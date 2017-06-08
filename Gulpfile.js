var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS     = require('gulp-clean-css'),
    concat       = require('gulp-concat'),
    imagemin     = require('gulp-imagemin'),
    plumber      = require('gulp-plumber'),
    sass         = require('gulp-sass'),
    source       = require('gulp-sourcemaps');
    uglify       = require('gulp-uglify'),




/// minificar SASS para CSS e minificar
gulp.task('css', function() {
    return gulp.src('./assets__dev/sass/*.scss')
        .pipe(plumber({
            handleError: function (error) {
                console.log(error);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(source.init()) // debugar melhor o codigo
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'ios 6', 'android 4'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(source.write('maps/')) // cria pasta de cache -- testar sem
        .pipe(gulp.dest('./assets/css'));
});

// tarefa Diminuir peso imagens
gulp.task('img', function(){
    return gulp.src('./assets__dev/img/**/*')
        .pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
        .pipe(gulp.dest('./assets/img'))
})

// tarefa unir e comprimir js
gulp.task('js', function() {
  return gulp.src([,'./assets__dev/js/**/!(main)*.js','./assets__dev/js/main.js'])
    .pipe(plumber({
      handleError: function (error) {
          console.log(error);
          this.emit('end');
      }
    }))
    .pipe(source.init())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(source.write('maps/'))
    .pipe(gulp.dest('./assets/js'));

});




gulp.task('default', function() {
    // monitorando css
    gulp.watch('./assets__dev/sass/*', ['css'])
    // monitorando imagens
    gulp.watch('./assets__dev/img/*', ['img'])
    // monitorando js
    gulp.watch('./assets__dev/js/*', ['js'])
});
