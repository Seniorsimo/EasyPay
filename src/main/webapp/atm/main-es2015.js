(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/terasud/JavaProjects/EasyPay/src/main/angular/easypay-atm/src/main.ts */"zUnb");


/***/ }),

/***/ "0HvM":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/routing.service */ "8QkR");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/big-button/big-button.component */ "nura");
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/banner/banner.component */ "biqx");






class HomeComponent {
    constructor(routingService) {
        this.routingService = routingService;
        this.buttonWidth = '400px';
        this.buttonHeight = '250px';
    }
    ngOnInit() {
        this.routingService.updateHeader('Home');
    }
    gotoPayment() {
        this.routingService.gotoPayment();
    }
    gotoMovements() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 0, consts: [["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between start"], ["fxFlex", "", 1, "widget-container", "shadow-border"], ["label", "Pagamento", "icon", "euro", 1, "button", 3, "clickEmitter"], ["label", "Info Conto", "icon", "info", 1, "button", 3, "clickEmitter"], ["label", "Ricarica", "icon", "publish", 1, "button", 3, "clickEmitter"], ["label", "Movimenti", "icon", "account_balance_wallet", 1, "button", 3, "clickEmitter"], ["fxLayout", "", 1, "footer"], [1, "widget-container", "shadow-border", "spam-widget"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-big-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function HomeComponent_Template_app_big_button_clickEmitter_2_listener() { return ctx.gotoPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-big-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function HomeComponent_Template_app_big_button_clickEmitter_4_listener() { return ctx.gotoPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-big-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function HomeComponent_Template_app_big_button_clickEmitter_7_listener() { return ctx.gotoPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-big-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function HomeComponent_Template_app_big_button_clickEmitter_9_listener() { return ctx.gotoMovements(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _shared_components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_3__["BigButtonComponent"], _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"]], styles: [".button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.widget-container[_ngcontent-%COMP%] {\n  min-height: 10vw;\n  margin: 1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi53aWRnZXQtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTB2dztcbiAgbWFyZ2luOiAxdnc7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"] }]; }, null); })();


/***/ }),

/***/ "2m+P":
/*!*****************************************************!*\
  !*** ./src/app/shared/constants/login-type.enum.ts ***!
  \*****************************************************/
/*! exports provided: LoginType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginType", function() { return LoginType; });
var LoginType;
(function (LoginType) {
    LoginType["pin"] = "PIN";
    LoginType["qr"] = "QR";
    LoginType["nfc"] = "NFC";
})(LoginType || (LoginType = {}));


/***/ }),

/***/ "2wdx":
/*!********************************************!*\
  !*** ./src/app/core/models/error.model.ts ***!
  \********************************************/
/*! exports provided: WrongParamError, CUSTOM_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongParamError", function() { return WrongParamError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_ERROR", function() { return CUSTOM_ERROR; });
class WrongParamError {
    constructor(param) {
        this.type = CUSTOM_ERROR;
        this.name = '';
        this.message = '';
        this.name = 'Errore nei parametri';
        this.message = JSON.stringify(param);
    }
}
const CUSTOM_ERROR = 'CUSTOM_ERROR';


/***/ }),

/***/ "3G0t":
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocalStorageService {
    constructor() { }
    getItem(name) {
        const item = localStorage.getItem(name);
        return JSON.parse(!item || item === 'undefined' ? null : item);
    }
    setItem(name, value) {
        if (value === undefined) {
            localStorage.removeItem(name);
        }
        else {
            localStorage.setItem(name, JSON.stringify(value));
        }
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3GQA":
/*!******************************************!*\
  !*** ./src/app/shared/pipes/min.pipe.ts ***!
  \******************************************/
/*! exports provided: MinPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinPipe", function() { return MinPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * restituisce il minimo tra i due valori passati
 */
class MinPipe {
    transform(values, ...args) {
        if (!Array.isArray(values)) {
            console.error('MinPipe richiede la presenza di un array di numeri per funzionare');
            console.error(values);
            return -1;
        }
        if (values.some(n => !(typeof n === 'number'))) {
            console.error('MinPipe richiede che l\'array contenga valori numerici');
            console.error(values);
            return -1;
        }
        return Math.min(...values);
    }
}
MinPipe.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); };
MinPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "min", type: MinPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'min'
            }]
    }], null, null); })();


/***/ }),

/***/ "46ix":
/*!**********************************************!*\
  !*** ./src/app/core/models/cliente.model.ts ***!
  \**********************************************/
/*! exports provided: CLIENTE_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENTE_TYPE", function() { return CLIENTE_TYPE; });
const CLIENTE_TYPE = 'CLIENTE_TYPE';


/***/ }),

/***/ "4OZk":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/join/parts/abstract-join-part/abstract-join-part.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AbstractJoinPartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractJoinPartComponent", function() { return AbstractJoinPartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class AbstractJoinPartComponent {
    constructor() { }
    ngOnInit() {
    }
    validate() {
        if (this.formCrl.valid) {
            return true;
        }
        else {
            this.validateAllFormFields(this.formCrl);
            return false;
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                this.validateAllFormFields(control);
            }
        });
    }
}
AbstractJoinPartComponent.ɵfac = function AbstractJoinPartComponent_Factory(t) { return new (t || AbstractJoinPartComponent)(); };
AbstractJoinPartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbstractJoinPartComponent, selectors: [["app-abstract-join-part"]], decls: 2, vars: 0, template: function AbstractJoinPartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "abstract-join-part works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pvaW4vcGFydHMvYWJzdHJhY3Qtam9pbi1wYXJ0L2Fic3RyYWN0LWpvaW4tcGFydC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractJoinPartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-abstract-join-part',
                templateUrl: './abstract-join-part.component.html',
                styleUrls: ['./abstract-join-part.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "668k":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 0, consts: [["src", "assets/loader.gif", "alt", "loader"], ["svgIcon", "bank", 1, "logo"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 1);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  position: absolute;\n  top: 195px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.logo[_ngcontent-%COMP%]     svg {\n  width: 90px;\n  height: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFdBRGdCO0VBRWhCLFlBRmdCO0VBU2hCLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQU5GO0FBRkU7RUFDRSxXQUxjO0VBTWQsWUFOYztBQVVsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICRuZmMtaWNvbi1zaXplOiA5MHB4O1xuICB3aWR0aDogJG5mYy1pY29uLXNpemU7XG4gIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG5cbiAgJiA6Om5nLWRlZXAgc3ZnIHtcbiAgICB3aWR0aDogJG5mYy1pY29uLXNpemU7XG4gICAgaGVpZ2h0OiAkbmZjLWljb24tc2l6ZTtcbiAgfVxuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOTVweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6aIu":
/*!*********************************************!*\
  !*** ./src/app/core/models/api.response.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "7+8V":
/*!***************************************************************!*\
  !*** ./src/app/features/login-page/services/login.service.ts ***!
  \***************************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core */ "ey9i");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _store_auth_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/auth.store */ "KlhY");







class LoginService {
    constructor(http, authStore) {
        this.http = http;
        this.authStore = authStore;
    }
    getToken(username, password) {
        const params = { username, password };
        return this.http.post(_core__WEBPACK_IMPORTED_MODULE_1__["ApiRoute"].login, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            if (response && response.token) {
                this.authStore.token = response.token;
                return response.token;
            }
            return '';
        }));
    }
    /** */
    logout() {
        return this.http.post(_core__WEBPACK_IMPORTED_MODULE_1__["ApiRoute"].logout, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            if (response) {
                this.authStore.token = undefined;
            }
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            console.error(error);
            this.authStore.token = undefined;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_store_auth_store__WEBPACK_IMPORTED_MODULE_5__["AuthStore"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _store_auth_store__WEBPACK_IMPORTED_MODULE_5__["AuthStore"] }]; }, null); })();


/***/ }),

