/**
 * Created by fuzhihong on 16/9/22.
 */
"use strict";
var router_1 = require('@angular/router');
var main_component_1 = require('../component/main.component');
var picture_component_1 = require('../component/picture.component');
var about_component_1 = require('../component/about.component');
var tommy_component_1 = require('../component/tommy.component');
var signin_component_1 = require('../component/signin.component');
var login_component_1 = require('../component/login.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: main_component_1.MainComponent
    },
    {
        path: 'picture',
        component: picture_component_1.PictureComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'tommy',
        component: tommy_component_1.TommyComponent
    },
    {
        path: 'signin',
        component: signin_component_1.SigninComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map