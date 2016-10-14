/**
 * Created by fuzhihong on 16/10/14.
 */
import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';

import 'rxjs/add/operator/toPromise'

import {User} from './user'

@Injectable()
export class UserService{
    private headers=new Headers({'Content-Type':'application/json'});
    private userUrl='app/Users';

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
        this.getUser(UserInfo)
            .then(user=>{if(UserInfo===user){return user}
                        else{console.log('账号密码错误');return false}
            })
    }
}
