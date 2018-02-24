webpackJsonp([1],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationPageModule", function() { return ReservationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservation__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReservationPageModule = (function () {
    function ReservationPageModule() {
    }
    ReservationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reservation__["a" /* ReservationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reservation__["a" /* ReservationPage */]),
            ],
        })
    ], ReservationPageModule);
    return ReservationPageModule;
}());

//# sourceMappingURL=reservation.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReservationPage = (function () {
    function ReservationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.country = "";
        this.reservationDay = "";
        this.city = "";
        this.pinPoint = "";
        this.france = new google.maps.LatLng(46.616597, 2.612052);
        this.paris = new google.maps.LatLng(48.854998, 2.341908);
        this.tower = new google.maps.LatLng(48.858349, 2.294406);
        this.latLng = new google.maps.LatLng(37.506091, 127.052397);
    }
    ReservationPage.prototype.loadMap = function (latLng, zoom) {
        var mapOptions = {
            center: latLng,
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            position: latLng,
            map: this.map
        });
    };
    ReservationPage.prototype.goTopgl = function () {
        this.navCtrl.setRoot("PhothgrapherListPage");
    };
    ReservationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadMap(this.latLng, 15);
        setTimeout(function () {
            _this.reservationDay = "2018-02-28";
            setTimeout(function () {
                _this.country = "프랑스";
                _this.loadMap(_this.france, 5);
                setTimeout(function () {
                    _this.city = "파리";
                    _this.loadMap(_this.paris, 10);
                    setTimeout(function () {
                        _this.pinPoint = "에펠탑";
                        _this.loadMap(_this.tower, 15);
                        setTimeout(function () {
                            _this.time = 2;
                        }, 1000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ReservationPage.prototype, "mapElement", void 0);
    ReservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservation',template:/*ion-inline-start:"/Users/munchan-yong/workspace/ionic/pickle/src/pages/reservation/reservation.html"*/'<div id="setDiv" *ngIf="setDivVisible" (click)="goToClient()">\n  </div>\n<div id="signup-complate" *ngIf="divVisible" (click)="openSetbutton()">\n  </div>\n<ion-content overflow-scroll="false">\n\n\n  <div #map id="map"></div> \n\n <div id="container">\n 	\n \n    <ion-item id="signup-birthday" no-padding>\n      <ion-label class="label_title">\n        DATE\n      </ion-label>\n      <ion-datetime no-padding\n        placeholder="예약날짜를 입력해 주세요"\n        displayFormat="YYYY DDD, MMM DD" \n        pickerFormat="YYYY MM DD" \n        min="2018-02-25" \n        max="2019-02-25"\n        cancelText="취소"\n        doneText="완료"\n        [(ngModel)]="reservationDay"\n        name="signup-birthday">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-row>\n    	<ion-col class ="col2">\n    		<ion-label color="pickle">Location</ion-label>\n    	</ion-col >\n    	<ion-col class="col2">\n    		<ion-label color="pickle">Country</ion-label>\n    	</ion-col >\n    	<ion-col  class="col4">\n    		<ion-select interface="popover" [(ngModel)]="country" placeholder="Country">\n    			<ion-option value="프랑스">프랑스</ion-option>\n    			<ion-option value="방콕">방콕</ion-option>\n    			<ion-option value="태국">태국</ion-option>\n    			<ion-option value="방콕">방콕</ion-option>\n    			<ion-option value="태국">태국</ion-option>\n    			<ion-option value="방콕">방콕</ion-option>\n    		</ion-select>\n    	</ion-col>\n    </ion-row>\n    <ion-row>\n    	<ion-col class ="col2">\n    		<ion-label color="pickle"></ion-label>\n    	</ion-col >\n    	<ion-col class="col2">\n    		<ion-label color="pickle">City</ion-label>\n    	</ion-col >\n    	<ion-col  class="col4">\n    		<ion-select interface="popover" [(ngModel)]="city" placeholder="city">\n    			<ion-option value="파리">파리</ion-option>\n    			<ion-option value="대전">대전</ion-option>\n    			<ion-option value="대구">대구</ion-option>\n    			<ion-option value="부산">부산</ion-option>\n    		</ion-select>\n    	</ion-col>\n    </ion-row>\n        <ion-row>\n    	<ion-col class ="col2">\n    		<ion-label color="pickle"></ion-label>\n    	</ion-col >\n    	<ion-col class="col2">\n    		<ion-label color="pickle">Pin point</ion-label>\n    	</ion-col >\n    	<ion-col  class="col4">\n    		<ion-select interface="popover" [(ngModel)]="pinPoint" placeholder="pinPoint">\n    			<ion-option value="카오산 로드">카오산 로드</ion-option>\n    			<ion-option value="경리단 길">경리단 길</ion-option>\n    			<ion-option value="명동 오거리">명동 오거리</ion-option>\n    			<ion-option value="뱅뱅 사거리">뱅뱅 사거리</ion-option>\n    			<ion-option value="에펠탑">에펠탑</ion-option>\n    		</ion-select>\n    	</ion-col>\n    </ion-row>\n    <ion-row>\n	<ion-col class ="col2">\n		<ion-label color="pickle">Time</ion-label>\n	</ion-col >\n	\n	<ion-col  class="col8">\n		<ion-select interface="popover" [(ngModel)]="time" placeholder="time">\n			<ion-option value="1">1</ion-option>\n			<ion-option value="2">2</ion-option>\n			<ion-option value="3">3</ion-option>\n			<ion-option value="4">4</ion-option>\n			<ion-option value="5">5</ion-option>\n		</ion-select>\n	</ion-col>\n</ion-row>\n</div>\n    <button id="next-btn" ion-button round color="pickle" (click)="goTopgl()" >\n          Next\n    </button>\n    \n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/munchan-yong/workspace/ionic/pickle/src/pages/reservation/reservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ReservationPage);
    return ReservationPage;
}());

//# sourceMappingURL=reservation.js.map

/***/ })

});
//# sourceMappingURL=1.js.map