/**
 * Created by fuzhihong on 16/10/14.
 */
import { Injectable } from '@angular/core';
import {Headers,Http,Response} from '@angular/http';
import {Subject}      from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise'

import {User} from './user'

@Injectable()
export class UserService{
    private headers=new Headers({'Content-Type':'application/json'});
    private userUrl='app/Users';

    private loginedUser=new Subject<string>();

    loginedUser$=this.loginedUser.asObservable();

    LoginUser(user:string){
        console.log(user)
        this.loginedUser.next(user)
    }

    constructor(private http:Http){}

    getUsers():Promise<User[]>{
        return this.http.get(this.userUrl)
                        .toPromise()
                        .then(resp=>resp.json().data)
    }
    getUser(UserInfo):Promise<User>{
        return this.getUsers()
                   .then(resp=>resp.find(user=>user.userName===UserInfo.userName))
    }
    signin(UserInfo):Promise<User>{
        return this.http.post(this.userUrl,JSON.stringify({userName:UserInfo.userName,password:UserInfo.password}),{headers:this.headers})
                        .toPromise()
                        .then(res=>res.json().data)
    }
    login(UserInfo){
        return this.getUser(UserInfo)
            .then(user=>{if(UserInfo.password===user.password&&UserInfo.userName===user.userName){return true}else{return false}
            })
    }
}
