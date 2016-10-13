/**
 * Created by fuzhihong on 16/10/13.
 */
import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[redify]'
})
export class RedifyDirective {

    constructor(private _element: ElementRef, private renderer: Renderer) {
        renderer.setElementStyle(_element.nativeElement, 'color', 'red');
    }
}

