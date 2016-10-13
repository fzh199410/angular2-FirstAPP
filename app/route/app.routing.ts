/**
 * Created by fuzhihong on 16/9/22.
 */

import {ModuleWithProviders} from '@angular/core';

import {Routes,RouterModule} from '@angular/router';

import {MainComponent} from '../component/main.component'
import {PictureComponent} from '../component/picture.component'
import {AboutComponent} from '../component/about.component'
import {TommyComponent} from '../component/tommy.component'
import {SigninComponent} from '../component/signin.component'
import {LoginComponent} from '../component/login.component'

const appRoutes:Routes=[
    {
        path:'',
        redirectTo:'/main',
        pathMatch:'full'
    },
    {
        path:'main',
        component:MainComponent
    },
    {
        path:'picture',
        component:PictureComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'tommy',
        component:TommyComponent
    },
    {
        path:'signin',
        component:SigninComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
