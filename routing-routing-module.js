(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-routing-module"],{

/***/ "7UVG":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/mail/containers/mail-folder/mail-folder.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: MailFolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailFolderComponent", function() { return MailFolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_mail_item_mail_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/mail-item/mail-item.component */ "IeLe");







function MailFolderComponent_app_mail_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mail-item", 1);
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", message_r1);
} }
class MailFolderComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.data = this.route.data;
        this.title = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])("name"));
    }
}
MailFolderComponent.ɵfac = function MailFolderComponent_Factory(t) { return new (t || MailFolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
MailFolderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailFolderComponent, selectors: [["app-mail-folder"]], decls: 7, vars: 6, consts: [[3, "message", 4, "ngFor", "ngForOf"], [3, "message"]], template: function MailFolderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mail-folder works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MailFolderComponent_app_mail_item_5_Template, 1, 1, "app-mail-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.data).messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_mail_item_mail_item_component__WEBPACK_IMPORTED_MODULE_4__["MailItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsLWZvbGRlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailFolderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-mail-folder",
                templateUrl: "./mail-folder.component.html",
                styleUrls: ["./mail-folder.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "8psz":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/auth/auth.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class AuthService {
    constructor() {
        this.user = { isAdmin: true };
    }
    checkPermissions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.user.isAdmin);
    }
    isLoggedIn() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], null, null); })();


/***/ }),

/***/ "IeLe":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/mail/components/mail-item/mail-item.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: MailItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailItemComponent", function() { return MailItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





class MailItemComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateToMessage() {
        this.router.navigate([
            "",
            { outlets: { pane: ["message", this.message.id] } },
        ]);
    }
}
MailItemComponent.ɵfac = function MailItemComponent_Factory(t) { return new (t || MailItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MailItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailItemComponent, selectors: [["app-mail-item"]], inputs: { message: "message" }, decls: 10, vars: 6, consts: [["routerLinkActive", "active", 1, "mail-item", 3, "click"]], template: function MailItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mail-item works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailItemComponent_Template_a_click_2_listener() { return ctx.navigateToMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message.from, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, ctx.message.timestamp, "shortTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.summary);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".mai-item.active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.03);\n  border-left-color: #9f72e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1haWwtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLCtCQUFBO0VBQ0EsMEJBQUE7QUFBSiIsImZpbGUiOiJtYWlsLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpLWl0ZW0ge1xyXG4gICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzlmNzJlNjtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-mail-item",
                templateUrl: "./mail-item.component.html",
                styleUrls: ["./mail-item.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Jo7g":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/mail/containers/mail-folder/mail-folder.resolve.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: MailFolderResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailFolderResolve", function() { return MailFolderResolve; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/mail.service */ "OmNn");




class MailFolderResolve {
    constructor(mailService) {
        this.mailService = mailService;
    }
    resolve(route, state) {
        return this.mailService.getFolder(route.params.name);
    }
}
MailFolderResolve.ɵfac = function MailFolderResolve_Factory(t) { return new (t || MailFolderResolve)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"])); };
MailFolderResolve.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MailFolderResolve, factory: MailFolderResolve.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailFolderResolve, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"] }]; }, null); })();


/***/ }),

/***/ "KPEK":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/mail/components/mail-view/mail-view.guard.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: MailViewGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailViewGuard", function() { return MailViewGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mail_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail-view.component */ "cxmZ");




class MailViewGuard {
    constructor(component) {
        this.component = component;
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        if (component.hasUnsavedChanges) {
            return window.confirm("Are you sure you want to leave?");
        }
        return true;
    }
}
MailViewGuard.ɵfac = function MailViewGuard_Factory(t) { return new (t || MailViewGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mail_view_component__WEBPACK_IMPORTED_MODULE_1__["MailViewComponent"])); };
MailViewGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MailViewGuard, factory: MailViewGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailViewGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _mail_view_component__WEBPACK_IMPORTED_MODULE_1__["MailViewComponent"] }]; }, null); })();


/***/ }),