/***/ "8QkR":
/*!**************************************************!*\
  !*** ./src/app/core/services/routing.service.ts ***!
  \**************************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/routing.constants */ "Ankt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class RoutingService {
    constructor(router) {
        this.router = router;
        this.activeSection = '';
        this.activeSection$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /** gestisce l'header nel TemplateComponent */
    updateHeader(text) {
        this.activeSection = text;
        this.activeSection$.next(text);
    }
    gotoHome() {
        this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__["RoutersPath"].home]);
    }
    gotoLogin() {
        this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__["RoutersPath"].login]);
    }
    gotoReload() {
        this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__["RoutersPath"].reload]);
    }
    gotoPayment() {
        this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__["RoutersPath"].payment]);
    }
    gotoMovement() {
        this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__["RoutersPath"].movement]);
    }
}
RoutingService.ɵfac = function RoutingService_Factory(t) { return new (t || RoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoutingService, factory: RoutingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Ankt":
/*!*****************************************************!*\
  !*** ./src/app/core/constants/routing.constants.ts ***!
  \*****************************************************/
/*! exports provided: RoutersPath, baseUrl, ApiRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutersPath", function() { return RoutersPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRoute", function() { return ApiRoute; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");

const RoutersPath = {
    base: '',
    home: 'home',
    login: 'login',
    payment: 'payments',
    movement: 'movements',
    reload: 'reload'
};
const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
const ApiRoute = {
    login: baseUrl + 'api/login',
    logout: baseUrl + 'api/logout',
    clienti: baseUrl + 'api/clienti',
};


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:8082/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DWOX":
/*!************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/login-page/services/login.service */ "7+8V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function LoginComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " il pin \u00E8 composto da 4-16 cifre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "numeriche");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pin obbligatorio per il login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, loginService, router) {
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.joinRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formCrl = this.fb.group({
            username: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)
            ])
        });
    }
    ngOnInit() { }
    login() {
        this.loginService
            .getToken(this.formCrl.value.username, this.formCrl.value.password)
            .subscribe(token => this.router.navigate([src_app_core__WEBPACK_IMPORTED_MODULE_2__["RoutersPath"].home], {}));
    }
    join() {
        this.joinRequest.next();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], outputs: { joinRequest: "joinRequest" }, decls: 17, vars: 5, consts: [[1, "form", 3, "formGroup"], [1, "full-width"], ["matInput", "", "placeholder", "username*", "formControlName", "username"], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Password*", "formControlName", "password"], [1, "login"], ["mat-button", "", "color", "primary", 3, "disabled", "click"], [1, "join"], ["mat-button", "", "color", "primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_mat_error_5_Template, 4, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_mat_error_9_Template, 4, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_mat_error_10_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { return ctx.join(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Crea un nuovo account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["username"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["password"].hasError("minLength") || ctx.formCrl.controls["password"].hasError("maxLength") || ctx.formCrl.controls["password"].hasError("numeric"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["password"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formCrl.status === "INVALID");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".form[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.login[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.join[_ngcontent-%COMP%]    .mat-button-wrapper {\n  font-size: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbi5sb2dpbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5qb2luIDo6bmctZGVlcC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { joinRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "KHpa":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/join/parts/join-part3/join-part3.component.ts ***!
  \*********************************************************************************/
/*! exports provided: JoinPart3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPart3Component", function() { return JoinPart3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function JoinPart3Component_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "in attesa della risposta del server...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart3Component_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registrazione completata con successo!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart3Component_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registrazione fallita!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["waiting"] = "waiting";
    StatusEnum["success"] = "success";
    StatusEnum["failed"] = "failed";
})(StatusEnum || (StatusEnum = {}));
class JoinPart3Component {
    constructor(http) {
        this.http = http;
        this.StatusEnum = StatusEnum;
        this.status = StatusEnum.waiting;
    }
    ngOnInit() {
        this.http.post(src_app_core__WEBPACK_IMPORTED_MODULE_1__["ApiRoute"].clienti, this.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => this.status = StatusEnum.success), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => this.status = StatusEnum.failed))
            .subscribe();
    }
}
JoinPart3Component.ɵfac = function JoinPart3Component_Factory(t) { return new (t || JoinPart3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
JoinPart3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinPart3Component, selectors: [["app-join-part3"]], inputs: { data: "data" }, decls: 3, vars: 3, consts: [[4, "ngIf"]], template: function JoinPart3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JoinPart3Component_p_0_Template, 2, 0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JoinPart3Component_p_1_Template, 2, 0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JoinPart3Component_p_2_Template, 2, 0, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status === ctx.StatusEnum.waiting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status === ctx.StatusEnum.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status === ctx.StatusEnum.failed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pvaW4vcGFydHMvam9pbi1wYXJ0My9qb2luLXBhcnQzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinPart3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-part3',
                templateUrl: './join-part3.component.html',
                styleUrls: ['./join-part3.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "KlhY":
/*!*********************************************************!*\
  !*** ./src/app/features/login-page/store/auth.store.ts ***!
  \*********************************************************/
/*! exports provided: AuthStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStore", function() { return AuthStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core */ "ey9i");



class AuthStore {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
    }
    get token() {
        if (!this.pToken) {
            this.pToken = this.localStorageService.getItem('token');
        }
        return this.pToken;
    }
    set token(token) {
        this.pToken = token;
        this.localStorageService.setItem('token', token);
    }
}
AuthStore.ɵfac = function AuthStore_Factory(t) { return new (t || AuthStore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"])); };
AuthStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthStore, factory: AuthStore.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_core__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "M0ag":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, LoginType, QrCodeComponent, NfcComponent, PinComponent, LoginComponent, BigButtonComponent, InfoWidgetComponent, MinPipe, SwitchNumberPipe, numericValidator, NumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "PCNd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/login-type.enum */ "2m+P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginType", function() { return _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__["LoginType"]; });

/* harmony import */ var _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/qr-code/qr-code.component */ "zoHW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QrCodeComponent", function() { return _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_2__["QrCodeComponent"]; });

/* harmony import */ var _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nfc/nfc.component */ "OadK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NfcComponent", function() { return _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_3__["NfcComponent"]; });

/* harmony import */ var _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pin/pin.component */ "jALo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinComponent", function() { return _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_4__["PinComponent"]; });

/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "DWOX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]; });

/* harmony import */ var _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/big-button/big-button.component */ "nura");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BigButtonComponent", function() { return _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_6__["BigButtonComponent"]; });

/* harmony import */ var _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/info-widget/info-widget.component */ "pO2f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWidgetComponent", function() { return _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_7__["InfoWidgetComponent"]; });

/* harmony import */ var _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/min.pipe */ "3GQA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinPipe", function() { return _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_8__["MinPipe"]; });

/* harmony import */ var _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/switch-number.pipe */ "nlx4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchNumberPipe", function() { return _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_9__["SwitchNumberPipe"]; });

/* harmony import */ var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/numeric.directive */ "Y82v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numericValidator", function() { return _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_10__["numericValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericDirective", function() { return _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_10__["NumericDirective"]; });














/***/ }),

/***/ "M0dw":
/*!*********************************************************!*\
  !*** ./src/app/features/template/template.component.ts ***!
  \*********************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/routing.service */ "8QkR");
/* harmony import */ var _login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-page/store/auth.store */ "KlhY");
/* harmony import */ var _login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-page/services/login.service */ "7+8V");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











function TemplateComponent_ng_container_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_ng_container_7_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return item_r2.clickEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.label);
} }
function TemplateComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TemplateComponent_ng_container_7_button_1_Template, 5, 2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.isVisible());
} }
class TemplateComponent {
    constructor(routingService, authStore, loginService) {
        this.routingService = routingService;
        this.authStore = authStore;
        this.loginService = loginService;
        this.menuItems = [
            {
                label: 'Home',
                icon: 'more_vert',
                clickEvent: () => this.routingService.gotoHome(),
                isVisible: () => this.isLogin(),
            },
            {
                label: 'Ricarica',
                icon: 'publish',
                clickEvent: () => this.routingService.gotoReload(),
                isVisible: () => this.isLogin(),
            },
            {
                label: 'Pagamento',
                icon: 'euro',
                clickEvent: () => this.routingService.gotoPayment(),
                isVisible: () => this.isLogin(),
            },
            {
                label: 'Movimenti',
                icon: 'account_balance_wallet',
                clickEvent: () => this.routingService.gotoMovement(),
                isVisible: () => this.isLogin(),
            },
            {
                label: 'Logout',
                icon: 'lock',
                clickEvent: () => this.logout(),
                isVisible: () => this.isLogin(),
            },
        ];
        this.actSection = this.routingService.activeSection;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.routingService.activeSection$.subscribe(activeSection => setTimeout(() => (this.actSection = activeSection), 0)));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    isLogin() {
        return !!this.authStore.token;
    }
    logout() {
        this.loginService.logout().subscribe(() => {
            this.routingService.gotoLogin();
        });
    }
    menuDisabled() {
        return !this.menuItems.some((item) => item.isVisible());
    }
}
TemplateComponent.ɵfac = function TemplateComponent_Factory(t) { return new (t || TemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
TemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateComponent, selectors: [["app-template"]], decls: 16, vars: 4, consts: [["color", "primary"], ["mat-icon-button", "", "aria-label", "", 3, "matMenuTriggerFor", "disabled"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], [1, "title-big"], [1, "title-separe"], [1, "title-activePage"], [1, "container"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"]], template: function TemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TemplateComponent_ng_container_7_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "EasyPay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " --> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0)("disabled", ctx.menuDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actSection, " ");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-right: 6%;\n  margin-left: 6%;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  padding: 0 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxnQkFBQTtFQUNBLGdCQUplO0VBS2YsZUFMZTtBQUdqQjs7QUFLQTtFQUNFLGFBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICRtYXJnaW5Cb3JkZXI6IDYlO1xuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luQm9yZGVyO1xuICBtYXJnaW4tbGVmdDogJG1hcmdpbkJvcmRlcjtcbn1cblxubWF0LXRvb2xiYXIge1xuICBwYWRkaW5nOiAwICRtYXJnaW5Cb3JkZXIgLSAyJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-template',
                templateUrl: './template.component.html',
                styleUrls: ['./template.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"] }, { type: _login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStore"] }, { type: _login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "NCos":
/*!**************************************************!*\
  !*** ./src/app/core/constants/user-type.enum.ts ***!
  \**************************************************/
/*! exports provided: UserType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/** Tipologia di utente che può essere */
var UserType;
(function (UserType) {
    UserType["customer"] = "cliente";
    UserType["merchant"] = "commerciante";
})(UserType || (UserType = {}));


/***/ }),

/***/ "NdZx":
/*!****************************************************!*\
  !*** ./src/app/core/services/pagamento.service.ts ***!
  \****************************************************/
/*! exports provided: PrezzoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrezzoService", function() { return PrezzoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/error.model */ "2wdx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_core_services_commerciante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/commerciante.service */ "k5B4");
/* harmony import */ var src_app_core_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/cliente.service */ "Q67P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class PrezzoService {
    constructor(http, commercianteService, clienteService, router) {
        this.http = http;
        this.commercianteService = commercianteService;
        this.clienteService = clienteService;
        this.router = router;
        this.prezzo$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
    }
    /** Salva il valore del trasferimento da effettuare */
    setPrezzo(value) {
        const convPrezzo = Number.parseFloat(value);
        if (!isNaN(convPrezzo)) {
            this.prezzo$.next(Number.parseFloat(value));
        }
        else {
            throw { type: _models_error_model__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ERROR"], name: 'errore sul prezzo', message: 'deve essere un valore numerico' };
        }
    }
    /** gestisce un pagamento una volta che gli store sono stati tutti inizializzati correttamente */
    handlePagamento() {
        this.pagamento(this.commercianteService.contoCommerciante$.value.idConto, this.clienteService.cliente$.value.id, this.prezzo$.value).subscribe(result => {
            const response = { timestamp: new Date().getTime() };
            if (result.success) {
                if (window.opener) {
                    window.opener.postMessage(JSON.stringify(Object.assign({ success: true }, response)), '*');
                    setInterval(() => window.close(), 1000);
                }
                else {
                    console.error('Impossibile chiudere pagina');
                }
            }
            else {
                const titleLabel = 'Impossibile procedere con il pagamento';
                const message = 'Ricaricare il conto';
                const error = { type: _models_error_model__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ERROR"], name: result.error.id, message: result.error.message };
                window.opener.postMessage(JSON.stringify(Object.assign({ success: false, erroCode: result.error.id, errorMessage: result.error.message }, response)), '*');
                setInterval(() => window.close(), 1000);
                this.router.navigateByUrl(`/error?titleLabel=${titleLabel}&content=${message}&error=${JSON.stringify(error)}`);
            }
        });
    }
    /** effettua il pagamento e da un esito dell' operazione  */
    pagamento(idCommerciante, idCliente, prezzo) {
        const params = {
            idCommerciante,
            idCliente,
            prezzo,
        };
        return this.http.post('/api/pagamenti', params);
    }
}
PrezzoService.ɵfac = function PrezzoService_Factory(t) { return new (t || PrezzoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_commerciante_service__WEBPACK_IMPORTED_MODULE_4__["CommercianteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
PrezzoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrezzoService, factory: PrezzoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrezzoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: src_app_core_services_commerciante_service__WEBPACK_IMPORTED_MODULE_4__["CommercianteService"] }, { type: src_app_core_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "OadK":
/*!********************************************************!*\
  !*** ./src/app/shared/components/nfc/nfc.component.ts ***!
  \********************************************************/
/*! exports provided: NfcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfcComponent", function() { return NfcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



class NfcComponent {
    constructor() { }
    ngOnInit() {
    }
}
NfcComponent.ɵfac = function NfcComponent_Factory(t) { return new (t || NfcComponent)(); };
NfcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NfcComponent, selectors: [["app-nfc"]], decls: 3, vars: 0, consts: [["svgIcon", "nfc-variant", 1, "nfc-icon"], [1, "nfc-message"]], template: function NfcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "passare il cellulare con nfc abilitato sul dispositivo per collegarsi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".nfc-message[_ngcontent-%COMP%], .nfc-icon[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n.nfc-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.nfc-icon[_ngcontent-%COMP%]     svg {\n  width: 60px;\n  height: 60px;\n}\n\n.nfc-message[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmZjL25mYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUdFLFdBRGdCO0VBRWhCLFlBRmdCO0FBQ2xCOztBQUdFO0VBQ0UsV0FMYztFQU1kLFlBTmM7QUFLbEI7O0FBS0E7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7QUFIRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25mYy9uZmMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlY29sb3Ige1xuICBjb2xvcjogZ29sZDtcbn1cblxuLm5mYy1pY29uIHtcbiAgQGV4dGVuZCAlY29sb3I7XG4gICRuZmMtaWNvbi1zaXplOiA2MHB4O1xuICB3aWR0aDogJG5mYy1pY29uLXNpemU7XG4gIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG5cbiAgJiA6Om5nLWRlZXAgc3ZnIHtcbiAgICB3aWR0aDogJG5mYy1pY29uLXNpemU7XG4gICAgaGVpZ2h0OiAkbmZjLWljb24tc2l6ZTtcbiAgfVxufVxuXG4ubmZjLW1lc3NhZ2Uge1xuICBAZXh0ZW5kICVjb2xvcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NfcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nfc',
                templateUrl: './nfc.component.html',
                styleUrls: ['./nfc.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @zxing/ngx-scanner */ "IyRd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/core.module */ "pKmL");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/banner/banner.component */ "biqx");
/* harmony import */ var _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/big-button/big-button.component */ "nura");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "qw1q");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/error/error.component */ "UyyX");
/* harmony import */ var _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/info-widget/info-widget.component */ "pO2f");
/* harmony import */ var _components_join_join_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/join/join.component */ "je3W");
/* harmony import */ var _components_join_parts_join_dashboard_join_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/join/parts/join-dashboard/join-dashboard.component */ "nPwR");
/* harmony import */ var _components_join_parts_join_part0_join_part0_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/join/parts/join-part0/join-part0.component */ "k0/I");
/* harmony import */ var _components_join_parts_join_part1_join_part1_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/join/parts/join-part1/join-part1.component */ "fVb/");
/* harmony import */ var _components_join_parts_join_part2_join_part2_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/join/parts/join-part2/join-part2.component */ "pbeO");
/* harmony import */ var _components_join_parts_join_part3_join_part3_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/join/parts/join-part3/join-part3.component */ "KHpa");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/loader/loader.component */ "668k");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login/login.component */ "DWOX");
/* harmony import */ var _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/nfc/nfc.component */ "OadK");
/* harmony import */ var _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pin/pin.component */ "jALo");
/* harmony import */ var _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/qr-code/qr-code.component */ "zoHW");
/* harmony import */ var _components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/recognition/recognition.component */ "ls85");
/* harmony import */ var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./directives/numeric.directive */ "Y82v");
/* harmony import */ var _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/min.pipe */ "3GQA");
/* harmony import */ var _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/switch-number.pipe */ "nlx4");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



































