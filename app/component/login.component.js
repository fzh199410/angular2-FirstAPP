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
var core_1 = require('@angular/core');
var user_service_1 = require('../service/user.service');
var core_2 = require('angular2-cookie/core');
var LoginComponent = (function () {
    function LoginComponent(userService, cookieService) {
        this.userService = userService;
        this.cookieService = cookieService;
        this.UserInfo = {
            userName: '',
            password: ''
        };
        this.InfoWrong = false;
    }
    LoginComponent.prototype.login = function (UserInfo) {
        var _this = this;
        this.userService.login(UserInfo)
            .then(function (resp) {
            if (resp === false) {
                _this.InfoWrong = true;
            }
            else {
                _this.InfoWrong = false;
                _this.cookieService.put('loginUser', UserInfo.userName);
                _this.userService.LoginUser(UserInfo.userName);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/view/login.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, core_2.CookieService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map