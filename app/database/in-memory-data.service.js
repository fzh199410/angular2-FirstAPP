/**
 * Created by fuzhihong on 16/9/22.
 */
"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var Users = [
            { id: 'fzh', password: '123456' },
            { id: 'lyl', name: '654321' },
        ];
        //let Pictures=[
        //    {src:'../img/portfolio/item3.jpg',describle:'England Street',stars:10,time:'2015-10-5'},
        //    {src:'../img/portfolio/item4.jpg',describle:'Park Chair',stars:20,time:'2015-10-10'},
        //    {src:'../img/portfolio/item5.jpg',describle:'Beauty Tree',stars:110,time:'2015-12-5'},
        //    {src:'../img/portfolio/item6.jpg',describle:'High Mountain',stars:120,time:'2015-10-4'}
        //];
        return [{ Users: Users }];
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//let wikiUrl = 'http://en.wikipedia.org/w/api.php'
//# sourceMappingURL=in-memory-data.service.js.map