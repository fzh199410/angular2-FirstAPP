/**
 * Created by fuzhihong on 16/10/11.
 */
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
var core_1 = require('@angular/core');
var TommyComponent = (function () {
    function TommyComponent() {
        //line chart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Angualar2' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'React' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Rxjs' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            animation: true,
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        //barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            response: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 56, 55, 40], label: '前端' },
            { data: [28, 48, 65, 48, 48, 23], label: '安卓' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    TommyComponent.prototype.lineRandomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    TommyComponent.prototype.lineChartClicked = function (e) {
        console.log(e);
    };
    TommyComponent.prototype.lineChartHovered = function (e) {
        console.log(e);
    };
    TommyComponent.prototype.barChartClicked = function (e) {
        console.log(e);
    };
    TommyComponent.prototype.barChartHovered = function (e) {
        console.log(e);
    };
    TommyComponent.prototype.barRandomize = function () {
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    };
    // events
    TommyComponent.prototype.doughnutChartClicked = function (e) {
        console.log(e);
    };
    TommyComponent.prototype.doughnutChartHovered = function (e) {
        console.log(e);
    };
    // events
    TommyComponent.prototype.radarChartClicked = function (e) {
        console.log(e);
    };
    TommyComponent.prototype.radarChartHovered = function (e) {
        console.log(e);
    };
    // events
    TommyComponent.prototype.pieChartClicked = function (e) {
        console.log(e);
    };
    TommyComponent.prototype.pieChartHovered = function (e) {
        console.log(e);
    };
    // events
    TommyComponent.prototype.polarAreaChartClicked = function (e) {
        console.log(e);
    };
    TommyComponent.prototype.polarAreaChartHovered = function (e) {
        console.log(e);
    };
    TommyComponent = __decorate([
        core_1.Component({
            selector: 'tommy',
            templateUrl: 'app/view/tommy.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TommyComponent);
    return TommyComponent;
}());
exports.TommyComponent = TommyComponent;
//# sourceMappingURL=tommy.component.js.map