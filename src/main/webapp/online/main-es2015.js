(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/error-page/error-page.component */ "./src/app/shared/components/error-page/error-page.component.ts");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | features-home-home-module */ "features-home-home-module").then(__webpack_require__.bind(null, /*! ./features/home/home.module */ "./src/app/features/home/home.module.ts")).then(m => m.HomeModule)
            },
            {
                path: 'error',
                component: _shared_components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_2__["ErrorPageComponent"],
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");






function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class AppComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.statusLoader$ = this.loaderService.status$;
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 3, consts: [[1, "container"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.statusLoader$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9FYXN5UGF5LW9ubGluZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/constants/utente-type.enum.ts":
/*!****************************************************!*\
  !*** ./src/app/core/constants/utente-type.enum.ts ***!
  \****************************************************/
/*! exports provided: UtenteType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtenteType", function() { return UtenteType; });
/** Tipologia di utente che può essere */
var UtenteType;
(function (UtenteType) {
    UtenteType["cliente"] = "cliente";
    UtenteType["commerciante"] = "commerciante";
})(UtenteType || (UtenteType = {}));


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _services_utente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/utente.service */ "./src/app/core/services/utente.service.ts");
/* harmony import */ var _services_conto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/conto.service */ "./src/app/core/services/conto.service.ts");
/* harmony import */ var _services_pagamento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/pagamento.service */ "./src/app/core/services/pagamento.service.ts");
/* harmony import */ var _stores_utenti_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stores/utenti.store */ "./src/app/core/stores/utenti.store.ts");
/* harmony import */ var _stores_conti_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stores/conti.store */ "./src/app/core/stores/conti.store.ts");
/* harmony import */ var _http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http-interceptors/auth.interceptor */ "./src/app/core/http-interceptors/auth.interceptor.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");













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
                _services_utente_service__WEBPACK_IMPORTED_MODULE_4__["UtenteService"],
                _services_pagamento_service__WEBPACK_IMPORTED_MODULE_6__["PagamentoService"],
                _services_conto_service__WEBPACK_IMPORTED_MODULE_5__["ContoService"],
                _stores_utenti_store__WEBPACK_IMPORTED_MODULE_7__["UtentiStore"],
                _stores_conti_store__WEBPACK_IMPORTED_MODULE_8__["ContiStore"],
                _http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["httpInterceptorProviders"],
            ],
        };
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"])); }, providers: [ /* No providers */], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
                exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
                providers: [ /* No providers */],
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/http-interceptors/auth.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/core/http-interceptors/auth.interceptor.ts ***!
  \************************************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





/** Pass untouched request through to the next request handler. */
class AuthInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        const authReq = req.clone({
            headers: req.headers.set('Authorization', localStorage.getItem('token') || '')
        });
        return next.handle(authReq)
            .pipe(
        // filter((response: HttpResponse<any>) => ),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            if (response && response.status === 403) {
                console.error('Token di accesso scaduto, logout!');
                localStorage.removeItem('token');
                this.router.navigate([]);
            }
            return response;
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();
/** Http interceptor providers in outside-in order */
const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true },
];


/***/ }),

/***/ "./src/app/core/models/error.model.ts":
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

/***/ "./src/app/core/services/conto.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/conto.service.ts ***!
  \************************************************/
