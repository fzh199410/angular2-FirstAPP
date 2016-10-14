/**
 * Created by fuzhihong on 16/10/13.
 */
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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('../service/user.service');
var SigninComponent = (function () {
    function SigninComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.UserInfo = {
            userName: '',
            password: ''
        };
        this.users = [];
        this.btnDisabled = false;
        this.userExist = false;
        this.checkPwdFlag = true;
    }
    SigninComponent.prototype.checkIsExist = function (UserInfo) {
        var _this = this;
        this.userService.getUser(UserInfo)
            .then(function (isExist) {
            if (isExist) {
                _this.userExist = true;
            }
            else {
                _this.userExist = false;
            }
        });
    };
    SigninComponent.prototype.signin = function (UserInfo) {
        var _this = this;
        if (this.UserInfo.userName == '' || this.UserInfo.password == '') {
            return;
        }
        this.userService.signin(UserInfo)
            .then(function (user) {
            _this.goToLogin();
        });
    };
    SigninComponent.prototype.checkPwd = function (event) {
        if (event.target.value && event.target.value != this.UserInfo.password) {
            this.checkPwdFlag = false;
        }
        else {
            this.checkPwdFlag = true;
        }
    };
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .then(function (resp) { _this.users = resp; });
    };
    SigninComponent.prototype.goToLogin = function () {
        this.router.navigate(['/login']);
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'signin',
            templateUrl: 'app/view/signin.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map