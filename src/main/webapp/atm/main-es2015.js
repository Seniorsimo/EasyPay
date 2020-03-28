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
/* harmony import */ var _features_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _features_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/login-page/login-page.component */ "./src/app/features/login-page/login-page.component.ts");
/* harmony import */ var _features_template_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/template/template.component */ "./src/app/features/template/template.component.ts");
/* harmony import */ var _core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/guards/auth-guard.service */ "./src/app/core/guards/auth-guard.service.ts");
/* harmony import */ var _core_guards_no_login_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/guards/no-login-guard.service */ "./src/app/core/guards/no-login-guard.service.ts");









const routes = [
    {
        path: '',
        component: _features_template_template_component__WEBPACK_IMPORTED_MODULE_4__["TemplateComponent"],
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _features_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
            },
            {
                path: 'login',
                component: _features_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
                canActivate: [_core_guards_no_login_guard_service__WEBPACK_IMPORTED_MODULE_6__["NoLoginGuard"]],
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
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




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
/* harmony import */ var _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/home/home.module */ "./src/app/features/home/home.module.ts");
/* harmony import */ var _features_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/login-page/login-page.module */ "./src/app/features/login-page/login-page.module.ts");
/* harmony import */ var _features_template_template_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/template/template.module */ "./src/app/features/template/template.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _features_template_template_module__WEBPACK_IMPORTED_MODULE_8__["TemplateModule"],
            _features_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
            _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _features_template_template_module__WEBPACK_IMPORTED_MODULE_8__["TemplateModule"],
        _features_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
        _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"]] }); })();
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
                    _shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    _features_template_template_module__WEBPACK_IMPORTED_MODULE_8__["TemplateModule"],
                    _features_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
                    _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/constants/routing.constants.ts":
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
const RoutersPath = {
    base: '/',
    home: 'home',
    login: 'login',
    payment: 'payments',
    movement: 'movements',
    reload: 'reload'
};
const baseUrl = '';
const ApiRoute = {
    login: baseUrl + '/api/login',
};


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
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/cliente.service */ "./src/app/core/services/cliente.service.ts");
/* harmony import */ var _services_commerciante_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/commerciante.service */ "./src/app/core/services/commerciante.service.ts");
/* harmony import */ var _services_pagamento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/pagamento.service */ "./src/app/core/services/pagamento.service.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/routing.service */ "./src/app/core/services/routing.service.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/core/guards/auth-guard.service.ts");
/* harmony import */ var _guards_no_login_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/no-login-guard.service */ "./src/app/core/guards/no-login-guard.service.ts");
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
                _services_commerciante_service__WEBPACK_IMPORTED_MODULE_5__["CommercianteService"],
                _services_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"],
                _services_pagamento_service__WEBPACK_IMPORTED_MODULE_6__["PrezzoService"],
                _services_routing_service__WEBPACK_IMPORTED_MODULE_7__["RoutingService"],
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                _guards_no_login_guard_service__WEBPACK_IMPORTED_MODULE_9__["NoLoginGuard"],
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

/***/ "./src/app/core/guards/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/guards/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_routing_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/routing.constants */ "./src/app/core/constants/routing.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_features_login_page_store_login_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/login-page/store/login.store */ "./src/app/features/login-page/store/login.store.ts");





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
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_features_login_page_store_login_store__WEBPACK_IMPORTED_MODULE_3__["LoginStore"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_features_login_page_store_login_store__WEBPACK_IMPORTED_MODULE_3__["LoginStore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/guards/no-login-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/guards/no-login-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: NoLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoLoginGuard", function() { return NoLoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_routing_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/routing.constants */ "./src/app/core/constants/routing.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_features_login_page_store_login_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/login-page/store/login.store */ "./src/app/features/login-page/store/login.store.ts");





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
NoLoginGuard.ɵfac = function NoLoginGuard_Factory(t) { return new (t || NoLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_features_login_page_store_login_store__WEBPACK_IMPORTED_MODULE_3__["LoginStore"])); };
NoLoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoLoginGuard, factory: NoLoginGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoLoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_features_login_page_store_login_store__WEBPACK_IMPORTED_MODULE_3__["LoginStore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: PrezzoService, CommercianteService, ClienteService, LoaderService, LoadingStatus, RoutersPath, baseUrl, ApiRoute, WrongParamError, CUSTOM_ERROR, COMMERCIANTE_TYPE, CLIENTE_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_routing_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/routing.constants */ "./src/app/core/constants/routing.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutersPath", function() { return _constants_routing_constants__WEBPACK_IMPORTED_MODULE_0__["RoutersPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return _constants_routing_constants__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiRoute", function() { return _constants_routing_constants__WEBPACK_IMPORTED_MODULE_0__["ApiRoute"]; });

/* harmony import */ var _services_pagamento_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/pagamento.service */ "./src/app/core/services/pagamento.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrezzoService", function() { return _services_pagamento_service__WEBPACK_IMPORTED_MODULE_1__["PrezzoService"]; });

/* harmony import */ var _services_commerciante_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/commerciante.service */ "./src/app/core/services/commerciante.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommercianteService", function() { return _services_commerciante_service__WEBPACK_IMPORTED_MODULE_2__["CommercianteService"]; });

/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/cliente.service */ "./src/app/core/services/cliente.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]; });

/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingStatus", function() { return _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoadingStatus"]; });

