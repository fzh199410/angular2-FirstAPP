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
var router_1 = require('@angular/router');
var HeaderComponent = (function () {
    function HeaderComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.isLogin = false;
        this.loginUser = '';
        this.tabs = [
            { title: '首页', active: true, routerLink: '/main', describe: '点我进入 [首页] => 天涯何处不识君 orz' },
            { title: '图片展示', disabled: false, routerLink: '/picture', describe: '点我进入 [图片展示] => 包客官您看个够!' },
            { title: '联系', disabled: true, routerLink: '/contact', describe: '点我进入 [联系] => 想勾兑我吗?' },
            { title: '关于', routerLink: '/about', describe: '点我进入 [关于] => 了解我的前世今生~' },
            { title: 'Tommy', routerLink: '/tommy', describe: '点我进入 [Tommy] => 伟大的作者爸爸=.=' },
            { title: '注册', routerLink: '/signin', describe: '点我进入 [注册] => 来安个家吧!' },
            { title: '登录', routerLink: '/login', describe: '点我进入 [登录] => 脱鞋进来看看吧.!.' },
        ];
        this.subscription = userService.loginedUser$.subscribe(function (user) {
            _this.loginUser = user;
            _this.isLogin = true;
            router.navigate(['/main']);
        });
    }
    HeaderComponent.prototype.setActiveTab = function (index) {
        this.tabs[index].active = true;
    };
    //ngOnInit(){
    //     this.isLogin=this.cookieService.get('loginUser')?true:false;
    //    console.log(this.isLogin)
    //     this.loginUser=this.cookieService.get('loginUser')
    //} TODO
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: 'app/view/header.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map