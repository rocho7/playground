(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parent-child-parent-child-module"],{

/***/ "1XvO":
/*!***************************************!*\
  !*** ./src/app/destacar.directive.ts ***!
  \***************************************/
/*! exports provided: DestacarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestacarDirective", function() { return DestacarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DestacarDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'fontSize', '50px');
        this.renderer.setStyle(this.el.nativeElement, 'fontWeight', 'bold');
        this.renderer.setStyle(this.el.nativeElement, 'fontStyle', 'italic');
        this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
        this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid red');
    }
}
DestacarDirective.ɵfac = function DestacarDirective_Factory(t) { return new (t || DestacarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
DestacarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DestacarDirective, selectors: [["", "appDestacar", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DestacarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDestacar]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "9K7k":
/*!******************************************************************!*\
  !*** ./src/app/components/parent-child/child/child.component.ts ***!
  \******************************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_multiplicar_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/multiplicar.directive */ "wXmW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_destacar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/destacar.directive */ "1XvO");
/* harmony import */ var _directives_no_repeat_message_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/no-repeat-message.pipe */ "dj4h");








const _c0 = ["contentParagraph"];
function ChildComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChildComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r4, "directiva creada para resaltar texto");
} }
function ChildComponent_ul_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", i_r6 + 1, ".- ", item_r5.name.toUpperCase(), " - times called === ", item_r5.timesCalled, "");
} }
const _c1 = ["*"];
class ChildComponent {
    constructor() {
        this.lifeCycle = [];
        this.count$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.onHandleLifeCycle('Constructor');
    }
    isLifeCycle(nameLifeCycle) {
        return this.lifeCycle.findIndex(lifeCycle => lifeCycle.name === nameLifeCycle);
    }
    onHandleLifeCycle(lifeCycleName) {
        const index = this.isLifeCycle(lifeCycleName);
        if (index < 0) {
            this.lifeCycle.push({ name: lifeCycleName, timesCalled: 0 });
        }
        else if (index > 0) {
            this.count$.next(this.count$.getValue() + 1);
            this.lifeCycle[index] = { name: lifeCycleName, timesCalled: this.count$.getValue() };
        }
    }
    ngOnChanges(changes) {
        this.onHandleLifeCycle('ngOnChanges');
        let newNumberChanged = changes.myNewNumber;
        if (changes.myNewNumber.isFirstChange()) {
            this.newComponent = changes.myNewNumber.currentValue;
        }
        else {
            this.newComponent = changes.myNewNumber.currentValue < changes.myNewNumber.previousValue ? changes.myNewNumber.currentValue - changes.myNewNumber.previousValue : changes.myNewNumber.currentValue - changes.myNewNumber.previousValue;
        }
        console.log("Changes ", changes);
        console.log("newNumberChanged ", newNumberChanged);
    }
    ngOnInit() {
        this.onHandleLifeCycle('ngOnInit');
    }
    ngDoCheck() {
        this.onHandleLifeCycle('ngDocCheck');
        console.log("myUser ", this.myUser);
    }
    ngAfterContentInit() {
        this.onHandleLifeCycle('ngAfterContentInit');
        console.log("ngAfterContentInit");
        console.log("ver elemento dentro de las etiquetas hija en el elemento padre ", this.paragraph.nativeElement.textContent);
    }
    ngAfterContentChecked() {
        this.onHandleLifeCycle('ngAfterContentChecked');
        console.log("ngAfterContentChecked");
    }
    ngAfterViewInit() {
        this.onHandleLifeCycle('ngAfterViewInit');
        console.log("ngAfterViewInit");
    }
    ngAfterViewChecked() {
        this.onHandleLifeCycle('ngAfterViewChecked');
        console.log("ngAfterViewChecked");
    }
    showMessage() {
        console.log('%cSe llama a este método demasiadas veces en el COMPONENTE ', 'color: red; display: block; width: 100%;');
        return this.message ? this.message.toUpperCase() : '';
    }
}
ChildComponent.ɵfac = function ChildComponent_Factory(t) { return new (t || ChildComponent)(); };
ChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChildComponent, selectors: [["app-child"]], contentQueries: function ChildComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paragraph = _t.first);
    } }, inputs: { myNewNumber: "myNewNumber", myName: "myName", myUser: "myUser" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 29, vars: 8, consts: [[1, "row"], [1, "col-6"], ["myTemplate", ""], ["appDestacar", "", 4, "appMultiplicar"], ["type", "text", "name", "message", "id", "message", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["appDestacar", ""]], template: function ChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Component child");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChildComponent_ng_template_7_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Directivas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChildComponent_p_12_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Se llama a este m\u00E9todo demasiadas veces, por que se llama desde el DOM. Ver en consola");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Evitar llamar m\u00E9todos desde el DOM. Ej. showMessage() Utilizar PIPES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChildComponent_Template_input_ngModelChange_20_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "noRepeatMessage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lifecycle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Orden y veces que se les llama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ChildComponent_ul_28_Template, 3, 3, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.myNewNumber, " - ", ctx.myUser, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appMultiplicar", ctx.newComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 6, ctx.message), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lifeCycle);
    } }, directives: [src_app_multiplicar_directive__WEBPACK_IMPORTED_MODULE_2__["MultiplicarDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], src_app_destacar_directive__WEBPACK_IMPORTED_MODULE_5__["DestacarDirective"]], pipes: [_directives_no_repeat_message_pipe__WEBPACK_IMPORTED_MODULE_6__["NoRepeatMessagePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGlsZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-child",
                templateUrl: "./child.component.html",
                styleUrls: ["./child.component.css"],
            }]
    }], function () { return []; }, { myNewNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], myName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], myUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paragraph: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ["contentParagraph", { static: true }]
        }] }); })();