/***/ "OmNn":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/service/mail.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class MailService {
    constructor(http) {
        this.http = http;
        this.url = "/assets/ultimate-course/angular-pro/routing-course/messages.json";
    }
    getFolder(folder) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.http
                .get(`${this.url}?folder=${folder}`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])("messages"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                return res.filter((message) => message.folder === folder);
            }))
                .toPromise();
            return response;
        });
    }
}
MailService.ɵfac = function MailService_Factory(t) { return new (t || MailService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MailService, factory: MailService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "R5kn":
/*!******************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/auth/auth.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "Y/c0");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "8psz");




class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Y/c0":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/auth/auth.guard.ts ***!
  \*****************************************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "8psz");




class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canLoad(route, segments) {
        return this.authService.checkPermissions();
    }
    canActivate(route, state) {
        return this.authService.isLoggedIn();
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "ZlJS":
/*!************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/routing-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: RoutingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingRoutingModule", function() { return RoutingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "Y/c0");
/* harmony import */ var _mail_components_mail_view_mail_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail/components/mail-view/mail-view.component */ "cxmZ");
/* harmony import */ var _mail_containers_mail_folder_mail_folder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail/containers/mail-folder/mail-folder.component */ "7UVG");
/* harmony import */ var _mail_containers_mail_folder_mail_folder_resolve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mail/containers/mail-folder/mail-folder.resolve */ "Jo7g");
/* harmony import */ var _routing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing.component */ "oATb");









