webpackJsonp([3],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPageModule", function() { return PayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PayPageModule = (function () {
    function PayPageModule() {
    }
    PayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pay__["a" /* PayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pay__["a" /* PayPage */]),
            ],
        })
    ], PayPageModule);
    return PayPageModule;
}());

//# sourceMappingURL=pay.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
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


var PayPage = (function () {
    function PayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { name: "", device: "", star: "" };
        this.data = this.navParams.get("data");
        console.log(this.data);
    }
    PayPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    PayPage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(48.858363, 2.294106);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            position: latLng,
            map: this.map
        });
    };
    PayPage.prototype.goToChat = function () {
        this.navCtrl.setRoot("ChatPage", { data: this.data });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PayPage.prototype, "mapElement", void 0);
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"/Users/munchan-yong/workspace/ionic/pickle/src/pages/pay/pay.html"*/'\n\n<ion-content>\n\n\n    <div class="topDiv">\n      <div class="pic" id="p2"></div>\n      <div class="topRDiv">\n        <p class="text" id="n2"></p>\n        <p class="text dron">{{(data!=null)?data.device:""}}</p>\n        <p class="text star">{{(data!=null)?data.star:""}}</p>\n      </div>\n    </div>\n\n\n<div class="lab">introduce</div>\n<p class = "txtbox">\n  1인, 연인, 가족, 모두 예쁘게사진을 찍어드립니다.<br>\n  즐거운 방콕여행, 제가 예쁘게 찍어드린 사진으로<br>\n  행복한 기억 되세요!\n</p>\n<div class="lab">place</div>\n<p class = "txtbox">\n  프랑스 파리 에펠탑\n</p>\n<div #map id="map"></div> \n<div class="lab">이용 수칙 <span class="rspan">읽기</span></div>\n<div class="lab">환불 정책 <span class="rspan">일반</span></div>\n<p class = "txtbox">\n  체크인 전에 예약을 취소하면 청소비는 언제나 환불됩니다.<br>\n  예약 후 48시간 이내에 취소하면 연간 최대 3회까지 피클 서비스 수수료를 환불받을 수 있습니다.<br> \n  게스트가 기존 예약과 기간이 일부라도 겹치는 예약을 취소하면 에어비앤비 서비스 수수료가 환불되지 않습니다.<br>\n  아래 명시된 일부 상황에서는 숙박 요금(총 결제 금액)을 환불받을 수 있습니다.<br>\n  당사자들로부터 불만 사항이 있는 경우, 체크인 24시간 이내에 피클에 알려야 합니다.<br>\n  분쟁 발생 시 피클은 중재를 위해 개입할 수 있으며, 이 경우 피클 최종 결정을 내리게 됩니다.<br>\n</p>\n<button ion-button color="pickle" id="btn" (click)="goToChat()" >\n  결제 버튼\n</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/munchan-yong/workspace/ionic/pickle/src/pages/pay/pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ })

});
//# sourceMappingURL=3.js.map