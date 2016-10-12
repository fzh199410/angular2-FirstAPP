/**
 * Created by fuzhihong on 16/9/22.
 */
import '../rxjs-extensions'

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {FileUploadModule} from 'ng2-file-upload/ng2-file-upload'

import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from '../database/in-memory-data.service'


import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import {AppComponent} from '../component/app.component'
import {MainComponent} from '../component/main.component'
import {FooterComponent} from '../component/footer.component';
import {HeaderComponent} from '../component/header.component';
import {PictureComponent} from '../component/picture.component'
import {AboutComponent} from '../component/about.component'
import {TommyComponent} from '../component/tommy.component'
import {routing} from '../route/app.routing';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        Ng2BootstrapModule,
        ChartsModule,
        FileUploadModule,
        routing
    ],
    declarations:[
        AppComponent,
        MainComponent,
        FooterComponent,
        HeaderComponent,
        PictureComponent,
        AboutComponent,
        TommyComponent
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule {

}
