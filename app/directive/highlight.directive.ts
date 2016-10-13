/**
 * Created by fuzhihong on 16/10/13.
 */
import {Directive,ElementRef,HostListener,Input,Renderer} from '@angular/core';

@Directive({
    selector:'[myHighlight]'
})

export class HighlightDirective{
    private _defaultColor='white';
    constructor(private el:ElementRef,private renderer:Renderer){

    }
    @Input() set defaultColor(colorName:string){
        this._defaultColor=colorName || this._defaultColor;
    }
    @Input('myHighlight') highlightColor:string;
    @HostListener('mouseenter') onMouseEnter(){
        this.highlight(this.highlightColor||this._defaultColor)
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.highlight('#5cb85c')
    }

    private highlight(color:string){
        this.renderer.setElementStyle(this.el.nativeElement,'backgroundColor',color);
        this.renderer.setElementStyle(this.el.nativeElement,'color','#06a');
        this.renderer.setElementStyle(this.el.nativeElement,'transition','all .5s linear');
    }

}

