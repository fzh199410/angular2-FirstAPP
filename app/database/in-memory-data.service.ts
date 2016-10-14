/**
 * Created by fuzhihong on 16/9/22.
 */

import {InMemoryDbService} from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        let Users=[
            {userName: 'fzh', password: '123456'},
            {userName: 'lyl', password: '5201314'},
        ];
        //let Pictures=[
        //    {src:'../img/portfolio/item3.jpg',describle:'England Street',stars:10,time:'2015-10-5'},
        //    {src:'../img/portfolio/item4.jpg',describle:'Park Chair',stars:20,time:'2015-10-10'},
        //    {src:'../img/portfolio/item5.jpg',describle:'Beauty Tree',stars:110,time:'2015-12-5'},
        //    {src:'../img/portfolio/item6.jpg',describle:'High Mountain',stars:120,time:'2015-10-4'}
        //];
        return {Users};
    }
}
//let wikiUrl = 'http://en.wikipedia.org/w/api.php'
