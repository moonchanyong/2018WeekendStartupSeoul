webpackJsonp([2],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhothgrapherListPageModule", function() { return PhothgrapherListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phothgrapher_list__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhothgrapherListPageModule = (function () {
    function PhothgrapherListPageModule() {
    }
    PhothgrapherListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__phothgrapher_list__["a" /* PhothgrapherListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__phothgrapher_list__["a" /* PhothgrapherListPage */]),
            ],
        })
    ], PhothgrapherListPageModule);
    return PhothgrapherListPageModule;
}());

//# sourceMappingURL=phothgrapher-list.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhothgrapherListPage; });
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


/**
 * Generated class for the PhothgrapherListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhothgrapherListPage = (function () {
    function PhothgrapherListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data1 = {
            name: "Linda Soaz",
            device: "Drone",
            star: "star"
        };
        this.data2 = {
            name: "John",
            device: "Drone",
            star: "star"
        };
        this.data3 = {
            name: "Mike",
            device: "Drone",
            star: "star"
        };
        this.showing = false;
    }
    PhothgrapherListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhothgrapherListPage');
    };
    PhothgrapherListPage.prototype.ch = function () {
        if (!this.showing)
            this.showing = true;
        else
            this.showing = false;
    };
    PhothgrapherListPage.prototype.goToPay = function (arg) {
        switch (arg) {
            case '1':
                this.navCtrl.setRoot("PayPage", { data: this.data1 });
                break;
            case '2':
                this.navCtrl.setRoot("PayPage", { data: this.data2 });
                break;
            case '3':
                this.navCtrl.setRoot("PayPage", { data: this.data3 });
                break;
        }
    };
    PhothgrapherListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phothgrapher-list',template:/*ion-inline-start:"/Users/munchan-yong/workspace/ionic/pickle/src/pages/phothgrapher-list/phothgrapher-list.html"*/'<!--\n  Generated template for the PhothgrapherListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n  <ion-col class="divide1">\n    \n  </ion-col>\n  <ion-col class="divide2">\n    \n  </ion-col>\n  <ion-col class="divide3">\n    \n  </ion-col>\n</ion-header>\n\n\n<ion-content >\n<div id="maax" *ngIf="showing" (click)="ch()">\n</div>\n<ion-card class="card">\n  <!-- topdiv -->\n	<div class="topDiv">\n    <div class="pic" id="p1">\n    </div>\n    <!-- top right -->\n    <div class="topRDiv">\n      <p class="text" id="n1"></p>\n      <p class="text dron">{{data1.device}}</p>\n      <p class="text star">{{data1.star}}</p>\n    </div>\n      <button class="go-btn" ion-button color="pickle" (click)="goToPay(\'1\')">\n      선택하기\n      </button>\n    \n  </div> \n<!-- bot div -->\n\n  <div class="botDiv" id="bd1">\n    <div id="pic1" (click) ="ch()">\n      \n    </div>\n    <div id="pic2">\n      \n    </div>\n  </div>\n    \n</ion-card>\n\n\n\n<ion-card class="card">\n  \n  \n    <div class="topDiv">\n      <div class="pic" id="p2"></div>\n        \n      \n      <div class="topRDiv">\n        <p class="text" id="n2"></p>\n        <p class="text dron">{{data2.device}}</p>\n        <p class="text star">{{data2.star}}</p>\n      </div>\n\n            <button class="go-btn" ion-button color="pickle" (click)="goToPay(\'2\')">\n      선택하기\n      </button>\n    </div>\n\n    <div class="botDiv" id="bd2">\n\n    </div>\n\n\n  <div class="botDiv">\n\n  </div>\n\n</ion-card>\n\n <ion-card class="card">\n  \n      <div class="topDiv">\n      \n        <div class="pic" id="p3"></div>\n      \n      <div class="topRDiv">\n        <p class="text" id="n3"></p>\n        <p class="text dron">{{data3.device}}</p>\n        <p class="text star">{{data3.star}}</p>\n        </div>\n        <button  class="go-btn" ion-button color="pickle" (click)="goToPay(\'3\')">\n          선택하기\n        </button>\n    </div>\n        <div class="botDiv" id="bd3">\n      \n    </div>\n      \n\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/munchan-yong/workspace/ionic/pickle/src/pages/phothgrapher-list/phothgrapher-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], PhothgrapherListPage);
    return PhothgrapherListPage;
    var _a, _b;
}());

//# sourceMappingURL=phothgrapher-list.js.map

/***/ })

});
//# sourceMappingURL=2.js.map