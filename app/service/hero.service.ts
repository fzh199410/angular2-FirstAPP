/**
 * Created by fuzhihong on 16/9/22.
 */

import {Injectable} from '@angular/core';

import {Headers,Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';


import {Hero} from '../component/init.component';

@Injectable()
export class HeroService {
    private Headers=new Headers({'Content-Type':'application/json'});
    private heroesUrl='app/database/Heroes';

    constructor(private http:Http){}

    getHeroes(): Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    //getHero(id:number):Promise<Hero>{
    //    return this.getHeroes().then(results=>results.find(hero=>hero.id=id))
    //}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
