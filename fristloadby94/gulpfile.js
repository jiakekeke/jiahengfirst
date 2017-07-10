var gulp = require('gulp');

gulp.task("copy-index",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/fristloadby94/"));
});
gulp.task("copy-images",function(){
	gulp.src("img/*.{jpg,png,gif}")
	.pipe(gulp.dest("D:/phpStudy/WWW/fristloadby94/img"));
});
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/phpStudy/WWW/fristloadby94/css"));
});
gulp.task("copy-js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:/phpStudy/WWW/fristloadby94/js"));
});
gulp.task("copy-php",function(){
	gulp.src("*.php").pipe(gulp.dest("D:/phpStudy/WWW/fristloadby94/"));
});
gulp.task("copy-images2",function(){
	gulp.src("img/2thimg/*.{jpg,png,gif}")
	.pipe(gulp.dest("D:/phpStudy/WWW/fristloadby94/img/2thimg"));
});
gulp.task("copy-images3",function(){
	gulp.src("img/3thimg/*.{jpg,png,gif}")
	.pipe(gulp.dest("D:/phpStudy/WWW/fristloadby94/img/3thimg"));
});
gulp.task("copy-images4",function(){
	gulp.src("img/4thimg/*.{jpg,png,gif}")
	.pipe(gulp.dest("D:/phpStudy/WWW/fristloadby94/img/4thimg"));
});

gulp.task("watch",function(){
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("img/*",["copy-images"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("*.php",["copy-php"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("img/2thimg/*",["copy-images2"]);
	gulp.watch("img/3thimg/*",["copy-images3"]);
	gulp.watch("img/4thimg/*",["copy-images4"]);

});