class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_11__["ZXingScannerModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
        ], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_28__["QrCodeComponent"],
        _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_26__["NfcComponent"],
        _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_27__["PinComponent"],
        _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_30__["NumericDirective"],
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__["LoaderComponent"],
        _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_15__["ErrorPageComponent"],
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_16__["ErrorComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
        _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_14__["BigButtonComponent"],
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__["BannerComponent"],
        _components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_29__["RecognitionComponent"],
        _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_31__["MinPipe"],
        _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_32__["SwitchNumberPipe"],
        _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_17__["InfoWidgetComponent"],
        _components_join_join_component__WEBPACK_IMPORTED_MODULE_18__["JoinComponent"],
        _components_join_parts_join_part0_join_part0_component__WEBPACK_IMPORTED_MODULE_20__["JoinPart0Component"],
        _components_join_parts_join_part1_join_part1_component__WEBPACK_IMPORTED_MODULE_21__["JoinPart1Component"],
        _components_join_parts_join_part2_join_part2_component__WEBPACK_IMPORTED_MODULE_22__["JoinPart2Component"],
        _components_join_parts_join_dashboard_join_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["JoinDashboardComponent"],
        _components_join_parts_join_part3_join_part3_component__WEBPACK_IMPORTED_MODULE_23__["JoinPart3Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_11__["ZXingScannerModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"]], exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__["LoaderComponent"],
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_16__["ErrorComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
        _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_14__["BigButtonComponent"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__["BannerComponent"],
        _components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_29__["RecognitionComponent"],
        _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_31__["MinPipe"],
        _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_32__["SwitchNumberPipe"],
        _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_17__["InfoWidgetComponent"],
        _components_join_join_component__WEBPACK_IMPORTED_MODULE_18__["JoinComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_28__["QrCodeComponent"],
                    _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_26__["NfcComponent"],
                    _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_27__["PinComponent"],
                    _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_30__["NumericDirective"],
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__["LoaderComponent"],
                    _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_15__["ErrorPageComponent"],
                    _components_error_error_component__WEBPACK_IMPORTED_MODULE_16__["ErrorComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                    _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_14__["BigButtonComponent"],
                    _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__["BannerComponent"],
                    _components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_29__["RecognitionComponent"],
                    _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_31__["MinPipe"],
                    _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_32__["SwitchNumberPipe"],
                    _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_17__["InfoWidgetComponent"],
                    _components_join_join_component__WEBPACK_IMPORTED_MODULE_18__["JoinComponent"],
                    _components_join_parts_join_part0_join_part0_component__WEBPACK_IMPORTED_MODULE_20__["JoinPart0Component"],
                    _components_join_parts_join_part1_join_part1_component__WEBPACK_IMPORTED_MODULE_21__["JoinPart1Component"],
                    _components_join_parts_join_part2_join_part2_component__WEBPACK_IMPORTED_MODULE_22__["JoinPart2Component"],
                    _components_join_parts_join_dashboard_join_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["JoinDashboardComponent"],
                    _components_join_parts_join_part3_join_part3_component__WEBPACK_IMPORTED_MODULE_23__["JoinPart3Component"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_11__["ZXingScannerModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                ],
                exports: [
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__["LoaderComponent"],
                    _components_error_error_component__WEBPACK_IMPORTED_MODULE_16__["ErrorComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                    _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_14__["BigButtonComponent"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__["BannerComponent"],
                    _components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_29__["RecognitionComponent"],
                    _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_31__["MinPipe"],
                    _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_32__["SwitchNumberPipe"],
                    _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_17__["InfoWidgetComponent"],
                    _components_join_join_component__WEBPACK_IMPORTED_MODULE_18__["JoinComponent"],
                ],
                entryComponents: [_components_join_parts_join_part0_join_part0_component__WEBPACK_IMPORTED_MODULE_20__["JoinPart0Component"], _components_join_parts_join_part1_join_part1_component__WEBPACK_IMPORTED_MODULE_21__["JoinPart1Component"], _components_join_parts_join_part2_join_part2_component__WEBPACK_IMPORTED_MODULE_22__["JoinPart2Component"], _components_join_parts_join_part3_join_part3_component__WEBPACK_IMPORTED_MODULE_23__["JoinPart3Component"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Q67P":
/*!**************************************************!*\
  !*** ./src/app/core/services/cliente.service.ts ***!
  \**************************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/error.model */ "2wdx");
/* harmony import */ var _models_cliente_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/cliente.model */ "46ix");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class ClienteService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.cliente$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            type: _models_cliente_model__WEBPACK_IMPORTED_MODULE_4__["CLIENTE_TYPE"],
            id: '',
            pin: '',
            token: '',
            nome: '',
            budget: 0,
        });
    }
    getClienteByPin(id, pin) {
        // se già presente nello store non riscarica i dati del cliente:
        if (this.cliente$.value.id) {
            return this.cliente$;
        }
        if (!id || !pin) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _models_error_model__WEBPACK_IMPORTED_MODULE_3__["WrongParamError"]({ id, pin }));
        }
        const params = { id, pin };
        return this._getClient(params);
    }
    getClienteByToken(token) {
        // se già presente nello store non riscarica i dati del cliente:
        if (this.cliente$.value.id) {
            return this.cliente$;
        }
        if (!token) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _models_error_model__WEBPACK_IMPORTED_MODULE_3__["WrongParamError"](token));
        }
        const params = { token };
        return this._getClient(params);
    }
    /** effettua la richiesta HTTP per verificare se il login del cliente va a buon fine */
    _getClient(params) {
        const formData = new FormData();
        formData.append('id', params.id);
        formData.append('pin', params.pin);
        formData.append('token', params.token);
        return this.httpClient
            .post('/api/clienti', formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => {
            if (result && result.success) {
                const cliente = Object.assign({ type: _models_cliente_model__WEBPACK_IMPORTED_MODULE_4__["CLIENTE_TYPE"] }, result.body);
                this.cliente$.next(cliente);
                return cliente;
            }
            else {
                throw { type: _models_error_model__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ERROR"], name: 'account not found', message: `non è stato possibile trovare l'account` };
            }
        }));
    }
}
ClienteService.ɵfac = function ClienteService_Factory(t) { return new (t || ClienteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ClienteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClienteService, factory: ClienteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClienteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "QgJG":
/*!*********************************************************!*\
  !*** ./src/app/features/payments/payments.component.ts ***!
  \*********************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/routing.service */ "8QkR");
/* harmony import */ var _shared_components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/recognition/recognition.component */ "ls85");
/* harmony import */ var _shared_components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/info-widget/info-widget.component */ "pO2f");
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/banner/banner.component */ "biqx");






