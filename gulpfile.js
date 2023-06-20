const gulp = require('gulp');
const babel = require('gulp-babel');
const paths = {
    dest: {
        lib: 'lib', // commonjs ⽂件存放的⽬录名 - 本块关注
        esm: 'esm', // ES module ⽂件存放的⽬录名 - 暂时不关⼼
        dist: 'dist', // umd⽂件存放的⽬录名 - 暂时不关⼼
    },
    styles: 'src/**/*.less', // 样式⽂件路径 - 暂时不关⼼
    scripts: ['src/**/*.{ts,tsx}', '!src/**/demo/*.{ts,tsx}'], // 脚本⽂件路径
};

const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const through2 = require('through2');

/**
 * 编译脚本⽂件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir ⽬标⽬录
 */
function compileScripts(babelEnv, destDir) {
    const { scripts } = paths;
    // 设置环境变量
    process.env.BABEL_ENV = babelEnv;
    return gulp
        .src(scripts)
        .pipe(babel()) // 使⽤gulp-babel处理
        .pipe(
            through2.obj(function z(file, encoding, next) {
                this.push(file.clone());
                // 找到⽬标
                if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
                    const content = file.contents.toString(encoding);
                    file.contents = Buffer.from(cssInjection(content)); // ⽂件内容处 理
                    file.path = file.path.replace(/index\.js/, 'css.js'); // ⽂件重命 名
                    this.push(file); // 新增该⽂件
                    next();
                } else {
                    next();
                }
            }),
        )
        .pipe(gulp.dest(destDir));
}

/**
 * 当前组件样式 import './index.less' => import './index.css'
 * 依赖的其他组件样式 import '../test-comp/style' => import '../test-comp/sty
le/css.js'
 * 依赖的其他组件样式 import '../test-comp/style/index.js' => import '../test
-comp/style/css.js'
 * @param {string} content
 */
function cssInjection(content) {
    return content
        .replace(/\/style\/?'/g, "/style/css'")
        .replace(/\/style\/?"/g, '/style/css"')
        .replace(/\.less/g, '.css');
}

/**
 * 编译cjs
 */
function compileCJS() {
    const { dest } = paths;
    return compileScripts('cjs', dest.lib);
}
/**
 * 编译esm
 */
function compileESM() {
    const { dest } = paths;
    return compileScripts('esm', dest.esm);
}

function copyLess() {
    return gulp.src(paths.styles).pipe(gulp.dest(paths.dest.lib)).pipe(gulp.dest(paths.dest.esm));
}

function less2css() {
    return gulp
        .src(paths.styles)
        .pipe(less()) // 处理less⽂件
        .pipe(autoprefixer()) // 根据browserslistrc增加前缀
        .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
        .pipe(gulp.dest(paths.dest.lib))
        .pipe(gulp.dest(paths.dest.esm));
}

// 串⾏执⾏编译脚本任务（cjs,esm） 避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM);
// 整体并⾏执⾏任务
const build = gulp.parallel(buildScripts, copyLess, less2css);
exports.build = build;
exports.default = build;