const routes = [
    {
        path: "",
        component: _routing_component__WEBPACK_IMPORTED_MODULE_6__["RoutingComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            {
                path: "folder/:name",
                component: _mail_containers_mail_folder_mail_folder_component__WEBPACK_IMPORTED_MODULE_4__["MailFolderComponent"],
                resolve: {
                    messages: _mail_containers_mail_folder_mail_folder_resolve__WEBPACK_IMPORTED_MODULE_5__["MailFolderResolve"],
                },
            },
            {
                path: "message/:id",
                component: _mail_components_mail_view_mail_view_component__WEBPACK_IMPORTED_MODULE_3__["MailViewComponent"],
                outlet: "pane",
            },
            {
                path: "dashboard",
                canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "xz1i")).then((m) => m.DashboardModule),
            },
        ],
    },
];
class RoutingRoutingModule {
}
RoutingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoutingRoutingModule });
RoutingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoutingRoutingModule_Factory(t) { return new (t || RoutingRoutingModule)(); }, providers: [_mail_containers_mail_folder_mail_folder_resolve__WEBPACK_IMPORTED_MODULE_5__["MailFolderResolve"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                providers: [_mail_containers_mail_folder_mail_folder_resolve__WEBPACK_IMPORTED_MODULE_5__["MailFolderResolve"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "cRXd":
/*!******************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/mail/mail.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ROUTES, MailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_mail_item_mail_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mail-item/mail-item.component */ "IeLe");
/* harmony import */ var _containers_mail_folder_mail_folder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/mail-folder/mail-folder.component */ "7UVG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_mail_app_mail_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mail-app/mail-app.component */ "q+6u");
/* harmony import */ var _components_mail_view_mail_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mail-view/mail-view.component */ "cxmZ");
/* harmony import */ var _components_mail_view_mail_view_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mail-view/mail-view.guard */ "KPEK");










const ROUTES = [
    {
        path: "**",
        redirectTo: "folder/:name",
        component: _containers_mail_folder_mail_folder_component__WEBPACK_IMPORTED_MODULE_3__["MailFolderComponent"],
    },
    {
        path: "message/:id",
        component: _components_mail_view_mail_view_component__WEBPACK_IMPORTED_MODULE_6__["MailViewComponent"],
        canDeactivate: [_components_mail_view_mail_view_guard__WEBPACK_IMPORTED_MODULE_7__["MailViewGuard"]],
    },
];
class MailModule {
}
MailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MailModule });
MailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MailModule_Factory(t) { return new (t || MailModule)(); }, providers: [_components_mail_view_mail_view_guard__WEBPACK_IMPORTED_MODULE_7__["MailViewGuard"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(ROUTES)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MailModule, { declarations: [_components_mail_app_mail_app_component__WEBPACK_IMPORTED_MODULE_5__["MailAppComponent"],
        _components_mail_item_mail_item_component__WEBPACK_IMPORTED_MODULE_2__["MailItemComponent"],
        _containers_mail_folder_mail_folder_component__WEBPACK_IMPORTED_MODULE_3__["MailFolderComponent"],
        _components_mail_view_mail_view_component__WEBPACK_IMPORTED_MODULE_6__["MailViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_components_mail_app_mail_app_component__WEBPACK_IMPORTED_MODULE_5__["MailAppComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_mail_app_mail_app_component__WEBPACK_IMPORTED_MODULE_5__["MailAppComponent"],
                    _components_mail_item_mail_item_component__WEBPACK_IMPORTED_MODULE_2__["MailItemComponent"],
                    _containers_mail_folder_mail_folder_component__WEBPACK_IMPORTED_MODULE_3__["MailFolderComponent"],
                    _components_mail_view_mail_view_component__WEBPACK_IMPORTED_MODULE_6__["MailViewComponent"],
                ],
                providers: [_components_mail_view_mail_view_guard__WEBPACK_IMPORTED_MODULE_7__["MailViewGuard"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(ROUTES)],
                exports: [_components_mail_app_mail_app_component__WEBPACK_IMPORTED_MODULE_5__["MailAppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "cxmZ":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/mail/components/mail-view/mail-view.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: MailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailViewComponent", function() { return MailViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




class MailViewComponent {
    // message: Observable<Mail> = this.route.data?.pluck('message')
    constructor(route) {
        this.route = route;
        this.reply = "";
        this.hasUnsavedChanges = false;
    }
    ngOnInit() {
        this.route.params.subscribe(() => {
            this.reply = "";
            this.hasUnsavedChanges = false;
        });
    }
    updateReply(value) {
        this.reply = value;
        this.hasUnsavedChanges = true;
    }
    sendReply() {
        this.hasUnsavedChanges = false;
    }
}
MailViewComponent.ɵfac = function MailViewComponent_Factory(t) { return new (t || MailViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
MailViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailViewComponent, selectors: [["app-mail-view"]], decls: 6, vars: 1, consts: [[1, "mail-reply"], ["cols", "30", "rows", "10", "placeholder", "Type your reply...", 3, "value", "change"], ["type", "button", 3, "click"]], template: function MailViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mail-view works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MailViewComponent_Template_textarea_change_3_listener($event) { return ctx.updateReply($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailViewComponent_Template_button_click_4_listener() { return ctx.sendReply(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.reply);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-mail-view",
                templateUrl: "./mail-view.component.html",
                styleUrls: ["./mail-view.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "oATb":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/routing.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponent", function() { return RoutingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _mail_components_mail_app_mail_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail/components/mail-app/mail-app.component */ "q+6u");






const _c0 = function () { return { primary: "folder/inbox", pane: null }; };
const _c1 = function (a0) { return { outlets: a0 }; };
const _c2 = function (a0) { return [a0]; };
const _c3 = function () { return { primary: "folder/trash", pane: null }; };
const _c4 = function () { return ["dashboard"]; };
class RoutingComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((route) => route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe((event) => {
            console.log("%cRoute events  ", "color: red; display: block; width: 100%;", event);
        });
    }
}
RoutingComponent.ɵfac = function RoutingComponent_Factory(t) { return new (t || RoutingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RoutingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoutingComponent, selectors: [["app-routing"]], decls: 22, vars: 14, consts: [[1, "app"], [1, "app__content"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]], template: function RoutingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "routing works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resolve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Carga los datos previamente antes de navegar a una determinada ruta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-mail-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _mail_components_mail_app_mail_app_component__WEBPACK_IMPORTED_MODULE_3__["MailAppComponent"]], styles: ["app-mail-app[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoicm91dGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLW1haWwtYXBwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-routing",
                templateUrl: "./routing.component.html",
                styleUrls: ["./routing.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "q+6u":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/mail/components/mail-app/mail-app.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: MailAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailAppComponent", function() { return MailAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MailAppComponent {
    constructor() { }
    ngOnInit() { }
    onActivate(event) {
        console.log("%cactivate ", "color: red; display: block; width: 100%;", event);
    }
    onDeactivate(event) {
        console.log("%cactivate ", "color: red; display: block; width: 100%;", event);
    }
}
MailAppComponent.ɵfac = function MailAppComponent_Factory(t) { return new (t || MailAppComponent)(); };
MailAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailAppComponent, selectors: [["app-mail-app"]], decls: 8, vars: 0, consts: [[1, "mail"], [3, "activate", "deactivate"], ["name", "pane"]], template: function MailAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mail-app works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function MailAppComponent_Template_router_outlet_activate_3_listener($event) { return ctx.onActivate($event); })("deactivate", function MailAppComponent_Template_router_outlet_deactivate_3_listener($event) { return ctx.onDeactivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "outlet pane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsLWFwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-mail-app",
                templateUrl: "./mail-app.component.html",
                styleUrls: ["./mail-app.component.css"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qkZx":
/*!****************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/routing/routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing-routing.module */ "ZlJS");
/* harmony import */ var _routing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing.component */ "oATb");
/* harmony import */ var _mail_mail_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail/mail.module */ "cRXd");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ "R5kn");







class RoutingModule {
}
RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoutingModule_Factory(t) { return new (t || RoutingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingRoutingModule"], _mail_mail_module__WEBPACK_IMPORTED_MODULE_4__["MailModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutingModule, { declarations: [_routing_component__WEBPACK_IMPORTED_MODULE_3__["RoutingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingRoutingModule"], _mail_mail_module__WEBPACK_IMPORTED_MODULE_4__["MailModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_routing_component__WEBPACK_IMPORTED_MODULE_3__["RoutingComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingRoutingModule"], _mail_mail_module__WEBPACK_IMPORTED_MODULE_4__["MailModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=routing-routing-module.js.map