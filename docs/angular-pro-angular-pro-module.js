(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["angular-pro-angular-pro-module"],{

/***/ "Ku5S":
/*!********************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/angular-pro-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: AngularProRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularProRoutingModule", function() { return AngularProRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_pro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-pro.component */ "w/wR");





const routes = [
    {
        path: "",
        component: _angular_pro_component__WEBPACK_IMPORTED_MODULE_2__["AngularProComponent"],
        children: [
            {
                path: "content-projection",
                loadChildren: () => __webpack_require__.e(/*! import() | content-projection-content-projection-module */ "content-projection-content-projection-module").then(__webpack_require__.bind(null, /*! ./content-projection/content-projection.module */ "JWre")).then((m) => m.ContentProjectionModule),
            },
            {
                path: "directives",
                loadChildren: () => __webpack_require__.e(/*! import() | directives-directives-wrapper-directives-wrapper-module */ "directives-directives-wrapper-directives-wrapper-module").then(__webpack_require__.bind(null, /*! ./directives/directives-wrapper/directives-wrapper.module */ "Kb59")).then((m) => m.DirectivesWrapperModule),
            },
            {
                path: "reactive-form",
                loadChildren: () => __webpack_require__.e(/*! import() | reactive-form-form-wrapper-form-wrapper-module */ "reactive-form-form-wrapper-form-wrapper-module").then(__webpack_require__.bind(null, /*! ./reactive-form/form-wrapper/form-wrapper.module */ "Lizu")).then((m) => m.FormWrapperModule),
            },
            {
                path: "routing",
                loadChildren: () => __webpack_require__.e(/*! import() | routing-routing-module */ "routing-routing-module").then(__webpack_require__.bind(null, /*! ./routing/routing.module */ "qkZx")).then((m) => m.RoutingModule),
            },
            {
                path: "dependencyInjectionZone",
                loadChildren: () => __webpack_require__.e(/*! import() | dependencyInjectionZone-dependency-injection-zone-wrapper-dependency-injection-zone-wrapper-module */ "dependencyInjectionZone-dependency-injection-zone-wrapper-dependency-injection-zone-wrapper-module").then(__webpack_require__.bind(null, /*! ./dependencyInjectionZone/dependency-injection-zone-wrapper/dependency-injection-zone-wrapper.module */ "0yXV")).then((m) => m.DependencyInjectionZoneWrapperModule),
            },
        ],
    },
];
class AngularProRoutingModule {
}
AngularProRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularProRoutingModule });
AngularProRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularProRoutingModule_Factory(t) { return new (t || AngularProRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularProRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularProRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "jNCv":
/*!************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/angular-pro.module.ts ***!
  \************************************************************************************/
/*! exports provided: AngularProModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularProModule", function() { return AngularProModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_pro_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-pro-routing.module */ "Ku5S");
/* harmony import */ var _angular_pro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular-pro.component */ "w/wR");





