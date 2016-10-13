"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by fuzhihong on 16/10/13.
 */
var core_1 = require('@angular/core');
var RedifyDirective = (function () {
    function RedifyDirective(_element, renderer) {
        this._element = _element;
        this.renderer = renderer;
        renderer.setElementStyle(_element.nativeElement, 'color', 'red');
    }
    RedifyDirective = __decorate([
        core_1.Directive({
            selector: '[redify]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], RedifyDirective);
    return RedifyDirective;
}());
exports.RedifyDirective = RedifyDirective;
//# sourceMappingURL=redify.directive.js.map