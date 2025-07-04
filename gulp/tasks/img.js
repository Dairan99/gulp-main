import newer from "gulp-newer";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";
import size from "gulp-size";
//import flatten from "gulp-flatten";
import webp from "gulp-webp";

export function img() {
  return app.gulp
    .src(`${app.path.src.images}`, { encoding: false })
    .pipe(newer(app.path.dist.images))
   
    .pipe(
      imagemin([
        gifsicle({ interlaced: true }),
        mozjpeg({ quality: 100, progressive: true }),
        optipng({ optimizationLevel: 3 }),
      ])
    )
    .pipe(size())
    //.pipe(flatten())
    .pipe(app.gulp.dest(app.path.dist.images))

    .pipe(webp())
    .pipe(app.gulp.dest(app.path.dist.images))
}
