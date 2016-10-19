/**
 * Created by fuzhihong on 16/9/22.
 */
import {Component,ChangeDetectionStrategy,OnDestroy} from '@angular/core'
import {CookieService} from 'angular2-cookie/core';
import {UserService} from '../service/user.service';
import { Subscription }   from 'rxjs/Subscription';
import {Router} from '@angular/router';



@Component({
    selector:'my-header',
    changeDetection:ChangeDetectionStrategy.OnPush,
    templateUrl:'app/view/header.html',

})

export class HeaderComponent implements OnDestroy{
    isLogin:any=false;
    loginUser:any='';
    subscription:Subscription
    public tabs:Array<any> = [
        {title: '首页', active:true,routerLink:'/main',describe:'点我进入 [首页] => 天涯何处不识君 orz'},
        {title: '图片展示',  disabled: false,routerLink:'/picture',describe:'点我进入 [图片展示] => 包客官您看个够!'},
        {title: '联系',   disabled: true,routerLink:'/contact',describe:'点我进入 [联系] => 想勾兑我吗?'},
        {title: '关于',  routerLink:'/about',describe:'点我进入 [关于] => 了解我的前世今生~'},
        {title: 'Tommy',  routerLink:'/tommy',describe:'点我进入 [Tommy] => 伟大的作者爸爸=.='},
        {title: '注册', routerLink:'/signin',describe:'点我进入 [注册] => 来安个家吧!'},
        {title: '登录',  routerLink:'/login',describe:'点我进入 [登录] => 脱鞋进来看看吧.!.'},
    ];
    constructor(private userService:UserService,private router:Router){
        this.subscription=userService.loginedUser$.subscribe(
            user=>{
                this.loginUser=user;
                this.isLogin=true;
                router.navigate(['/main']);
            }
        )
    }
    public setActiveTab(index:number):void {
        this.tabs[index].active = true;
    }

    //constructor(private cookieService:CookieService){}

    //ngOnInit(){
    //     this.isLogin=this.cookieService.get('loginUser')?true:false;
    //    console.log(this.isLogin)
    //     this.loginUser=this.cookieService.get('loginUser')
    //} TODO
    ngOnDestroy(){
        this.subscription.unsubscribe()
    }
}