class PaymentsComponent {
    constructor(routingService) {
        this.routingService = routingService;
        this.maxCol = 2;
        this.minCol = 1;
        this.deviceSize = 1180;
    }
    ngOnInit() {
        this.breakpoint = (window.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
    }
    ngAfterViewInit() {
        this.routingService.updateHeader('Pagamento');
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
    }
}
PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) { return new (t || PaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"])); };
PaymentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentsComponent, selectors: [["app-payments"]], decls: 11, vars: 0, consts: [[1, "flex-parent"], [1, "flex", "widget-container", "shadow-border", "mb20", "mr10"], [1, "relative", "recognition"], [1, "flex", "widget-container", "shadow-border", "mb20", "ml10"], ["title", "Personale", "numConto", "xxxxxxxxxx", "name", "Franco Rossi", "regSocial", "Gelateria Buongusto", "address", " via colombo, 45, Torino", 1, "info-table"], [1, "widget-container", "shadow-border", "flex", "mb20"], [1, "widget-container", "shadow-border", "spam-widget"]], template: function PaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-recognition", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-info-widget", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " TODO: PAGAMENTO INFO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_2__["RecognitionComponent"], _shared_components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_3__["InfoWidgetComponent"], _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"]], styles: [".flex-parent[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: stretch;\n}\n\n.flex[_ngcontent-%COMP%] {\n  position: relative;\n  flex-grow: 1;\n}\n\n.mb20[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.ml10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mr10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n\n\n@media all and (max-width: 600px) {\n  .ml10[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n\n  .mr10[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUEsa0JBQUE7O0FBQ0E7RUFDRTtJQUNFLGdCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxpQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LXBhcmVudCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLmZsZXgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLm1iMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4XG59XG5cbi5tbDEwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tcjEwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4vKiBTbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWwxMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuXG4gIC5tcjEwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payments',
                templateUrl: './payments.component.html',
                styleUrls: ['./payments.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "ey9i");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.statusLoader$ = this.loaderService.status$;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _core__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "UyyX":
/*!************************************************************!*\
  !*** ./src/app/shared/components/error/error.component.ts ***!
  \************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], inputs: { titleLabel: "titleLabel", content: "content", error: "error" }, decls: 9, vars: 5, consts: [[1, "mb-0"], ["svgIcon", "alert-circle", 1, "logo"], [1, "logo-title", "mt-0"], [3, "innerHTML"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.error));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  color: #f00;\n}\n.logo[_ngcontent-%COMP%]     svg {\n  width: 90px;\n  height: 90px;\n}\n.logo-title[_ngcontent-%COMP%] {\n  color: #f00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSxXQURnQjtFQUVoQixZQUZnQjtFQUdoQixXQUxNO0FBSVI7QUFHRTtFQUNFLFdBTmM7RUFPZCxZQVBjO0FBTWxCO0FBS0E7RUFDRSxXQWRNO0FBWVIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcjogI2YwMDtcbi5sb2dvIHtcbiAgJG5mYy1pY29uLXNpemU6IDkwcHg7XG4gIHdpZHRoOiAkbmZjLWljb24tc2l6ZTtcbiAgaGVpZ2h0OiAkbmZjLWljb24tc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcblxuICAmIDo6bmctZGVlcCBzdmcge1xuICAgIHdpZHRoOiAkbmZjLWljb24tc2l6ZTtcbiAgICBoZWlnaHQ6ICRuZmMtaWNvbi1zaXplO1xuICB9XG59XG5cbi5sb2dvLXRpdGxlIHtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.scss']
            }]
    }], function () { return []; }, { titleLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Y82v":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/numeric.directive.ts ***!
  \********************************************************/
/*! exports provided: numericValidator, NumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericValidator", function() { return numericValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericDirective", function() { return NumericDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



/** Validatore di caratteri numerici. ritorna */
function numericValidator() {
    return (control) => {
        const isNumeric = new RegExp('^[0-9]*$').test(control.value);
        return !isNumeric ? { 'numeric': { value: control.value } } : null;
    };
}
/** Direttiva usata per validare se in un HTMLInput ha solo valori numerici */
class NumericDirective {
    validate(control) {
        return numericValidator()(control);
    }
}
NumericDirective.ɵfac = function NumericDirective_Factory(t) { return new (t || NumericDirective)(); };
NumericDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumericDirective, selectors: [["", "appNumeric", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: NumericDirective, multi: true }])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumericDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appNumeric]',
                providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: NumericDirective, multi: true }]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/home/home.module */ "fOOd");
/* harmony import */ var _features_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/login-page/login-page.module */ "ghM/");
/* harmony import */ var _features_payments_payments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/payments/payments.module */ "dAx3");
/* harmony import */ var _features_template_template_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/template/template.module */ "aaR3");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared */ "M0ag");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _features_template_template_module__WEBPACK_IMPORTED_MODULE_9__["TemplateModule"],
            _features_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
            _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
            _features_payments_payments_module__WEBPACK_IMPORTED_MODULE_8__["PaymentsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _shared__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _features_template_template_module__WEBPACK_IMPORTED_MODULE_9__["TemplateModule"],
        _features_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
        _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
        _features_payments_payments_module__WEBPACK_IMPORTED_MODULE_8__["PaymentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _shared__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _features_template_template_module__WEBPACK_IMPORTED_MODULE_9__["TemplateModule"],
                    _features_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
                    _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
                    _features_payments_payments_module__WEBPACK_IMPORTED_MODULE_8__["PaymentsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aaR3":
/*!******************************************************!*\
  !*** ./src/app/features/template/template.module.ts ***!
  \******************************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template.component */ "M0dw");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.module */ "fOOd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










class TemplateModule {
}
TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TemplateModule });
TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TemplateModule_Factory(t) { return new (t || TemplateModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TemplateModule, { declarations: [_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]], exports: [_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TemplateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                ],
                exports: [_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "biqx":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/banner/banner.component.ts ***!
  \**************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 2, vars: 0, template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum diam posuere, tincidunt sapien sit amet, faucibus erat. Sed semper eu quam at facilisis. Suspendisse accumsan pulvinar velit eu sollicitudin. Nulla massa neque, pretium a cursus at, sodales id enim. Pellentesque volutpat, ante eu varius luctus, lacus magna sollicitudin risus, ut tristique odio enim vulputate odio. Sed eu justo augue. Fusce sem enim, gravida ac sollicitudin sit amet, sagittis ac est. Aenean aliquam vulputate sem vitae porta. Morbi eget magna sapien. In in interdum ante. Ut nisi enim, fermentum sed enim vitae, accumsan mattis mauris. Praesent vel nisl lorem. Vestibulum eu urna feugiat, dapibus massa sit amet, laoreet lorem.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dAx3":
/*!******************************************************!*\
  !*** ./src/app/features/payments/payments.module.ts ***!
  \******************************************************/
/*! exports provided: PaymentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsModule", function() { return PaymentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "M0ag");
/* harmony import */ var _payments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments.component */ "QgJG");





class PaymentsModule {
}
PaymentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PaymentsModule });
PaymentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PaymentsModule_Factory(t) { return new (t || PaymentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentsModule, { declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]], exports: [_payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaymentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ],
                exports: [_payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ey9i":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: RoutersPath, baseUrl, ApiRoute, PrezzoService, CommercianteService, ClienteService, LoaderService, LoadingStatus, LocalStorageService, WrongParamError, CUSTOM_ERROR, COMMERCIANTE_TYPE, CLIENTE_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_routing_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/routing.constants */ "Ankt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutersPath", function() { return _constants_routing_constants__WEBPACK_IMPORTED_MODULE_0__["RoutersPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return _constants_routing_constants__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiRoute", function() { return _constants_routing_constants__WEBPACK_IMPORTED_MODULE_0__["ApiRoute"]; });

/* harmony import */ var _services_pagamento_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/pagamento.service */ "NdZx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrezzoService", function() { return _services_pagamento_service__WEBPACK_IMPORTED_MODULE_1__["PrezzoService"]; });

/* harmony import */ var _services_commerciante_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/commerciante.service */ "k5B4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommercianteService", function() { return _services_commerciante_service__WEBPACK_IMPORTED_MODULE_2__["CommercianteService"]; });

/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/cliente.service */ "Q67P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]; });

/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/loader.service */ "lwos");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingStatus", function() { return _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoadingStatus"]; });

/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/local-storage.service */ "3G0t");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]; });

/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/error.model */ "2wdx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrongParamError", function() { return _models_error_model__WEBPACK_IMPORTED_MODULE_6__["WrongParamError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_ERROR", function() { return _models_error_model__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_ERROR"]; });

/* harmony import */ var _models_commerciante_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/commerciante.model */ "t+0h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMERCIANTE_TYPE", function() { return _models_commerciante_model__WEBPACK_IMPORTED_MODULE_7__["COMMERCIANTE_TYPE"]; });

/* harmony import */ var _models_cliente_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/cliente.model */ "46ix");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLIENTE_TYPE", function() { return _models_cliente_model__WEBPACK_IMPORTED_MODULE_8__["CLIENTE_TYPE"]; });

/* harmony import */ var _models_api_response__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/api.response */ "6aIu");
/* empty/unused harmony star reexport *//* harmony import */ var _models_api_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/api.request */ "pDSK");
/* empty/unused harmony star reexport */













/***/ }),

/***/ "fOOd":
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared */ "M0ag");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "0HvM");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");






class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]], exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]],
                exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fVb/":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/join/parts/join-part1/join-part1.component.ts ***!
  \*********************************************************************************/
/*! exports provided: JoinPart1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPart1Component", function() { return JoinPart1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_utils_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/utils/custom-validator */ "hUH/");
/* harmony import */ var _abstract_join_part_abstract_join_part_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-join-part/abstract-join-part.component */ "4OZk");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");










