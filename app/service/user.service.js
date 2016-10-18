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
 * Created by fuzhihong on 16/10/14.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/toPromise');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.userUrl = 'app/Users';
        this.loginedUser = new Subject_1.Subject();
        this.loginedUser$ = this.loginedUser.asObservable();
    }
    UserService.prototype.LoginUser = function (user) {
        console.log(user);
        this.loginedUser.next(user);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.userUrl)
            .toPromise()
            .then(function (resp) { return resp.json().data; });
    };
    UserService.prototype.getUser = function (UserInfo) {
        return this.getUsers()
            .then(function (resp) { return resp.find(function (user) { return user.userName === UserInfo.userName; }); });
    };
    UserService.prototype.signin = function (UserInfo) {
        return this.http.post(this.userUrl, JSON.stringify({ userName: UserInfo.userName, password: UserInfo.password }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; });
    };
    UserService.prototype.login = function (UserInfo) {
        return this.getUser(UserInfo)
            .then(function (user) {
            if (UserInfo.password === user.password && UserInfo.userName === user.userName) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map