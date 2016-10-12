/**
 * Created by fuzhihong on 16/9/22.
 */
"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var Heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        var Pictures = [
            { src: '../img/portfolio/item3.jpg', describle: 'England Street', stars: 10, time: '2015-10-5' },
            { src: '../img/portfolio/item4.jpg', describle: 'Park Chair', stars: 20, time: '2015-10-10' },
            { src: '../img/portfolio/item5.jpg', describle: 'Beauty Tree', stars: 110, time: '2015-12-5' },
            { src: '../img/portfolio/item6.jpg', describle: 'High Mountain', stars: 120, time: '2015-10-4' }
        ];
        return [{ Heroes: Heroes }, { Pictures: Pictures }];
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map