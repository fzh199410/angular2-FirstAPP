/**
 * Created by fuzhihong on 16/9/22.
 */
import '../rxjs-extensions'
//Module
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {FileUploadModule} from 'ng2-file-upload/ng2-file-upload'
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SelectModule } from 'ng2-select/ng2-select';
//Directive
import {RedifyDirective} from '../directive/redify.directive';
import {HighlightDirective} from '../directive/highlight.directive'
//Htpp Service
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from '../database/in-memory-data.service'


//Component
import {AppComponent} from '../component/app.component'
import {MainComponent} from '../component/main.component'
import {FooterComponent} from '../component/footer.component';
import {HeaderComponent} from '../component/header.component';
import {PictureComponent} from '../component/picture.component'
import {AboutComponent} from '../component/about.component'
import {TommyComponent} from '../component/tommy.component'
import {SigninComponent} from '../component/signin.component'
import {LoginComponent} from '../component/login.component'
//route
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
        SelectModule,
        routing
    ],
    declarations:[
        AppComponent,
        MainComponent,
        FooterComponent,
        HeaderComponent,
        PictureComponent,
        AboutComponent,
        TommyComponent,
        RedifyDirective,
        HighlightDirective,
        SigninComponent,
        LoginComponent
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule {

}