/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/error.model */ "./src/app/core/models/error.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrongParamError", function() { return _models_error_model__WEBPACK_IMPORTED_MODULE_5__["WrongParamError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_ERROR", function() { return _models_error_model__WEBPACK_IMPORTED_MODULE_5__["CUSTOM_ERROR"]; });

/* harmony import */ var _models_commerciante_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/commerciante.model */ "./src/app/core/models/commerciante.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMERCIANTE_TYPE", function() { return _models_commerciante_model__WEBPACK_IMPORTED_MODULE_6__["COMMERCIANTE_TYPE"]; });

/* harmony import */ var _models_cliente_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/cliente.model */ "./src/app/core/models/cliente.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLIENTE_TYPE", function() { return _models_cliente_model__WEBPACK_IMPORTED_MODULE_7__["CLIENTE_TYPE"]; });












/***/ }),

/***/ "./src/app/core/models/cliente.model.ts":
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

/***/ "./src/app/core/models/commerciante.model.ts":
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

/***/ "./src/app/core/services/cliente.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/cliente.service.ts ***!
  \**************************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/error.model */ "./src/app/core/models/error.model.ts");
/* harmony import */ var _models_cliente_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/cliente.model */ "./src/app/core/models/cliente.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







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

/***/ "./src/app/core/services/commerciante.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/commerciante.service.ts ***!
  \*******************************************************/
/*! exports provided: CommercianteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommercianteService", function() { return CommercianteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_commerciante_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/commerciante.model */ "./src/app/core/models/commerciante.model.ts");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/error.model */ "./src/app/core/models/error.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







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
/*! exports provided: PrezzoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrezzoService", function() { return PrezzoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/error.model */ "./src/app/core/models/error.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_core_services_commerciante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/commerciante.service */ "./src/app/core/services/commerciante.service.ts");
/* harmony import */ var src_app_core_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/cliente.service */ "./src/app/core/services/cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








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

/***/ "./src/app/core/services/routing.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/routing.service.ts ***!
  \**************************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/routing.constants */ "./src/app/core/constants/routing.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





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

