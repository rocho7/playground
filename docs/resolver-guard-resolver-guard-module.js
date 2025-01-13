(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resolver-guard-resolver-guard-module"],{

/***/ "Jpd7":
/*!********************************************************!*\
  !*** ./src/app/services/resolvers/resolver.service.ts ***!
  \********************************************************/
/*! exports provided: ResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolverService", function() { return ResolverService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ResolverService {
    constructor(http) {
        this.http = http;
        this.jsonPlaceholderApi = 'https://jsonplaceholder.typicode.com/';
        this.usersEndpoint = 'users';
    }
    resolve(route, state) {
        return this.http.get(`${this.jsonPlaceholderApi}${this.usersEndpoint}`);
    }
    getUsers() {
        // return this.http.get(`${this.jsonPlaceholderApi}${this.usersEndpoint}`);
    }
}
ResolverService.ɵfac = function ResolverService_Factory(t) { return new (t || ResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ResolverService, factory: ResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "doUg":
/*!***********************************************************************!*\
  !*** ./src/app/components/resolver-guard/resolver-guard.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResolverGuardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolverGuardComponent", function() { return ResolverGuardComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ResolverGuardComponent_ng_container_8_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", user_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", user_r2.name, " -- ", user_r2.username, "");
} }
function ResolverGuardComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ResolverGuardComponent_ng_container_8_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.selectedUser($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResolverGuardComponent_ng_container_8_option_2_Template, 2, 3, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResolverGuardComponent_ng_container_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Save user");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
class ResolverGuardComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
    }
    ngOnInit() {
        this.users = this.route.snapshot.data['userParam'];
        this.userSelected = Object.create({});
    }
    selectedUser(user) {
        console.log('%cresolver ', 'color: white; background-color: #007acc;', user);
        this.userSelected = this.users.filter((u) => u.id === Number(user.target.value))[0];
    }
    save() {
        const jsonPlaceholderApi = 'https://jsonplaceholder.typicode.com/';
        const usersEndpoint = 'users';
        this.http.post(`${jsonPlaceholderApi}${usersEndpoint}`, this.userSelected).subscribe();
    }
}
ResolverGuardComponent.ɵfac = function ResolverGuardComponent_Factory(t) { return new (t || ResolverGuardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ResolverGuardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResolverGuardComponent, selectors: [["app-resolver-guard"]], decls: 12, vars: 1, consts: [[1, "row"], [1, "col-6"], [4, "ngIf"], [3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 3, "click"], [3, "value"]], template: function ResolverGuardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "resolver-guard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Ejemplos con RESOLVE, CANACTIVATE, CANDEACTIVATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Resolve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ResolverGuardComponent_ng_container_8_Template, 5, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Guard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvbHZlci1ndWFyZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResolverGuardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resolver-guard',
                templateUrl: './resolver-guard.component.html',
                styleUrls: ['./resolver-guard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lsQe":
/*!********************************************************************!*\
  !*** ./src/app/components/resolver-guard/resolver-guard.module.ts ***!
  \********************************************************************/
/*! exports provided: ResolverGuardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolverGuardModule", function() { return ResolverGuardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _resolver_guard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolver-guard.component */ "doUg");
/* harmony import */ var _resolver_guard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolver-guard-routing.module */ "sRQ0");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");






class ResolverGuardModule {
}
ResolverGuardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResolverGuardModule });
ResolverGuardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResolverGuardModule_Factory(t) { return new (t || ResolverGuardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _resolver_guard_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResolverGuardRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResolverGuardModule, { declarations: [_resolver_guard_component__WEBPACK_IMPORTED_MODULE_2__["ResolverGuardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _resolver_guard_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResolverGuardRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResolverGuardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_resolver_guard_component__WEBPACK_IMPORTED_MODULE_2__["ResolverGuardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    _resolver_guard_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResolverGuardRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "sRQ0":
/*!****************************************************************************!*\
  !*** ./src/app/components/resolver-guard/resolver-guard-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ResolverGuardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolverGuardRoutingModule", function() { return ResolverGuardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_resolvers_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/resolvers/resolver.service */ "Jpd7");
/* harmony import */ var _guards_permissions_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/permissions.guard */ "vLNS");
/* harmony import */ var _guards_without_save_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/without-save.guard */ "vf5V");
/* harmony import */ var _resolver_guard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolver-guard.component */ "doUg");








const routes = [
    {
        path: '',
        component: _resolver_guard_component__WEBPACK_IMPORTED_MODULE_5__["ResolverGuardComponent"],
        resolve: { userParam: src_app_services_resolvers_resolver_service__WEBPACK_IMPORTED_MODULE_2__["ResolverService"] },
        canActivate: [_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_3__["PermissionsGuard"]],
        canDeactivate: [_guards_without_save_guard__WEBPACK_IMPORTED_MODULE_4__["WithoutSaveGuard"]]
    }
];
class ResolverGuardRoutingModule {
}
ResolverGuardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResolverGuardRoutingModule });
ResolverGuardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResolverGuardRoutingModule_Factory(t) { return new (t || ResolverGuardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResolverGuardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResolverGuardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vLNS":
/*!***********************************************************************!*\
  !*** ./src/app/components/resolver-guard/guards/permissions.guard.ts ***!
  \***********************************************************************/
/*! exports provided: PermissionsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsGuard", function() { return PermissionsGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PermissionsGuard {
    canActivate(route, state) {
        if (this.hasPermissions()) {
            return true;
        }
        return false;
    }
    hasPermissions() {
        return true;
    }
}
PermissionsGuard.ɵfac = function PermissionsGuard_Factory(t) { return new (t || PermissionsGuard)(); };
PermissionsGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PermissionsGuard, factory: PermissionsGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionsGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "vf5V":
/*!************************************************************************!*\
  !*** ./src/app/components/resolver-guard/guards/without-save.guard.ts ***!
  \************************************************************************/
/*! exports provided: WithoutSaveGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutSaveGuard", function() { return WithoutSaveGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WithoutSaveGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        if (this.hasPermissions()) {
            return true;
        }
        return confirm('You have unsaved changes!! Do you really want to leave?');
    }
    hasPermissions() {
        return false;
    }
}
WithoutSaveGuard.ɵfac = function WithoutSaveGuard_Factory(t) { return new (t || WithoutSaveGuard)(); };
WithoutSaveGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WithoutSaveGuard, factory: WithoutSaveGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithoutSaveGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=resolver-guard-resolver-guard-module.js.map