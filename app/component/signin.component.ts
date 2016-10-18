/**
 * Created by fuzhihong on 16/10/13.
 */

import {Component,OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {User} from '../service/user'
import {UserService} from '../service/user.service'

@Component({
    selector:'signin',
    templateUrl:'app/view/signin.html'
})

export class SigninComponent implements OnInit{
    UserInfo={
        userName:'',
        password:''
    };
    users=[];
    btnDisabled:boolean=false;
    userExist:boolean=false;
    checkPwdFlag:boolean=true;
    constructor(private userService:UserService,private router:Router){}

    checkIsExist(UserInfo){
        this.userService.getUser(UserInfo)
                        .then(isExist=>{
                                if(isExist){
                                    this.userExist=true
                                }else{
                                    this.userExist=false
                                }
            })
    }
    signin(UserInfo){
        if(this.UserInfo.userName==''||this.UserInfo.password==''){return;}
            this.userService.signin(UserInfo)
                    .then(user=>{
                    this.goToLogin();
                })
    }
    checkPwd(event){
        if(event.target.value&&event.target.value!=this.UserInfo.password){
            this.checkPwdFlag=false;
        }else{
            this.checkPwdFlag=true;
        }
    }
    ngOnInit(){
        this.userService.getUsers()
                        .then(resp=>{this.users=resp})

    }
    goToLogin():void{
        this.router.navigate(['/login']);
    }
}
