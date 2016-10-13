/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
//package.json 用来标记出本项目所需的 npm 依赖包。
//tsconfig.json 定义了 TypeScript 编译器如何从项目源文件生成 JavaScript 代码。
//typings.json 为那些 TypeScript 编译器无法识别的库提供了额外的定义文件。
//systemjs.config.js 为模块加载器提供了该到哪里查找应用模块的信息，并注册了所有必备的依赖包。 它还包括文档中后面的例子需要用到的包。
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs':                       'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'ng2-bootstrap':              'npm:ng2-bootstrap',
            'ng2-charts':                 'npm:ng2-charts',
            'ng2-file-upload':            'npm:ng2-file-upload',
            'ng2-select':                 'npm:ng2-select',
            moment: 'node_modules/moment/moment.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ng2-bootstrap':              { defaultExtension: 'js' },
            'ng2-charts':                 { defaultExtension: 'js' },
            'ng2-file-upload':            {  format: 'cjs',defaultExtension: 'js' },
            'ng2-select':                 { defaultExtension: 'js' }
        }
    });
})(this);