/***/ "./src/app/features/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/routing.service */ "./src/app/core/services/routing.service.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _shared_components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/big-button/big-button.component */ "./src/app/shared/components/big-button/big-button.component.ts");
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/banner/banner.component */ "./src/app/shared/components/banner/banner.component.ts");






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
    }
    gotoMovements() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 14, vars: 0, consts: [["cols", "3", "rowHeight", "2:1", "gutterSize", "30px"], ["label", "Pagamento", "icon", "euro", 1, "button", 3, "clickEmitter"], ["label", "Info Conto", "icon", "info", 1, "button", 3, "clickEmitter"], ["label", "Ricarica", "icon", "publish", 1, "button", 3, "clickEmitter"], ["label", "Movimenti", "icon", "account_balance_wallet", 1, "button", 3, "clickEmitter"], ["colspan", "3", "rowspan", "1"], [1, "widget-container", "shadow-border", "spam-widget"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-big-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function HomeComponent_Template_app_big_button_clickEmitter_2_listener() { return ctx.gotoPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-big-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function HomeComponent_Template_app_big_button_clickEmitter_5_listener() { return ctx.gotoPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-big-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function HomeComponent_Template_app_big_button_clickEmitter_7_listener() { return ctx.gotoPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-big-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function HomeComponent_Template_app_big_button_clickEmitter_10_listener() { return ctx.gotoMovements(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _shared_components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_3__["BigButtonComponent"], _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"]], styles: [".button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiIsIi5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/home/home.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/features/home/home.component.ts");






class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], src_app_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], src_app_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], src_app_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
                exports: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/login-page/login-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/login-page/login-page.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/big-button/big-button.component */ "./src/app/shared/components/big-button/big-button.component.ts");
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/banner/banner.component */ "./src/app/shared/components/banner/banner.component.ts");







function LoginPageComponent_mat_grid_tile_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-grid-tile", 8);
} }
function LoginPageComponent_mat_grid_tile_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-grid-tile", 9);
} }
function LoginPageComponent_mat_grid_tile_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-banner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginPageComponent {
    constructor() {
        this.maxCol = 6;
        this.minCol = 2;
        this.deviceSize = 850;
    }
    ngOnInit() {
        this.breakpoint = (window.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
    }
    clickInfo() {
        console.warn('not yet implement');
    }
    randomColor() {
        // return 'white';
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 9, vars: 5, consts: [["rowHeight", "1:1", "gutterSize", "20px", 3, "cols", "resize"], ["colspan", "2", "rowspan", "2"], [1, "widget-container", "login-widget", "shadow-border"], ["class", "empty", "colspan", "3", "rowspan", "2", 4, "ngIf"], ["rowspan", "1", 3, "colspan"], ["label", "Info Conto", "icon", "info", 1, "info_conto", 3, "clickEmitter"], ["class", "empty", "colspan", "1", "rowspan", "1", 4, "ngIf"], ["colspan", "6", "rowspan", "1", 4, "ngIf"], ["colspan", "3", "rowspan", "2", 1, "empty"], ["colspan", "1", "rowspan", "1", 1, "empty"], ["colspan", "6", "rowspan", "1"], [1, "widget-container", "shadow-border", "spam-widget"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function LoginPageComponent_Template_mat_grid_list_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginPageComponent_mat_grid_tile_4_Template, 1, 0, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-big-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function LoginPageComponent_Template_app_big_button_clickEmitter_6_listener() { return ctx.clickInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginPageComponent_mat_grid_tile_7_Template, 1, 0, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginPageComponent_mat_grid_tile_8_Template, 3, 0, "mat-grid-tile", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.breakpoint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breakpoint === ctx.maxCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.breakpoint === ctx.maxCol ? 1 : 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breakpoint === ctx.maxCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breakpoint === ctx.maxCol);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTile"], _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_4__["BigButtonComponent"], _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"]], styles: [".widget-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 99%;\n  padding: 0;\n}\n\n.info_conto[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL2ZlYXR1cmVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0g7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGdldC1jb250YWluZXIge1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6IDk5JTtcbiAgIHBhZGRpbmc6IDA7XG59XG5cbi5pbmZvX2NvbnRvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsIi53aWRnZXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTklO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW5mb19jb250byB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/features/login-page/login-page.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/login-page/login-page.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page.component */ "./src/app/features/login-page/login-page.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/login.service */ "./src/app/features/login-page/services/login.service.ts");
/* harmony import */ var _store_login_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/login.store */ "./src/app/features/login-page/store/login.store.ts");







class LoginPageModule {
}
LoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); }, providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _store_login_store__WEBPACK_IMPORTED_MODULE_5__["LoginStore"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]], exports: [_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
                exports: [_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]],
                providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _store_login_store__WEBPACK_IMPORTED_MODULE_5__["LoginStore"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/login-page/services/login.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/login-page/services/login.service.ts ***!
  \***************************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _store_login_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/login.store */ "./src/app/features/login-page/store/login.store.ts");






