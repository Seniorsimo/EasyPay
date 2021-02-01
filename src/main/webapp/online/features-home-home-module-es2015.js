(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-home-home-module"],{

/***/ "./src/app/features/home/home-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/home/home-routing.module.ts ***!
  \******************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/features/home/home.component.ts");






const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: '',
                redirectTo: 'pin',
                pathMatch: 'full'
            },
            {
                path: 'pin',
                component: _shared__WEBPACK_IMPORTED_MODULE_2__["PinComponent"]
            },
            {
                path: 'qr',
                component: _shared__WEBPACK_IMPORTED_MODULE_2__["QrCodeComponent"]
            },
            {
                path: 'nfc',
                component: _shared__WEBPACK_IMPORTED_MODULE_2__["NfcComponent"]
            }
        ]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/constants/utente-type.enum */ "./src/app/core/constants/utente-type.enum.ts");
/* harmony import */ var src_app_core_models_error_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/models/error.model */ "./src/app/core/models/error.model.ts");
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_utente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/utente.service */ "./src/app/core/services/utente.service.ts");
/* harmony import */ var src_app_core_services_pagamento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/pagamento.service */ "./src/app/core/services/pagamento.service.ts");
/* harmony import */ var src_app_core_services_conto_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/conto.service */ "./src/app/core/services/conto.service.ts");
/* harmony import */ var src_app_core_stores_utenti_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/stores/utenti.store */ "./src/app/core/stores/utenti.store.ts");
/* harmony import */ var src_app_core_stores_conti_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/stores/conti.store */ "./src/app/core/stores/conti.store.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/error/error.component */ "./src/app/shared/components/error/error.component.ts");

