function JoinPart1Component_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " nome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart1Component_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " cognome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart1Component_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " codice fiscale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart1Component_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart1Component_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " data di nascita ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart1Component_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " formato della data errato. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart1Component_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " l'utente deve essere maggiorenne ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart1Component_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sicuramente avremo offerte molto pi\u00F9 belle per quando nascerai! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart1Component_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " telefono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart1Component_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class JoinPart1Component extends _abstract_join_part_abstract_join_part_component__WEBPACK_IMPORTED_MODULE_3__["AbstractJoinPartComponent"] {
    constructor(fb) {
        super();
        this.fb = fb;
        this.formCrl = this.fb.group({
            nome: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            cognome: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            cf: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            bornDate: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_core_utils_custom_validator__WEBPACK_IMPORTED_MODULE_2__["isOver18"], src_app_core_utils_custom_validator__WEBPACK_IMPORTED_MODULE_2__["isBorn"]]),
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            phone: this.fb.control('', []),
            address: this.fb.control('', []),
        });
    }
    ngOnInit() { }
    getValue() {
        return {
            nome: this.formCrl.controls.nome.value,
            cognome: this.formCrl.controls.cognome.value,
            cf: this.formCrl.controls.cf.value,
            bornDate: this.formCrl.controls.bornDate.value,
            email: this.formCrl.controls.email.value,
            phone: this.formCrl.controls.phone.value,
            address: this.formCrl.controls.address.value,
        };
    }
}
JoinPart1Component.ɵfac = function JoinPart1Component_Factory(t) { return new (t || JoinPart1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
JoinPart1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinPart1Component, selectors: [["app-join-part1"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 36, vars: 13, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch"], [1, "form", 3, "formGroup"], ["fxFlex", ""], ["matInput", "", "placeholder", "nome*", "formControlName", "nome"], [4, "ngIf"], ["matInput", "", "placeholder", "cognome*", "formControlName", "cognome"], ["matInput", "", "placeholder", "codice fiscale*", "formControlName", "cf"], ["matInput", "", "placeholder", "email*", "formControlName", "email"], ["matInput", "", "placeholder", "data di nascita*", "formControlName", "bornDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["bornDatePicker", ""], ["matInput", "", "placeholder", "telefono", "formControlName", "phone"], ["matInput", "", "placeholder", "indirizzo", "formControlName", "address"]], template: function JoinPart1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, JoinPart1Component_mat_error_5_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, JoinPart1Component_mat_error_9_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, JoinPart1Component_mat_error_13_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, JoinPart1Component_mat_error_17_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-datepicker-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-datepicker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, JoinPart1Component_mat_error_24_Template, 5, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, JoinPart1Component_mat_error_25_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, JoinPart1Component_mat_error_26_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, JoinPart1Component_mat_error_27_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, JoinPart1Component_mat_error_31_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, JoinPart1Component_mat_error_35_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["nome"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["cognome"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["cf"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["email"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["bornDate"].hasError("required") && !ctx.formCrl.controls["bornDate"].hasError("matDatepickerParse"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["bornDate"].hasError("matDatepickerParse"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["bornDate"].hasError("isOver18"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["bornDate"].hasError("isBorn"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["phone"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["address"].hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pvaW4vcGFydHMvam9pbi1wYXJ0MS9qb2luLXBhcnQxLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinPart1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-part1',
                templateUrl: './join-part1.component.html',
                styleUrls: ['./join-part1.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ghM/":
/*!**********************************************************!*\
  !*** ./src/app/features/login-page/login-page.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "M0ag");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page.component */ "tElp");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/login.service */ "7+8V");
/* harmony import */ var _store_auth_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/auth.store */ "KlhY");








class LoginPageModule {
}
LoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); }, providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _store_auth_store__WEBPACK_IMPORTED_MODULE_6__["AuthStore"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]], exports: [_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]],
                exports: [_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]],
                providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _store_auth_store__WEBPACK_IMPORTED_MODULE_6__["AuthStore"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hUH/":
/*!************************************************!*\
  !*** ./src/app/core/utils/custom-validator.ts ***!
  \************************************************/
/*! exports provided: isOver18, isBorn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOver18", function() { return isOver18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBorn", function() { return isBorn; });
// NOTA: apparentemente la risposta { [errorName]: false } viene cmq bloccata dal validatore.
// Trick Solution: in caso di validatore corretto passo null.
/** form validator per verificare se l'età inserita (presumibilmente di nascita) sia maggiore di 18 */
function isOver18(control) {
    const errorCode = 'isOver18';
    if (control && control.value) {
        const age = getBirthday(control.value);
        return age >= 0 && age < 18 ? { [errorCode]: true } : null;
    }
    return null;
}
/** form validator per verificare se lutente è effettivamente nato (anni >= 0) */
function isBorn(control) {
    const errorCode = 'isBorn';
    if (control && control.value) {
        const bornDate = control.value;
        return Date.now() - bornDate.getTime() < 0 ? { [errorCode]: true } : null;
    }
    return null;
}
/**
 * funzione che restituisce gli anni dell' utente
 * NOTA: funzione semplificata che non tiene conto di ora solare ed eventuali calcoli particolari sul calendario
 * ma sifficiente a scopo dimostrativo per questo progetto.
 */
function getBirthday(bornDate) {
    const ageDifMs = Date.now() - bornDate.getTime();
    if (ageDifMs < 0) {
        return -1;
    }
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


/***/ }),

/***/ "jALo":
/*!********************************************************!*\
  !*** ./src/app/shared/components/pin/pin.component.ts ***!
  \********************************************************/
/*! exports provided: PinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinComponent", function() { return PinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function PinComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " L'id utente \u00E8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "richiesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PinComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " il pin \u00E8 composto da 4-16 cifre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "numeriche");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PinComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pin obbligatorio per il login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PinComponent {
    constructor(fb) {
        this.fb = fb;
        this.loginEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formCrl = this.fb.group({
            userId: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)])
        });
    }
    ngOnInit() { }
    login() {
        this.loginEvent.emit({ username: this.formCrl.value.userId, password: this.formCrl.value.password });
    }
}
PinComponent.ɵfac = function PinComponent_Factory(t) { return new (t || PinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
PinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PinComponent, selectors: [["app-pin"]], outputs: { loginEvent: "loginEvent" }, decls: 16, vars: 5, consts: [[1, "form", 3, "formGroup"], [1, "full-width"], ["matInput", "", "placeholder", "ID*", "formControlName", "userId"], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Password*", "formControlName", "password"], [1, "login"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function PinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PinComponent_mat_error_5_Template, 4, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4 cifre numeriche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PinComponent_mat_error_11_Template, 4, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PinComponent_mat_error_12_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PinComponent_Template_button_click_14_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["userId"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["password"].hasError("minLength") || ctx.formCrl.controls["password"].hasError("maxLength") || ctx.formCrl.controls["password"].hasError("numeric"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["password"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formCrl.status === "INVALID");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]], styles: [".login[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGluL3Bpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9waW4vcGluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pin',
                templateUrl: './pin.component.html',
                styleUrls: ['./pin.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { loginEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "je3W":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/join/join.component.ts ***!
  \**********************************************************/
/*! exports provided: JoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinComponent", function() { return JoinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _parts_join_part0_join_part0_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/join-part0/join-part0.component */ "k0/I");
/* harmony import */ var _parts_join_part1_join_part1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/join-part1/join-part1.component */ "fVb/");
/* harmony import */ var _parts_join_part2_join_part2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/join-part2/join-part2.component */ "pbeO");
/* harmony import */ var _parts_join_part3_join_part3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/join-part3/join-part3.component */ "KHpa");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _parts_join_dashboard_join_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/join-dashboard/join-dashboard.component */ "nPwR");











