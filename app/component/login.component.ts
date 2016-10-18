/**
 * Created by fuzhihong on 16/9/22.
 */
import {Component} from '@angular/core';


import {UserService} from '../service/user.service'
import {CookieService} from 'angular2-cookie/core';
import {HeaderComponent} from './header.component'
@Component({
    selector:'login',
    templateUrl:'app/view/login.html'
})

export class LoginComponent{
    UserInfo:{}={
        userName:'',
        password:''
    };
    InfoWrong:boolean=false;
    constructor(private userService:UserService,private cookieService:CookieService){

    }

    login(UserInfo):void{
        this.userService.login(UserInfo)
        .then(resp=>{
                if(resp===false){
                    this.InfoWrong=true
                }else{
                    this.InfoWrong=false;
                    this.cookieService.put('loginUser',UserInfo.userName);
                    this.userService.LoginUser(UserInfo.userName);

                }
            })
    }
}