/*! exports provided: ContoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContoService", function() { return ContoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/error.model */ "./src/app/core/models/error.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ContoService {
    constructor(http) {
        this.http = http;
        this.emptyConto = {
            id: '',
            budget: 0,
            saldo: 0,
            availableBudget: 0,
            idCliente: '',
        };
    }
    getConto(idConto) {
        if (!idConto) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _models_error_model__WEBPACK_IMPORTED_MODULE_3__["WrongParamError"](idConto));
        }
        return this._getContoRequest(`/api/conti/${idConto}`);
    }
    getSelfConto() {
        return this._getContoRequest('/api/conti}/self');
    }
    _getContoRequest(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => {
            if (result && result.id) {
                return result;
            }
            else {
                throw { type: _models_error_model__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ERROR"], name: 'account not found', message: `non è stato possibile trovare l'account` };
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(apiConto => (Object.assign(Object.assign({}, apiConto), { id: apiConto.id + '', idCliente: apiConto.id_cliente + '' }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            console.error('error');
            throw {
                type: _models_error_model__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ERROR"],
                name: 'backend error',
                message: error,
            };
        }));
    }
    /** ripulisce e restituisce il Conto ben formattato */
    clearConto(apiConto) {
        return Object.assign(Object.assign({}, apiConto), { id: apiConto.id + '', idCliente: apiConto.id_cliente + '' });
    }
}
ContoService.ɵfac = function ContoService_Factory(t) { return new (t || ContoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ContoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContoService, factory: ContoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/loader.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/*! exports provided: LoadingStatus, LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingStatus", function() { return LoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



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

/***/ "./src/app/core/services/pagamento.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/pagamento.service.ts ***!
  \****************************************************/
/*! exports provided: PagamentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamentoService", function() { return PagamentoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var _constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/utente-type.enum */ "./src/app/core/constants/utente-type.enum.ts");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/error.model */ "./src/app/core/models/error.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _stores_utenti_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/utenti.store */ "./src/app/core/stores/utenti.store.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











class PagamentoService {
    constructor(http, clientiStore, router, loaderService) {
        this.http = http;
        this.clientiStore = clientiStore;
        this.router = router;
        this.loaderService = loaderService;
        this.prezzo$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
    }
    /** Salva il valore del trasferimento da effettuare */
    setPrezzo(value) {
        const convPrezzo = Number.parseFloat(value);
        if (!isNaN(convPrezzo)) {
            this.prezzo$.next(Number.parseFloat(value));
        }
        else {
            throw { type: _models_error_model__WEBPACK_IMPORTED_MODULE_5__["CUSTOM_ERROR"], name: 'errore sul prezzo', message: 'deve essere un valore numerico' };
        }
    }
    /** gestisce un pagamento una volta che gli store sono stati tutti inizializzati correttamente */
    handlePagamento() {
        this.loaderService.changeStatus(src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoadingStatus"].LOADING);
        this.pagamento(this.clientiStore.get(_constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_4__["UtenteType"].cliente) ? this.clientiStore.get(_constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_4__["UtenteType"].cliente).idConto : '', this.clientiStore.get(_constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_4__["UtenteType"].commerciante) ? this.clientiStore.get(_constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_4__["UtenteType"].commerciante).idConto : '', this.prezzo$.value // TODO: vedere che fare del prezzo
        ).subscribe({
            next: result => {
                const response = { timestamp: new Date().getTime() };
                if (window.opener) {
                    window.opener.postMessage(JSON.stringify(Object.assign({ success: true }, response)), '*');
                    setInterval(() => window.close(), 1000);
                }
                else {
                    console.error('Impossibile chiudere pagina');
                }
                this.loaderService.changeStatus(src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoadingStatus"].SUCCESS);
            },
            error: (error) => {
                this.loaderService.changeStatus(src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoadingStatus"].SUCCESS);
                const titleLabel = 'Impossibile procedere con il pagamento';
                window.opener.postMessage(JSON.stringify({ success: false, erroCode: error.name, errorMessage: error.message }), '*');
                setInterval(() => window.close(), 1000);
                this.router.navigateByUrl(`/error?titleLabel=${titleLabel}&content=${error.message}&error=${JSON.stringify(error)}`);
            }
        });
    }
    pagamento(idContoCliente, idContoCommerciante, prezzo) {
        const params = {
            from: idContoCliente,
            to: idContoCommerciante,
            value: prezzo + '',
        };
        return this.http.post('api/pagamenti', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => {
            console.error('TODO: gestire la risposta del pagamento');
            return true;
            // TODO: caso di saldo mancante:
            // const message = 'Ricaricare il conto';
            // throw { type: CUSTOM_ERROR, name: 'Saldo Insufficiente', message } as CustomError;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            console.error('error');
            throw {
                type: _models_error_model__WEBPACK_IMPORTED_MODULE_5__["CUSTOM_ERROR"],
                name: 'backend error',
                message: error,
            };
        }));
    }
}
PagamentoService.ɵfac = function PagamentoService_Factory(t) { return new (t || PagamentoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_stores_utenti_store__WEBPACK_IMPORTED_MODULE_7__["UtentiStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"])); };
PagamentoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PagamentoService, factory: PagamentoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagamentoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _stores_utenti_store__WEBPACK_IMPORTED_MODULE_7__["UtentiStore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/utente.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/utente.service.ts ***!
  \*************************************************/
/*! exports provided: UtenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtenteService", function() { return UtenteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/error.model */ "./src/app/core/models/error.model.ts");
/* harmony import */ var _constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/utente-type.enum */ "./src/app/core/constants/utente-type.enum.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class UtenteService {
    constructor(http) {
        this.http = http;
        this.emptyUtente = {
            type: _constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_4__["UtenteType"].cliente,
            id: '',
            otp: '',
            nome: '',
            cognome: '',
            email: '',
            createdAt: undefined,
            updatedAt: undefined,
            address: '',
            birthDate: '',
            phone: '',
            idConto: '',
        };
    }
    /** restituisce una variante ridotta dell'Utente senza i dati più sensibili */
    getUtenteNoSecurity(id) {
        if (!id) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _models_error_model__WEBPACK_IMPORTED_MODULE_3__["WrongParamError"]({ id }));
        }
        return this._getUtenteHttp(id);
    }
    getUtenteByPin(id, pin) {
        if (!id || !pin) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _models_error_model__WEBPACK_IMPORTED_MODULE_3__["WrongParamError"]({ id, pin }));
        }
        return this._getUtenteHttp(id, { pin });
    }
    getUtenteByTokenOtp(qrCode) {
        const [id, otp] = qrCode.split('-');
        if (!id || !otp) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _models_error_model__WEBPACK_IMPORTED_MODULE_3__["WrongParamError"]({ id, otp }));
        }
        return this._getUtenteHttp(id, { otp });
    }
    /** effettua la richiesta HTTP per verificare se il login dell'utente va a buon fine */
    _getUtenteHttp(id, params = {}) {
        return this.http
            .get(`/api/clienti/${id}`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => {
            if (result && result.id && (result.type === _constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_4__["UtenteType"].cliente || result.type === _constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_4__["UtenteType"].commerciante)) {
                return result;
            }
            else {
                throw {
                    type: _models_error_model__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ERROR"],
                    name: 'account not found',
                    message: `non è stato possibile trovare l'account`,
                };
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((apiUtente) => this._cleanUtente(apiUtente)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            console.error('error');
            throw {
                type: _models_error_model__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ERROR"],
                name: 'backend error',
                message: error,
            };
        }));
    }
    /** riceve in input un apiUtente e modifica i parametri diversi in modo da ottenere un oggetto utente */
    _cleanUtente(apiUtente) {
        return Object.assign(Object.assign({ type: _constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_4__["UtenteType"].cliente }, apiUtente), { id: apiUtente.id + '', idConto: apiUtente.id_conto + '', birthDate: apiUtente.birth_date });
    }
}
UtenteService.ɵfac = function UtenteService_Factory(t) { return new (t || UtenteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
UtenteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtenteService, factory: UtenteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtenteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/stores/conti.store.ts":
/*!********************************************!*\
  !*** ./src/app/core/stores/conti.store.ts ***!
  \********************************************/
/*! exports provided: ContiStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContiStore", function() { return ContiStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/utente-type.enum */ "./src/app/core/constants/utente-type.enum.ts");



class ContiStore {
    constructor() {
        this.store = {};
    }
    get(utenteType, id = '') {
        if (utenteType === _constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_1__["UtenteType"].cliente || utenteType === _constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_1__["UtenteType"].commerciante) {
            return this.store[utenteType];
        }
        else if (id) {
            return this.store[Object.keys(this.store).find(key => this.store[key].id === id)];
        }
    }
    add(utenteType, conto) {
        this.store[utenteType] = conto;
    }
}
ContiStore.ɵfac = function ContiStore_Factory(t) { return new (t || ContiStore)(); };
ContiStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContiStore, factory: ContiStore.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContiStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/stores/utenti.store.ts":
/*!*********************************************!*\
  !*** ./src/app/core/stores/utenti.store.ts ***!
  \*********************************************/
/*! exports provided: UtentiStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtentiStore", function() { return UtentiStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/utente-type.enum */ "./src/app/core/constants/utente-type.enum.ts");