/***/ }),

/***/ "DxvD":
/*!********************************************************************!*\
  !*** ./src/app/components/parent-child/parent/parent.component.ts ***!
  \********************************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../child/child.component */ "9K7k");



class ParentComponent {
    constructor() {
        this.myNumber = 3;
        this.name = "Angel";
        this.user = {
            name: "Romualdo"
        };
    }
    ngOnInit() {
    }
    updateUser() {
        this.user.name = "Federico";
        // this.user = {
        //   name: "Federico"
        // }
    }
    addition() {
        this.myNumber++;
    }
    subtract() {
        this.myNumber--;
    }
}
ParentComponent.ɵfac = function ParentComponent_Factory(t) { return new (t || ParentComponent)(); };
ParentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParentComponent, selectors: [["app-parent"]], decls: 15, vars: 3, consts: [[3, "click"], [3, "myNewNumber", "myName", "myUser"], ["contentParagraph", ""]], template: function ParentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Component Parent - comunicaci\u00F3n padre e hijo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParentComponent_Template_button_click_4_listener() { return ctx.subtract(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "subtract");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParentComponent_Template_button_click_6_listener() { return ctx.addition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "addition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParentComponent_Template_button_click_9_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "updateUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-child", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Esto se deber\u00EDa ver con un ng-content en el componente hijo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("myNewNumber", ctx.myNumber)("myName", ctx.name)("myUser", ctx.user.name);
    } }, directives: [_child_child_component__WEBPACK_IMPORTED_MODULE_1__["ChildComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJlbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-parent',
                templateUrl: './parent.component.html',
                styleUrls: ['./parent.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LZmj":
/*!*****************************************************************!*\
  !*** ./src/app/components/parent-child/parent/parent.module.ts ***!
  \*****************************************************************/
/*! exports provided: ParentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentModule", function() { return ParentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _parent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parent.component */ "DxvD");
/* harmony import */ var _child_child_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../child/child.module */ "mzfs");





class ParentModule {
}
ParentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ParentModule });
ParentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ParentModule_Factory(t) { return new (t || ParentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _child_child_module__WEBPACK_IMPORTED_MODULE_3__["childModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParentModule, { declarations: [_parent_component__WEBPACK_IMPORTED_MODULE_2__["ParentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _child_child_module__WEBPACK_IMPORTED_MODULE_3__["childModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_parent_component__WEBPACK_IMPORTED_MODULE_2__["ParentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _child_child_module__WEBPACK_IMPORTED_MODULE_3__["childModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "c+lw":
/*!************************************************************************!*\
  !*** ./src/app/components/parent-child/parent-child-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ParentChildRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentChildRoutingModule", function() { return ParentChildRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parent/parent.component */ "DxvD");





const routes = [
    {
        path: '',
        component: _parent_parent_component__WEBPACK_IMPORTED_MODULE_2__["ParentComponent"]
    }
];
class ParentChildRoutingModule {
}
ParentChildRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ParentChildRoutingModule });
ParentChildRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ParentChildRoutingModule_Factory(t) { return new (t || ParentChildRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParentChildRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentChildRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dj4h":
/*!************************************************************************************!*\
  !*** ./src/app/components/parent-child/child/directives/no-repeat-message.pipe.ts ***!
  \************************************************************************************/
/*! exports provided: NoRepeatMessagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoRepeatMessagePipe", function() { return NoRepeatMessagePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NoRepeatMessagePipe {
    transform(value) {
        console.log('%cNO se llama a esta DIRECTIVA tantas veces como si asignas un método en el HTML', 'color: red; display: block; width: 100%;');
        return value.toUpperCase();
    }
}
NoRepeatMessagePipe.ɵfac = function NoRepeatMessagePipe_Factory(t) { return new (t || NoRepeatMessagePipe)(); };
NoRepeatMessagePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "noRepeatMessage", type: NoRepeatMessagePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoRepeatMessagePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'noRepeatMessage'
            }]
    }], null, null); })();


/***/ }),

/***/ "fWU/":
/*!****************************************************************!*\
  !*** ./src/app/components/parent-child/parent-child.module.ts ***!
  \****************************************************************/
/*! exports provided: ParentChildModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentChildModule", function() { return ParentChildModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _parent_child_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parent-child-routing.module */ "c+lw");
/* harmony import */ var _parent_parent_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parent/parent.module */ "LZmj");





