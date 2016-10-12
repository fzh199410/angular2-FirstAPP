/**
 * Created by fuzhihong on 16/10/11.
 */
import {Component} from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
    selector:'picture',
    templateUrl:'app/view/picture.html'
})

export class PictureComponent{
    public uploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }
}
