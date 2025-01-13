(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-projection-content-projection-module"],{

/***/ "+76b":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/auth-form/auth-form.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AuthFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormModule", function() { return AuthFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-form.component */ "jvSR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_message_auth_message_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth-message/auth-message.module */ "rc0P");






class AuthFormModule {
}
AuthFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthFormModule });
AuthFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthFormModule_Factory(t) { return new (t || AuthFormModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_message_auth_message_module__WEBPACK_IMPORTED_MODULE_4__["AuthMessageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthFormModule, { declarations: [_auth_form_component__WEBPACK_IMPORTED_MODULE_2__["AuthFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_message_auth_message_module__WEBPACK_IMPORTED_MODULE_4__["AuthMessageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]], exports: [_auth_form_component__WEBPACK_IMPORTED_MODULE_2__["AuthFormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_auth_form_component__WEBPACK_IMPORTED_MODULE_2__["AuthFormComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_message_auth_message_module__WEBPACK_IMPORTED_MODULE_4__["AuthMessageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
                exports: [_auth_form_component__WEBPACK_IMPORTED_MODULE_2__["AuthFormComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "20HZ":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/content-projection.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ContentProjectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentProjectionComponent", function() { return ContentProjectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-form/auth-form.component */ "jvSR");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-remember/auth-remember.component */ "Aodb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _encapsulation_no_encapsulation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./encapsulation/no-encapsulation.component */ "x75M");
/* harmony import */ var _encapsulation_emulated_encapsulation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encapsulation/emulated-encapsulation.component */ "8SQV");
/* harmony import */ var _encapsulation_shadow_dom_encapsulation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./encapsulation/shadow-dom-encapsulation.component */ "uJVm");
/* harmony import */ var _change_detection_on_push_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-detection/on-push.component */ "kMFD");
/* harmony import */ var _change_detection_default_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./change-detection/default.component */ "rkM8");












const _c0 = ["entry"];
const _c1 = ["tmplentry"];
const _c2 = ["tmpl"];
function ContentProjectionComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " This is a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " generated in the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r6 = ctx.$implicit;
    const location_r7 = ctx.location;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r7);
} }
function ContentProjectionComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " TemplateOutlet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " generated in the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r8 = ctx.$implicit;
    const data_r9 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r9);
} }
const _c3 = function () { return { $implicit: "NUEVA INFO", data: "DESDE TEMPLEATE OUTLET CONTEXT" }; };
class ContentProjectionComponent {
    constructor(resolver, cd, vref) {
        this.resolver = resolver;
        this.cd = cd;
        this.vref = vref;
        this.countDynamicComponent = 0;
        //?CHANGE DETECTION STRATEGY
        this.user = {
            name: "Markus",
            age: 44,
            location: "Picaña",
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.createDynamicComponent();
        this.tmplEntry.createEmbeddedView(this.tmpl, {
            $implicit: "template",
            location: "content-projection.component",
        });
        this.cd.detectChanges();
    }
    createUser(ev) {
        console.log("%ccreateUser ", "color: white; background-color: #007acc;", ev);
    }
    loginUser(ev) {
        console.log("%cloginUser ", "color: white; background-color: #007acc;", ev, "remember ", this.rememberme);
    }
    onRememberme(ev) {
        this.rememberme = ev;
        console.log("%cremenber ", "color: red; display: block; width: 100%;", ev);
    }
    createDynamicComponent() {
        const authFormFactory = this.resolver.resolveComponentFactory(_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__["AuthFormComponent"]);
        this.component = this.entry.createComponent(authFormFactory, this.countDynamicComponent);
        this.component.instance.messageFromFactory = `Message create from the factory number = ${this.countDynamicComponent}`;
        this.component.instance.submitted.subscribe(this.createUser);
        this.countDynamicComponent = this.countDynamicComponent + 1;
        this.cd.detectChanges();
    }
    moveDynamicComponent() {
        const authFormFactory = this.resolver.resolveComponentFactory(_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__["AuthFormComponent"]);
        const anotherComponent = this.entry.createComponent(authFormFactory, this.countDynamicComponent);
        const index = 0;
        anotherComponent.instance.messageFromFactory =
            "ANOTHER DYNAMIC COMPONENT AND IT GONNA BE MOVED";
        this.component.instance.messageFromFactory = `It has been moved to position ${index}`;
        this.entry.move(this.component.hostView, index);
    }
    destroy() {
        this.component.destroy();
    }
    addProp() {
        this.user.email = "bla@email.com";
    }
    changeName() {
        this.user.name = "another name";
    }
    changeUser() {
        this.user = {
            name: "another name from change user",
            age: 99,
            location: "Torrent",
        };
    }
}
ContentProjectionComponent.ɵfac = function ContentProjectionComponent_Factory(t) { return new (t || ContentProjectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ContentProjectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentProjectionComponent, selectors: [["app-content-projection"]], viewQuery: function ContentProjectionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.entry = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tmplEntry = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tmpl = _t.first);
    } }, decls: 73, vars: 5, consts: [[1, "row"], [1, "col-6"], [3, "submitted"], ["type", "submit", "mat-raised-button", "", "color", "accent"], ["type", "submit", "mat-raised-button", "", "color", "primary"], [1, "remember", 3, "checked"], ["href", "https://stackblitz.com/edit/angular-dynamically-creating-components-vh5gpb?file=app%2Fapp.component.ts"], ["mat-flat-button", "", "color", "accent", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["entry", ""], ["tmplentry", ""], ["tmpl", ""], ["tmplOutlet", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["href", "https://rootstack.com/es/blog/angular-que-se-refieren-con-view-encapsulation"], [3, "click"], [3, "user"]], template: function ContentProjectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "content-projection works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-auth-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitted", function ContentProjectionComponent_Template_app_auth_form_submitted_4_listener($event) { return ctx.createUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Join us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-auth-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitted", function ContentProjectionComponent_Template_app_auth_form_submitted_10_listener($event) { return ctx.loginUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-auth-remember", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checked", function ContentProjectionComponent_Template_app_auth_remember_checked_15_listener($event) { return ctx.onRememberme($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Creating a Dynamic components with ComponentFactory and reordering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Using resolveComponentFactory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ejemplo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentProjectionComponent_Template_button_click_24_listener() { return ctx.destroy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Destroy dynamic component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentProjectionComponent_Template_button_click_26_listener() { return ctx.createDynamicComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Create dynamic component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentProjectionComponent_Template_button_click_28_listener() { return ctx.moveDynamicComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Create a new one and Move dynamic component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Using TemplateRef to generate templates passing params");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Using ng-template and assign the template to the div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ContentProjectionComponent_ng_template_39_Template, 6, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ContentProjectionComponent_ng_template_41_Template, 6, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Using ng-container [ngTemplateOutlet]=\"tmpl\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](45, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ViewEncapsulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Ejemplo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-no-encapsulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-emulated-encapsulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-shadow-dom-encapsulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Change Detection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentProjectionComponent_Template_button_click_58_listener() { return ctx.addProp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "add property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentProjectionComponent_Template_button_click_60_listener() { return ctx.changeUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "change user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentProjectionComponent_Template_button_click_62_listener() { return ctx.changeName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "change name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "OnPush detection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-onpush-detection", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Default detection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "app-default-detection", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.user);
    } }, directives: [_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__["AuthFormComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_3__["AuthRememberComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _encapsulation_no_encapsulation_component__WEBPACK_IMPORTED_MODULE_5__["NoEncapsulationComponent"], _encapsulation_emulated_encapsulation_component__WEBPACK_IMPORTED_MODULE_6__["EmulatedEncapsulationComponent"], _encapsulation_shadow_dom_encapsulation_component__WEBPACK_IMPORTED_MODULE_7__["ShadowDomEncapsulationComponent"], _change_detection_on_push_component__WEBPACK_IMPORTED_MODULE_8__["OnPushDetectionComponent"], _change_detection_default_component__WEBPACK_IMPORTED_MODULE_9__["DefaultChangeDetectionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LXByb2plY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentProjectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-content-projection",
                templateUrl: "./content-projection.component.html",
                styleUrls: ["./content-projection.component.css"],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["entry", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }], tmplEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["tmplentry", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }], tmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["tmpl", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }] }); })();