class AngularProModule {
}
AngularProModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularProModule });
AngularProModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularProModule_Factory(t) { return new (t || AngularProModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_pro_routing_module__WEBPACK_IMPORTED_MODULE_2__["AngularProRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularProModule, { declarations: [_angular_pro_component__WEBPACK_IMPORTED_MODULE_3__["AngularProComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_pro_routing_module__WEBPACK_IMPORTED_MODULE_2__["AngularProRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularProModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_angular_pro_component__WEBPACK_IMPORTED_MODULE_3__["AngularProComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_pro_routing_module__WEBPACK_IMPORTED_MODULE_2__["AngularProRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "w/wR":
/*!***************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/angular-pro.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AngularProComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularProComponent", function() { return AngularProComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AngularProComponent {
    constructor() { }
    ngOnInit() { }
}
AngularProComponent.ɵfac = function AngularProComponent_Factory(t) { return new (t || AngularProComponent)(); };
AngularProComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularProComponent, selectors: [["app-angular-pro"]], decls: 29, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active"], ["routerLink", "content-projection", 1, "nav-link"], ["routerLink", "directives", 1, "nav-link"], ["routerLink", "reactive-form", 1, "nav-link"], ["routerLink", "routing", 1, "nav-link"], ["routerLink", "dependencyInjectionZone", 1, "nav-link"]], template: function AngularProComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "angular-pro works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Content projection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Directives and Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Reactive form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Routing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Dependency Injection Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    font: 300 15px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\r\n  }\r\n\r\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: #fff;\r\n    -webkit-font-smoothing: antialiased;\r\n    color: #545e6f;\r\n  }\r\n\r\n  img[_ngcontent-%COMP%] {\r\n    vertical-align: bottom;\r\n  }\r\n\r\n  img[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    border: 0;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%] {\r\n    color: #9f72e6;\r\n    text-decoration: none;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    outline: 0;\r\n  }\r\n\r\n  input[type=text][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: #fff;\r\n    font-size: 13px;\r\n    padding: 6px 30px 6px 10px;\r\n    border-radius: 1px;\r\n    border: 1px solid #ccc;\r\n  }\r\n\r\n  label[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%] {\r\n    background: #9B5FC6;\r\n    cursor: pointer;\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 5px 10px;\r\n    text-align: center;\r\n    color: #fff;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%]:disabled {\r\n    cursor: not-allowed;\r\n    background: #b598e4;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n  }\r\n\r\n  body[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n  }\r\n\r\n  h3[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    font-weight: 400;\r\n    margin: 0;\r\n  }\r\n\r\n  h4[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n    margin: 0;\r\n  }\r\n\r\n  input[type=\"text\"][_ngcontent-%COMP%] {\r\n    display: block;\r\n    border: none;\r\n    background: #fff;\r\n    font-size: 15px;\r\n    padding: 6px 30px 6px 10px;\r\n    border-radius: 1px;\r\n    border: 1px solid #ccc;\r\n    margin-top: 10px;\r\n    width: 100%;\r\n  }\r\n\r\n  label[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  h3[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  app-root[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    margin: 0 auto;\r\n    display: block;\r\n  }\r\n\r\n  select[_ngcontent-%COMP%] {\r\n    -webkit-appearance: none;\r\n    text-indent: .01px;\r\n    text-overflow: '';\r\n    overflow: hidden;\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n    padding: 10px 50px 10px 15px;\r\n    border-radius: 0;\r\n    color: rgba(0, 0, 0, 0.7);\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n    outline: none;\r\n    background:\r\n      linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.7) 50%)\r\n      no-repeat calc(100% - 20px) calc(1em + 4px),\r\n      linear-gradient(135deg, rgba(0, 0, 0, 0.7) 50%, transparent 50%)\r\n      no-repeat calc(100% - 15px) calc(1em + 4px);\r\n    background-size: 5px 5px, 5px 5px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXItcHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixnSkFBZ0o7RUFDbEo7O0VBRUE7SUFDRSxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBQ0E7SUFDRSxTQUFTO0VBQ1g7O0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBQ0E7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztFQUNBOztJQUVFLFVBQVU7RUFDWjs7RUFDQTs7OztJQUlFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztFQUNBO0lBQ0UsY0FBYztFQUNoQjs7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFNBQVM7RUFDWDs7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsU0FBUztFQUNYOztFQUNBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiOzs7O2lEQUk2QztJQUM3QyxpQ0FBaUM7RUFDbkMiLCJmaWxlIjoiYW5ndWxhci1wcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQ6IDMwMCAxNXB4LzEuNCAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gIH1cclxuXHJcbiAgaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgY29sb3I6ICM1NDVlNmY7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB9XHJcbiAgaW1nIGEge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICB1bCxcclxuICBvbCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzlmNzJlNjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgaW5wdXQsXHJcbiAgYnV0dG9uIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9dGV4dF0sXHJcbiAgaW5wdXRbdHlwZT1lbWFpbF0sXHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdLFxyXG4gIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMzBweCA2cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzlCNUZDNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgYmFja2dyb3VuZDogI2I1OThlNDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNnB4IDMwcHggNnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBhcHAtcm9vdCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBzZWxlY3Qge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgdGV4dC1pbmRlbnQ6IC4wMXB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogJyc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHggMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMCwgMCwgMCwgMC43KSA1MCUpXHJcbiAgICAgIG5vLXJlcGVhdCBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDFlbSArIDRweCksXHJcbiAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMCwgMCwgMCwgMC43KSA1MCUsIHRyYW5zcGFyZW50IDUwJSlcclxuICAgICAgbm8tcmVwZWF0IGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgNHB4KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNXB4IDVweCwgNXB4IDVweDtcclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularProComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-angular-pro",
                templateUrl: "./angular-pro.component.html",
                styleUrls: ["./angular-pro.component.css"],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=angular-pro-angular-pro-module.js.map