class ParentChildModule {
}
ParentChildModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ParentChildModule });
ParentChildModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ParentChildModule_Factory(t) { return new (t || ParentChildModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _parent_parent_module__WEBPACK_IMPORTED_MODULE_3__["ParentModule"],
            _parent_child_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParentChildRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParentChildModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _parent_parent_module__WEBPACK_IMPORTED_MODULE_3__["ParentModule"],
        _parent_child_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParentChildRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentChildModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _parent_parent_module__WEBPACK_IMPORTED_MODULE_3__["ParentModule"],
                    _parent_child_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParentChildRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "mzfs":
/*!***************************************************************!*\
  !*** ./src/app/components/parent-child/child/child.module.ts ***!
  \***************************************************************/
/*! exports provided: childModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childModule", function() { return childModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _child_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./child.component */ "9K7k");
/* harmony import */ var _directives_no_repeat_message_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/no-repeat-message.pipe */ "dj4h");
/* harmony import */ var src_app_destacar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/destacar.directive */ "1XvO");
/* harmony import */ var src_app_multiplicar_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/multiplicar.directive */ "wXmW");








class childModule {
}
childModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: childModule });
childModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function childModule_Factory(t) { return new (t || childModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](childModule, { declarations: [_child_component__WEBPACK_IMPORTED_MODULE_3__["ChildComponent"],
        src_app_destacar_directive__WEBPACK_IMPORTED_MODULE_5__["DestacarDirective"],
        src_app_multiplicar_directive__WEBPACK_IMPORTED_MODULE_6__["MultiplicarDirective"],
        _directives_no_repeat_message_pipe__WEBPACK_IMPORTED_MODULE_4__["NoRepeatMessagePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_child_component__WEBPACK_IMPORTED_MODULE_3__["ChildComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](childModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _child_component__WEBPACK_IMPORTED_MODULE_3__["ChildComponent"],
                    src_app_destacar_directive__WEBPACK_IMPORTED_MODULE_5__["DestacarDirective"],
                    src_app_multiplicar_directive__WEBPACK_IMPORTED_MODULE_6__["MultiplicarDirective"],
                    _directives_no_repeat_message_pipe__WEBPACK_IMPORTED_MODULE_4__["NoRepeatMessagePipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                exports: [_child_component__WEBPACK_IMPORTED_MODULE_3__["ChildComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wXmW":
/*!******************************************!*\
  !*** ./src/app/multiplicar.directive.ts ***!
  \******************************************/
/*! exports provided: MultiplicarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplicarDirective", function() { return MultiplicarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MultiplicarDirective {
    constructor(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    set appMultiplicar(numero) {
        if (numero > 0) {
            for (var i = 0; i < numero; i++) {
                this.viewContainerRef.createEmbeddedView(this.templateRef, { index: `index procedente de la directiva ${i}.-` });
            }
        }
        else {
            this.viewContainerRef.clear();
        }
    }
}
MultiplicarDirective.ɵfac = function MultiplicarDirective_Factory(t) { return new (t || MultiplicarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
MultiplicarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MultiplicarDirective, selectors: [["", "appMultiplicar", ""]], inputs: { appMultiplicar: "appMultiplicar" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiplicarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appMultiplicar]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { appMultiplicar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=parent-child-parent-child-module.js.map