/***/ }),

/***/ "8SQV":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/encapsulation/emulated-encapsulation.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: EmulatedEncapsulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmulatedEncapsulationComponent", function() { return EmulatedEncapsulationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _no_encapsulation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-encapsulation.component */ "x75M");



class EmulatedEncapsulationComponent {
}
EmulatedEncapsulationComponent.ɵfac = function EmulatedEncapsulationComponent_Factory(t) { return new (t || EmulatedEncapsulationComponent)(); };
EmulatedEncapsulationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmulatedEncapsulationComponent, selectors: [["app-emulated-encapsulation"]], decls: 5, vars: 0, consts: [[1, "emulated-message"]], template: function EmulatedEncapsulationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Emulated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Emulated encapsulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-no-encapsulation");
    } }, directives: [_no_encapsulation_component__WEBPACK_IMPORTED_MODULE_1__["NoEncapsulationComponent"]], styles: ["h2[_ngcontent-%COMP%], .emulated-message[_ngcontent-%COMP%] { color: green; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmulatedEncapsulationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-emulated-encapsulation",
                template: `
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-no-encapsulation></app-no-encapsulation>
  `,
                styles: ["h2, .emulated-message { color: green; }"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            }]
    }], null, null); })();


/***/ }),

/***/ "Aodb":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/auth-remember/auth-remember.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: AuthRememberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRememberComponent", function() { return AuthRememberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthRememberComponent {
    constructor() {
        this.checked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onChecked(value) {
        console.log("%cchecked ", "color: white; background-color: #007acc;", value);
        this.checked.emit(value.checked);
    }
}
AuthRememberComponent.ɵfac = function AuthRememberComponent_Factory(t) { return new (t || AuthRememberComponent)(); };
AuthRememberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthRememberComponent, selectors: [["app-auth-remember"]], outputs: { checked: "checked" }, decls: 5, vars: 0, consts: [["type", "checkbox", "name", "check", "id", "check", 3, "change"]], template: function AuthRememberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "auth-remember works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AuthRememberComponent_Template_input_change_3_listener($event) { return ctx.onChecked($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Keep me logged in\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXJlbWVtYmVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRememberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-auth-remember",
                templateUrl: "./auth-remember.component.html",
                styleUrls: ["./auth-remember.component.css"],
            }]
    }], function () { return []; }, { checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "JWre":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/content-projection.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ContentProjectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentProjectionModule", function() { return ContentProjectionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _content_projection_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-projection-routing.module */ "TiSM");
/* harmony import */ var _content_projection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-projection.component */ "20HZ");
/* harmony import */ var _auth_form_auth_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-form/auth-form.module */ "+76b");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-remember/auth-remember.component */ "Aodb");
/* harmony import */ var _encapsulation_shadow_dom_encapsulation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./encapsulation/shadow-dom-encapsulation.component */ "uJVm");
/* harmony import */ var _encapsulation_emulated_encapsulation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./encapsulation/emulated-encapsulation.component */ "8SQV");
/* harmony import */ var _encapsulation_no_encapsulation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./encapsulation/no-encapsulation.component */ "x75M");
/* harmony import */ var _change_detection_default_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change-detection/default.component */ "rkM8");
/* harmony import */ var _change_detection_on_push_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./change-detection/on-push.component */ "kMFD");