class LoginService {
    constructor(http, loginStore) {
        this.http = http;
        this.loginStore = loginStore;
    }
    getToken(username, password) {
        const params = { username, password };
        return this.http.post(_core__WEBPACK_IMPORTED_MODULE_1__["ApiRoute"].login, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            if (response && response.token) {
                this.loginStore.token = response.token;
                return response.token;
            }
            return '';
        }));
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_store_login_store__WEBPACK_IMPORTED_MODULE_4__["LoginStore"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _store_login_store__WEBPACK_IMPORTED_MODULE_4__["LoginStore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/login-page/store/login.store.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/login-page/store/login.store.ts ***!
  \**********************************************************/
/*! exports provided: LoginStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStore", function() { return LoginStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginStore {
    constructor() {
    }
    get token() {
        return this.pToken || localStorage.getItem('token');
    }
    set token(token) {
        this.pToken = token;
        localStorage.setItem('token', token);
    }
}
LoginStore.ɵfac = function LoginStore_Factory(t) { return new (t || LoginStore)(); };
LoginStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginStore, factory: LoginStore.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/features/template/template.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/template/template.component.ts ***!
  \*********************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/routing.service */ "./src/app/core/services/routing.service.ts");
/* harmony import */ var _login_page_store_login_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-page/store/login.store */ "./src/app/features/login-page/store/login.store.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










function TemplateComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Movimenti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TemplateComponent {
    constructor(routingService, loginStore) {
        this.routingService = routingService;
        this.loginStore = loginStore;
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
        return !!this.loginStore.token;
    }
    logout() {
        this.loginStore.token = undefined;
        this.routingService.gotoLogin();
    }
}
TemplateComponent.ɵfac = function TemplateComponent_Factory(t) { return new (t || TemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_page_store_login_store__WEBPACK_IMPORTED_MODULE_2__["LoginStore"])); };
TemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateComponent, selectors: [["app-template"]], decls: 36, vars: 3, consts: [["color", "primary"], ["mat-icon-button", "", "aria-label", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "title-big"], [1, "title-separe"], [1, "title-activePage"], [1, "container"]], template: function TemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_Template_button_click_7_listener() { return ctx.routingService.gotoHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_Template_button_click_12_listener() { return ctx.routingService.gotoReload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "publish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ricarica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_Template_button_click_17_listener() { return ctx.routingService.gotoPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "euro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pagamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_Template_button_click_22_listener() { return ctx.routingService.gotoMovement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "account_balance_wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Movimenti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TemplateComponent_button_27_Template, 5, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "EasyPay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " --> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actSection, " ");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-right: 6%;\n  margin-left: 6%;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%] {\n  margin-right: 4%;\n  margin-left: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL2ZlYXR1cmVzL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBSmU7RUFLZixlQUxlO0FDR2pCOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAkbWFyZ2luQm9yZGVyOiA2JTtcblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogJG1hcmdpbkJvcmRlcjtcbiAgbWFyZ2luLWxlZnQ6ICRtYXJnaW5Cb3JkZXI7XG59XG5cbm1hdC10b29sYmFyLXJvdyB7XG4gIG1hcmdpbi1yaWdodDogJG1hcmdpbkJvcmRlciAtIDIlO1xuICBtYXJnaW4tbGVmdDogJG1hcmdpbkJvcmRlciAtIDIlO1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNiU7XG4gIG1hcmdpbi1sZWZ0OiA2JTtcbn1cblxubWF0LXRvb2xiYXItcm93IHtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-template',
                templateUrl: './template.component.html',
                styleUrls: ['./template.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"] }, { type: _login_page_store_login_store__WEBPACK_IMPORTED_MODULE_2__["LoginStore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/template/template.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/template/template.module.ts ***!
  \******************************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template.component */ "./src/app/features/template/template.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.module */ "./src/app/features/home/home.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










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

/***/ "./src/app/shared/components/banner/banner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/banner/banner.component.ts ***!
  \**************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BannerComponent {
    constructor() {
    }
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

/***/ "./src/app/shared/components/big-button/big-button.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/big-button/big-button.component.ts ***!
  \**********************************************************************/
/*! exports provided: BigButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigButtonComponent", function() { return BigButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");



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
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  text-align: center;\n  cursor: pointer;\n  padding: 0;\n}\n\n.icon-content[_ngcontent-%COMP%] {\n  height: 70%;\n  position: relative;\n  background-color: #d5e6f2;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 8vw;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.label-body[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30%;\n}\n\n.label[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 2vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JpZy1idXR0b24vYmlnLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmlnLWJ1dHRvbi9iaWctYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FDQUg7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNERjs7QURLQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9iaWctYnV0dG9uL2JpZy1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cblxuLmljb24tY29udGVudCB7XG4gIGhlaWdodDogNzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWU2ZjI7XG59XG5cbi5pY29uIHtcbiAgIGZvbnQtc2l6ZTogOHZ3O1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgdG9wOiA0NSU7XG4gICBsZWZ0OiA1MCU7XG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cblxuLmxhYmVsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzAlO1xuXG59XG5cbi5sYWJlbHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICAvLyBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZpeC10b3Age1xuICAvLyB0b3A6IDcwJTtcbn1cbiIsIi5idXR0b24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmljb24tY29udGVudCB7XG4gIGhlaWdodDogNzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWU2ZjI7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA4dnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4ubGFiZWwtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbi5sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDJ2dztcbn0iXX0= */"] });
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
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/error.component */ "./src/app/shared/components/error/error.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









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
    constructor() {
    }
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
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  color: #f00;\n}\n.logo[_ngcontent-%COMP%]     svg {\n  width: 90px;\n  height: 90px;\n}\n.logo-title[_ngcontent-%COMP%] {\n  color: #f00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFdBRGdCO0VBRWhCLFlBRmdCO0VBR2hCLFdBTE07QUNJUjtBREdFO0VBQ0UsV0FOYztFQU9kLFlBUGM7QUNNbEI7QURLQTtFQUNFLFdBZE07QUNZUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yOiAjZjAwO1xuLmxvZ28ge1xuICAkbmZjLWljb24tc2l6ZTogOTBweDtcbiAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRuZmMtaWNvbi1zaXplO1xuICBjb2xvcjogJGNvbG9yO1xuXG4gICYgOjpuZy1kZWVwIHN2ZyB7XG4gICAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICAgIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG4gIH1cbn1cblxuLmxvZ28tdGl0bGUge1xuICBjb2xvcjogJGNvbG9yO1xufVxuIiwiLmxvZ28ge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBjb2xvcjogI2YwMDtcbn1cbi5sb2dvIDo6bmctZGVlcCBzdmcge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4ubG9nby10aXRsZSB7XG4gIGNvbG9yOiAjZjAwO1xufSJdfQ== */"] });
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
    constructor() {
    }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 0, consts: [["src", "assets/loader.gif", "alt", "loader"], ["svgIcon", "bank", 1, "logo"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 1);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  position: absolute;\n  top: 195px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.logo[_ngcontent-%COMP%]     svg {\n  width: 90px;\n  height: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQURnQjtFQUVoQixZQUZnQjtFQVNoQixrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUNORjtBREZFO0VBQ0UsV0FMYztFQU1kLFlBTmM7QUNVbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAkbmZjLWljb24tc2l6ZTogOTBweDtcbiAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRuZmMtaWNvbi1zaXplO1xuXG4gICYgOjpuZy1kZWVwIHN2ZyB7XG4gICAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICAgIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG4gIH1cblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTk1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuIiwiLmxvZ28ge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTk1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmxvZ28gOjpuZy1kZWVwIHN2ZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/login-type.enum */ "./src/app/shared/constants/login-type.enum.ts");
/* harmony import */ var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/routing.service */ "./src/app/core/services/routing.service.ts");
/* harmony import */ var src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/login-page/services/login.service */ "./src/app/features/login-page/services/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _pin_pin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pin/pin.component */ "./src/app/shared/components/pin/pin.component.ts");
/* harmony import */ var _qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../qr-code/qr-code.component */ "./src/app/shared/components/qr-code/qr-code.component.ts");
/* harmony import */ var _nfc_nfc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nfc/nfc.component */ "./src/app/shared/components/nfc/nfc.component.ts");











function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginEvent", function LoginComponent_div_2_Template_div_loginEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.login($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qr-code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nfc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
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
    login({ username, password }) {
        this.loginService.getToken(username, password);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 11, vars: 3, consts: [[1, "content"], [1, "login-body"], [3, "loginEvent", 4, "ngIf"], [4, "ngIf"], ["mat-icon-button", "", 3, "click"], ["svgIcon", "textbox-password"], ["mat-icon-button", "", 1, "mr-2", "ml-2", 3, "click"], ["svgIcon", "qrcode"], ["svgIcon", "nfc-variant"], [3, "loginEvent"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_5_listener() { return ctx.changeLogin(ctx.LoginType.pin); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_7_listener() { return ctx.changeLogin(ctx.LoginType.qr); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_9_listener() { return ctx.changeLogin(ctx.LoginType.nfc); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType === ctx.LoginType.pin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType === ctx.LoginType.qr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType === ctx.LoginType.nfc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _pin_pin_component__WEBPACK_IMPORTED_MODULE_7__["PinComponent"], _qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_8__["QrCodeComponent"], _nfc_nfc_component__WEBPACK_IMPORTED_MODULE_9__["NfcComponent"]], styles: [".login-body[_ngcontent-%COMP%] {\n  height: 170px;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURJQTtFQUNFLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJvZHkge1xuICBoZWlnaHQ6IDE3MHB4O1xuICAvLyBtaW4td2lkdGg6IDIwNXB4O1xuXG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAzMHB4O1xufVxuIiwiLmxvZ2luLWJvZHkge1xuICBoZWlnaHQ6IDE3MHB4O1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogMzBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"] }, { type: src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }]; }, null); })();


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
    constructor() {
    }
    ngOnInit() {
    }
}
NfcComponent.ɵfac = function NfcComponent_Factory(t) { return new (t || NfcComponent)(); };
NfcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NfcComponent, selectors: [["app-nfc"]], decls: 3, vars: 0, consts: [["svgIcon", "nfc-variant", 1, "nfc-icon"], [1, "nfc-message"]], template: function NfcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "passare il cellulare con nfc abilitato sul dispositivo per collegarsi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".nfc-message[_ngcontent-%COMP%], .nfc-icon[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n.nfc-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.nfc-icon[_ngcontent-%COMP%]     svg {\n  width: 60px;\n  height: 60px;\n}\n\n.nfc-message[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25mYy9uZmMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25mYy9uZmMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFHRSxXQURnQjtFQUVoQixZQUZnQjtBQ0NsQjs7QURHRTtFQUNFLFdBTGM7RUFNZCxZQU5jO0FDS2xCOztBREtBO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZmMvbmZjLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWNvbG9yIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5uZmMtaWNvbiB7XG4gIEBleHRlbmQgJWNvbG9yO1xuICAkbmZjLWljb24tc2l6ZTogNjBweDtcbiAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRuZmMtaWNvbi1zaXplO1xuXG4gICYgOjpuZy1kZWVwIHN2ZyB7XG4gICAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICAgIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG4gIH1cbn1cblxuLm5mYy1tZXNzYWdlIHtcbiAgQGV4dGVuZCAlY29sb3I7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cbiIsIi5uZmMtbWVzc2FnZSwgLm5mYy1pY29uIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5uZmMtaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubmZjLWljb24gOjpuZy1kZWVwIHN2ZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5uZmMtbWVzc2FnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn0iXX0= */"] });
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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " il pin \u00E8 composto da 4 cifre ");
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
            pinCode: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_directives_numeric_directive__WEBPACK_IMPORTED_MODULE_2__["numericValidator"])(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)])
        });
    }
    ngOnInit() { }
    login() {
        this.loginEvent.emit({ username: this.formCrl.value.userId, password: this.formCrl.value.pinCode });
    }
}
PinComponent.ɵfac = function PinComponent_Factory(t) { return new (t || PinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
PinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PinComponent, selectors: [["app-pin"]], outputs: { loginEvent: "loginEvent" }, decls: 16, vars: 5, consts: [[1, "form", 3, "formGroup"], [1, "full-width"], ["matInput", "", "placeholder", "ID*", "formControlName", "userId"], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Pin*", "formControlName", "pinCode"], [1, "login"], ["mat-button", "", "color", "primary", 3, "disabled", "click"]], template: function PinComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["pinCode"].hasError("minLength") || ctx.formCrl.controls["pinCode"].hasError("maxLength") || ctx.formCrl.controls["pinCode"].hasError("numeric"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["pinCode"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formCrl.status === "INVALID");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: [".login[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bpbi9waW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bpbi9waW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGluL3Bpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iLCIubG9naW4ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"] });
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
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










class QrCodeComponent {
    constructor(clienteService, pagamentoService) {
        this.clienteService = clienteService;
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
        this.clienteService.getClienteByToken(token).subscribe(result => {
            if (result.type !== src_app_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ERROR"]) {
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
QrCodeComponent.ɵfac = function QrCodeComponent_Factory(t) { return new (t || QrCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_4__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_4__["PrezzoService"])); };
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
    } }, directives: [_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__["ZXingScannerComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".qr-reader[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: auto;\n}\n\n.qr-message[_ngcontent-%COMP%], .qr-icon[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n.qr-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.qr-icon[_ngcontent-%COMP%]     svg {\n  width: 60px;\n  height: 60px;\n}\n\n.qr-message[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3FyLWNvZGUvcXItY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcXItY29kZS9xci1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUdFLFdBRGdCO0VBRWhCLFlBRmdCO0FDQ2xCOztBREdFO0VBQ0UsV0FMYztFQU1kLFlBTmM7QUNLbEI7O0FES0E7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3FyLWNvZGUvcXItY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xci1yZWFkZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuJWNvbG9yIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5xci1pY29uIHtcbiAgQGV4dGVuZCAlY29sb3I7XG4gICRuZmMtaWNvbi1zaXplOiA2MHB4O1xuICB3aWR0aDogJG5mYy1pY29uLXNpemU7XG4gIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG5cbiAgJiA6Om5nLWRlZXAgc3ZnIHtcbiAgICB3aWR0aDogJG5mYy1pY29uLXNpemU7XG4gICAgaGVpZ2h0OiAkbmZjLWljb24tc2l6ZTtcbiAgfVxufVxuXG4ucXItbWVzc2FnZSB7XG4gIEBleHRlbmQgJWNvbG9yO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG4iLCIucXItcmVhZGVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5xci1tZXNzYWdlLCAucXItaWNvbiB7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG4ucXItaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ucXItaWNvbiA6Om5nLWRlZXAgc3ZnIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnFyLW1lc3NhZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG59Il19 */"] });
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


/***/ }),

/***/ "./src/app/shared/constants/login-type.enum.ts":
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
/*! exports provided: SharedModule, LoginType, QrCodeComponent, NfcComponent, PinComponent, LoginComponent, BigButtonComponent, numericValidator, NumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/login-type.enum */ "./src/app/shared/constants/login-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginType", function() { return _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__["LoginType"]; });

/* harmony import */ var _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/qr-code/qr-code.component */ "./src/app/shared/components/qr-code/qr-code.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QrCodeComponent", function() { return _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_2__["QrCodeComponent"]; });

/* harmony import */ var _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nfc/nfc.component */ "./src/app/shared/components/nfc/nfc.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NfcComponent", function() { return _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_3__["NfcComponent"]; });

/* harmony import */ var _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pin/pin.component */ "./src/app/shared/components/pin/pin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinComponent", function() { return _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_4__["PinComponent"]; });

/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]; });

/* harmony import */ var _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/big-button/big-button.component */ "./src/app/shared/components/big-button/big-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BigButtonComponent", function() { return _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_6__["BigButtonComponent"]; });

