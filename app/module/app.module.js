"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by fuzhihong on 16/9/22.
 */
require('../rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var ng2_file_upload_1 = require('ng2-file-upload/ng2-file-upload');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('../database/in-memory-data.service');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var app_component_1 = require('../component/app.component');
var main_component_1 = require('../component/main.component');
var footer_component_1 = require('../component/footer.component');
var header_component_1 = require('../component/header.component');
var picture_component_1 = require('../component/picture.component');
var about_component_1 = require('../component/about.component');
var tommy_component_1 = require('../component/tommy.component');
var app_routing_1 = require('../route/app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular2_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                ng2_bootstrap_1.Ng2BootstrapModule,
                ng2_charts_1.ChartsModule,
                ng2_file_upload_1.FileUploadModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                picture_component_1.PictureComponent,
                about_component_1.AboutComponent,
                tommy_component_1.TommyComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map