class ContentProjectionModule {
}
ContentProjectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContentProjectionModule });
ContentProjectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContentProjectionModule_Factory(t) { return new (t || ContentProjectionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _auth_form_auth_form_module__WEBPACK_IMPORTED_MODULE_4__["AuthFormModule"],
            _content_projection_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContentProjectionRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentProjectionModule, { declarations: [_content_projection_component__WEBPACK_IMPORTED_MODULE_3__["ContentProjectionComponent"],
        _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_6__["AuthRememberComponent"],
        _encapsulation_shadow_dom_encapsulation_component__WEBPACK_IMPORTED_MODULE_7__["ShadowDomEncapsulationComponent"],
        _encapsulation_emulated_encapsulation_component__WEBPACK_IMPORTED_MODULE_8__["EmulatedEncapsulationComponent"],
        _encapsulation_no_encapsulation_component__WEBPACK_IMPORTED_MODULE_9__["NoEncapsulationComponent"],
        _change_detection_default_component__WEBPACK_IMPORTED_MODULE_10__["DefaultChangeDetectionComponent"],
        _change_detection_on_push_component__WEBPACK_IMPORTED_MODULE_11__["OnPushDetectionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _auth_form_auth_form_module__WEBPACK_IMPORTED_MODULE_4__["AuthFormModule"],
        _content_projection_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContentProjectionRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentProjectionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _content_projection_component__WEBPACK_IMPORTED_MODULE_3__["ContentProjectionComponent"],
                    _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_6__["AuthRememberComponent"],
                    _encapsulation_shadow_dom_encapsulation_component__WEBPACK_IMPORTED_MODULE_7__["ShadowDomEncapsulationComponent"],
                    _encapsulation_emulated_encapsulation_component__WEBPACK_IMPORTED_MODULE_8__["EmulatedEncapsulationComponent"],
                    _encapsulation_no_encapsulation_component__WEBPACK_IMPORTED_MODULE_9__["NoEncapsulationComponent"],
                    _change_detection_default_component__WEBPACK_IMPORTED_MODULE_10__["DefaultChangeDetectionComponent"],
                    _change_detection_on_push_component__WEBPACK_IMPORTED_MODULE_11__["OnPushDetectionComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _auth_form_auth_form_module__WEBPACK_IMPORTED_MODULE_4__["AuthFormModule"],
                    _content_projection_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContentProjectionRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "TiSM":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/content-projection-routing.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ContentProjectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentProjectionRoutingModule", function() { return ContentProjectionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _content_projection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-projection.component */ "20HZ");





const routes = [
    {
        path: "",
        component: _content_projection_component__WEBPACK_IMPORTED_MODULE_2__["ContentProjectionComponent"],
    },
];
class ContentProjectionRoutingModule {
}
ContentProjectionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContentProjectionRoutingModule });
ContentProjectionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContentProjectionRoutingModule_Factory(t) { return new (t || ContentProjectionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentProjectionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentProjectionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "fY30":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/auth-message/auth-message.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AuthMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthMessageComponent", function() { return AuthMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthMessageComponent {
    constructor() { }
    ngOnInit() {
        this.setDays(7);
    }
    setDays(numbersOfDays) {
        this.days = numbersOfDays;
    }
}
AuthMessageComponent.ɵfac = function AuthMessageComponent_Factory(t) { return new (t || AuthMessageComponent)(); };
AuthMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthMessageComponent, selectors: [["app-auth-message"]], decls: 2, vars: 1, template: function AuthMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" You will be logged in for ", ctx.days, " days\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-auth-message",
                templateUrl: "./auth-message.component.html",
                styleUrls: ["./auth-message.component.css"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jvSR":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/auth-form/auth-form.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: AuthFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormComponent", function() { return AuthFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-message/auth-message.component */ "fY30");
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-remember/auth-remember.component */ "Aodb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["email"];
function AuthFormComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " solo visible para el componente din\u00E1mcio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = [[["h3"]], [["", 8, "remember"]], [["button"]]];
const _c2 = ["h3", ".remember", "button"];
class AuthFormComponent {
    constructor(cd, renderer) {
        this.cd = cd;
        this.renderer = renderer;
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.messageComponent) {
            this.messageComponent.setDays(30);
            this.cd.detectChanges();
        }
        //? RENDERER2 sirve para cualquier plataforma Android, Apple, etc...
        this.renderer.setAttribute(this.emailField.nativeElement, "placeholder", "Enter your email address");
        this.renderer.setStyle(this.emailField.nativeElement, "border-color", "blue");
        this.renderer.selectRootElement(this.emailField.nativeElement).focus();
        // this.emailField?.nativeElement?.setAttribute(
        //   "placeholder",
        //   "Enter your email address"
        // );
        // this.emailField.nativeElement.style.borderColor = "blue";
        // this.emailField.nativeElement.focus();
    }
    ngAfterContentInit() {
        var _a;
        if (this.rememberComponent) {
            (_a = this.rememberComponent) === null || _a === void 0 ? void 0 : _a.checked.subscribe((checked) => {
                this.showMessage = checked;
            });
        }
    }
    onSubmit(ev) {
        this.submitted.emit(ev);
        console.log("%conSubmit ", "background: green; color: white; display: block;", ev);
    }
}
AuthFormComponent.ɵfac = function AuthFormComponent_Factory(t) { return new (t || AuthFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AuthFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthFormComponent, selectors: [["app-auth-form"]], contentQueries: function AuthFormComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_2__["AuthRememberComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rememberComponent = _t.first);
    } }, viewQuery: function AuthFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_1__["AuthMessageComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.emailField = _t.first);
    } }, outputs: { submitted: "submitted" }, ngContentSelectors: _c2, decls: 24, vars: 4, consts: [[3, "ngSubmit"], ["form", "ngForm"], ["type", "email", "name", "email", "id", "email", "ngModel", ""], ["email", ""], ["type", "password", "name", "password", "id", "password", "ngModel", ""], ["mat-flat-button", "", "color", "accent", "type", "submit", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", "type", "submit"]], template: function AuthFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "auth-form works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthFormComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.onSubmit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](20, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](21, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AuthFormComponent_button_22_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-auth-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messageFromFactory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageFromFactory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showMessage ? "inherit" : "none");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_1__["AuthMessageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-auth-form",
                templateUrl: "./auth-form.component.html",
                styleUrls: ["./auth-form.component.css"],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { submitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rememberComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_2__["AuthRememberComponent"]]
        }], messageComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_1__["AuthMessageComponent"]]
        }], emailField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["email"]
        }] }); })();


