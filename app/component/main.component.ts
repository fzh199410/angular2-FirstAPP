/**
 * Created by fuzhihong on 16/9/22.
 */


import {Component} from '@angular/core';
import {Hero} from './init.component'


@Component({
    selector:'main',
    templateUrl:'app/view/main.html'
})

export class MainComponent {
    public myInterval:number=4000;
    public noWrapSlides:boolean=false;
    public slides:Array<any>=[];
    public travels:Array<any>=[

        {url:'http://sc.vaesite.net/__data/37e986c109b5b5b7f12403c9e8ba0d28.jpg',flag:'http://sc.vaesite.net/__data/b6cc66db2e4bb6a7e07417b7be3d6d39.GIF',h2:'Phuket, Thailand',h3:'December 3rd to December 10th'},
        {url:'http://sc.vaesite.net/__data/aebad223a8c6a57d5754e5289f944144.jpg',flag:'http://sc.vaesite.net/__data/bfa6f440db0bcd14f1109e8bbc9fb964.png',h2:'ST.MARTIN / ST.BARTHS / ANGUILLA',h3:'DECEMBER 27TH TO JANUARY 3RD'},
        {url:'http://sc.vaesite.net/__data/6379e7cf67b8849edc9a863f8fbf8c60.jpg',flag:'http://sc.vaesite.net/__data/1f8561362bca7f95379ada0f82546192.gif',h2:'MARTINIQUE / DOMINICA / ST LUCIA',h3:'MARCH 4TH TO MARCH 11TH'},
        {url:'http://sc.vaesite.net/__data/8ae717ff90dd85b756e606297fd7945d.jpg',flag:'http://sc.vaesite.net/__data/275891aea72759cccb253b4ae6f0c9e7.png',h2:'PRIVATE CHARTERS IN THE BRITISH VIRGIN ISLANDS',h3:'OCTOBER 29TH TO JULY 29TH'},
        {url:'http://sc.vaesite.net/__data/0a724a85315060185f535720f593a47d.jpg',flag:'http://sc.vaesite.net/__data/1f8561362bca7f95379ada0f82546192.gif',h2:'PRIVATE CHARTERS IN MARTINIQUE / DOMINICA / ST LUCIA',h3:'NOVEMBER 5TH TO JUNE 24TH'},


    ]
    public constructor(){
        var carouselImgUrls=[
            {topic:'Fighting',comment:'If you want,just do it ',url:'app/img/slider/affinity.jpeg'},
            //{topic:'Wealth',comment:'It depends on you',url:'app/img/slider/banner.jpg'},
            {topic:'Women',comment:'The more you success,the good you own',url:'app/img/slider/cinelli.jpeg'}
        ];

        for(let i=0;i<carouselImgUrls.length;i++){
            this.slides.push(
                {
                    topic:carouselImgUrls[i].topic,
                    comment:carouselImgUrls[i].comment,
                    image : carouselImgUrls[i].url
                }
            )
        }
    }
}


