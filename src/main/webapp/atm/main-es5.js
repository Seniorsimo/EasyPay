function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _features_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./features/home/home.component */
    "./src/app/features/home/home.component.ts");
    /* harmony import */


    var _features_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./features/login-page/login-page.component */
    "./src/app/features/login-page/login-page.component.ts");
    /* harmony import */


    var _features_template_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./features/template/template.component */
    "./src/app/features/template/template.component.ts");
    /* harmony import */


    var _core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/guards/auth-guard.service */
    "./src/app/core/guards/auth-guard.service.ts");
    /* harmony import */


    var _core_guards_no_login_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core/guards/no-login-guard.service */
    "./src/app/core/guards/no-login-guard.service.ts");
    /* harmony import */


    var _features_payments_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./features/payments/payments.component */
    "./src/app/features/payments/payments.component.ts");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./core */
    "./src/app/core/index.ts");

    var routes = [{
      path: '',
      component: _features_template_template_component__WEBPACK_IMPORTED_MODULE_4__["TemplateComponent"],
      children: [{
        path: _core__WEBPACK_IMPORTED_MODULE_8__["RoutersPath"].base,
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: _core__WEBPACK_IMPORTED_MODULE_8__["RoutersPath"].home,
        component: _features_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: _core__WEBPACK_IMPORTED_MODULE_8__["RoutersPath"].login,
        component: _features_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
        canActivate: [_core_guards_no_login_guard_service__WEBPACK_IMPORTED_MODULE_6__["NoLoginGuard"]]
      }, {
        path: _core__WEBPACK_IMPORTED_MODULE_8__["RoutersPath"].payment,
        component: _features_payments_payments_component__WEBPACK_IMPORTED_MODULE_7__["PaymentsComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(loaderService) {
      _classCallCheck(this, AppComponent);

      this.loaderService = loaderService;
      this.statusLoader$ = this.loaderService.status$;
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _core__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./features/home/home.module */
    "./src/app/features/home/home.module.ts");
    /* harmony import */


    var _features_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./features/login-page/login-page.module */
    "./src/app/features/login-page/login-page.module.ts");
    /* harmony import */


    var _features_payments_payments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./features/payments/payments.module */
    "./src/app/features/payments/payments.module.ts");
    /* harmony import */


    var _features_template_template_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./features/template/template.module */
    "./src/app/features/template/template.module.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared */
    "./src/app/shared/index.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _features_template_template_module__WEBPACK_IMPORTED_MODULE_9__["TemplateModule"], _features_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"], _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"], _features_payments_payments_module__WEBPACK_IMPORTED_MODULE_8__["PaymentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _features_template_template_module__WEBPACK_IMPORTED_MODULE_9__["TemplateModule"], _features_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"], _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"], _features_payments_payments_module__WEBPACK_IMPORTED_MODULE_8__["PaymentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _features_template_template_module__WEBPACK_IMPORTED_MODULE_9__["TemplateModule"], _features_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"], _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"], _features_payments_payments_module__WEBPACK_IMPORTED_MODULE_8__["PaymentsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/constants/routing.constants.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/constants/routing.constants.ts ***!
    \*****************************************************/

  /*! exports provided: RoutersPath, baseUrl, ApiRoute */

  /***/
  function srcAppCoreConstantsRoutingConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutersPath", function () {
      return RoutersPath;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
      return baseUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiRoute", function () {
      return ApiRoute;
    });
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var RoutersPath = {
      base: '',
      home: 'home',
      login: 'login',
      payment: 'payments',
      movement: 'movements',
      reload: 'reload'
    };
    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
    var ApiRoute = {
      login: baseUrl + 'api/login',
      logout: baseUrl + 'api/logout',
      clienti: baseUrl + 'api/clienti'
    };
    /***/
  },

  /***/
  "./src/app/core/constants/user-type.enum.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/constants/user-type.enum.ts ***!
    \**************************************************/

  /*! exports provided: UserType */

  /***/
  function srcAppCoreConstantsUserTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserType", function () {
      return UserType;
    });
    /** Tipologia di utente che può essere */


    var UserType;

    (function (UserType) {
      UserType["customer"] = "cliente";
      UserType["merchant"] = "commerciante";
    })(UserType || (UserType = {}));
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./guards/auth-guard.service */
    "./src/app/core/guards/auth-guard.service.ts");
    /* harmony import */


    var _guards_no_login_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guards/no-login-guard.service */
    "./src/app/core/guards/no-login-guard.service.ts");
    /* harmony import */


    var _services_cliente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/cliente.service */
    "./src/app/core/services/cliente.service.ts");
    /* harmony import */


    var _services_commerciante_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/commerciante.service */
    "./src/app/core/services/commerciante.service.ts");
    /* harmony import */


    var _services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/loader.service */
    "./src/app/core/services/loader.service.ts");
    /* harmony import */


    var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/local-storage.service */
    "./src/app/core/services/local-storage.service.ts");
    /* harmony import */


    var _services_pagamento_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/pagamento.service */
    "./src/app/core/services/pagamento.service.ts");
    /* harmony import */


    var _services_routing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/routing.service */
    "./src/app/core/services/routing.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var CoreModule =
    /*#__PURE__*/
    function () {
      function CoreModule(matIconRegistry, domSanitizer) {
        _classCallCheck(this, CoreModule);

        // aggiunge le nuova svg a material
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('assets/svgs/mdi.svg')); // matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../../assets/fonts/materialdesignicons-webfont.woff'));
      }

      _createClass(CoreModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: CoreModule,
            providers: [_services_commerciante_service__WEBPACK_IMPORTED_MODULE_7__["CommercianteService"], _services_cliente_service__WEBPACK_IMPORTED_MODULE_6__["ClienteService"], _services_pagamento_service__WEBPACK_IMPORTED_MODULE_10__["PrezzoService"], _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"], _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _guards_no_login_guard_service__WEBPACK_IMPORTED_MODULE_5__["NoLoginGuard"], _services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"]]
          };
        }
      }]);

      return CoreModule;
    }();

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]));
      },
      providers: [
        /* No providers */
      ],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
        exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
          exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
          providers: [
            /* No providers */
          ]
        }]
      }], function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/guards/auth-guard.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/guards/auth-guard.service.ts ***!
    \***************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppCoreGuardsAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_routing_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants/routing.constants */
    "./src/app/core/constants/routing.constants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_features_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/features/login-page/store/auth.store */
    "./src/app/features/login-page/store/auth.store.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, loginStore) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.loginStore = loginStore;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.loginStore.token) {
            this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_1__["RoutersPath"].login]);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_features_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_features_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/guards/no-login-guard.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/guards/no-login-guard.service.ts ***!
    \*******************************************************/

  /*! exports provided: NoLoginGuard */

  /***/
  function srcAppCoreGuardsNoLoginGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoLoginGuard", function () {
      return NoLoginGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_routing_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants/routing.constants */
    "./src/app/core/constants/routing.constants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_features_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/features/login-page/store/auth.store */
    "./src/app/features/login-page/store/auth.store.ts");

    var NoLoginGuard =
    /*#__PURE__*/
    function () {
      function NoLoginGuard(router, loginStore) {
        _classCallCheck(this, NoLoginGuard);

        this.router = router;
        this.loginStore = loginStore;
      }

      _createClass(NoLoginGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.loginStore.token) {
            this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_1__["RoutersPath"].home]);
            return false;
          }

          return true;
        }
      }]);

      return NoLoginGuard;
    }();

    NoLoginGuard.ɵfac = function NoLoginGuard_Factory(t) {
      return new (t || NoLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_features_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"]));
    };

    NoLoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NoLoginGuard,
      factory: NoLoginGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoLoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_features_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/index.ts":
  /*!*******************************!*\
    !*** ./src/app/core/index.ts ***!
    \*******************************/

  /*! exports provided: PrezzoService, CommercianteService, ClienteService, LoaderService, LoadingStatus, LocalStorageService, RoutersPath, baseUrl, ApiRoute, WrongParamError, CUSTOM_ERROR, COMMERCIANTE_TYPE, CLIENTE_TYPE */

  /***/
  function srcAppCoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _constants_routing_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./constants/routing.constants */
    "./src/app/core/constants/routing.constants.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RoutersPath", function () {
      return _constants_routing_constants__WEBPACK_IMPORTED_MODULE_0__["RoutersPath"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
      return _constants_routing_constants__WEBPACK_IMPORTED_MODULE_0__["baseUrl"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiRoute", function () {
      return _constants_routing_constants__WEBPACK_IMPORTED_MODULE_0__["ApiRoute"];
    });
    /* harmony import */


    var _services_pagamento_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/pagamento.service */
    "./src/app/core/services/pagamento.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PrezzoService", function () {
      return _services_pagamento_service__WEBPACK_IMPORTED_MODULE_1__["PrezzoService"];
    });
    /* harmony import */


    var _services_commerciante_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/commerciante.service */
    "./src/app/core/services/commerciante.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CommercianteService", function () {
      return _services_commerciante_service__WEBPACK_IMPORTED_MODULE_2__["CommercianteService"];
    });
    /* harmony import */


    var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/cliente.service */
    "./src/app/core/services/cliente.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClienteService", function () {
      return _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"];
    });
    /* harmony import */


    var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/loader.service */
    "./src/app/core/services/loader.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadingStatus", function () {
      return _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoadingStatus"];
    });
    /* harmony import */


    var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/local-storage.service */
    "./src/app/core/services/local-storage.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"];
    });
    /* harmony import */


    var _models_error_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./models/error.model */
    "./src/app/core/models/error.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WrongParamError", function () {
      return _models_error_model__WEBPACK_IMPORTED_MODULE_6__["WrongParamError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CUSTOM_ERROR", function () {
      return _models_error_model__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_ERROR"];
    });
    /* harmony import */


    var _models_commerciante_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./models/commerciante.model */
    "./src/app/core/models/commerciante.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "COMMERCIANTE_TYPE", function () {
      return _models_commerciante_model__WEBPACK_IMPORTED_MODULE_7__["COMMERCIANTE_TYPE"];
    });
    /* harmony import */


    var _models_cliente_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./models/cliente.model */
    "./src/app/core/models/cliente.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CLIENTE_TYPE", function () {
      return _models_cliente_model__WEBPACK_IMPORTED_MODULE_8__["CLIENTE_TYPE"];
    });
    /***/

  },

  /***/
  "./src/app/core/models/cliente.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/core/models/cliente.model.ts ***!
    \**********************************************/

  /*! exports provided: CLIENTE_TYPE */

  /***/
  function srcAppCoreModelsClienteModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLIENTE_TYPE", function () {
      return CLIENTE_TYPE;
    });

    var CLIENTE_TYPE = 'CLIENTE_TYPE';
    /***/
  },

  /***/
  "./src/app/core/models/commerciante.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/models/commerciante.model.ts ***!
    \***************************************************/

  /*! exports provided: COMMERCIANTE_TYPE */

  /***/
  function srcAppCoreModelsCommercianteModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMMERCIANTE_TYPE", function () {
      return COMMERCIANTE_TYPE;
    });

    var COMMERCIANTE_TYPE = 'COMMERCIANTE_TYPE';
    /***/
  },

  /***/
  "./src/app/core/models/error.model.ts":
  /*!********************************************!*\
    !*** ./src/app/core/models/error.model.ts ***!
    \********************************************/

  /*! exports provided: WrongParamError, CUSTOM_ERROR */

  /***/
  function srcAppCoreModelsErrorModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WrongParamError", function () {
      return WrongParamError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CUSTOM_ERROR", function () {
      return CUSTOM_ERROR;
    });

    var WrongParamError = function WrongParamError(param) {
      _classCallCheck(this, WrongParamError);

      this.type = CUSTOM_ERROR;
      this.name = '';
      this.message = '';
      this.name = 'Errore nei parametri';
      this.message = JSON.stringify(param);
    };

    var CUSTOM_ERROR = 'CUSTOM_ERROR';
    /***/
  },

  /***/
  "./src/app/core/services/cliente.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/cliente.service.ts ***!
    \**************************************************/

  /*! exports provided: ClienteService */

  /***/
  function srcAppCoreServicesClienteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClienteService", function () {
      return ClienteService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_error_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/error.model */
    "./src/app/core/models/error.model.ts");
    /* harmony import */


    var _models_cliente_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/cliente.model */
    "./src/app/core/models/cliente.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ClienteService =
    /*#__PURE__*/
    function () {
      function ClienteService(httpClient) {
        _classCallCheck(this, ClienteService);

        this.httpClient = httpClient;
        this.cliente$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          type: _models_cliente_model__WEBPACK_IMPORTED_MODULE_4__["CLIENTE_TYPE"],
          id: '',
          pin: '',
          token: '',
          nome: '',
          budget: 0
        });
      }

      _createClass(ClienteService, [{
        key: "getClienteByPin",
        value: function getClienteByPin(id, pin) {
          // se già presente nello store non riscarica i dati del cliente:
          if (this.cliente$.value.id) {
            return this.cliente$;
          }

          if (!id || !pin) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _models_error_model__WEBPACK_IMPORTED_MODULE_3__["WrongParamError"]({
              id: id,
              pin: pin
            }));
          }

          var params = {
            id: id,
            pin: pin
          };
          return this._getClient(params);
        }
      }, {
        key: "getClienteByToken",
        value: function getClienteByToken(token) {
          // se già presente nello store non riscarica i dati del cliente:
          if (this.cliente$.value.id) {
            return this.cliente$;
          }

          if (!token) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _models_error_model__WEBPACK_IMPORTED_MODULE_3__["WrongParamError"](token));
          }

          var params = {
            token: token
          };
          return this._getClient(params);
        }
        /** effettua la richiesta HTTP per verificare se il login del cliente va a buon fine */

      }, {
        key: "_getClient",
        value: function _getClient(params) {
          var _this = this;

          var formData = new FormData();
          formData.append('id', params.id);
          formData.append('pin', params.pin);
          formData.append('token', params.token);
          return this.httpClient.post('/api/clienti', formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            if (result && result.success) {
              var cliente = Object.assign({
                type: _models_cliente_model__WEBPACK_IMPORTED_MODULE_4__["CLIENTE_TYPE"]
              }, result.body);

              _this.cliente$.next(cliente);

              return cliente;
            } else {
              throw {
                type: _models_error_model__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ERROR"],
                name: 'account not found',
                message: "non \xE8 stato possibile trovare l'account"
              };
            }
          }));
        }
      }]);

      return ClienteService;
    }();

    ClienteService.ɵfac = function ClienteService_Factory(t) {
      return new (t || ClienteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    ClienteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClienteService,
      factory: ClienteService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClienteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/commerciante.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/services/commerciante.service.ts ***!
    \*******************************************************/

  /*! exports provided: CommercianteService */

  /***/
  function srcAppCoreServicesCommercianteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommercianteService", function () {
      return CommercianteService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_commerciante_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/commerciante.model */
    "./src/app/core/models/commerciante.model.ts");
    /* harmony import */


    var _models_error_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/error.model */
    "./src/app/core/models/error.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CommercianteService =
    /*#__PURE__*/
    function () {
      function CommercianteService(httpClient) {
        _classCallCheck(this, CommercianteService);

        this.httpClient = httpClient;
        this.contoCommerciante$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          type: _models_commerciante_model__WEBPACK_IMPORTED_MODULE_3__["COMMERCIANTE_TYPE"],
          idConto: '',
          nome: '',
          nomenclatura: ''
        });
      }

      _createClass(CommercianteService, [{
        key: "getConto",
        value: function getConto(idConto) {
          var _this2 = this;

          // se già presente nello store non riscarica i dati del cliente:
          if (this.contoCommerciante$.value.idConto) {
            return this.contoCommerciante$;
          }

          if (!idConto) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _models_error_model__WEBPACK_IMPORTED_MODULE_4__["WrongParamError"](idConto));
          }

          return this.httpClient.get("/api/commercianti/".concat(idConto)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            if (result && result.success) {
              var commerciante = Object.assign({
                type: _models_commerciante_model__WEBPACK_IMPORTED_MODULE_3__["COMMERCIANTE_TYPE"]
              }, result.body);

              _this2.contoCommerciante$.next(commerciante);

              return commerciante;
            } else {
              throw {
                type: _models_error_model__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ERROR"],
                name: 'account not found',
                message: "non \xE8 stato possibile trovare l'account"
              };
            }
          }));
        }
      }]);

      return CommercianteService;
    }();

    CommercianteService.ɵfac = function CommercianteService_Factory(t) {
      return new (t || CommercianteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    CommercianteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommercianteService,
      factory: CommercianteService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommercianteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/loader.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/services/loader.service.ts ***!
    \*************************************************/

  /*! exports provided: LoadingStatus, LoaderService */

  /***/
  function srcAppCoreServicesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingStatus", function () {
      return LoadingStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoadingStatus;

    (function (LoadingStatus) {
      LoadingStatus["LOADING"] = "";
      LoadingStatus["FAILED"] = "FAILED";
      LoadingStatus["SUCCESS"] = "SUCCESS";
    })(LoadingStatus || (LoadingStatus = {}));
    /** service sche gestisce il loader */


    var LoaderService =
    /*#__PURE__*/
    function () {
      function LoaderService() {
        _classCallCheck(this, LoaderService);

        this.status$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](LoadingStatus.LOADING);
      }

      _createClass(LoaderService, [{
        key: "changeStatus",
        value: function changeStatus(status) {
          this.status$.next(status);
        }
      }]);

      return LoaderService;
    }();

    LoaderService.ɵfac = function LoaderService_Factory(t) {
      return new (t || LoaderService)();
    };

    LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoaderService,
      factory: LoaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/local-storage.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/services/local-storage.service.ts ***!
    \********************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppCoreServicesLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LocalStorageService =
    /*#__PURE__*/
    function () {
      function LocalStorageService() {
        _classCallCheck(this, LocalStorageService);
      }

      _createClass(LocalStorageService, [{
        key: "getItem",
        value: function getItem(name) {
          var item = localStorage.getItem(name);
          return JSON.parse(!item || item === 'undefined' ? null : item);
        }
      }, {
        key: "setItem",
        value: function setItem(name, value) {
          if (value === undefined) {
            localStorage.removeItem(name);
          } else {
            localStorage.setItem(name, JSON.stringify(value));
          }
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
      return new (t || LocalStorageService)();
    };

    LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocalStorageService,
      factory: LocalStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/pagamento.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/services/pagamento.service.ts ***!
    \****************************************************/

  /*! exports provided: PrezzoService */

  /***/
  function srcAppCoreServicesPagamentoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrezzoService", function () {
      return PrezzoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_error_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/error.model */
    "./src/app/core/models/error.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_core_services_commerciante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/commerciante.service */
    "./src/app/core/services/commerciante.service.ts");
    /* harmony import */


    var src_app_core_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/services/cliente.service */
    "./src/app/core/services/cliente.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PrezzoService =
    /*#__PURE__*/
    function () {
      function PrezzoService(http, commercianteService, clienteService, router) {
        _classCallCheck(this, PrezzoService);

        this.http = http;
        this.commercianteService = commercianteService;
        this.clienteService = clienteService;
        this.router = router;
        this.prezzo$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
      }
      /** Salva il valore del trasferimento da effettuare */


      _createClass(PrezzoService, [{
        key: "setPrezzo",
        value: function setPrezzo(value) {
          var convPrezzo = Number.parseFloat(value);

          if (!isNaN(convPrezzo)) {
            this.prezzo$.next(Number.parseFloat(value));
          } else {
            throw {
              type: _models_error_model__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ERROR"],
              name: 'errore sul prezzo',
              message: 'deve essere un valore numerico'
            };
          }
        }
        /** gestisce un pagamento una volta che gli store sono stati tutti inizializzati correttamente */

      }, {
        key: "handlePagamento",
        value: function handlePagamento() {
          var _this3 = this;

          this.pagamento(this.commercianteService.contoCommerciante$.value.idConto, this.clienteService.cliente$.value.id, this.prezzo$.value).subscribe(function (result) {
            var response = {
              timestamp: new Date().getTime()
            };

            if (result.success) {
              if (window.opener) {
                window.opener.postMessage(JSON.stringify(Object.assign({
                  success: true
                }, response)), '*');
                setInterval(function () {
                  return window.close();
                }, 1000);
              } else {
                console.error('Impossibile chiudere pagina');
              }
            } else {
              var titleLabel = 'Impossibile procedere con il pagamento';
              var message = 'Ricaricare il conto';
              var error = {
                type: _models_error_model__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ERROR"],
                name: result.error.id,
                message: result.error.message
              };
              window.opener.postMessage(JSON.stringify(Object.assign({
                success: false,
                erroCode: result.error.id,
                errorMessage: result.error.message
              }, response)), '*');
              setInterval(function () {
                return window.close();
              }, 1000);

              _this3.router.navigateByUrl("/error?titleLabel=".concat(titleLabel, "&content=").concat(message, "&error=").concat(JSON.stringify(error)));
            }
          });
        }
        /** effettua il pagamento e da un esito dell' operazione  */

      }, {
        key: "pagamento",
        value: function pagamento(idCommerciante, idCliente, prezzo) {
          var params = {
            idCommerciante: idCommerciante,
            idCliente: idCliente,
            prezzo: prezzo
          };
          return this.http.post('/api/pagamenti', params);
        }
      }]);

      return PrezzoService;
    }();

    PrezzoService.ɵfac = function PrezzoService_Factory(t) {
      return new (t || PrezzoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_commerciante_service__WEBPACK_IMPORTED_MODULE_4__["CommercianteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    PrezzoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PrezzoService,
      factory: PrezzoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrezzoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_core_services_commerciante_service__WEBPACK_IMPORTED_MODULE_4__["CommercianteService"]
        }, {
          type: src_app_core_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/routing.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/routing.service.ts ***!
    \**************************************************/

  /*! exports provided: RoutingService */

  /***/
  function srcAppCoreServicesRoutingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutingService", function () {
      return RoutingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../constants/routing.constants */
    "./src/app/core/constants/routing.constants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RoutingService =
    /*#__PURE__*/
    function () {
      function RoutingService(router) {
        _classCallCheck(this, RoutingService);

        this.router = router;
        this.activeSection = '';
        this.activeSection$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }
      /** gestisce l'header nel TemplateComponent */


      _createClass(RoutingService, [{
        key: "updateHeader",
        value: function updateHeader(text) {
          this.activeSection = text;
          this.activeSection$.next(text);
        }
      }, {
        key: "gotoHome",
        value: function gotoHome() {
          this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__["RoutersPath"].home]);
        }
      }, {
        key: "gotoLogin",
        value: function gotoLogin() {
          this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__["RoutersPath"].login]);
        }
      }, {
        key: "gotoReload",
        value: function gotoReload() {
          this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__["RoutersPath"].reload]);
        }
      }, {
        key: "gotoPayment",
        value: function gotoPayment() {
          this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__["RoutersPath"].payment]);
        }
      }, {
        key: "gotoMovement",
        value: function gotoMovement() {
          this.router.navigate([_constants_routing_constants__WEBPACK_IMPORTED_MODULE_2__["RoutersPath"].movement]);
        }
      }]);

      return RoutingService;
    }();

    RoutingService.ɵfac = function RoutingService_Factory(t) {
      return new (t || RoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    RoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RoutingService,
      factory: RoutingService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/home/home.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/features/home/home.component.ts ***!
    \*************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppFeaturesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/services/routing.service */
    "./src/app/core/services/routing.service.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _shared_components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/components/big-button/big-button.component */
    "./src/app/shared/components/big-button/big-button.component.ts");
    /* harmony import */


    var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/banner/banner.component */
    "./src/app/shared/components/banner/banner.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(routingService) {
        _classCallCheck(this, HomeComponent);

        this.routingService = routingService;
        this.buttonWidth = '400px';
        this.buttonHeight = '250px';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.routingService.updateHeader('Home');
        }
      }, {
        key: "gotoPayment",
        value: function gotoPayment() {
          this.routingService.gotoPayment();
        }
      }, {
        key: "gotoMovements",
        value: function gotoMovements() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 14,
      vars: 0,
      consts: [["cols", "3", "rowHeight", "2:1", "gutterSize", "30px"], ["label", "Pagamento", "icon", "euro", 1, "button", 3, "clickEmitter"], ["label", "Info Conto", "icon", "info", 1, "button", 3, "clickEmitter"], ["label", "Ricarica", "icon", "publish", 1, "button", 3, "clickEmitter"], ["label", "Movimenti", "icon", "account_balance_wallet", 1, "button", 3, "clickEmitter"], ["colspan", "3", "rowspan", "1"], [1, "widget-container", "shadow-border", "spam-widget"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-big-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function HomeComponent_Template_app_big_button_clickEmitter_2_listener() {
            return ctx.gotoPayment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-big-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function HomeComponent_Template_app_big_button_clickEmitter_5_listener() {
            return ctx.gotoPayment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-big-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function HomeComponent_Template_app_big_button_clickEmitter_7_listener() {
            return ctx.gotoPayment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-big-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function HomeComponent_Template_app_big_button_clickEmitter_10_listener() {
            return ctx.gotoMovements();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _shared_components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_3__["BigButtonComponent"], _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"]],
      styles: [".button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiIsIi5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/home/home.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/features/home/home.module.ts ***!
    \**********************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppFeaturesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/features/home/home.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
          exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/login-page/login-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/features/login-page/login-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppFeaturesLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/services/routing.service */
    "./src/app/core/services/routing.service.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/big-button/big-button.component */
    "./src/app/shared/components/big-button/big-button.component.ts");
    /* harmony import */


    var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/components/login/login.component */
    "./src/app/shared/components/login/login.component.ts");
    /* harmony import */


    var _shared_components_join_join_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/join/join.component */
    "./src/app/shared/components/join/join.component.ts");
    /* harmony import */


    var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/banner/banner.component */
    "./src/app/shared/components/banner/banner.component.ts");

    function LoginPageComponent_app_login_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("joinRequest", function LoginPageComponent_app_login_3_Template_app_login_joinRequest_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.switchForm(ctx_r5.FormTypes.join);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_app_join_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-join", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginRequest", function LoginPageComponent_app_join_4_Template_app_join_loginRequest_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.switchForm(ctx_r7.FormTypes.login);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_mat_grid_tile_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-grid-tile", 12);
      }
    }

    function LoginPageComponent_mat_grid_tile_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-grid-tile", 13);
      }
    }

    function LoginPageComponent_mat_grid_tile_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-banner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FormTypes;

    (function (FormTypes) {
      FormTypes["login"] = "Login";
      FormTypes["join"] = "Join";
    })(FormTypes || (FormTypes = {}));

    var LoginPageComponent =
    /*#__PURE__*/
    function () {
      function LoginPageComponent(routingService) {
        _classCallCheck(this, LoginPageComponent);

        this.routingService = routingService;
        this.FormTypes = FormTypes;
        this.formType = FormTypes.login;
        this.maxCol = 6;
        this.minCol = 2;
        this.deviceSize = 850;
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.breakpoint = window.innerWidth <= this.deviceSize ? this.minCol : this.maxCol;
          this.routingService.updateHeader('Login');
        }
      }, {
        key: "clickInfo",
        value: function clickInfo() {
          console.warn('not yet implement');
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.breakpoint = event.target.innerWidth <= this.deviceSize ? this.minCol : this.maxCol;
        }
      }, {
        key: "switchForm",
        value: function switchForm(formType) {
          this.formType = formType;
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"]));
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-login-page"]],
      decls: 10,
      vars: 7,
      consts: [["rowHeight", "1:1", "gutterSize", "20px", 3, "cols", "resize"], ["colspan", "2", "rowspan", "2"], [1, "widget-container", "login-widget", "shadow-border"], [3, "joinRequest", 4, "ngIf"], [3, "loginRequest", 4, "ngIf"], ["class", "empty", "colspan", "3", "rowspan", "2", 4, "ngIf"], ["rowspan", "1", 3, "colspan"], ["label", "Info Conto", "icon", "info", 1, "info_conto", 3, "clickEmitter"], ["class", "empty", "colspan", "1", "rowspan", "1", 4, "ngIf"], ["colspan", "6", "rowspan", "1", 4, "ngIf"], [3, "joinRequest"], [3, "loginRequest"], ["colspan", "3", "rowspan", "2", 1, "empty"], ["colspan", "1", "rowspan", "1", 1, "empty"], ["colspan", "6", "rowspan", "1"], [1, "widget-container", "shadow-border", "spam-widget"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function LoginPageComponent_Template_mat_grid_list_resize_0_listener($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginPageComponent_app_login_3_Template, 1, 0, "app-login", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginPageComponent_app_join_4_Template, 1, 0, "app-join", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginPageComponent_mat_grid_tile_5_Template, 1, 0, "mat-grid-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-tile", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-big-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function LoginPageComponent_Template_app_big_button_clickEmitter_7_listener() {
            return ctx.clickInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginPageComponent_mat_grid_tile_8_Template, 1, 0, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginPageComponent_mat_grid_tile_9_Template, 3, 0, "mat-grid-tile", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.breakpoint);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formType === ctx.FormTypes.login);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formType === ctx.FormTypes.join);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breakpoint === ctx.maxCol);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.breakpoint === ctx.maxCol ? 1 : 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breakpoint === ctx.maxCol);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breakpoint === ctx.maxCol);
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_4__["BigButtonComponent"], _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _shared_components_join_join_component__WEBPACK_IMPORTED_MODULE_6__["JoinComponent"], _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_7__["BannerComponent"]],
      styles: [".widget-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 99%;\n  padding: 0;\n}\n\n.info_conto[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL2ZlYXR1cmVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0g7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGdldC1jb250YWluZXIge1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6IDk5JTtcbiAgIHBhZGRpbmc6IDA7XG59XG5cbi5pbmZvX2NvbnRvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsIi53aWRnZXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTklO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW5mb19jb250byB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-page',
          templateUrl: './login-page.component.html',
          styleUrls: ['./login-page.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/login-page/login-page.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/features/login-page/login-page.module.ts ***!
    \**********************************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppFeaturesLoginPageLoginPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-page.component */
    "./src/app/features/login-page/login-page.component.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/features/login-page/services/login.service.ts");
    /* harmony import */


    var _store_auth_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store/auth.store */
    "./src/app/features/login-page/store/auth.store.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LoginPageModule
    });
    LoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function LoginPageModule_Factory(t) {
        return new (t || LoginPageModule)();
      },
      providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _store_auth_store__WEBPACK_IMPORTED_MODULE_5__["AuthStore"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageModule, {
        declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        exports: [_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
          exports: [_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]],
          providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _store_auth_store__WEBPACK_IMPORTED_MODULE_5__["AuthStore"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/login-page/services/login.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/features/login-page/services/login.service.ts ***!
    \***************************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppFeaturesLoginPageServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _store_auth_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../store/auth.store */
    "./src/app/features/login-page/store/auth.store.ts");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(http, authStore) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.authStore = authStore;
      }

      _createClass(LoginService, [{
        key: "getToken",
        value: function getToken(username, password) {
          var _this4 = this;

          var params = {
            username: username,
            password: password
          };
          return this.http.post(_core__WEBPACK_IMPORTED_MODULE_1__["ApiRoute"].login, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response && response.token) {
              _this4.authStore.token = response.token;
              return response.token;
            }

            return '';
          }));
        }
        /** */

      }, {
        key: "logout",
        value: function logout() {
          var _this5 = this;

          return this.http.post(_core__WEBPACK_IMPORTED_MODULE_1__["ApiRoute"].logout, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response) {
              _this5.authStore.token = undefined;
            }

            return true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.error(error);
            _this5.authStore.token = undefined;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }));
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_store_auth_store__WEBPACK_IMPORTED_MODULE_5__["AuthStore"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _store_auth_store__WEBPACK_IMPORTED_MODULE_5__["AuthStore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/login-page/store/auth.store.ts":
  /*!*********************************************************!*\
    !*** ./src/app/features/login-page/store/auth.store.ts ***!
    \*********************************************************/

  /*! exports provided: AuthStore */

  /***/
  function srcAppFeaturesLoginPageStoreAuthStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthStore", function () {
      return AuthStore;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core */
    "./src/app/core/index.ts");

    var AuthStore =
    /*#__PURE__*/
    function () {
      function AuthStore(localStorageService) {
        _classCallCheck(this, AuthStore);

        this.localStorageService = localStorageService;
      }

      _createClass(AuthStore, [{
        key: "token",
        get: function get() {
          if (!this.pToken) {
            this.pToken = this.localStorageService.getItem('token');
          }

          return this.pToken;
        },
        set: function set(token) {
          this.pToken = token;
          this.localStorageService.setItem('token', token);
        }
      }]);

      return AuthStore;
    }();

    AuthStore.ɵfac = function AuthStore_Factory(t) {
      return new (t || AuthStore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]));
    };

    AuthStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthStore,
      factory: AuthStore.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_core__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/payments/payments.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/features/payments/payments.component.ts ***!
    \*********************************************************/

  /*! exports provided: PaymentsComponent */

  /***/
  function srcAppFeaturesPaymentsPaymentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function () {
      return PaymentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/services/routing.service */
    "./src/app/core/services/routing.service.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _shared_components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/components/recognition/recognition.component */
    "./src/app/shared/components/recognition/recognition.component.ts");
    /* harmony import */


    var _shared_components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/info-widget/info-widget.component */
    "./src/app/shared/components/info-widget/info-widget.component.ts");
    /* harmony import */


    var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/components/banner/banner.component */
    "./src/app/shared/components/banner/banner.component.ts");
    /* harmony import */


    var _shared_pipes_min_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/pipes/min.pipe */
    "./src/app/shared/pipes/min.pipe.ts");

    var _c0 = function _c0(a1) {
      return [2, a1];
    };

    var PaymentsComponent =
    /*#__PURE__*/
    function () {
      function PaymentsComponent(routingService) {
        _classCallCheck(this, PaymentsComponent);

        this.routingService = routingService;
        this.maxCol = 2;
        this.minCol = 1;
        this.deviceSize = 1180;
      }

      _createClass(PaymentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.breakpoint = window.innerWidth <= this.deviceSize ? this.minCol : this.maxCol;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.routingService.updateHeader('Pagamento');
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.breakpoint = event.target.innerWidth <= this.deviceSize ? this.minCol : this.maxCol;
        }
      }]);

      return PaymentsComponent;
    }();

    PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) {
      return new (t || PaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"]));
    };

    PaymentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaymentsComponent,
      selectors: [["app-payments"]],
      decls: 9,
      vars: 6,
      consts: [["rowHeight", "2:1", "gutterSize", "20px", 3, "cols", "resize"], ["colspan", "1", "rowspan", "1"], [1, "relative", "widget-container", "shadow-border", "recognition"], ["title", "Personale", "numConto", "xxxxxxxxxx", "name", "Franco Rossi", "regSocial", "Gelateria Buongusto", "address", " via colombo, 45, Torino", 1, "relative", "widget-container", "shadow-border", "info-table"], ["rowspan", "1", 3, "colspan"], [1, "widget-container", "shadow-border", "spam-widget"]],
      template: function PaymentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function PaymentsComponent_Template_mat_grid_list_resize_0_listener($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-recognition", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-info-widget", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "min");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.breakpoint);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.breakpoint)));
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _shared_components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_3__["RecognitionComponent"], _shared_components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_4__["InfoWidgetComponent"], _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"]],
      pipes: [_shared_pipes_min_pipe__WEBPACK_IMPORTED_MODULE_6__["MinPipe"]],
      styles: [".recognition[_ngcontent-%COMP%] {\n  width: 100%;\n  height: inherit;\n  padding: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL2ZlYXR1cmVzL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY29nbml0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgcGFkZGluZzogaW5oZXJpdDtcbn1cbiIsIi5yZWNvZ25pdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IGluaGVyaXQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-payments',
          templateUrl: './payments.component.html',
          styleUrls: ['./payments.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/payments/payments.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/features/payments/payments.module.ts ***!
    \******************************************************/

  /*! exports provided: PaymentsModule */

  /***/
  function srcAppFeaturesPaymentsPaymentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentsModule", function () {
      return PaymentsModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _payments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payments.component */
    "./src/app/features/payments/payments.component.ts");

    var PaymentsModule = function PaymentsModule() {
      _classCallCheck(this, PaymentsModule);
    };

    PaymentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PaymentsModule
    });
    PaymentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PaymentsModule_Factory(t) {
        return new (t || PaymentsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentsModule, {
        declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        exports: [_payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaymentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
          exports: [_payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/template/template.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/features/template/template.component.ts ***!
    \*********************************************************/

  /*! exports provided: TemplateComponent */

  /***/
  function srcAppFeaturesTemplateTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateComponent", function () {
      return TemplateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/services/routing.service */
    "./src/app/core/services/routing.service.ts");
    /* harmony import */


    var _login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login-page/store/auth.store */
    "./src/app/features/login-page/store/auth.store.ts");
    /* harmony import */


    var _login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login-page/services/login.service */
    "./src/app/features/login-page/services/login.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function TemplateComponent_ng_container_7_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_ng_container_7_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return item_r11.clickEvent();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.label);
      }
    }

    function TemplateComponent_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TemplateComponent_ng_container_7_button_1_Template, 5, 2, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.isVisible());
      }
    }

    var TemplateComponent =
    /*#__PURE__*/
    function () {
      function TemplateComponent(routingService, authStore, loginService) {
        var _this6 = this;

        _classCallCheck(this, TemplateComponent);

        this.routingService = routingService;
        this.authStore = authStore;
        this.loginService = loginService;
        this.menuItems = [{
          label: 'Home',
          icon: 'more_vert',
          clickEvent: function clickEvent() {
            return _this6.routingService.gotoHome();
          },
          isVisible: function isVisible() {
            return _this6.isLogin();
          }
        }, {
          label: 'Ricarica',
          icon: 'publish',
          clickEvent: function clickEvent() {
            return _this6.routingService.gotoReload();
          },
          isVisible: function isVisible() {
            return _this6.isLogin();
          }
        }, {
          label: 'Pagamento',
          icon: 'euro',
          clickEvent: function clickEvent() {
            return _this6.routingService.gotoPayment();
          },
          isVisible: function isVisible() {
            return _this6.isLogin();
          }
        }, {
          label: 'Movimenti',
          icon: 'account_balance_wallet',
          clickEvent: function clickEvent() {
            return _this6.routingService.gotoMovement();
          },
          isVisible: function isVisible() {
            return _this6.isLogin();
          }
        }, {
          label: 'Logout',
          icon: 'lock',
          clickEvent: function clickEvent() {
            return _this6.logout();
          },
          isVisible: function isVisible() {
            return _this6.isLogin();
          }
        }];
        this.actSection = this.routingService.activeSection;
        this.subscriptions = [];
      }

      _createClass(TemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.subscriptions.push(this.routingService.activeSection$.subscribe(function (activeSection) {
            return setTimeout(function () {
              return _this7.actSection = activeSection;
            }, 0);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "isLogin",
        value: function isLogin() {
          return !!this.authStore.token;
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this8 = this;

          this.loginService.logout().subscribe(function () {
            _this8.routingService.gotoLogin();
          });
        }
      }, {
        key: "menuDisabled",
        value: function menuDisabled() {
          return !this.menuItems.some(function (item) {
            return item.isVisible();
          });
        }
      }]);

      return TemplateComponent;
    }();

    TemplateComponent.ɵfac = function TemplateComponent_Factory(t) {
      return new (t || TemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]));
    };

    TemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TemplateComponent,
      selectors: [["app-template"]],
      decls: 16,
      vars: 4,
      consts: [["color", "primary"], ["mat-icon-button", "", "aria-label", "", 3, "matMenuTriggerFor", "disabled"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], [1, "title-big"], [1, "title-separe"], [1, "title-activePage"], [1, "container"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"]],
      template: function TemplateComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r9)("disabled", ctx.menuDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actSection, " ");
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"]],
      styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-right: 6%;\n  margin-left: 6%;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%] {\n  margin-right: 4%;\n  margin-left: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL2ZlYXR1cmVzL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBSmU7RUFLZixlQUxlO0FDR2pCOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAkbWFyZ2luQm9yZGVyOiA2JTtcblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogJG1hcmdpbkJvcmRlcjtcbiAgbWFyZ2luLWxlZnQ6ICRtYXJnaW5Cb3JkZXI7XG59XG5cbm1hdC10b29sYmFyLXJvdyB7XG4gIG1hcmdpbi1yaWdodDogJG1hcmdpbkJvcmRlciAtIDIlO1xuICBtYXJnaW4tbGVmdDogJG1hcmdpbkJvcmRlciAtIDIlO1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNiU7XG4gIG1hcmdpbi1sZWZ0OiA2JTtcbn1cblxubWF0LXRvb2xiYXItcm93IHtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-template',
          templateUrl: './template.component.html',
          styleUrls: ['./template.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"]
        }, {
          type: _login_page_store_auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStore"]
        }, {
          type: _login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/template/template.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/features/template/template.module.ts ***!
    \******************************************************/

  /*! exports provided: TemplateModule */

  /***/
  function srcAppFeaturesTemplateTemplateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateModule", function () {
      return TemplateModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./template.component */
    "./src/app/features/template/template.component.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../home/home.module */
    "./src/app/features/home/home.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TemplateModule = function TemplateModule() {
      _classCallCheck(this, TemplateModule);
    };

    TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TemplateModule
    });
    TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TemplateModule_Factory(t) {
        return new (t || TemplateModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TemplateModule, {
        declarations: [_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
        exports: [_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TemplateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
          exports: [_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/banner/banner.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/banner/banner.component.ts ***!
    \**************************************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppSharedComponentsBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BannerComponent =
    /*#__PURE__*/
    function () {
      function BannerComponent() {
        _classCallCheck(this, BannerComponent);
      }

      _createClass(BannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerComponent;
    }();

    BannerComponent.ɵfac = function BannerComponent_Factory(t) {
      return new (t || BannerComponent)();
    };

    BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerComponent,
      selectors: [["app-banner"]],
      decls: 2,
      vars: 0,
      template: function BannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum diam posuere, tincidunt sapien sit amet, faucibus erat. Sed semper eu quam at facilisis. Suspendisse accumsan pulvinar velit eu sollicitudin. Nulla massa neque, pretium a cursus at, sodales id enim. Pellentesque volutpat, ante eu varius luctus, lacus magna sollicitudin risus, ut tristique odio enim vulputate odio. Sed eu justo augue. Fusce sem enim, gravida ac sollicitudin sit amet, sagittis ac est. Aenean aliquam vulputate sem vitae porta. Morbi eget magna sapien. In in interdum ante. Ut nisi enim, fermentum sed enim vitae, accumsan mattis mauris. Praesent vel nisl lorem. Vestibulum eu urna feugiat, dapibus massa sit amet, laoreet lorem.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-banner',
          templateUrl: './banner.component.html',
          styleUrls: ['./banner.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/big-button/big-button.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/big-button/big-button.component.ts ***!
    \**********************************************************************/

  /*! exports provided: BigButtonComponent */

  /***/
  function srcAppSharedComponentsBigButtonBigButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BigButtonComponent", function () {
      return BigButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /**
     * Nota: <app-big-button> richiede width e height impostati a 100%
     */


    var BigButtonComponent =
    /*#__PURE__*/
    function () {
      function BigButtonComponent() {
        _classCallCheck(this, BigButtonComponent);

        this.clickEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(BigButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "clickEvent",
        value: function clickEvent() {
          this.clickEmitter.next();
        }
      }]);

      return BigButtonComponent;
    }();

    BigButtonComponent.ɵfac = function BigButtonComponent_Factory(t) {
      return new (t || BigButtonComponent)();
    };

    BigButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BigButtonComponent,
      selectors: [["app-big-button"]],
      inputs: {
        label: "label",
        icon: "icon"
      },
      outputs: {
        clickEmitter: "clickEmitter"
      },
      decls: 7,
      vars: 3,
      consts: [[1, "button-container", "widget-container", "shadow-border", 3, "click"], [1, "icon-content"], ["aria-hidden", "false", 1, "icon", "fix-top", 3, "inline"], [1, "label-body"], [1, "label", "centralize"]],
      template: function BigButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BigButtonComponent_Template_div_click_0_listener() {
            return ctx.clickEvent();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
      styles: [".button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  text-align: center;\n  cursor: pointer;\n  padding: 0;\n}\n\n.icon-content[_ngcontent-%COMP%] {\n  height: 70%;\n  position: relative;\n  background-color: #d5e6f2;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 8vw;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.label-body[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30%;\n}\n\n.label[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 2vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JpZy1idXR0b24vYmlnLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmlnLWJ1dHRvbi9iaWctYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FDQUg7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNERjs7QURLQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9iaWctYnV0dG9uL2JpZy1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cblxuLmljb24tY29udGVudCB7XG4gIGhlaWdodDogNzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWU2ZjI7XG59XG5cbi5pY29uIHtcbiAgIGZvbnQtc2l6ZTogOHZ3O1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgdG9wOiA0NSU7XG4gICBsZWZ0OiA1MCU7XG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cblxuLmxhYmVsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzAlO1xuXG59XG5cbi5sYWJlbHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICAvLyBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZpeC10b3Age1xuICAvLyB0b3A6IDcwJTtcbn1cbiIsIi5idXR0b24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmljb24tY29udGVudCB7XG4gIGhlaWdodDogNzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWU2ZjI7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA4dnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4ubGFiZWwtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbi5sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDJ2dztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BigButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-big-button',
          templateUrl: './big-button.component.html',
          styleUrls: ['./big-button.component.scss']
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/error-page/error-page.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/error-page/error-page.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ErrorPageComponent */

  /***/
  function srcAppSharedComponentsErrorPageErrorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
      return ErrorPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core */
    "./src/app/core/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../error/error.component */
    "./src/app/shared/components/error/error.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ErrorPageComponent =
    /*#__PURE__*/
    function () {
      function ErrorPageComponent(route, loaderService) {
        _classCallCheck(this, ErrorPageComponent);

        this.route = route;
        this.loaderService = loaderService;
        this.titleLabel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('Impossibile procedere con il pagamento. Se il problema persiste contattare il venditore');
        this.content$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('SUGGERIMENTO PER IL VENDITORE: assicurarsi che il idConto e prezzo siano validi');
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.loaderService.status$.next(src_app_core__WEBPACK_IMPORTED_MODULE_1__["LoadingStatus"].FAILED);
      }

      _createClass(ErrorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.route.queryParams.pipe( // debounceTime evita l'emit iniziale prima che i param siano effettivamente inizializzati
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            if (params.titleLabel) {
              _this9.titleLabel$.next(params.titleLabel);
            }

            if (params.content) {
              _this9.content$.next(params.content);
            }

            if (params.error) {
              _this9.error$.next(JSON.parse(params.error));
            }

            return [];
          })).subscribe();
        }
      }]);

      return ErrorPageComponent;
    }();

    ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) {
      return new (t || ErrorPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));
    };

    ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorPageComponent,
      selectors: [["app-error-page"]],
      decls: 4,
      vars: 9,
      consts: [[3, "titleLabel", "content", "error"]],
      template: function ErrorPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.titleLabel$))("content", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.content$))("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx.error$));
        }
      },
      directives: [_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error-page',
          templateUrl: './error-page.component.html',
          styleUrls: ['./error-page.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_core__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/error/error.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/error/error.component.ts ***!
    \************************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppSharedComponentsErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };

    ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      inputs: {
        titleLabel: "titleLabel",
        content: "content",
        error: "error"
      },
      decls: 9,
      vars: 5,
      consts: [[1, "mb-0"], ["svgIcon", "alert-circle", 1, "logo"], [1, "logo-title", "mt-0"], [3, "innerHTML"]],
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.error));
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]],
      styles: [".logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  color: #f00;\n}\n.logo[_ngcontent-%COMP%]     svg {\n  width: 90px;\n  height: 90px;\n}\n.logo-title[_ngcontent-%COMP%] {\n  color: #f00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFdBRGdCO0VBRWhCLFlBRmdCO0VBR2hCLFdBTE07QUNJUjtBREdFO0VBQ0UsV0FOYztFQU9kLFlBUGM7QUNNbEI7QURLQTtFQUNFLFdBZE07QUNZUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yOiAjZjAwO1xuLmxvZ28ge1xuICAkbmZjLWljb24tc2l6ZTogOTBweDtcbiAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRuZmMtaWNvbi1zaXplO1xuICBjb2xvcjogJGNvbG9yO1xuXG4gICYgOjpuZy1kZWVwIHN2ZyB7XG4gICAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICAgIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG4gIH1cbn1cblxuLmxvZ28tdGl0bGUge1xuICBjb2xvcjogJGNvbG9yO1xufVxuIiwiLmxvZ28ge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBjb2xvcjogI2YwMDtcbn1cbi5sb2dvIDo6bmctZGVlcCBzdmcge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4ubG9nby10aXRsZSB7XG4gIGNvbG9yOiAjZjAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.scss']
        }]
      }], function () {
        return [];
      }, {
        titleLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/info-widget/info-widget.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/info-widget/info-widget.component.ts ***!
    \************************************************************************/

  /*! exports provided: InfoWidgetComponent */

  /***/
  function srcAppSharedComponentsInfoWidgetInfoWidgetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoWidgetComponent", function () {
      return InfoWidgetComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InfoWidgetComponent =
    /*#__PURE__*/
    function () {
      function InfoWidgetComponent() {
        _classCallCheck(this, InfoWidgetComponent);
      }

      _createClass(InfoWidgetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoWidgetComponent;
    }();

    InfoWidgetComponent.ɵfac = function InfoWidgetComponent_Factory(t) {
      return new (t || InfoWidgetComponent)();
    };

    InfoWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoWidgetComponent,
      selectors: [["app-info-widget"]],
      inputs: {
        title: "title",
        numConto: "numConto",
        name: "name",
        regSocial: "regSocial",
        address: "address"
      },
      decls: 21,
      vars: 5,
      consts: [[1, "title"], [1, "info"], [1, "labels"], [1, "info--conto", "label"], [1, "info--name", "label"], [1, "info--reg", "label"], [1, "info--addr", "label"], [1, "values"], [1, "info--conto", "value"], [1, "info--name", "value"], [1, "info--reg", "value"], [1, "info--addr", "value"]],
      template: function InfoWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      styles: [".title[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n\n.info[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 4em;\n  margin-right: 4em;\n  width: auto;\n}\n\n.labels[_ngcontent-%COMP%], .values[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.value[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2luZm8td2lkZ2V0L2luZm8td2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbmZvLXdpZGdldC9pbmZvLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2luZm8td2lkZ2V0L2luZm8td2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgbWFyZ2luOiAzMHB4O1xufVxuXG4uaW5mbyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA0ZW07XG4gIG1hcmdpbi1yaWdodDogNGVtO1xuICB3aWR0aDogYXV0bztcbn1cblxuLmxhYmVscywgLnZhbHVlcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnZhbHVlIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbiIsIi50aXRsZSB7XG4gIG1hcmdpbjogMzBweDtcbn1cblxuLmluZm8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNGVtO1xuICBtYXJnaW4tcmlnaHQ6IDRlbTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5sYWJlbHMsIC52YWx1ZXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi52YWx1ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-widget',
          templateUrl: './info-widget.component.html',
          styleUrls: ['./info-widget.component.scss']
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        numConto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        regSocial: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        address: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/join/join.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/components/join/join.component.ts ***!
    \**********************************************************/

  /*! exports provided: JoinComponent */

  /***/
  function srcAppSharedComponentsJoinJoinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinComponent", function () {
      return JoinComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _parts_join_part0_join_part0_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./parts/join-part0/join-part0.component */
    "./src/app/shared/components/join/parts/join-part0/join-part0.component.ts");
    /* harmony import */


    var _parts_join_part1_join_part1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./parts/join-part1/join-part1.component */
    "./src/app/shared/components/join/parts/join-part1/join-part1.component.ts");
    /* harmony import */


    var _parts_join_part2_join_part2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./parts/join-part2/join-part2.component */
    "./src/app/shared/components/join/parts/join-part2/join-part2.component.ts");
    /* harmony import */


    var _parts_join_part3_join_part3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./parts/join-part3/join-part3.component */
    "./src/app/shared/components/join/parts/join-part3/join-part3.component.ts");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _parts_join_dashboard_join_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./parts/join-dashboard/join-dashboard.component */
    "./src/app/shared/components/join/parts/join-dashboard/join-dashboard.component.ts");

    var _c0 = ["adHost"];

    function JoinComponent_app_join_dashboard_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-join-dashboard", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function JoinComponent_app_join_dashboard_7_Template_app_join_dashboard_changePage_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.updateForm($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx_r30.page)("maxPage", ctx_r30.maxPage);
      }
    }

    var JoinComponent =
    /*#__PURE__*/
    function () {
      function JoinComponent(resolver) {
        _classCallCheck(this, JoinComponent);

        this.resolver = resolver;
        this.maxPage = 3;
        this.data = {};
        this.loginRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(JoinComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.page = 0;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.container) {
            this.container.clear();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this10 = this;

          setTimeout(function () {
            _this10.loadComponent();
          }, 0);
        }
      }, {
        key: "loadComponent",
        value: function loadComponent() {
          this.container.clear();
          var factory;

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
      }, {
        key: "login",
        value: function login() {
          this.loginRequest.next();
        }
      }, {
        key: "updateForm",
        value: function updateForm(pg) {
          if (!this.componentRef.instance.validate()) {
            return;
          } // salva le informazioni recuperate dal form


          this.data = Object.assign(Object.assign({}, this.data), this.componentRef.instance.getValue());
          this.setPage(pg);
          this.loadComponent();
        }
      }, {
        key: "setPage",
        value: function setPage(pg) {
          if (pg < 0) {
            this.page = 0;
          } else if (pg > this.maxPage) {
            this.page = this.maxPage;
          } else {
            this.page = pg;
          }
        }
      }]);

      return JoinComponent;
    }();

    JoinComponent.ɵfac = function JoinComponent_Factory(t) {
      return new (t || JoinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    JoinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JoinComponent,
      selectors: [["app-join"]],
      viewQuery: function JoinComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        }
      },
      outputs: {
        loginRequest: "loginRequest"
      },
      decls: 11,
      vars: 2,
      consts: [["min", "0", "max", "3", "step", "1", 1, "slider", 3, "value"], ["adHost", ""], [3, "page", "maxPage", "changePage", 4, "ngIf"], [1, "login"], ["mat-button", "", "color", "primary", 3, "click"], [3, "page", "maxPage", "changePage"]],
      template: function JoinComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinComponent_Template_button_click_9_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Annulla creazione account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.page);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page < ctx.maxPage);
        }
      },
      directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _parts_join_dashboard_join_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["JoinDashboardComponent"]],
      styles: [".form[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.join[_ngcontent-%COMP%]    .mat-button-wrapper {\n  font-size: 0.5em;\n}\n\n.join-container[_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n\n.slider[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.slider[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.user-types-radio-group[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.user-types-radio-button[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  width: 150px;\n  margin: 10px auto;\n}\n\n.move[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pvaW4vam9pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvam9pbi9qb2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtBQ0FGOztBREVFO0VBQ0UsZUFBQTtBQ0FKOztBRE1FO0VBQ0UsWUFBQTtBQ0hKOztBRE1FO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSko7O0FEUUE7RUFDRSxZQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9qb2luL2pvaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuXG4uam9pbiA6Om5nLWRlZXAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgZm9udC1zaXplOiAwLjVlbTtcbn1cblxuLmpvaW4tY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbi5zbGlkZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAmPiAqIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuXG4udXNlci10eXBlcy1yYWRpbyB7XG4gICYtZ3JvdXAge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gICYtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG59XG5cbi5tb3ZlIGJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cbiIsIi5mb3JtIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4uam9pbiA6Om5nLWRlZXAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgZm9udC1zaXplOiAwLjVlbTtcbn1cblxuLmpvaW4tY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbi5zbGlkZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zbGlkZXIgPiAqIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4udXNlci10eXBlcy1yYWRpby1ncm91cCB7XG4gIG1hcmdpbjogMTBweDtcbn1cbi51c2VyLXR5cGVzLXJhZGlvLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi5tb3ZlIGJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-join',
          templateUrl: './join.component.html',
          styleUrls: ['./join.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['adHost', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }]
        }],
        loginRequest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/join/parts/abstract-join-part/abstract-join-part.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/shared/components/join/parts/abstract-join-part/abstract-join-part.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: AbstractJoinPartComponent */

  /***/
  function srcAppSharedComponentsJoinPartsAbstractJoinPartAbstractJoinPartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractJoinPartComponent", function () {
      return AbstractJoinPartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AbstractJoinPartComponent =
    /*#__PURE__*/
    function () {
      function AbstractJoinPartComponent() {
        _classCallCheck(this, AbstractJoinPartComponent);
      }

      _createClass(AbstractJoinPartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "validate",
        value: function validate() {
          if (this.formCrl.valid) {
            return true;
          } else {
            this.validateAllFormFields(this.formCrl);
            return false;
          }
        }
      }, {
        key: "validateAllFormFields",
        value: function validateAllFormFields(formGroup) {
          var _this11 = this;

          Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);

            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
              control.markAsTouched({
                onlySelf: true
              });
            } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
              _this11.validateAllFormFields(control);
            }
          });
        }
      }]);

      return AbstractJoinPartComponent;
    }();

    AbstractJoinPartComponent.ɵfac = function AbstractJoinPartComponent_Factory(t) {
      return new (t || AbstractJoinPartComponent)();
    };

    AbstractJoinPartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AbstractJoinPartComponent,
      selectors: [["app-abstract-join-part"]],
      decls: 2,
      vars: 0,
      template: function AbstractJoinPartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "abstract-join-part works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pvaW4vcGFydHMvYWJzdHJhY3Qtam9pbi1wYXJ0L2Fic3RyYWN0LWpvaW4tcGFydC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractJoinPartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-abstract-join-part',
          templateUrl: './abstract-join-part.component.html',
          styleUrls: ['./abstract-join-part.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/join/parts/join-dashboard/join-dashboard.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/shared/components/join/parts/join-dashboard/join-dashboard.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: JoinDashboardComponent */

  /***/
  function srcAppSharedComponentsJoinPartsJoinDashboardJoinDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinDashboardComponent", function () {
      return JoinDashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var JoinDashboardComponent =
    /*#__PURE__*/
    function () {
      function JoinDashboardComponent() {
        _classCallCheck(this, JoinDashboardComponent);

        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(JoinDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backPage",
        value: function backPage() {
          this.changePage.emit(this.page - 1);
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.changePage.emit(this.page + 1);
        }
      }]);

      return JoinDashboardComponent;
    }();

    JoinDashboardComponent.ɵfac = function JoinDashboardComponent_Factory(t) {
      return new (t || JoinDashboardComponent)();
    };

    JoinDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JoinDashboardComponent,
      selectors: [["app-join-dashboard"]],
      inputs: {
        page: "page",
        maxPage: "maxPage"
      },
      outputs: {
        changePage: "changePage"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "move"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
      template: function JoinDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinDashboardComponent_Template_button_click_1_listener() {
            return ctx.backPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinDashboardComponent_Template_button_click_3_listener() {
            return ctx.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.page <= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.page >= ctx.maxPage);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pvaW4vcGFydHMvam9pbi1kYXNoYm9hcmQvam9pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-join-dashboard',
          templateUrl: './join-dashboard.component.html',
          styleUrls: ['./join-dashboard.component.scss']
        }]
      }], function () {
        return [];
      }, {
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/join/parts/join-part0/join-part0.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/components/join/parts/join-part0/join-part0.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: JoinPart0Component */

  /***/
  function srcAppSharedComponentsJoinPartsJoinPart0JoinPart0ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinPart0Component", function () {
      return JoinPart0Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _abstract_join_part_abstract_join_part_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../abstract-join-part/abstract-join-part.component */
    "./src/app/shared/components/join/parts/abstract-join-part/abstract-join-part.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function JoinPart0Component_mat_error_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JoinPart0Component_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " il pin \xE8 composto da 4-16 cifre ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "numeriche");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JoinPart0Component_mat_error_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pin obbligatorio per il login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var JoinPart0Component =
    /*#__PURE__*/
    function (_abstract_join_part_a) {
      _inherits(JoinPart0Component, _abstract_join_part_a);

      function JoinPart0Component(fb) {
        var _this12;

        _classCallCheck(this, JoinPart0Component);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(JoinPart0Component).call(this));
        _this12.fb = fb;
        _this12.valuesOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this12.formCrl = _this12.fb.group({
          username: _this12.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          password: _this12.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)])
        });
        return _this12;
      }

      _createClass(JoinPart0Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getValue",
        value: function getValue() {
          return {
            username: this.formCrl.controls.username.value,
            password: this.formCrl.controls.password.value
          };
        }
      }]);

      return JoinPart0Component;
    }(_abstract_join_part_abstract_join_part_component__WEBPACK_IMPORTED_MODULE_2__["AbstractJoinPartComponent"]);

    JoinPart0Component.ɵfac = function JoinPart0Component_Factory(t) {
      return new (t || JoinPart0Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    JoinPart0Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JoinPart0Component,
      selectors: [["app-join-part0"]],
      outputs: {
        valuesOutput: "valuesOutput"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 10,
      vars: 4,
      consts: [[1, "form", 3, "formGroup"], [1, "full-width"], ["matInput", "", "placeholder", "username*", "formControlName", "username"], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Password*", "formControlName", "password"]],
      template: function JoinPart0Component_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["username"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["password"].hasError("minLength") || ctx.formCrl.controls["password"].hasError("maxLength") || ctx.formCrl.controls["password"].hasError("numeric"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["password"].hasError("required"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pvaW4vcGFydHMvam9pbi1wYXJ0MC9qb2luLXBhcnQwLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinPart0Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-join-part0',
          templateUrl: './join-part0.component.html',
          styleUrls: ['./join-part0.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        valuesOutput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/join/parts/join-part1/join-part1.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/components/join/parts/join-part1/join-part1.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: JoinPart1Component */

  /***/
  function srcAppSharedComponentsJoinPartsJoinPart1JoinPart1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinPart1Component", function () {
      return JoinPart1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _abstract_join_part_abstract_join_part_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../abstract-join-part/abstract-join-part.component */
    "./src/app/shared/components/join/parts/abstract-join-part/abstract-join-part.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function JoinPart1Component_mat_error_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " nome ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JoinPart1Component_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " cognome ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JoinPart1Component_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " codice fiscale ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var JoinPart1Component =
    /*#__PURE__*/
    function (_abstract_join_part_a2) {
      _inherits(JoinPart1Component, _abstract_join_part_a2);

      function JoinPart1Component(fb) {
        var _this13;

        _classCallCheck(this, JoinPart1Component);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(JoinPart1Component).call(this));
        _this13.fb = fb;
        _this13.formCrl = _this13.fb.group({
          nome: _this13.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          cognome: _this13.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          cf: _this13.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        return _this13;
      }

      _createClass(JoinPart1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getValue",
        value: function getValue() {
          return {
            nome: this.formCrl.controls.nome.value,
            cognome: this.formCrl.controls.cognome.value,
            cf: this.formCrl.controls.cf.value
          };
        }
      }]);

      return JoinPart1Component;
    }(_abstract_join_part_abstract_join_part_component__WEBPACK_IMPORTED_MODULE_2__["AbstractJoinPartComponent"]);

    JoinPart1Component.ɵfac = function JoinPart1Component_Factory(t) {
      return new (t || JoinPart1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    JoinPart1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JoinPart1Component,
      selectors: [["app-join-part1"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 13,
      vars: 4,
      consts: [[1, "form", 3, "formGroup"], [1, "full-width"], ["matInput", "", "placeholder", "nome*", "formControlName", "nome"], [4, "ngIf"], ["matInput", "", "placeholder", "cognome*", "formControlName", "cognome"], ["matInput", "", "placeholder", "codice fiscale*", "formControlName", "cf"]],
      template: function JoinPart1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JoinPart1Component_mat_error_4_Template, 4, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, JoinPart1Component_mat_error_8_Template, 4, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, JoinPart1Component_mat_error_12_Template, 4, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["nome"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["cognome"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["cf"].hasError("required"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pvaW4vcGFydHMvam9pbi1wYXJ0MS9qb2luLXBhcnQxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinPart1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-join-part1',
          templateUrl: './join-part1.component.html',
          styleUrls: ['./join-part1.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/join/parts/join-part2/join-part2.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/components/join/parts/join-part2/join-part2.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: JoinPart2Component */

  /***/
  function srcAppSharedComponentsJoinPartsJoinPart2JoinPart2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinPart2Component", function () {
      return JoinPart2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _abstract_join_part_abstract_join_part_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../abstract-join-part/abstract-join-part.component */
    "./src/app/shared/components/join/parts/abstract-join-part/abstract-join-part.component.ts");
    /* harmony import */


    var src_app_core_constants_user_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/constants/user-type.enum */
    "./src/app/core/constants/user-type.enum.ts");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function JoinPart2Component_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " piva ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JoinPart2Component_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ragSoc ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var JoinPart2Component =
    /*#__PURE__*/
    function (_abstract_join_part_a3) {
      _inherits(JoinPart2Component, _abstract_join_part_a3);

      function JoinPart2Component(fb) {
        var _this14;

        _classCallCheck(this, JoinPart2Component);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(JoinPart2Component).call(this));
        _this14.fb = fb;
        _this14.UserType = src_app_core_constants_user_type_enum__WEBPACK_IMPORTED_MODULE_3__["UserType"];
        _this14.subscriptions = [];
        _this14.formCrl = _this14.fb.group({
          userType: _this14.fb.control(src_app_core_constants_user_type_enum__WEBPACK_IMPORTED_MODULE_3__["UserType"].customer, []),
          piva: _this14.fb.control({
            value: '',
            disabled: true
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          ragSoc: _this14.fb.control({
            value: '',
            disabled: true
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        return _this14;
      }

      _createClass(JoinPart2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.subscriptions.push(this.formCrl.get('userType').valueChanges.subscribe(function (userType) {
            if (userType === src_app_core_constants_user_type_enum__WEBPACK_IMPORTED_MODULE_3__["UserType"].customer) {
              _this15.formCrl.get('piva').disable();

              _this15.formCrl.get('ragSoc').disable();
            } else {
              _this15.formCrl.get('piva').enable();

              _this15.formCrl.get('ragSoc').enable();
            }
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return {
            userType: this.formCrl.controls.userType.value,
            piva: this.formCrl.controls.piva.value,
            ragSoc: this.formCrl.controls.ragSoc.value
          };
        }
      }]);

      return JoinPart2Component;
    }(_abstract_join_part_abstract_join_part_component__WEBPACK_IMPORTED_MODULE_2__["AbstractJoinPartComponent"]);

    JoinPart2Component.ɵfac = function JoinPart2Component_Factory(t) {
      return new (t || JoinPart2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    JoinPart2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JoinPart2Component,
      selectors: [["app-join-part2"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 16,
      vars: 5,
      consts: [[1, "form", 3, "formGroup"], ["formControlName", "userType"], [3, "value"], ["merchantInfo", ""], [1, "full-width"], ["matInput", "", "placeholder", "partita iva*", "formControlName", "piva", 1, "mInfos"], [4, "ngIf"], ["matInput", "", "placeholder", "ragione sociale*", "formControlName", "ragSoc", 1, "mInfos"]],
      template: function JoinPart2Component_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.UserType.customer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.UserType.merchant);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["piva"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formCrl.controls["ragSoc"].hasError("required"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: ["mat-radio-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px auto;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pvaW4vcGFydHMvam9pbi1wYXJ0Mi9qb2luLXBhcnQyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9qb2luL3BhcnRzL2pvaW4tcGFydDIvam9pbi1wYXJ0Mi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvam9pbi9wYXJ0cy9qb2luLXBhcnQyL2pvaW4tcGFydDIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtcmFkaW8tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIHdpZHRoOiAyNTBweDtcbn1cbiIsIm1hdC1yYWRpby1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgd2lkdGg6IDI1MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinPart2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-join-part2',
          templateUrl: './join-part2.component.html',
          styleUrls: ['./join-part2.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/join/parts/join-part3/join-part3.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/components/join/parts/join-part3/join-part3.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: JoinPart3Component */

  /***/
  function srcAppSharedComponentsJoinPartsJoinPart3JoinPart3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinPart3Component", function () {
      return JoinPart3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core */
    "./src/app/core/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function JoinPart3Component_p_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "in attesa della risposta del server...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JoinPart3Component_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registrazione completata con successo!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JoinPart3Component_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registrazione fallita!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var StatusEnum;

    (function (StatusEnum) {
      StatusEnum["waiting"] = "waiting";
      StatusEnum["success"] = "success";
      StatusEnum["failed"] = "failed";
    })(StatusEnum || (StatusEnum = {}));

    var JoinPart3Component =
    /*#__PURE__*/
    function () {
      function JoinPart3Component(http) {
        _classCallCheck(this, JoinPart3Component);

        this.http = http;
        this.StatusEnum = StatusEnum;
        this.status = StatusEnum.waiting;
      }

      _createClass(JoinPart3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.http.post(src_app_core__WEBPACK_IMPORTED_MODULE_1__["ApiRoute"].clienti, this.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return _this16.status = StatusEnum.success;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _this16.status = StatusEnum.failed;
          })).subscribe();
        }
      }]);

      return JoinPart3Component;
    }();

    JoinPart3Component.ɵfac = function JoinPart3Component_Factory(t) {
      return new (t || JoinPart3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    JoinPart3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JoinPart3Component,
      selectors: [["app-join-part3"]],
      inputs: {
        data: "data"
      },
      decls: 3,
      vars: 3,
      consts: [[4, "ngIf"]],
      template: function JoinPart3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JoinPart3Component_p_0_Template, 2, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JoinPart3Component_p_1_Template, 2, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JoinPart3Component_p_2_Template, 2, 0, "p", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status === ctx.StatusEnum.waiting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status === ctx.StatusEnum.success);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status === ctx.StatusEnum.failed);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pvaW4vcGFydHMvam9pbi1wYXJ0My9qb2luLXBhcnQzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinPart3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-join-part3',
          templateUrl: './join-part3.component.html',
          styleUrls: ['./join-part3.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/loader/loader.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/loader/loader.component.ts ***!
    \**************************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppSharedComponentsLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var LoaderComponent =
    /*#__PURE__*/
    function () {
      function LoaderComponent() {
        _classCallCheck(this, LoaderComponent);
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)();
    };

    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      decls: 2,
      vars: 0,
      consts: [["src", "assets/loader.gif", "alt", "loader"], ["svgIcon", "bank", 1, "logo"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 1);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
      styles: [".logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  position: absolute;\n  top: 195px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.logo[_ngcontent-%COMP%]     svg {\n  width: 90px;\n  height: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQURnQjtFQUVoQixZQUZnQjtFQVNoQixrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUNORjtBREZFO0VBQ0UsV0FMYztFQU1kLFlBTmM7QUNVbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAkbmZjLWljb24tc2l6ZTogOTBweDtcbiAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRuZmMtaWNvbi1zaXplO1xuXG4gICYgOjpuZy1kZWVwIHN2ZyB7XG4gICAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICAgIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG4gIH1cblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTk1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuIiwiLmxvZ28ge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTk1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmxvZ28gOjpuZy1kZWVwIHN2ZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loader',
          templateUrl: './loader.component.html',
          styleUrls: ['./loader.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/login/login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/login/login.component.ts ***!
    \************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppSharedComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core */
    "./src/app/core/index.ts");
    /* harmony import */


    var src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/features/login-page/services/login.service */
    "./src/app/features/login-page/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LoginComponent_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obbligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " il pin \xE8 composto da 4-16 cifre ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "numeriche");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pin obbligatorio per il login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(fb, loginService, router) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.joinRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formCrl = this.fb.group({
          username: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)])
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this17 = this;

          this.loginService.getToken(this.formCrl.value.username, this.formCrl.value.password).subscribe(function (token) {
            return _this17.router.navigate([src_app_core__WEBPACK_IMPORTED_MODULE_2__["RoutersPath"].home], {});
          });
        }
      }, {
        key: "join",
        value: function join() {
          this.joinRequest.next();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      outputs: {
        joinRequest: "joinRequest"
      },
      decls: 17,
      vars: 5,
      consts: [[1, "form", 3, "formGroup"], [1, "full-width"], ["matInput", "", "placeholder", "username*", "formControlName", "username"], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Password*", "formControlName", "password"], [1, "login"], ["mat-button", "", "color", "primary", 3, "disabled", "click"], [1, "join"], ["mat-button", "", "color", "primary", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() {
            return ctx.join();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Crea un nuovo account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: [".form[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.login[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.join[_ngcontent-%COMP%]    .mat-button-wrapper {\n  font-size: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLmxvZ2luIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmpvaW4gOjpuZy1kZWVwLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59XG4iLCIuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLmxvZ2luIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmpvaW4gOjpuZy1kZWVwLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
        joinRequest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/nfc/nfc.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/components/nfc/nfc.component.ts ***!
    \********************************************************/

  /*! exports provided: NfcComponent */

  /***/
  function srcAppSharedComponentsNfcNfcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NfcComponent", function () {
      return NfcComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var NfcComponent =
    /*#__PURE__*/
    function () {
      function NfcComponent() {
        _classCallCheck(this, NfcComponent);
      }

      _createClass(NfcComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NfcComponent;
    }();

    NfcComponent.ɵfac = function NfcComponent_Factory(t) {
      return new (t || NfcComponent)();
    };

    NfcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NfcComponent,
      selectors: [["app-nfc"]],
      decls: 3,
      vars: 0,
      consts: [["svgIcon", "nfc-variant", 1, "nfc-icon"], [1, "nfc-message"]],
      template: function NfcComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "passare il cellulare con nfc abilitato sul dispositivo per collegarsi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
      styles: [".nfc-message[_ngcontent-%COMP%], .nfc-icon[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n.nfc-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.nfc-icon[_ngcontent-%COMP%]     svg {\n  width: 60px;\n  height: 60px;\n}\n\n.nfc-message[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25mYy9uZmMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25mYy9uZmMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFHRSxXQURnQjtFQUVoQixZQUZnQjtBQ0NsQjs7QURHRTtFQUNFLFdBTGM7RUFNZCxZQU5jO0FDS2xCOztBREtBO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZmMvbmZjLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWNvbG9yIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5uZmMtaWNvbiB7XG4gIEBleHRlbmQgJWNvbG9yO1xuICAkbmZjLWljb24tc2l6ZTogNjBweDtcbiAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRuZmMtaWNvbi1zaXplO1xuXG4gICYgOjpuZy1kZWVwIHN2ZyB7XG4gICAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICAgIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG4gIH1cbn1cblxuLm5mYy1tZXNzYWdlIHtcbiAgQGV4dGVuZCAlY29sb3I7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cbiIsIi5uZmMtbWVzc2FnZSwgLm5mYy1pY29uIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5uZmMtaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubmZjLWljb24gOjpuZy1kZWVwIHN2ZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5uZmMtbWVzc2FnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NfcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nfc',
          templateUrl: './nfc.component.html',
          styleUrls: ['./nfc.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/pin/pin.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/components/pin/pin.component.ts ***!
    \********************************************************/

  /*! exports provided: PinComponent */

  /***/
  function srcAppSharedComponentsPinPinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PinComponent", function () {
      return PinComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function PinComponent_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " L'id utente \xE8 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "richiesto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PinComponent_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " il pin \xE8 composto da 4-16 cifre ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "numeriche");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PinComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pin obbligatorio per il login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PinComponent =
    /*#__PURE__*/
    function () {
      function PinComponent(fb) {
        _classCallCheck(this, PinComponent);

        this.fb = fb;
        this.loginEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formCrl = this.fb.group({
          userId: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)])
        });
      }

      _createClass(PinComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          this.loginEvent.emit({
            username: this.formCrl.value.userId,
            password: this.formCrl.value.password
          });
        }
      }]);

      return PinComponent;
    }();

    PinComponent.ɵfac = function PinComponent_Factory(t) {
      return new (t || PinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    PinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PinComponent,
      selectors: [["app-pin"]],
      outputs: {
        loginEvent: "loginEvent"
      },
      decls: 16,
      vars: 5,
      consts: [[1, "form", 3, "formGroup"], [1, "full-width"], ["matInput", "", "placeholder", "ID*", "formControlName", "userId"], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Password*", "formControlName", "password"], [1, "login"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
      template: function PinComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PinComponent_Template_button_click_14_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]],
      styles: [".login[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bpbi9waW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bpbi9waW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGluL3Bpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iLCIubG9naW4ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pin',
          templateUrl: './pin.component.html',
          styleUrls: ['./pin.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        loginEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/qr-code/qr-code.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/qr-code/qr-code.component.ts ***!
    \****************************************************************/

  /*! exports provided: QrCodeComponent */

  /***/
  function srcAppSharedComponentsQrCodeQrCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrCodeComponent", function () {
      return QrCodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _zxing_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @zxing/library */
    "./node_modules/@zxing/library/esm5/index.js");
    /* harmony import */


    var _zxing_library__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @zxing/ngx-scanner */
    "./node_modules/@zxing/ngx-scanner/__ivy_ngcc__/fesm2015/zxing-ngx-scanner.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var QrCodeComponent =
    /*#__PURE__*/
    function () {
      function QrCodeComponent(clienteService, pagamentoService) {
        _classCallCheck(this, QrCodeComponent);

        this.clienteService = clienteService;
        this.pagamentoService = pagamentoService;
        /** standard accettati dal lettore */

        this.allowedFormats = [_zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].QR_CODE, _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].EAN_13];
        /** determina se è riuscito ad aprire o meno lo scanner */

        this.statusScanner$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
      }

      _createClass(QrCodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /** alla lettura dello stato prova ad effettuare il login */

      }, {
        key: "scanSuccessHandler",
        value: function scanSuccessHandler(token) {
          var _this18 = this;

          this.scanner.enable = false;
          this.clienteService.getClienteByToken(token).subscribe(function (result) {
            if (result.type !== src_app_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ERROR"]) {
              _this18.pagamentoService.handlePagamento();
            } else {
              _this18.scanner.enable = true;
            }
          });
        }
        /** modifica lo stato del reader, che indica se è in funzione o ha dei problemi in esecuzione */

      }, {
        key: "readerStatus",
        value: function readerStatus(status) {
          this.statusScanner$.next(status);
        }
      }]);

      return QrCodeComponent;
    }();

    QrCodeComponent.ɵfac = function QrCodeComponent_Factory(t) {
      return new (t || QrCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_4__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_4__["PrezzoService"]));
    };

    QrCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QrCodeComponent,
      selectors: [["app-qr-code"]],
      viewQuery: function QrCodeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__["ZXingScannerComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scanner = _t.first);
        }
      },
      decls: 8,
      vars: 7,
      consts: [[3, "hidden"], [1, "qr-reader", 3, "formats", "scanSuccess", "permissionResponse"], ["svgIcon", "qrcode", 1, "qr-icon"], [1, "qr-message"]],
      template: function QrCodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "zxing-scanner", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scanSuccess", function QrCodeComponent_Template_zxing_scanner_scanSuccess_2_listener($event) {
            return ctx.scanSuccessHandler($event);
          })("permissionResponse", function QrCodeComponent_Template_zxing_scanner_permissionResponse_2_listener($event) {
            return ctx.readerStatus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "abilitare il lettore qrcode.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.statusScanner$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formats", ctx.allowedFormats);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.statusScanner$));
        }
      },
      directives: [_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__["ZXingScannerComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".qr-reader[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: auto;\n}\n\n.qr-message[_ngcontent-%COMP%], .qr-icon[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n.qr-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.qr-icon[_ngcontent-%COMP%]     svg {\n  width: 60px;\n  height: 60px;\n}\n\n.qr-message[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3FyLWNvZGUvcXItY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcXItY29kZS9xci1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUdFLFdBRGdCO0VBRWhCLFlBRmdCO0FDQ2xCOztBREdFO0VBQ0UsV0FMYztFQU1kLFlBTmM7QUNLbEI7O0FES0E7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3FyLWNvZGUvcXItY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xci1yZWFkZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuJWNvbG9yIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5xci1pY29uIHtcbiAgQGV4dGVuZCAlY29sb3I7XG4gICRuZmMtaWNvbi1zaXplOiA2MHB4O1xuICB3aWR0aDogJG5mYy1pY29uLXNpemU7XG4gIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG5cbiAgJiA6Om5nLWRlZXAgc3ZnIHtcbiAgICB3aWR0aDogJG5mYy1pY29uLXNpemU7XG4gICAgaGVpZ2h0OiAkbmZjLWljb24tc2l6ZTtcbiAgfVxufVxuXG4ucXItbWVzc2FnZSB7XG4gIEBleHRlbmQgJWNvbG9yO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG4iLCIucXItcmVhZGVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5xci1tZXNzYWdlLCAucXItaWNvbiB7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG4ucXItaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ucXItaWNvbiA6Om5nLWRlZXAgc3ZnIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnFyLW1lc3NhZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QrCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-qr-code',
          templateUrl: './qr-code.component.html',
          styleUrls: ['./qr-code.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core__WEBPACK_IMPORTED_MODULE_4__["ClienteService"]
        }, {
          type: src_app_core__WEBPACK_IMPORTED_MODULE_4__["PrezzoService"]
        }];
      }, {
        scanner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_2__["ZXingScannerComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/recognition/recognition.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/recognition/recognition.component.ts ***!
    \************************************************************************/

  /*! exports provided: RecognitionComponent */

  /***/
  function srcAppSharedComponentsRecognitionRecognitionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecognitionComponent", function () {
      return RecognitionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../constants/login-type.enum */
    "./src/app/shared/constants/login-type.enum.ts");
    /* harmony import */


    var src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/services/routing.service */
    "./src/app/core/services/routing.service.ts");
    /* harmony import */


    var src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/features/login-page/services/login.service */
    "./src/app/features/login-page/services/login.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _pin_pin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../pin/pin.component */
    "./src/app/shared/components/pin/pin.component.ts");
    /* harmony import */


    var _qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../qr-code/qr-code.component */
    "./src/app/shared/components/qr-code/qr-code.component.ts");
    /* harmony import */


    var _nfc_nfc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../nfc/nfc.component */
    "./src/app/shared/components/nfc/nfc.component.ts");

    function RecognitionComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecognitionComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qr-code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecognitionComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nfc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    var RecognitionComponent =
    /*#__PURE__*/
    function () {
      function RecognitionComponent(routingService, loginService) {
        _classCallCheck(this, RecognitionComponent);

        this.routingService = routingService;
        this.loginService = loginService;
        this.LoginType = _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__["LoginType"];
        this.loginType = _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__["LoginType"].pin;
      }

      _createClass(RecognitionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.routingService.updateHeader('Login');
        }
      }, {
        key: "changeLogin",
        value: function changeLogin(choosenLoginType) {
          this.loginType = choosenLoginType;
        }
      }]);

      return RecognitionComponent;
    }();

    RecognitionComponent.ɵfac = function RecognitionComponent_Factory(t) {
      return new (t || RecognitionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]));
    };

    RecognitionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecognitionComponent,
      selectors: [["app-recognition"]],
      decls: 12,
      vars: 12,
      consts: [[1, "buttons-container"], ["mat-icon-button", "", 3, "ngClass", "click"], ["svgIcon", "textbox-password"], ["mat-icon-button", "", 1, "mr-2", "ml-2", 3, "ngClass", "click"], ["svgIcon", "qrcode"], ["svgIcon", "nfc-variant"], [1, "content"], [1, "login-body"], [4, "ngIf"]],
      template: function RecognitionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecognitionComponent_Template_button_click_1_listener() {
            return ctx.changeLogin(ctx.LoginType.pin);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecognitionComponent_Template_button_click_3_listener() {
            return ctx.changeLogin(ctx.LoginType.qr);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecognitionComponent_Template_button_click_5_listener() {
            return ctx.changeLogin(ctx.LoginType.nfc);
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _pin_pin_component__WEBPACK_IMPORTED_MODULE_7__["PinComponent"], _qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_8__["QrCodeComponent"], _nfc_nfc_component__WEBPACK_IMPORTED_MODULE_9__["NfcComponent"]],
      styles: [".login-body[_ngcontent-%COMP%] {\n  height: 170px;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 2em;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #25bb25;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9lYXN5cGF5LWF0bS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JlY29nbml0aW9uL3JlY29nbml0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9yZWNvZ25pdGlvbi9yZWNvZ25pdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURJQTtFQUNFLFlBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JlY29nbml0aW9uL3JlY29nbml0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJvZHkge1xuICBoZWlnaHQ6IDE3MHB4O1xuICAvLyBtaW4td2lkdGg6IDIwNXB4O1xuXG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAzMHB4O1xufVxuXG4uYnV0dG9ucy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogIzI1YmIyNTtcbn1cbiIsIi5sb2dpbi1ib2R5IHtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW46IDMwcHg7XG59XG5cbi5idXR0b25zLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMjViYjI1O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecognitionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recognition',
          templateUrl: './recognition.component.html',
          styleUrls: ['./recognition.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"]
        }, {
          type: src_app_features_login_page_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/constants/login-type.enum.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/constants/login-type.enum.ts ***!
    \*****************************************************/

  /*! exports provided: LoginType */

  /***/
  function srcAppSharedConstantsLoginTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginType", function () {
      return LoginType;
    });

    var LoginType;

    (function (LoginType) {
      LoginType["pin"] = "PIN";
      LoginType["qr"] = "QR";
      LoginType["nfc"] = "NFC";
    })(LoginType || (LoginType = {}));
    /***/

  },

  /***/
  "./src/app/shared/directives/numeric.directive.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/directives/numeric.directive.ts ***!
    \********************************************************/

  /*! exports provided: numericValidator, NumericDirective */

  /***/
  function srcAppSharedDirectivesNumericDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "numericValidator", function () {
      return numericValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumericDirective", function () {
      return NumericDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /** Validatore di caratteri numerici. ritorna */


    function numericValidator() {
      return function (control) {
        var isNumeric = new RegExp('^[0-9]*$').test(control.value);
        return !isNumeric ? {
          'numeric': {
            value: control.value
          }
        } : null;
      };
    }
    /** Direttiva usata per validare se in un HTMLInput ha solo valori numerici */


    var NumericDirective =
    /*#__PURE__*/
    function () {
      function NumericDirective() {
        _classCallCheck(this, NumericDirective);
      }

      _createClass(NumericDirective, [{
        key: "validate",
        value: function validate(control) {
          return numericValidator()(control);
        }
      }]);

      return NumericDirective;
    }();

    NumericDirective.ɵfac = function NumericDirective_Factory(t) {
      return new (t || NumericDirective)();
    };

    NumericDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NumericDirective,
      selectors: [["", "appNumeric", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
        useExisting: NumericDirective,
        multi: true
      }])]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumericDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appNumeric]',
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
            useExisting: NumericDirective,
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/index.ts":
  /*!*********************************!*\
    !*** ./src/app/shared/index.ts ***!
    \*********************************/

  /*! exports provided: SharedModule, LoginType, QrCodeComponent, NfcComponent, PinComponent, LoginComponent, BigButtonComponent, InfoWidgetComponent, MinPipe, SwitchNumberPipe, numericValidator, NumericDirective */

  /***/
  function srcAppSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"];
    });
    /* harmony import */


    var _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants/login-type.enum */
    "./src/app/shared/constants/login-type.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginType", function () {
      return _constants_login_type_enum__WEBPACK_IMPORTED_MODULE_1__["LoginType"];
    });
    /* harmony import */


    var _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/qr-code/qr-code.component */
    "./src/app/shared/components/qr-code/qr-code.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "QrCodeComponent", function () {
      return _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_2__["QrCodeComponent"];
    });
    /* harmony import */


    var _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/nfc/nfc.component */
    "./src/app/shared/components/nfc/nfc.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NfcComponent", function () {
      return _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_3__["NfcComponent"];
    });
    /* harmony import */


    var _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/pin/pin.component */
    "./src/app/shared/components/pin/pin.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PinComponent", function () {
      return _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_4__["PinComponent"];
    });
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/shared/components/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"];
    });
    /* harmony import */


    var _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/big-button/big-button.component */
    "./src/app/shared/components/big-button/big-button.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BigButtonComponent", function () {
      return _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_6__["BigButtonComponent"];
    });
    /* harmony import */


    var _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/info-widget/info-widget.component */
    "./src/app/shared/components/info-widget/info-widget.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InfoWidgetComponent", function () {
      return _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_7__["InfoWidgetComponent"];
    });
    /* harmony import */


    var _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pipes/min.pipe */
    "./src/app/shared/pipes/min.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MinPipe", function () {
      return _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_8__["MinPipe"];
    });
    /* harmony import */


    var _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pipes/switch-number.pipe */
    "./src/app/shared/pipes/switch-number.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SwitchNumberPipe", function () {
      return _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_9__["SwitchNumberPipe"];
    });
    /* harmony import */


    var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./directives/numeric.directive */
    "./src/app/shared/directives/numeric.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "numericValidator", function () {
      return _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_10__["numericValidator"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NumericDirective", function () {
      return _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_10__["NumericDirective"];
    });
    /***/

  },

  /***/
  "./src/app/shared/pipes/min.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/pipes/min.pipe.ts ***!
    \******************************************/

  /*! exports provided: MinPipe */

  /***/
  function srcAppSharedPipesMinPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinPipe", function () {
      return MinPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * restituisce il minimo tra i due valori passati
     */


    var MinPipe =
    /*#__PURE__*/
    function () {
      function MinPipe() {
        _classCallCheck(this, MinPipe);
      }

      _createClass(MinPipe, [{
        key: "transform",
        value: function transform(values) {
          if (!Array.isArray(values)) {
            console.error('MinPipe richiede la presenza di un array di numeri per funzionare');
            console.error(values);
            return -1;
          }

          if (values.some(function (n) {
            return !(typeof n === 'number');
          })) {
            console.error('MinPipe richiede che l\'array contenga valori numerici');
            console.error(values);
            return -1;
          }

          return Math.min.apply(Math, _toConsumableArray(values));
        }
      }]);

      return MinPipe;
    }();

    MinPipe.ɵfac = function MinPipe_Factory(t) {
      return new (t || MinPipe)();
    };

    MinPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "min",
      type: MinPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'min'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/switch-number.pipe.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/pipes/switch-number.pipe.ts ***!
    \****************************************************/

  /*! exports provided: SwitchNumberPipe */

  /***/
  function srcAppSharedPipesSwitchNumberPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwitchNumberPipe", function () {
      return SwitchNumberPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * [number, number] | switchNumber:switchFn
     */


    var SwitchNumberPipe =
    /*#__PURE__*/
    function () {
      function SwitchNumberPipe() {
        _classCallCheck(this, SwitchNumberPipe);
      }

      _createClass(SwitchNumberPipe, [{
        key: "transform",

        /**
         * @param switchFn  - determina se prendere il valore 1 o il valore 2
         */
        value: function transform(values, switchFn) {
          if (!Array.isArray(values)) {
            console.error('SwitchNumberPipe richiede la presenza di un array di numeri per funzionare');
            console.error(values);
            return -1;
          }

          if (values.length !== 2 || values.some(function (n) {
            return !(typeof n === 'number');
          })) {
            console.error('SwitchNumberPipe richiede che l\'array contenga 2 valori numerici');
            console.error(values);
            return -1;
          }

          var equal = switchFn || true;
          return equal ? values[0] : values[1];
        }
      }]);

      return SwitchNumberPipe;
    }();

    SwitchNumberPipe.ɵfac = function SwitchNumberPipe_Factory(t) {
      return new (t || SwitchNumberPipe)();
    };

    SwitchNumberPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "switchNumber",
      type: SwitchNumberPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwitchNumberPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'switchNumber'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @zxing/ngx-scanner */
    "./node_modules/@zxing/ngx-scanner/__ivy_ngcc__/fesm2015/zxing-ngx-scanner.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/banner/banner.component */
    "./src/app/shared/components/banner/banner.component.ts");
    /* harmony import */


    var _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/big-button/big-button.component */
    "./src/app/shared/components/big-button/big-button.component.ts");
    /* harmony import */


    var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/error-page/error-page.component */
    "./src/app/shared/components/error-page/error-page.component.ts");
    /* harmony import */


    var _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/error/error.component */
    "./src/app/shared/components/error/error.component.ts");
    /* harmony import */


    var _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/info-widget/info-widget.component */
    "./src/app/shared/components/info-widget/info-widget.component.ts");
    /* harmony import */


    var _components_join_join_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/join/join.component */
    "./src/app/shared/components/join/join.component.ts");
    /* harmony import */


    var _components_join_parts_join_dashboard_join_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/join/parts/join-dashboard/join-dashboard.component */
    "./src/app/shared/components/join/parts/join-dashboard/join-dashboard.component.ts");
    /* harmony import */


    var _components_join_parts_join_part0_join_part0_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/join/parts/join-part0/join-part0.component */
    "./src/app/shared/components/join/parts/join-part0/join-part0.component.ts");
    /* harmony import */


    var _components_join_parts_join_part1_join_part1_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/join/parts/join-part1/join-part1.component */
    "./src/app/shared/components/join/parts/join-part1/join-part1.component.ts");
    /* harmony import */


    var _components_join_parts_join_part2_join_part2_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/join/parts/join-part2/join-part2.component */
    "./src/app/shared/components/join/parts/join-part2/join-part2.component.ts");
    /* harmony import */


    var _components_join_parts_join_part3_join_part3_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/join/parts/join-part3/join-part3.component */
    "./src/app/shared/components/join/parts/join-part3/join-part3.component.ts");
    /* harmony import */


    var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/loader/loader.component */
    "./src/app/shared/components/loader/loader.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/shared/components/login/login.component.ts");
    /* harmony import */


    var _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/nfc/nfc.component */
    "./src/app/shared/components/nfc/nfc.component.ts");
    /* harmony import */


    var _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/pin/pin.component */
    "./src/app/shared/components/pin/pin.component.ts");
    /* harmony import */


    var _components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/qr-code/qr-code.component */
    "./src/app/shared/components/qr-code/qr-code.component.ts");
    /* harmony import */


    var _components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/recognition/recognition.component */
    "./src/app/shared/components/recognition/recognition.component.ts");
    /* harmony import */


    var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./directives/numeric.directive */
    "./src/app/shared/directives/numeric.directive.ts");
    /* harmony import */


    var _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pipes/min.pipe */
    "./src/app/shared/pipes/min.pipe.ts");
    /* harmony import */


    var _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pipes/switch-number.pipe */
    "./src/app/shared/pipes/switch-number.pipe.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__["ZXingScannerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"]], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_27__["QrCodeComponent"], _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_25__["NfcComponent"], _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_26__["PinComponent"], _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_29__["NumericDirective"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_23__["LoaderComponent"], _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__["ErrorPageComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"], _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_13__["BigButtonComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"], _components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_28__["RecognitionComponent"], _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_30__["MinPipe"], _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_31__["SwitchNumberPipe"], _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_16__["InfoWidgetComponent"], _components_join_join_component__WEBPACK_IMPORTED_MODULE_17__["JoinComponent"], _components_join_parts_join_part0_join_part0_component__WEBPACK_IMPORTED_MODULE_19__["JoinPart0Component"], _components_join_parts_join_part1_join_part1_component__WEBPACK_IMPORTED_MODULE_20__["JoinPart1Component"], _components_join_parts_join_part2_join_part2_component__WEBPACK_IMPORTED_MODULE_21__["JoinPart2Component"], _components_join_parts_join_dashboard_join_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["JoinDashboardComponent"], _components_join_parts_join_part3_join_part3_component__WEBPACK_IMPORTED_MODULE_22__["JoinPart3Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__["ZXingScannerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"]],
        exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_23__["LoaderComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"], _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_13__["BigButtonComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"], _components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_28__["RecognitionComponent"], _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_30__["MinPipe"], _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_31__["SwitchNumberPipe"], _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_16__["InfoWidgetComponent"], _components_join_join_component__WEBPACK_IMPORTED_MODULE_17__["JoinComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_components_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_27__["QrCodeComponent"], _components_nfc_nfc_component__WEBPACK_IMPORTED_MODULE_25__["NfcComponent"], _components_pin_pin_component__WEBPACK_IMPORTED_MODULE_26__["PinComponent"], _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_29__["NumericDirective"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_23__["LoaderComponent"], _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__["ErrorPageComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"], _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_13__["BigButtonComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"], _components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_28__["RecognitionComponent"], _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_30__["MinPipe"], _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_31__["SwitchNumberPipe"], _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_16__["InfoWidgetComponent"], _components_join_join_component__WEBPACK_IMPORTED_MODULE_17__["JoinComponent"], _components_join_parts_join_part0_join_part0_component__WEBPACK_IMPORTED_MODULE_19__["JoinPart0Component"], _components_join_parts_join_part1_join_part1_component__WEBPACK_IMPORTED_MODULE_20__["JoinPart1Component"], _components_join_parts_join_part2_join_part2_component__WEBPACK_IMPORTED_MODULE_21__["JoinPart2Component"], _components_join_parts_join_dashboard_join_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["JoinDashboardComponent"], _components_join_parts_join_part3_join_part3_component__WEBPACK_IMPORTED_MODULE_22__["JoinPart3Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__["ZXingScannerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"]],
          exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_23__["LoaderComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"], _components_big_button_big_button_component__WEBPACK_IMPORTED_MODULE_13__["BigButtonComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"], _components_recognition_recognition_component__WEBPACK_IMPORTED_MODULE_28__["RecognitionComponent"], _pipes_min_pipe__WEBPACK_IMPORTED_MODULE_30__["MinPipe"], _pipes_switch_number_pipe__WEBPACK_IMPORTED_MODULE_31__["SwitchNumberPipe"], _components_info_widget_info_widget_component__WEBPACK_IMPORTED_MODULE_16__["InfoWidgetComponent"], _components_join_join_component__WEBPACK_IMPORTED_MODULE_17__["JoinComponent"]],
          entryComponents: [_components_join_parts_join_part0_join_part0_component__WEBPACK_IMPORTED_MODULE_19__["JoinPart0Component"], _components_join_parts_join_part1_join_part1_component__WEBPACK_IMPORTED_MODULE_20__["JoinPart1Component"], _components_join_parts_join_part2_join_part2_component__WEBPACK_IMPORTED_MODULE_21__["JoinPart2Component"], _components_join_parts_join_part3_join_part3_component__WEBPACK_IMPORTED_MODULE_22__["JoinPart3Component"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:8082/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/terasud/JavaProjects/EasyPay/src/main/angular/easypay-atm/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map