/***/ }),

/***/ "kMFD":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/change-detection/on-push.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: OnPushDetectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnPushDetectionComponent", function() { return OnPushDetectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OnPushDetectionComponent {
    update() {
        this.user.name = "change detection ONPUSH";
    }
}
OnPushDetectionComponent.ɵfac = function OnPushDetectionComponent_Factory(t) { return new (t || OnPushDetectionComponent)(); };
OnPushDetectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnPushDetectionComponent, selectors: [["app-onpush-detection"]], inputs: { user: "user" }, decls: 12, vars: 4, consts: [[1, "example-one"], [3, "click"]], template: function OnPushDetectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnPushDetectionComponent_Template_button_click_8_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Internal update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "* Should not update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user.age, " years old");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.location, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
    } }, styles: [".example-one[_ngcontent-%COMP%] {font-size: 19px, margin-botton: 10px}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnPushDetectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-onpush-detection",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div class="example-one">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}
      <button (click)="update()">Internal update</button>
      <p>* Should not update</p>
    </div>
  `,
                styles: [".example-one {font-size: 19px, margin-botton: 10px}"],
            }]
    }], null, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "rc0P":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/auth-message/auth-message.module.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AuthMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthMessageModule", function() { return AuthMessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-message.component */ "fY30");




class AuthMessageModule {
}
AuthMessageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthMessageModule });
AuthMessageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthMessageModule_Factory(t) { return new (t || AuthMessageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthMessageModule, { declarations: [_auth_message_component__WEBPACK_IMPORTED_MODULE_2__["AuthMessageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_auth_message_component__WEBPACK_IMPORTED_MODULE_2__["AuthMessageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthMessageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_auth_message_component__WEBPACK_IMPORTED_MODULE_2__["AuthMessageComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_auth_message_component__WEBPACK_IMPORTED_MODULE_2__["AuthMessageComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "rkM8":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/change-detection/default.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DefaultChangeDetectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultChangeDetectionComponent", function() { return DefaultChangeDetectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DefaultChangeDetectionComponent {
    update() {
        this.user.name = "change detection DEFAULT";
    }
}
DefaultChangeDetectionComponent.ɵfac = function DefaultChangeDetectionComponent_Factory(t) { return new (t || DefaultChangeDetectionComponent)(); };
DefaultChangeDetectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultChangeDetectionComponent, selectors: [["app-default-detection"]], inputs: { user: "user" }, decls: 12, vars: 4, consts: [[1, "example-two"], [3, "click"]], template: function DefaultChangeDetectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultChangeDetectionComponent_Template_button_click_8_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Internal update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "* Should update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user.age, " years old");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.location, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
    } }, styles: [".example-two[_ngcontent-%COMP%] {font-size: 19px, margin-botton: 10px}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultChangeDetectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-default-detection",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                template: `
    <div class="example-two">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}
      <button (click)="update()">Internal update</button>
      <p>* Should update</p>
    </div>
  `,
                styles: [".example-two {font-size: 19px, margin-botton: 10px}"],
            }]
    }], null, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "uJVm":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/encapsulation/shadow-dom-encapsulation.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ShadowDomEncapsulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowDomEncapsulationComponent", function() { return ShadowDomEncapsulationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _emulated_encapsulation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emulated-encapsulation.component */ "8SQV");
/* harmony import */ var _no_encapsulation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-encapsulation.component */ "x75M");




class ShadowDomEncapsulationComponent {
}
ShadowDomEncapsulationComponent.ɵfac = function ShadowDomEncapsulationComponent_Factory(t) { return new (t || ShadowDomEncapsulationComponent)(); };
ShadowDomEncapsulationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShadowDomEncapsulationComponent, selectors: [["app-shadow-dom-encapsulation"]], decls: 6, vars: 0, consts: [[1, "shadow-message"]], template: function ShadowDomEncapsulationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ShadowDom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Shadow DOM encapsulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-emulated-encapsulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-no-encapsulation");
    } }, directives: [_emulated_encapsulation_component__WEBPACK_IMPORTED_MODULE_1__["EmulatedEncapsulationComponent"], _no_encapsulation_component__WEBPACK_IMPORTED_MODULE_2__["NoEncapsulationComponent"]], styles: ["h2, .shadow-message { color: blue; }"], encapsulation: 3 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShadowDomEncapsulationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-shadow-dom-encapsulation",
                template: `
    <h2>ShadowDom</h2>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-no-encapsulation></app-no-encapsulation>
  `,
                styles: ["h2, .shadow-message { color: blue; }"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].ShadowDom,
            }]
    }], null, null); })();


/***/ }),

/***/ "x75M":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/content-projection/encapsulation/no-encapsulation.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: NoEncapsulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoEncapsulationComponent", function() { return NoEncapsulationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NoEncapsulationComponent {
}
NoEncapsulationComponent.ɵfac = function NoEncapsulationComponent_Factory(t) { return new (t || NoEncapsulationComponent)(); };
NoEncapsulationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoEncapsulationComponent, selectors: [["app-no-encapsulation"]], decls: 4, vars: 0, consts: [[1, "none-message"]], template: function NoEncapsulationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No encapsulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h2, .none-message { color: red; }"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoEncapsulationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-no-encapsulation",
                template: `
    <h2>None</h2>
    <div class="none-message">No encapsulation</div>
  `,
                styles: ["h2, .none-message { color: red; }"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=content-projection-content-projection-module.js.map