const _c0 = ["adHost"];
function JoinComponent_app_join_dashboard_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-join-dashboard", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function JoinComponent_app_join_dashboard_7_Template_app_join_dashboard_changePage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.updateForm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx_r1.page)("maxPage", ctx_r1.maxPage);
} }
class JoinComponent {
    constructor(resolver) {
        this.resolver = resolver;
        this.maxPage = 3;
        this.data = {};
        this.loginRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.page = 0;
    }
    ngOnDestroy() {
        if (this.container) {
            this.container.clear();
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.loadComponent();
        }, 0);
    }
    loadComponent() {
        this.container.clear();
        let factory;
        switch (this.page) {
            case 3:
                factory = this.resolver.resolveComponentFactory(_parts_join_part3_join_part3_component__WEBPACK_IMPORTED_MODULE_4__["JoinPart3Component"]);
                break;
            case 2:
                factory = this.resolver.resolveComponentFactory(_parts_join_part2_join_part2_component__WEBPACK_IMPORTED_MODULE_3__["JoinPart2Component"]);
                break;
            case 1:
                factory = this.resolver.resolveComponentFactory(_parts_join_part1_join_part1_component__WEBPACK_IMPORTED_MODULE_2__["JoinPart1Component"]);
                break;
            case 0:
            default:
                factory = this.resolver.resolveComponentFactory(_parts_join_part0_join_part0_component__WEBPACK_IMPORTED_MODULE_1__["JoinPart0Component"]);
                break;
        }
        this.componentRef = this.container.createComponent(factory);
        if (this.page === this.maxPage) {
            this.componentRef.instance.data = this.data;
        }
    }
    login() {
        this.loginRequest.next();
    }
    updateForm(pg) {
        if (!this.componentRef.instance.validate()) {
            return;
        }
        // salva le informazioni recuperate dal form
        this.data = Object.assign(Object.assign({}, this.data), this.componentRef.instance.getValue());
        this.setPage(pg);
        this.loadComponent();
    }
    setPage(pg) {
        if (pg < 0) {
            this.page = 0;
        }
        else if (pg > this.maxPage) {
            this.page = this.maxPage;
        }
        else {
            this.page = pg;
        }
    }
}
JoinComponent.ɵfac = function JoinComponent_Factory(t) { return new (t || JoinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
JoinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinComponent, selectors: [["app-join"]], viewQuery: function JoinComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, outputs: { loginRequest: "loginRequest" }, decls: 11, vars: 2, consts: [["min", "0", "max", "3", "step", "1", 1, "slider", 3, "value"], ["adHost", ""], [3, "page", "maxPage", "changePage", 4, "ngIf"], [1, "login"], ["mat-button", "", "color", "primary", 3, "click"], [3, "page", "maxPage", "changePage"]], template: function JoinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JoinComponent_app_join_dashboard_7_Template, 1, 2, "app-join-dashboard", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinComponent_Template_button_click_9_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Annulla creazione account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page < ctx.maxPage);
    } }, directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _parts_join_dashboard_join_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["JoinDashboardComponent"]], styles: [".form[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.login[_ngcontent-%COMP%]    .mat-button-wrapper {\n  font-size: 0.7em;\n}\n\n.join-container[_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n\n.slider[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.slider[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.user-types-radio-group[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.user-types-radio-button[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  width: 150px;\n  margin: 10px auto;\n}\n\n.move[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvam9pbi9qb2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtBQUFGOztBQUVFO0VBQ0UsZUFBQTtBQUFKOztBQU1FO0VBQ0UsWUFBQTtBQUhKOztBQU1FO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSko7O0FBUUE7RUFDRSxZQUFBO0FBTEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9qb2luL2pvaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuXG4ubG9naW4gOjpuZy1kZWVwLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5qb2luLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG4uc2xpZGVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgJj4gKiB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cblxuLnVzZXItdHlwZXMtcmFkaW8ge1xuICAmLWdyb3VwIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cblxuICAmLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxufVxuXG4ubW92ZSBidXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join',
                templateUrl: './join.component.html',
                styleUrls: ['./join.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['adHost', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }], loginRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "k0/I":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/join/parts/join-part0/join-part0.component.ts ***!
  \*********************************************************************************/
/*! exports provided: JoinPart0Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPart0Component", function() { return JoinPart0Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _abstract_join_part_abstract_join_part_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-join-part/abstract-join-part.component */ "4OZk");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function JoinPart0Component_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart0Component_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " il pin \u00E8 composto da 4-16 cifre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "numeriche");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart0Component_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pin obbligatorio per il login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class JoinPart0Component extends _abstract_join_part_abstract_join_part_component__WEBPACK_IMPORTED_MODULE_2__["AbstractJoinPartComponent"] {
    constructor(fb) {
        super();
        this.fb = fb;
        this.valuesOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formCrl = this.fb.group({
            username: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16),
            ]),
        });
    }
    ngOnInit() { }
    getValue() {
        return {
            username: this.formCrl.controls.username.value,
            password: this.formCrl.controls.password.value,
        };
    }
}
JoinPart0Component.ɵfac = function JoinPart0Component_Factory(t) { return new (t || JoinPart0Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
JoinPart0Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinPart0Component, selectors: [["app-join-part0"]], outputs: { valuesOutput: "valuesOutput" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 4, consts: [[1, "form", 3, "formGroup"], [1, "full-width"], ["matInput", "", "placeholder", "username*", "formControlName", "username"], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Password*", "formControlName", "password"]], template: function JoinPart0Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JoinPart0Component_mat_error_4_Template, 4, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, JoinPart0Component_mat_error_8_Template, 4, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, JoinPart0Component_mat_error_9_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["username"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["password"].hasError("minLength") || ctx.formCrl.controls["password"].hasError("maxLength") || ctx.formCrl.controls["password"].hasError("numeric"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["password"].hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pvaW4vcGFydHMvam9pbi1wYXJ0MC9qb2luLXBhcnQwLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinPart0Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-part0',
                templateUrl: './join-part0.component.html',
                styleUrls: ['./join-part0.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { valuesOutput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "k5B4":
/*!*******************************************************!*\
  !*** ./src/app/core/services/commerciante.service.ts ***!
  \*******************************************************/
/*! exports provided: CommercianteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommercianteService", function() { return CommercianteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_commerciante_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/commerciante.model */ "t+0h");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/error.model */ "2wdx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class CommercianteService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.contoCommerciante$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            type: _models_commerciante_model__WEBPACK_IMPORTED_MODULE_3__["COMMERCIANTE_TYPE"],
            idConto: '',
            nome: '',
            nomenclatura: ''
        });
    }
    getConto(idConto) {
        // se già presente nello store non riscarica i dati del cliente:
        if (this.contoCommerciante$.value.idConto) {
            return this.contoCommerciante$;
        }
        if (!idConto) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _models_error_model__WEBPACK_IMPORTED_MODULE_4__["WrongParamError"](idConto));
        }
        return this.httpClient
            .get(`/api/commercianti/${idConto}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => {
            if (result && result.success) {
                const commerciante = Object.assign({ type: _models_commerciante_model__WEBPACK_IMPORTED_MODULE_3__["COMMERCIANTE_TYPE"] }, result.body);
                this.contoCommerciante$.next(commerciante);
                return commerciante;
            }
            else {
                throw { type: _models_error_model__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ERROR"], name: 'account not found', message: `non è stato possibile trovare l'account` };
            }
        }));
    }
}
CommercianteService.ɵfac = function CommercianteService_Factory(t) { return new (t || CommercianteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
CommercianteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommercianteService, factory: CommercianteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommercianteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kx0m":
/*!***************************************************!*\
  !*** ./src/app/core/guards/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants_routing_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/routing.constants */ "Ankt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_features_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/login-page/store/auth.store */ "KlhY");





class AuthGuard {
    constructor(router, loginStore) {
        this.router = router;
        this.loginStore = loginStore;
    }
    canActivate() {
        if (!this.loginStore.token) {
            this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_1__["RoutersPath"].login]);
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_features_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_features_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"] }]; }, null); })();


/***/ }),

/***/ "lURY":
/*!*******************************************************!*\
  !*** ./src/app/core/guards/no-login-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: NoLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoLoginGuard", function() { return NoLoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants_routing_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/routing.constants */ "Ankt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_features_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/login-page/store/auth.store */ "KlhY");





class NoLoginGuard {
    constructor(router, loginStore) {
        this.router = router;
        this.loginStore = loginStore;
    }
    canActivate() {
        if (this.loginStore.token) {
            this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_1__["RoutersPath"].home]);
            return false;
        }
        return true;
    }
}
NoLoginGuard.ɵfac = function NoLoginGuard_Factory(t) { return new (t || NoLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_features_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"])); };
NoLoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoLoginGuard, factory: NoLoginGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoLoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_features_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"] }]; }, null); })();


/***/ }),

/***/ "ls85":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/recognition/recognition.component.ts ***!
  \************************************************************************/
/*! exports provided: RecognitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognitionComponent", function() { return RecognitionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/login-type.enum */ "2m+P");
/* harmony import */ var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/routing.service */ "8QkR");
/* harmony import */ var src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/login-page/services/login.service */ "7+8V");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _pin_pin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pin/pin.component */ "jALo");
/* harmony import */ var _qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../qr-code/qr-code.component */ "zoHW");
/* harmony import */ var _nfc_nfc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nfc/nfc.component */ "OadK");











function RecognitionComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecognitionComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qr-code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecognitionComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nfc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { active: a0 }; };
class RecognitionComponent {
    constructor(routingService, loginService) {
        this.routingService = routingService;
        this.loginService = loginService;
        this.LoginType = _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__["LoginType"];
        this.loginType = _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__["LoginType"].pin;
    }
    ngOnInit() {
        this.routingService.updateHeader('Login');
    }
    changeLogin(choosenLoginType) {
        this.loginType = choosenLoginType;
    }
}
RecognitionComponent.ɵfac = function RecognitionComponent_Factory(t) { return new (t || RecognitionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
RecognitionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecognitionComponent, selectors: [["app-recognition"]], decls: 12, vars: 12, consts: [[1, "buttons-container"], ["mat-icon-button", "", 3, "ngClass", "click"], ["svgIcon", "textbox-password"], ["mat-icon-button", "", 1, "mr-2", "ml-2", 3, "ngClass", "click"], ["svgIcon", "qrcode"], ["svgIcon", "nfc-variant"], [1, "content"], [1, "login-body"], [4, "ngIf"]], template: function RecognitionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecognitionComponent_Template_button_click_1_listener() { return ctx.changeLogin(ctx.LoginType.pin); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecognitionComponent_Template_button_click_3_listener() { return ctx.changeLogin(ctx.LoginType.qr); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecognitionComponent_Template_button_click_5_listener() { return ctx.changeLogin(ctx.LoginType.nfc); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RecognitionComponent_div_9_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RecognitionComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RecognitionComponent_div_11_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.loginType === ctx.LoginType.pin));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.loginType === ctx.LoginType.qr));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.loginType === ctx.LoginType.nfc));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType === ctx.LoginType.pin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType === ctx.LoginType.qr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType === ctx.LoginType.nfc);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _pin_pin_component__WEBPACK_IMPORTED_MODULE_7__["PinComponent"], _qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_8__["QrCodeComponent"], _nfc_nfc_component__WEBPACK_IMPORTED_MODULE_9__["NfcComponent"]], styles: [".login-body[_ngcontent-%COMP%] {\n  height: 170px;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 2em;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #25bb25;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVjb2duaXRpb24vcmVjb2duaXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9yZWNvZ25pdGlvbi9yZWNvZ25pdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1ib2R5IHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgLy8gbWluLXdpZHRoOiAyMDVweDtcblxufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogMzBweDtcbn1cblxuLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICMyNWJiMjU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecognitionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recognition',
                templateUrl: './recognition.component.html',
                styleUrls: ['./recognition.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"] }, { type: src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "lwos":
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/*! exports provided: LoadingStatus, LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingStatus", function() { return LoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var LoadingStatus;
(function (LoadingStatus) {
    LoadingStatus["LOADING"] = "";
    LoadingStatus["FAILED"] = "FAILED";
    LoadingStatus["SUCCESS"] = "SUCCESS";
})(LoadingStatus || (LoadingStatus = {}));
/** service sche gestisce il loader */
class LoaderService {
    constructor() {
        this.status$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](LoadingStatus.LOADING);
    }
    changeStatus(status) {
        this.status$.next(status);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nPwR":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/join/parts/join-dashboard/join-dashboard.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: JoinDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinDashboardComponent", function() { return JoinDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class JoinDashboardComponent {
    constructor() {
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    backPage() {
        this.changePage.emit(this.page - 1);
    }
    nextPage() {
        this.changePage.emit(this.page + 1);
    }
}
JoinDashboardComponent.ɵfac = function JoinDashboardComponent_Factory(t) { return new (t || JoinDashboardComponent)(); };
JoinDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinDashboardComponent, selectors: [["app-join-dashboard"]], inputs: { page: "page", maxPage: "maxPage" }, outputs: { changePage: "changePage" }, decls: 5, vars: 2, consts: [[1, "move"], ["mat-raised-button", "", "color", "primary", 1, "back", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 1, "next", 3, "disabled", "click"]], template: function JoinDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinDashboardComponent_Template_button_click_1_listener() { return ctx.backPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinDashboardComponent_Template_button_click_3_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.page <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.page >= ctx.maxPage);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: [".back[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvam9pbi9wYXJ0cy9qb2luLWRhc2hib2FyZC9qb2luLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9qb2luL3BhcnRzL2pvaW4tZGFzaGJvYXJkL2pvaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-dashboard',
                templateUrl: './join-dashboard.component.html',
                styleUrls: ['./join-dashboard.component.scss']
            }]
    }], function () { return []; }, { page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "nlx4":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/switch-number.pipe.ts ***!
  \****************************************************/
/*! exports provided: SwitchNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchNumberPipe", function() { return SwitchNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * [number, number] | switchNumber:switchFn
 */
class SwitchNumberPipe {
    /**
     * @param switchFn  - determina se prendere il valore 1 o il valore 2
     */
    transform(values, switchFn, ...args) {
        if (!Array.isArray(values)) {
            console.error('SwitchNumberPipe richiede la presenza di un array di numeri per funzionare');
            console.error(values);
            return -1;
        }
        if (values.length !== 2 || values.some(n => !(typeof n === 'number'))) {
            console.error('SwitchNumberPipe richiede che l\'array contenga 2 valori numerici');
            console.error(values);
            return -1;
        }
        const equal = switchFn || true;
        return equal ? values[0] : values[1];
    }
}
SwitchNumberPipe.ɵfac = function SwitchNumberPipe_Factory(t) { return new (t || SwitchNumberPipe)(); };
SwitchNumberPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "switchNumber", type: SwitchNumberPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwitchNumberPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'switchNumber'
            }]
    }], null, null); })();