/**
 * Salva nello store i dati del commerciante e i dati del cliente.
 * Trick: il Cliente potrebbe essere un commerciante, ma all'interno dello store si usa UtenteType.cliente
 */
class UtentiStore {
    constructor() {
        this.store = {};
    }
    get(utenteType, id = '') {
        if (utenteType === _constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_1__["UtenteType"].cliente || utenteType === _constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_1__["UtenteType"].commerciante) {
            return this.store[utenteType];
        }
        else if (id) {
            return this.store[Object.keys(this.store).find(key => this.store[key].id === id)];
        }
    }
    add(utenteType, cliente) {
        this.store[utenteType] = cliente;
    }
}
UtentiStore.ɵfac = function UtentiStore_Factory(t) { return new (t || UtentiStore)(); };
UtentiStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtentiStore, factory: UtentiStore.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtentiStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/error-page/error-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/error-page/error-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/error.component */ "./src/app/shared/components/error/error.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









class ErrorPageComponent {
    constructor(route, loaderService) {
        this.route = route;
        this.loaderService = loaderService;
        this.titleLabel$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('Impossibile procedere con il pagamento. Se il problema persiste contattare il venditore');
        this.content$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('SUGGERIMENTO PER IL VENDITORE: assicurarsi che il idConto e prezzo siano validi');
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.loaderService.status$.next(src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoadingStatus"].FAILED);
    }
    ngOnInit() {
        this.route.queryParams
            .pipe(
        // debounceTime evita l'emit iniziale prima che i param siano effettivamente inizializzati
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(params => {
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
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"])); };
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
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/error/error.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/error/error.component.ts ***!
  \************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




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
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  color: #f00;\n}\n.logo[_ngcontent-%COMP%]     svg {\n  width: 90px;\n  height: 90px;\n}\n.logo-title[_ngcontent-%COMP%] {\n  color: #f00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9FYXN5UGF5LW9ubGluZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFdBRGdCO0VBRWhCLFlBRmdCO0VBR2hCLFdBTE07QUNJUjtBREdFO0VBQ0UsV0FOYztFQU9kLFlBUGM7QUNNbEI7QURLQTtFQUNFLFdBZE07QUNZUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yOiAjZjAwO1xuLmxvZ28ge1xuICAkbmZjLWljb24tc2l6ZTogOTBweDtcbiAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRuZmMtaWNvbi1zaXplO1xuICBjb2xvcjogJGNvbG9yO1xuXG4gICYgOjpuZy1kZWVwIHN2ZyB7XG4gICAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICAgIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG4gIH1cbn1cblxuLmxvZ28tdGl0bGUge1xuICBjb2xvcjogJGNvbG9yO1xufVxuIiwiLmxvZ28ge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBjb2xvcjogI2YwMDtcbn1cbi5sb2dvIDo6bmctZGVlcCBzdmcge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4ubG9nby10aXRsZSB7XG4gIGNvbG9yOiAjZjAwO1xufSJdfQ== */"] });
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

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");



class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 0, consts: [["src", "assets/loader.gif", "alt", "loader"], ["svgIcon", "bank", 1, "logo"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 1);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  position: absolute;\n  top: 195px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.logo[_ngcontent-%COMP%]     svg {\n  width: 90px;\n  height: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9FYXN5UGF5LW9ubGluZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQURnQjtFQUVoQixZQUZnQjtFQVNoQixrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUNORjtBREZFO0VBQ0UsV0FMYztFQU1kLFlBTmM7QUNVbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAkbmZjLWljb24tc2l6ZTogOTBweDtcbiAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRuZmMtaWNvbi1zaXplO1xuXG4gICYgOjpuZy1kZWVwIHN2ZyB7XG4gICAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICAgIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG4gIH1cblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTk1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuIiwiLmxvZ28ge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTk1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmxvZ28gOjpuZy1kZWVwIHN2ZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/nfc/nfc.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/nfc/nfc.component.ts ***!
  \********************************************************/
/*! exports provided: NfcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfcComponent", function() { return NfcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");



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
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".nfc-message[_ngcontent-%COMP%], .nfc-icon[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n.nfc-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.nfc-icon[_ngcontent-%COMP%]     svg {\n  width: 60px;\n  height: 60px;\n}\n\n.nfc-message[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9FYXN5UGF5LW9ubGluZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25mYy9uZmMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25mYy9uZmMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFHRSxXQURnQjtFQUVoQixZQUZnQjtBQ0NsQjs7QURHRTtFQUNFLFdBTGM7RUFNZCxZQU5jO0FDS2xCOztBREtBO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZmMvbmZjLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWNvbG9yIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5uZmMtaWNvbiB7XG4gIEBleHRlbmQgJWNvbG9yO1xuICAkbmZjLWljb24tc2l6ZTogNjBweDtcbiAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRuZmMtaWNvbi1zaXplO1xuXG4gICYgOjpuZy1kZWVwIHN2ZyB7XG4gICAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICAgIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG4gIH1cbn1cblxuLm5mYy1tZXNzYWdlIHtcbiAgQGV4dGVuZCAlY29sb3I7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cbiIsIi5uZmMtbWVzc2FnZSwgLm5mYy1pY29uIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5uZmMtaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubmZjLWljb24gOjpuZy1kZWVwIHN2ZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5uZmMtbWVzc2FnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NfcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nfc',
                templateUrl: './nfc.component.html',
                styleUrls: ['./nfc.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/pin/pin.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/pin/pin.component.ts ***!
  \********************************************************/
/*! exports provided: PinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinComponent", function() { return PinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/numeric.directive */ "./src/app/shared/directives/numeric.directive.ts");
/* harmony import */ var src_app_core_services_utente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/utente.service */ "./src/app/core/services/utente.service.ts");
/* harmony import */ var src_app_core_services_pagamento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/pagamento.service */ "./src/app/core/services/pagamento.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function PinComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " L'id utente \u00E8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "richiesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PinComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id o Pin Sbagliati");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PinComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " il pin \u00E8 composto da 4 cifre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "numeriche");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PinComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pin obbligatorio per il login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PinComponent {
    constructor(fb, utenteService, pagamentoService, router) {
        this.fb = fb;
        this.utenteService = utenteService;
        this.pagamentoService = pagamentoService;
        this.router = router;
        this.formCrl = this.fb.group({
            userId: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            pinCode: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_directives_numeric_directive__WEBPACK_IMPORTED_MODULE_2__["numericValidator"])(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)])
        });
    }
    ngOnInit() { }
    login() {
        this.utenteService.getUtenteByPin(this.formCrl.value.userId, this.formCrl.value.pinCode).subscribe({
            next: () => this.pagamentoService.handlePagamento(),
            error: (err) => {
                // TODO: differenziare dal semplice errore del login per riproporre la schermata
                console.error(err);
                this.formCrl.controls.userId.setErrors({ WrongBE: true });
                this.formCrl.controls.pinCode.setErrors({ WrongBE: true });
                // const titleLabel = 'Impossibile effettuare il login';
                // this.router.navigateByUrl(`/error?titleLabel=${titleLabel}&content=${err.message}&error=${JSON.stringify(err)}`);
            }
        });
    }
}
PinComponent.ɵfac = function PinComponent_Factory(t) { return new (t || PinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_utente_service__WEBPACK_IMPORTED_MODULE_3__["UtenteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_pagamento_service__WEBPACK_IMPORTED_MODULE_4__["PagamentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
PinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PinComponent, selectors: [["app-pin"]], decls: 17, vars: 6, consts: [[1, "form", 3, "formGroup"], [1, "full-width"], ["matInput", "", "placeholder", "ID*", "formControlName", "userId"], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Pin*", "formControlName", "pinCode"], [1, "login"], ["mat-button", "", "color", "primary", 3, "disabled", "click"]], template: function PinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PinComponent_mat_error_5_Template, 4, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PinComponent_mat_error_6_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "4 cifre numeriche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PinComponent_mat_error_12_Template, 4, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PinComponent_mat_error_13_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PinComponent_Template_button_click_15_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["userId"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["userId"].hasError("WrongBE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["pinCode"].hasError("minLength") || ctx.formCrl.controls["pinCode"].hasError("maxLength") || ctx.formCrl.controls["pinCode"].hasError("numeric"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["pinCode"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formCrl.status === "INVALID");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".login[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9FYXN5UGF5LW9ubGluZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bpbi9waW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bpbi9waW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGluL3Bpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iLCIubG9naW4ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pin',
                templateUrl: './pin.component.html',
                styleUrls: ['./pin.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_core_services_utente_service__WEBPACK_IMPORTED_MODULE_3__["UtenteService"] }, { type: src_app_core_services_pagamento_service__WEBPACK_IMPORTED_MODULE_4__["PagamentoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/qr-code/qr-code.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/qr-code/qr-code.component.ts ***!
  \****************************************************************/
/*! exports provided: QrCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodeComponent", function() { return QrCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/__ivy_ngcc__/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_models_error_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/models/error.model */ "./src/app/core/models/error.model.ts");
/* harmony import */ var src_app_core_services_utente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/utente.service */ "./src/app/core/services/utente.service.ts");
/* harmony import */ var src_app_core_services_pagamento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/pagamento.service */ "./src/app/core/services/pagamento.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











class QrCodeComponent {
    constructor(utenteService, pagamentoService) {
        this.utenteService = utenteService;
        this.pagamentoService = pagamentoService;
        /** standard accettati dal lettore */
        this.allowedFormats = [_zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].QR_CODE, _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].EAN_13];
        /** determina se è riuscito ad aprire o meno lo scanner */
        this.statusScanner$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    ngOnInit() { }
    /** alla lettura dello stato prova ad effettuare il login */
    scanSuccessHandler(token) {
        this.scanner.enable = false;
        this.utenteService.getUtenteByTokenOtp(token).subscribe(result => {
            if (result.type !== src_app_core_models_error_model__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ERROR"]) {
                this.pagamentoService.handlePagamento();
            }
            else {
                this.scanner.enable = true;
            }
        });
    }
    /** modifica lo stato del reader, che indica se è in funzione o ha dei problemi in esecuzione */
    readerStatus(status) {
        this.statusScanner$.next(status);
    }
}
QrCodeComponent.ɵfac = function QrCodeComponent_Factory(t) { return new (t || QrCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_utente_service__WEBPACK_IMPORTED_MODULE_5__["UtenteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_pagamento_service__WEBPACK_IMPORTED_MODULE_6__["PagamentoService"])); };
QrCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QrCodeComponent, selectors: [["app-qr-code"]], viewQuery: function QrCodeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__["ZXingScannerComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scanner = _t.first);
    } }, decls: 8, vars: 7, consts: [[3, "hidden"], [1, "qr-reader", 3, "formats", "scanSuccess", "permissionResponse"], ["svgIcon", "qrcode", 1, "qr-icon"], [1, "qr-message"]], template: function QrCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "zxing-scanner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scanSuccess", function QrCodeComponent_Template_zxing_scanner_scanSuccess_2_listener($event) { return ctx.scanSuccessHandler($event); })("permissionResponse", function QrCodeComponent_Template_zxing_scanner_permissionResponse_2_listener($event) { return ctx.readerStatus($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.statusScanner$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formats", ctx.allowedFormats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.statusScanner$));
    } }, directives: [_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__["ZXingScannerComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".qr-reader[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: auto;\n}\n\n.qr-message[_ngcontent-%COMP%], .qr-icon[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n.qr-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.qr-icon[_ngcontent-%COMP%]     svg {\n  width: 60px;\n  height: 60px;\n}\n\n.qr-message[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9FYXN5UGF5LW9ubGluZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3FyLWNvZGUvcXItY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcXItY29kZS9xci1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUdFLFdBRGdCO0VBRWhCLFlBRmdCO0FDQ2xCOztBREdFO0VBQ0UsV0FMYztFQU1kLFlBTmM7QUNLbEI7O0FES0E7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3FyLWNvZGUvcXItY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xci1yZWFkZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuJWNvbG9yIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5xci1pY29uIHtcbiAgQGV4dGVuZCAlY29sb3I7XG4gICRuZmMtaWNvbi1zaXplOiA2MHB4O1xuICB3aWR0aDogJG5mYy1pY29uLXNpemU7XG4gIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG5cbiAgJiA6Om5nLWRlZXAgc3ZnIHtcbiAgICB3aWR0aDogJG5mYy1pY29uLXNpemU7XG4gICAgaGVpZ2h0OiAkbmZjLWljb24tc2l6ZTtcbiAgfVxufVxuXG4ucXItbWVzc2FnZSB7XG4gIEBleHRlbmQgJWNvbG9yO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG4iLCIucXItcmVhZGVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5xci1tZXNzYWdlLCAucXItaWNvbiB7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG4ucXItaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ucXItaWNvbiA6Om5nLWRlZXAgc3ZnIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnFyLW1lc3NhZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QrCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qr-code',
                templateUrl: './qr-code.component.html',
                styleUrls: ['./qr-code.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_utente_service__WEBPACK_IMPORTED_MODULE_5__["UtenteService"] }, { type: src_app_core_services_pagamento_service__WEBPACK_IMPORTED_MODULE_6__["PagamentoService"] }]; }, { scanner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__["ZXingScannerComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/numeric.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/numeric.directive.ts ***!
  \********************************************************/
/*! exports provided: numericValidator, NumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericValidator", function() { return numericValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericDirective", function() { return NumericDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



/** Validatore di caratteri numerici. ritorna */
function numericValidator() {
    return (control) => {
        const isNumeric = new RegExp('^[0-9]*$').test(control.value);
        return !isNumeric ? { 'numeric': { value: control.value } } : null;
    };
}
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

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, QrCodeComponent, NfcComponent, PinComponent, numericValidator, NumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/qr-code/qr-code.component */ "./src/app/shared/components/qr-code/qr-code.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QrCodeComponent", function() { return _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_1__["QrCodeComponent"]; });

/* harmony import */ var _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nfc/nfc.component */ "./src/app/shared/components/nfc/nfc.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NfcComponent", function() { return _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_2__["NfcComponent"]; });

/* harmony import */ var _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pin/pin.component */ "./src/app/shared/components/pin/pin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinComponent", function() { return _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_3__["PinComponent"]; });

/* harmony import */ var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/numeric.directive */ "./src/app/shared/directives/numeric.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numericValidator", function() { return _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_4__["numericValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericDirective", function() { return _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_4__["NumericDirective"]; });








/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/__ivy_ngcc__/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "./src/app/shared/components/error-page/error-page.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/shared/components/error/error.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nfc/nfc.component */ "./src/app/shared/components/nfc/nfc.component.ts");
/* harmony import */ var _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pin/pin.component */ "./src/app/shared/components/pin/pin.component.ts");
/* harmony import */ var _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/qr-code/qr-code.component */ "./src/app/shared/components/qr-code/qr-code.component.ts");
/* harmony import */ var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/numeric.directive */ "./src/app/shared/directives/numeric.directive.ts");














class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_4__["ZXingScannerModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_11__["QrCodeComponent"], _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_9__["NfcComponent"], _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_10__["PinComponent"], _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_12__["NumericDirective"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"], _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_4__["ZXingScannerModule"]], exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_11__["QrCodeComponent"], _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_9__["NfcComponent"], _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_10__["PinComponent"], _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_12__["NumericDirective"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"], _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_4__["ZXingScannerModule"]],
                exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/terasud/JavaProjects/EasyPay/src/main/angular/EasyPay-online/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map