/* harmony import */ var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/numeric.directive */ "./src/app/shared/directives/numeric.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numericValidator", function() { return _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_7__["numericValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericDirective", function() { return _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_7__["NumericDirective"]; });











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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/__ivy_ngcc__/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/big-button/big-button.component */ "./src/app/shared/components/big-button/big-button.component.ts");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "./src/app/shared/components/error-page/error-page.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/shared/components/error/error.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony import */ var _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/nfc/nfc.component */ "./src/app/shared/components/nfc/nfc.component.ts");
/* harmony import */ var _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pin/pin.component */ "./src/app/shared/components/pin/pin.component.ts");
/* harmony import */ var _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/qr-code/qr-code.component */ "./src/app/shared/components/qr-code/qr-code.component.ts");
/* harmony import */ var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/numeric.directive */ "./src/app/shared/directives/numeric.directive.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/shared/components/banner/banner.component.ts");




















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_7__["ZXingScannerModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
        ],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_16__["QrCodeComponent"],
        _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_14__["NfcComponent"],
        _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_15__["PinComponent"],
        _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_17__["NumericDirective"],
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"],
        _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"],
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_9__["BigButtonComponent"],
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_18__["BannerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_7__["ZXingScannerModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"]], exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_9__["BigButtonComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_18__["BannerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_16__["QrCodeComponent"],
                    _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_14__["NfcComponent"],
                    _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_15__["PinComponent"],
                    _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_17__["NumericDirective"],
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"],
                    _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"],
                    _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                    _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_9__["BigButtonComponent"],
                    _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_18__["BannerComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_7__["ZXingScannerModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                ],
                exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_9__["BigButtonComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_18__["BannerComponent"]]
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

module.exports = __webpack_require__(/*! /home/terasud/JavaProjects/EasyPay/src/main/angular/easypay-atm/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map