/***/ }),

/***/ "nura":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/big-button/big-button.component.ts ***!
  \**********************************************************************/
/*! exports provided: BigButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigButtonComponent", function() { return BigButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



/**
 * Nota: <app-big-button> richiede width e height impostati a 100%
 */
class BigButtonComponent {
    constructor() {
        this.clickEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    clickEvent() {
        this.clickEmitter.next();
    }
}
BigButtonComponent.ɵfac = function BigButtonComponent_Factory(t) { return new (t || BigButtonComponent)(); };
BigButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BigButtonComponent, selectors: [["app-big-button"]], inputs: { label: "label", icon: "icon" }, outputs: { clickEmitter: "clickEmitter" }, decls: 7, vars: 3, consts: [[1, "button-container", "widget-container", "shadow-border", 3, "click"], [1, "icon-content"], ["aria-hidden", "false", 1, "icon", "fix-top", 3, "inline"], [1, "label-body"], [1, "label", "centralize"]], template: function BigButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BigButtonComponent_Template_div_click_0_listener() { return ctx.clickEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 60px;\n  height: 10vw;\n  position: relative;\n  text-align: center;\n  cursor: pointer;\n  padding: 0;\n}\n\n.icon-content[_ngcontent-%COMP%] {\n  height: 70%;\n  position: relative;\n  background-color: #d5e6f2;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 7vw;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.label-body[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30%;\n}\n\n.label[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 2vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmlnLWJ1dHRvbi9iaWctYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0csY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUFIOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBREY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmlnLWJ1dHRvbi9iaWctYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDEwdnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cblxuLmljb24tY29udGVudCB7XG4gIGhlaWdodDogNzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWU2ZjI7XG59XG5cbi5pY29uIHtcbiAgIGZvbnQtc2l6ZTogN3Z3O1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgdG9wOiA0MCU7XG4gICBsZWZ0OiA1MCU7XG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cblxuLmxhYmVsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzAlO1xuXG59XG5cbi5sYWJlbHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICAvLyBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZpeC10b3Age1xuICAvLyB0b3A6IDcwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BigButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-big-button',
                templateUrl: './big-button.component.html',
                styleUrls: ['./big-button.component.scss']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "pDSK":
/*!********************************************!*\
  !*** ./src/app/core/models/api.request.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function generateApiRequest(payload) {
    let result = {};
    return result;
}



/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth-guard.service */ "kx0m");
/* harmony import */ var _guards_no_login_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/no-login-guard.service */ "lURY");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/cliente.service */ "Q67P");
/* harmony import */ var _services_commerciante_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/commerciante.service */ "k5B4");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/loader.service */ "lwos");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/local-storage.service */ "3G0t");
/* harmony import */ var _services_pagamento_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/pagamento.service */ "NdZx");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/routing.service */ "8QkR");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");















class CoreModule {
    constructor(matIconRegistry, domSanitizer) {
        // aggiunge le nuova svg a material
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('assets/svgs/mdi.svg'));
        // matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../../assets/fonts/materialdesignicons-webfont.woff'));
    }
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [
                _services_commerciante_service__WEBPACK_IMPORTED_MODULE_7__["CommercianteService"],
                _services_cliente_service__WEBPACK_IMPORTED_MODULE_6__["ClienteService"],
                _services_pagamento_service__WEBPACK_IMPORTED_MODULE_10__["PrezzoService"],
                _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"],
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"],
                _guards_no_login_guard_service__WEBPACK_IMPORTED_MODULE_5__["NoLoginGuard"],
                _services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"]
            ]
        };
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"])); }, providers: [
    /* No providers */
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
                exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
                providers: [
                /* No providers */
                ]
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "pO2f":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/info-widget/info-widget.component.ts ***!
  \************************************************************************/
/*! exports provided: InfoWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWidgetComponent", function() { return InfoWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InfoWidgetComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoWidgetComponent.ɵfac = function InfoWidgetComponent_Factory(t) { return new (t || InfoWidgetComponent)(); };
InfoWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoWidgetComponent, selectors: [["app-info-widget"]], inputs: { title: "title", numConto: "numConto", name: "name", regSocial: "regSocial", address: "address" }, decls: 21, vars: 5, consts: [[1, "title"], [1, "info"], [1, "labels"], [1, "info--conto", "label"], [1, "info--name", "label"], [1, "info--reg", "label"], [1, "info--addr", "label"], [1, "values"], [1, "info--conto", "value"], [1, "info--name", "value"], [1, "info--reg", "value"], [1, "info--addr", "value"]], template: function InfoWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Num. Conto:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nome:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Regione Sociale:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Indirizzo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.numConto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.regSocial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address);
    } }, styles: [".title[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n\n.info[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 4em;\n  margin-right: 4em;\n  width: auto;\n}\n\n.labels[_ngcontent-%COMP%], .values[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.value[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5mby13aWRnZXQvaW5mby13aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbmZvLXdpZGdldC9pbmZvLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIG1hcmdpbjogMzBweDtcbn1cblxuLmluZm8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNGVtO1xuICBtYXJnaW4tcmlnaHQ6IDRlbTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5sYWJlbHMsIC52YWx1ZXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi52YWx1ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-widget',
                templateUrl: './info-widget.component.html',
                styleUrls: ['./info-widget.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], numConto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], regSocial: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], address: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pbeO":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/join/parts/join-part2/join-part2.component.ts ***!
  \*********************************************************************************/