const _c0 = function () { return ["pin"]; };
const _c1 = function () { return ["qr"]; };
const _c2 = function () { return ["nfc"]; };
function HomeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "EasyPay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](7, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 12, ctx_r0.prezzo$), "EUR", "symbol", "1.2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, ctx_r0.commerciante$).ragSoc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 16, ctx_r0.commerciante$).cognome, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 18, ctx_r0.commerciante$).nome, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2));
} }
function HomeComponent_app_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r1.error$));
} }
class HomeComponent {
    constructor(route, utenteService, pagamentoService, loaderService, contoService, utentiStore, contiStore) {
        this.route = route;
        this.utenteService = utenteService;
        this.pagamentoService = pagamentoService;
        this.loaderService = loaderService;
        this.contoService = contoService;
        this.utentiStore = utentiStore;
        this.contiStore = contiStore;
        this.LoadingStatus = src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"];
        /** dati sull' errore ottenuto cercando di recuperare le informazioni */
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.subscriptions = [];
        this.statusLoader$ = this.loaderService.status$;
    }
    /*
     * idConto: id del commerciante
     * prezzo: prezzo da pagare
     */
    ngOnInit() {
        this.commerciante$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.utentiStore.get(src_app_core_constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_3__["UtenteType"].commerciante));
        this.prezzo$ = this.pagamentoService.prezzo$;
        this.subscriptions.push(this.route.queryParams
            .pipe(
        // debounceTime evita l'emit iniziale prima che i param siano effettivamente inizializzati
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(params => {
            localStorage.setItem('onlineToken', params.token);
            this.pagamentoService.setPrezzo(params.prezzo);
            if (this.commerciante$.value && this.commerciante$.value.id) {
                return this.commerciante$;
            }
            else {
                return this.contoService.getConto(params.idConto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(conto => {
                    this.contiStore.add(src_app_core_constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_3__["UtenteType"].commerciante, conto);
                    return this.utenteService.getUtenteNoSecurity(conto.id);
                }));
            }
        }))
            .subscribe({
            next: result => {
                if (result.type === src_app_core_constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_3__["UtenteType"].commerciante) {
                    this.utentiStore.add(src_app_core_constants_utente_type_enum__WEBPACK_IMPORTED_MODULE_3__["UtenteType"].commerciante, result);
                    this.commerciante$.next(result);
                    this.loaderService.changeStatus(src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"].SUCCESS);
                }
                else {
                    // account cliente
                    this.loaderService.changeStatus(src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"].FAILED);
                    throw {
                        type: src_app_core_models_error_model__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ERROR"],
                        name: 'tipo account errato',
                        message: 'è necessario un account da commerciante, ma questo account è di tipo ' + result.type,
                    };
                }
            },
            error: error => {
                this.error$.next(error);
                this.loaderService.changeStatus(src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"].FAILED);
            },
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(subsc => subsc.unsubscribe());
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_utente_service__WEBPACK_IMPORTED_MODULE_7__["UtenteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_pagamento_service__WEBPACK_IMPORTED_MODULE_8__["PagamentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_conto_service__WEBPACK_IMPORTED_MODULE_9__["ContoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_stores_utenti_store__WEBPACK_IMPORTED_MODULE_10__["UtentiStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_stores_conti_store__WEBPACK_IMPORTED_MODULE_11__["ContiStore"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 6, consts: [[4, "ngIf"], ["titleLabel", "Impossibile procedere con il pagamento. Se il problema persiste contattare il venditore", "content", "SUGGERIMENTO PER IL VENDITORE: assicurarsi che il idConto e prezzo siano validi", 3, "error", 4, "ngIf"], [1, "mb-0"], ["svgIcon", "bank", 1, "logo"], [1, "logo-title", "mt-0"], [1, "price"], [1, "customer-rs"], [1, "customer-name"], [1, "content"], ["mat-icon-button", "", "queryParamsHandling", "preserve", 3, "routerLink"], ["svgIcon", "textbox-password"], ["mat-icon-button", "", "queryParamsHandling", "preserve", 1, "mr-2", "ml-2", 3, "routerLink"], ["svgIcon", "qrcode"], ["svgIcon", "nfc-variant"], ["titleLabel", "Impossibile procedere con il pagamento. Se il problema persiste contattare il venditore", "content", "SUGGERIMENTO PER IL VENDITORE: assicurarsi che il idConto e prezzo siano validi", 3, "error"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_ng_container_0_Template, 25, 23, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_app_error_2_Template, 2, 3, "app-error", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.statusLoader$) === ctx.LoadingStatus.SUCCESS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.statusLoader$) === ctx.LoadingStatus.FAILED);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n}\n.logo[_ngcontent-%COMP%]     svg {\n  width: 90px;\n  height: 90px;\n}\n.content[_ngcontent-%COMP%] {\n  margin: 20px;\n  min-height: 175px;\n}\n.customer-rs[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.customer-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlcmFzdWQvSmF2YVByb2plY3RzL0Vhc3lQYXkvc3JjL21haW4vYW5ndWxhci9FYXN5UGF5LW9ubGluZS9zcmMvYXBwL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsV0FEZ0I7RUFFaEIsWUFGZ0I7QUNFbEI7QURFRTtFQUNFLFdBTGM7RUFNZCxZQU5jO0FDTWxCO0FEUUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNMRjtBRFFBO0VBQ0UsU0FBQTtBQ0xGO0FEUUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAkbmZjLWljb24tc2l6ZTogOTBweDtcbiAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRuZmMtaWNvbi1zaXplO1xuXG4gICYgOjpuZy1kZWVwIHN2ZyB7XG4gICAgd2lkdGg6ICRuZmMtaWNvbi1zaXplO1xuICAgIGhlaWdodDogJG5mYy1pY29uLXNpemU7XG4gIH1cbn1cblxuLmxvZ28tdGl0bGUge1xuXG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxNzVweDtcbn1cblxuLmN1c3RvbWVyLXJzIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY3VzdG9tZXItbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIiwiLmxvZ28ge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuLmxvZ28gOjpuZy1kZWVwIHN2ZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxNzVweDtcbn1cblxuLmN1c3RvbWVyLXJzIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY3VzdG9tZXItbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_core_services_utente_service__WEBPACK_IMPORTED_MODULE_7__["UtenteService"] }, { type: src_app_core_services_pagamento_service__WEBPACK_IMPORTED_MODULE_8__["PagamentoService"] }, { type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }, { type: src_app_core_services_conto_service__WEBPACK_IMPORTED_MODULE_9__["ContoService"] }, { type: src_app_core_stores_utenti_store__WEBPACK_IMPORTED_MODULE_10__["UtentiStore"] }, { type: src_app_core_stores_conti_store__WEBPACK_IMPORTED_MODULE_11__["ContiStore"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/features/home/home-routing.module.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");







class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            src_app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        src_app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                    src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    src_app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-home-home-module-es2015.js.map