/*! exports provided: JoinPart2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPart2Component", function() { return JoinPart2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _abstract_join_part_abstract_join_part_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-join-part/abstract-join-part.component */ "4OZk");
/* harmony import */ var src_app_core_constants_user_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/constants/user-type.enum */ "NCos");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function JoinPart2Component_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " piva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JoinPart2Component_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ragSoc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class JoinPart2Component extends _abstract_join_part_abstract_join_part_component__WEBPACK_IMPORTED_MODULE_2__["AbstractJoinPartComponent"] {
    constructor(fb) {
        super();
        this.fb = fb;
        this.UserType = src_app_core_constants_user_type_enum__WEBPACK_IMPORTED_MODULE_3__["UserType"];
        this.subscriptions = [];
        this.formCrl = this.fb.group({
            userType: this.fb.control(src_app_core_constants_user_type_enum__WEBPACK_IMPORTED_MODULE_3__["UserType"].customer, []),
            piva: this.fb.control({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            ragSoc: this.fb.control({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.subscriptions.push(this.formCrl.get('userType').valueChanges.subscribe(userType => {
            if (userType === src_app_core_constants_user_type_enum__WEBPACK_IMPORTED_MODULE_3__["UserType"].customer) {
                this.formCrl.get('piva').disable();
                this.formCrl.get('ragSoc').disable();
            }
            else {
                this.formCrl.get('piva').enable();
                this.formCrl.get('ragSoc').enable();
            }
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getValue() {
        return {
            userType: this.formCrl.controls.userType.value,
            piva: this.formCrl.controls.piva.value,
            ragSoc: this.formCrl.controls.ragSoc.value,
        };
    }
}
JoinPart2Component.ɵfac = function JoinPart2Component_Factory(t) { return new (t || JoinPart2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
JoinPart2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinPart2Component, selectors: [["app-join-part2"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 5, consts: [[1, "form", 3, "formGroup"], ["formControlName", "userType"], [3, "value"], ["merchantInfo", ""], [1, "full-width"], ["matInput", "", "placeholder", "partita iva*", "formControlName", "piva", 1, "mInfos"], [4, "ngIf"], ["matInput", "", "placeholder", "ragione sociale*", "formControlName", "ragSoc", 1, "mInfos"]], template: function JoinPart2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sono solo un cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dati del commerciante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, JoinPart2Component_mat_error_11_Template, 4, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, JoinPart2Component_mat_error_15_Template, 4, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.UserType.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.UserType.merchant);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["piva"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["ragSoc"].hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["mat-radio-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px auto;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvam9pbi9wYXJ0cy9qb2luLXBhcnQyL2pvaW4tcGFydDIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pvaW4vcGFydHMvam9pbi1wYXJ0Mi9qb2luLXBhcnQyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXJhZGlvLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICB3aWR0aDogMjUwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinPart2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-part2',
                templateUrl: './join-part2.component.html',
                styleUrls: ['./join-part2.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "qw1q":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/error-page/error-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/error.component */ "UyyX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









class ErrorPageComponent {
    constructor(route, loaderService) {
        this.route = route;
        this.loaderService = loaderService;
        this.titleLabel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('Impossibile procedere con il pagamento. Se il problema persiste contattare il venditore');
        this.content$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('SUGGERIMENTO PER IL VENDITORE: assicurarsi che il idConto e prezzo siano validi');
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.loaderService.status$.next(src_app_core__WEBPACK_IMPORTED_MODULE_1__["LoadingStatus"].FAILED);
    }
    ngOnInit() {
        this.route.queryParams
            .pipe(
        // debounceTime evita l'emit iniziale prima che i param siano effettivamente inizializzati
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(params => {
            if (params.titleLabel) {
                this.titleLabel$.next(params.titleLabel);
            }
            if (params.content) {
                this.content$.next(params.content);
            }
            if (params.error) {
                this.error$.next(JSON.parse(params.error));
            }
            return [];
        }))
            .subscribe();
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 4, vars: 9, consts: [[3, "titleLabel", "content", "error"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.titleLabel$))("content", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.content$))("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx.error$));
    } }, directives: [_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-page',
                templateUrl: './error-page.component.html',
                styleUrls: ['./error-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_core__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "t+0h":
/*!***************************************************!*\
  !*** ./src/app/core/models/commerciante.model.ts ***!
  \***************************************************/
/*! exports provided: COMMERCIANTE_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMERCIANTE_TYPE", function() { return COMMERCIANTE_TYPE; });
const COMMERCIANTE_TYPE = 'COMMERCIANTE_TYPE';


/***/ }),

/***/ "tElp":
/*!*************************************************************!*\
  !*** ./src/app/features/login-page/login-page.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/routing.service */ "8QkR");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _shared_components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/big-button/big-button.component */ "nura");
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/banner/banner.component */ "biqx");
/* harmony import */ var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/login/login.component */ "DWOX");
/* harmony import */ var _shared_components_join_join_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/join/join.component */ "je3W");










function LoginPageComponent_app_login_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("joinRequest", function LoginPageComponent_app_login_2_Template_app_login_joinRequest_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.switchForm(ctx_r2.FormTypes.join); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_app_join_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-join", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginRequest", function LoginPageComponent_app_join_3_Template_app_join_loginRequest_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.switchForm(ctx_r4.FormTypes.login); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var FormTypes;
(function (FormTypes) {
    FormTypes["login"] = "Login";
    FormTypes["join"] = "Join";
})(FormTypes || (FormTypes = {}));
class LoginPageComponent {
    constructor(routingService) {
        this.routingService = routingService;
        this.FormTypes = FormTypes;
        this.formType = FormTypes.login;
    }
    ngOnInit() {
        this.routingService.updateHeader('Login');
    }
    clickInfo() {
        console.warn('not yet implement');
    }
    switchForm(formType) {
        this.formType = formType;
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 9, vars: 2, consts: [["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between start"], ["fxFlex", "", 1, "widget-container", "login-widget", "shadow-border"], [3, "joinRequest", 4, "ngIf"], [3, "loginRequest", 4, "ngIf"], ["fxFlex", "", "ngClass.xs", "info_conto_flex--xs", "ngClass.gt-xs", "info_conto_flex--gt-xs"], ["label", "Info Conto", "icon", "info", 1, "info_conto", 3, "clickEmitter"], ["fxLayout", "", 1, "footer"], [1, "widget-container", "shadow-border", "spam-widget"], [3, "joinRequest"], [3, "loginRequest"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_app_login_2_Template, 1, 0, "app-login", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginPageComponent_app_join_3_Template, 1, 0, "app-join", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-big-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function LoginPageComponent_Template_app_big_button_clickEmitter_5_listener() { return ctx.clickInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formType === ctx.FormTypes.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formType === ctx.FormTypes.join);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _shared_components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_5__["BigButtonComponent"], _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _shared_components_join_join_component__WEBPACK_IMPORTED_MODULE_8__["JoinComponent"]], styles: [".widget-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 99%;\n  padding: 0;\n}\n\n.info_conto_flex--xs[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 13vw;\n  padding: 0;\n  margin-top: 20px;\n}\n\n.info_conto_flex--gt-xs[_ngcontent-%COMP%] {\n  height: 13vw;\n  margin-left: 40%;\n}\n\n.info_conto[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0g7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBRko7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQtY29udGFpbmVyIHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OiA5OSU7XG4gICBwYWRkaW5nOiAwO1xufVxuXG4uaW5mb19jb250b19mbGV4IHtcblxuICAmLS14cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxM3Z3O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gICYtLWd0LXhzIHtcbiAgICBoZWlnaHQ6IDEzdnc7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cbn1cblxuLmluZm9fY29udG8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _features_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/home/home.component */ "0HvM");
/* harmony import */ var _features_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/login-page/login-page.component */ "tElp");
/* harmony import */ var _features_template_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/template/template.component */ "M0dw");
/* harmony import */ var _core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/guards/auth-guard.service */ "kx0m");
/* harmony import */ var _core_guards_no_login_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/guards/no-login-guard.service */ "lURY");
/* harmony import */ var _features_payments_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/payments/payments.component */ "QgJG");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core */ "ey9i");











const routes = [
    {
        path: '',
        component: _features_template_template_component__WEBPACK_IMPORTED_MODULE_4__["TemplateComponent"],
        children: [
            {
                path: _core__WEBPACK_IMPORTED_MODULE_8__["RoutersPath"].base,
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: _core__WEBPACK_IMPORTED_MODULE_8__["RoutersPath"].home,
                component: _features_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
            },
            {
                path: _core__WEBPACK_IMPORTED_MODULE_8__["RoutersPath"].login,
                component: _features_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
                canActivate: [_core_guards_no_login_guard_service__WEBPACK_IMPORTED_MODULE_6__["NoLoginGuard"]],
            },
            {
                path: _core__WEBPACK_IMPORTED_MODULE_8__["RoutersPath"].payment,
                component: _features_payments_payments_component__WEBPACK_IMPORTED_MODULE_7__["PaymentsComponent"],
                canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
            },
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zoHW":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/qr-code/qr-code.component.ts ***!
  \****************************************************************/
/*! exports provided: QrCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodeComponent", function() { return QrCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zxing/library */ "5YjC");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zxing/ngx-scanner */ "IyRd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










class QrCodeComponent {
    constructor(clienteService, pagamentoService) {
        this.clienteService = clienteService;
        this.pagamentoService = pagamentoService;
        /** standard accettati dal lettore */
        this.allowedFormats = [_zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].QR_CODE, _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].EAN_13];
        this.currentDevice = null;
        /** determina se è riuscito ad aprire o meno lo scanner */
        this.statusScanner$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    ngOnInit() { }
    /** alla lettura dello stato prova ad effettuare il login */
    scanSuccessHandler(token) {
        this.scanner.enable = false;
        this.clienteService.getClienteByToken(token).subscribe(result => {
            if (result.type !== src_app_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ERROR"]) {
                this.pagamentoService.handlePagamento();
            }
            else {
                this.scanner.enable = true;
            }
        });
    }
    onCamerasFound(devices) {
        this.availableDevices = devices;
        if (this.availableDevices && this.availableDevices.length > 0) {
            this.currentDevice = this.availableDevices[0];
        }
    }
    /** modifica lo stato del reader, che indica se è in funzione o ha dei problemi in esecuzione */
    readerStatus(status) {
        this.statusScanner$.next(status);
    }
}
QrCodeComponent.ɵfac = function QrCodeComponent_Factory(t) { return new (t || QrCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_4__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_4__["PrezzoService"])); };
QrCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QrCodeComponent, selectors: [["app-qr-code"]], viewQuery: function QrCodeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__["ZXingScannerComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scanner = _t.first);
    } }, decls: 8, vars: 9, consts: [[3, "hidden"], [1, "qr-reader", 3, "device", "formats", "tryHarder", "deviceChange", "camerasFound", "scanSuccess", "permissionResponse"], ["svgIcon", "qrcode", 1, "qr-icon"], [1, "qr-message"]], template: function QrCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "zxing-scanner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deviceChange", function QrCodeComponent_Template_zxing_scanner_deviceChange_2_listener($event) { return ctx.currentDevice = $event; })("camerasFound", function QrCodeComponent_Template_zxing_scanner_camerasFound_2_listener($event) { return ctx.onCamerasFound($event); })("scanSuccess", function QrCodeComponent_Template_zxing_scanner_scanSuccess_2_listener($event) { return ctx.scanSuccessHandler($event); })("permissionResponse", function QrCodeComponent_Template_zxing_scanner_permissionResponse_2_listener($event) { return ctx.readerStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "abilitare il lettore qrcode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx.statusScanner$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("device", ctx.currentDevice)("formats", ctx.allowedFormats)("tryHarder", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx.statusScanner$));
    } }, directives: [_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__["ZXingScannerComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".qr-reader[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: auto;\n}\n\n.qr-message[_ngcontent-%COMP%], .qr-icon[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n.qr-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.qr-icon[_ngcontent-%COMP%]     svg {\n  width: 60px;\n  height: 60px;\n}\n\n.qr-message[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcXItY29kZS9xci1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUdFLFdBRGdCO0VBRWhCLFlBRmdCO0FBQ2xCOztBQUdFO0VBQ0UsV0FMYztFQU1kLFlBTmM7QUFLbEI7O0FBS0E7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7QUFIRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3FyLWNvZGUvcXItY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xci1yZWFkZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuJWNvbG9yIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5xci1pY29uIHtcbiAgQGV4dGVuZCAlY29sb3I7XG4gICRuZmMtaWNvbi1zaXplOiA2MHB4O1xuICB3aWR0aDogJG5mYy1pY29uLXNpemU7XG4gIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG5cbiAgJiA6Om5nLWRlZXAgc3ZnIHtcbiAgICB3aWR0aDogJG5mYy1pY29uLXNpemU7XG4gICAgaGVpZ2h0OiAkbmZjLWljb24tc2l6ZTtcbiAgfVxufVxuXG4ucXItbWVzc2FnZSB7XG4gIEBleHRlbmQgJWNvbG9yO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QrCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qr-code',
                templateUrl: './qr-code.component.html',
                styleUrls: ['./qr-code.component.scss']
            }]
    }], function () { return [{ type: src_app_core__WEBPACK_IMPORTED_MODULE_4__["ClienteService"] }, { type: src_app_core__WEBPACK_IMPORTED_MODULE_4__["PrezzoService"] }]; }, { scanner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__["ZXingScannerComponent"]]
        }] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map