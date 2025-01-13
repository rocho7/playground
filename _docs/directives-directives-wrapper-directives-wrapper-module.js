(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-directives-wrapper-directives-wrapper-module"],{

/***/ "0hAh":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/directives/directives-wrapper/directives-custom/tooltip.directive.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TooltipDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.tooltipElement = document.createElement("div");
        this.visible = false;
        this.obj = {
            Company: "GeeksforGeeks",
            Address: "Noida",
            contact: +91 - 999999999,
            mentor: {
                HTML: "GFG html",
                CSS: "GFG css",
                JavaScript: "GFG javascript",
            },
        };
    }
    set appTooltip(value) {
        this.tooltipElement.textContent = value;
        const flattenObject = (obj, prefix = "") => Object.keys(obj).reduce((acc, k) => {
            const pre = prefix.length ? prefix + "." : "";
            if (typeof obj[k] === "object") {
                Object.assign(acc, flattenObject(obj[k], pre + k));
            }
            else {
                acc[pre + k] = obj[k];
            }
            return acc;
        }, {});
        const flattedObject = flattenObject(this.obj);
        console.log(flattedObject);
        if (Object.keys(flattedObject).includes(value) &&
            this.element.nativeElement.tagName === "DIV") {
            // this.element.nativeElement.innerHTML = flattedObject[value];
            this.renderer.setProperty(this.element.nativeElement, "innerHTML", flattedObject[value]);
            console.log("%cFLATTEN OBJECT ", "color: red; display: block; width: 100%;", flattedObject[value]);
        }
    }
    hide() {
        this.renderer.setStyle(this.tooltipElement, "display", "none");
    }
    show() {
        this.renderer.setStyle(this.tooltipElement, "display", "contents");
    }
    ngOnInit() {
        this.tooltipElement.className = "tooltip";
        this.element.nativeElement.appendChild(this.tooltipElement);
        this.element.nativeElement.classList.add("tooltip-container");
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TooltipDirective, selectors: [["", "appTooltip", ""]], inputs: { appTooltip: "appTooltip" }, exportAs: ["tooltip"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appTooltip]",
                exportAs: "tooltip",
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { appTooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "1em1":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/directives/directives-wrapper/pipes-custom/pipes-custom.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: PipesCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesCustomComponent", function() { return PipesCustomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/file-size.pipe */ "HhgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PipesCustomComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, file_r2.size, "megabytes"));
} }
function PipesCustomComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r3.size);
} }
class PipesCustomComponent {
    constructor(fileSizePipe) {
        this.fileSizePipe = fileSizePipe;
        this.files = [];
        this.mapped = [];
    }
    ngOnInit() {
        this.files = [
            { name: "logo.svg", size: 2120109, type: "image/svg" },
            { name: "banner.jpg", size: 18029, type: "image/jpg" },
            { name: "background.png", size: 1784562, type: "image/png" },
        ];
        this.mapped = this.files.map((file) => {
            return {
                name: file.name,
                type: file.type,
                size: this.fileSizePipe.transform(file.size, "MB"),
            };
        });
    }
}
PipesCustomComponent.ɵfac = function PipesCustomComponent_Factory(t) { return new (t || PipesCustomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_1__["FileSizePipe"])); };
PipesCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipesCustomComponent, selectors: [["app-pipes-custom"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_1__["FileSizePipe"]])], decls: 11, vars: 2, consts: [[1, "row"], [1, "col-6"], ["class", "margin-files", 4, "ngFor", "ngForOf"], [1, "margin-files"]], template: function PipesCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pipes-custom works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Using pipe into HTML DOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PipesCustomComponent_div_6_Template, 6, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Using pipe as PROVIDER into COMPONENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PipesCustomComponent_div_10_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mapped);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_1__["FileSizePipe"]], styles: [".margin-files[_ngcontent-%COMP%] {\r\n    display: inline-grid;\r\n    margin-right: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzLWN1c3RvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJwaXBlcy1jdXN0b20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tZmlsZXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesCustomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-pipes-custom",
                templateUrl: "./pipes-custom.component.html",
                styleUrls: ["./pipes-custom.component.css"],
                providers: [_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_1__["FileSizePipe"]],
            }]
    }], function () { return [{ type: _pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_1__["FileSizePipe"] }]; }, null); })();


/***/ }),

/***/ "CSqV":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/directives/directives-wrapper/directives-wrapper-routing.module.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: DirectivesWrapperRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesWrapperRoutingModule", function() { return DirectivesWrapperRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _directives_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives-wrapper.component */ "MczR");





const routes = [
    {
        path: "",
        component: _directives_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["DirectivesWrapperComponent"],
    },
];
class DirectivesWrapperRoutingModule {
}
DirectivesWrapperRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DirectivesWrapperRoutingModule });
DirectivesWrapperRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DirectivesWrapperRoutingModule_Factory(t) { return new (t || DirectivesWrapperRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectivesWrapperRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesWrapperRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "HhgK":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/directives/directives-wrapper/pipes-custom/pipes/file-size.pipe.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: FileSizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizePipe", function() { return FileSizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FileSizePipe {
    transform(size, extension = "MB") {
        return (size / (1024 * 1024)).toFixed(2) + extension;
    }
}
FileSizePipe.ɵfac = function FileSizePipe_Factory(t) { return new (t || FileSizePipe)(); };
FileSizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fileSize", type: FileSizePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "fileSize",
            }]
    }], null, null); })();


/***/ }),

/***/ "Kb59":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/directives/directives-wrapper/directives-wrapper.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: DirectivesWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesWrapperModule", function() { return DirectivesWrapperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives-wrapper-routing.module */ "CSqV");
/* harmony import */ var _directives_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives-wrapper.component */ "MczR");
/* harmony import */ var _directives_custom_directives_custom_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives-custom/directives-custom.module */ "Kn8X");
/* harmony import */ var _pipes_custom_pipes_custom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes-custom/pipes-custom.component */ "1em1");
/* harmony import */ var _pipes_custom_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes-custom/pipes/file-size.pipe */ "HhgK");








class DirectivesWrapperModule {
}
DirectivesWrapperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DirectivesWrapperModule });
DirectivesWrapperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DirectivesWrapperModule_Factory(t) { return new (t || DirectivesWrapperModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _directives_custom_directives_custom_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesCustomModule"],
            _directives_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_2__["DirectivesWrapperRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectivesWrapperModule, { declarations: [_directives_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["DirectivesWrapperComponent"],
        _pipes_custom_pipes_custom_component__WEBPACK_IMPORTED_MODULE_5__["PipesCustomComponent"],
        _pipes_custom_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_6__["FileSizePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _directives_custom_directives_custom_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesCustomModule"],
        _directives_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_2__["DirectivesWrapperRoutingModule"]], exports: [_directives_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["DirectivesWrapperComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesWrapperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _directives_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["DirectivesWrapperComponent"],
                    _pipes_custom_pipes_custom_component__WEBPACK_IMPORTED_MODULE_5__["PipesCustomComponent"],
                    _pipes_custom_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_6__["FileSizePipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _directives_custom_directives_custom_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesCustomModule"],
                    _directives_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_2__["DirectivesWrapperRoutingModule"],
                ],
                exports: [_directives_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["DirectivesWrapperComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Kn8X":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/directives/directives-wrapper/directives-custom/directives-custom.module.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: DirectivesCustomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesCustomModule", function() { return DirectivesCustomModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_custom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives-custom.component */ "sbMx");
/* harmony import */ var _credit_card_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credit-card.directive */ "gy6Q");
/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip.directive */ "0hAh");
/* harmony import */ var _my_for_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-for.directive */ "qsAy");







class DirectivesCustomModule {
}
DirectivesCustomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DirectivesCustomModule });
DirectivesCustomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DirectivesCustomModule_Factory(t) { return new (t || DirectivesCustomModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectivesCustomModule, { declarations: [_directives_custom_component__WEBPACK_IMPORTED_MODULE_2__["DirectivesCustomComponent"], _credit_card_directive__WEBPACK_IMPORTED_MODULE_3__["CreditCardDirective"], _tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], _my_for_directive__WEBPACK_IMPORTED_MODULE_5__["MyForDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_directives_custom_component__WEBPACK_IMPORTED_MODULE_2__["DirectivesCustomComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesCustomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_directives_custom_component__WEBPACK_IMPORTED_MODULE_2__["DirectivesCustomComponent"], _credit_card_directive__WEBPACK_IMPORTED_MODULE_3__["CreditCardDirective"], _tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], _my_for_directive__WEBPACK_IMPORTED_MODULE_5__["MyForDirective"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_directives_custom_component__WEBPACK_IMPORTED_MODULE_2__["DirectivesCustomComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "MczR":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/directives/directives-wrapper/directives-wrapper.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DirectivesWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesWrapperComponent", function() { return DirectivesWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _directives_custom_directives_custom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives-custom/directives-custom.component */ "sbMx");
/* harmony import */ var _pipes_custom_pipes_custom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes-custom/pipes-custom.component */ "1em1");




class DirectivesWrapperComponent {
    constructor() { }
    ngOnInit() {
    }
}
DirectivesWrapperComponent.ɵfac = function DirectivesWrapperComponent_Factory(t) { return new (t || DirectivesWrapperComponent)(); };
DirectivesWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DirectivesWrapperComponent, selectors: [["app-directives-wrapper"]], decls: 8, vars: 0, consts: [[1, "row"]], template: function DirectivesWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Directivas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-directives-custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-pipes-custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_directives_custom_directives_custom_component__WEBPACK_IMPORTED_MODULE_1__["DirectivesCustomComponent"], _pipes_custom_pipes_custom_component__WEBPACK_IMPORTED_MODULE_2__["PipesCustomComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXJlY3RpdmVzLXdyYXBwZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-directives-wrapper',
                templateUrl: './directives-wrapper.component.html',
                styleUrls: ['./directives-wrapper.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gy6Q":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/directives/directives-wrapper/directives-custom/credit-card.directive.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: CreditCardDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardDirective", function() { return CreditCardDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CreditCardDirective {
    onKeyDown(event) {
        const input = event.target;
        let trimmed = input.value.replace(/\s+/g, "");
        if (trimmed.length > 16) {
            trimmed = trimmed.substr(0, 16);
        }
        let numbers = [];
        for (let i = 0; i < trimmed.length; i += 4) {
            numbers.push(trimmed.substr(i, 4));
        }
        input.value = numbers.join(" ");
        this.border = "";
        if (/[^\d]+/.test(trimmed)) {
            this.border = "3px solid red !important";
        }
    }
}
CreditCardDirective.ɵfac = function CreditCardDirective_Factory(t) { return new (t || CreditCardDirective)(); };
CreditCardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CreditCardDirective, selectors: [["", "appCreditCard", ""]], hostVars: 2, hostBindings: function CreditCardDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreditCardDirective_input_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.border);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditCardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appCreditCard]",
            }]
    }], null, { border: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.border"]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["input", ["$event"]]
        }] }); })();


/***/ }),

/***/ "qsAy":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/directives/directives-wrapper/directives-custom/my-for.directive.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: MyForDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyForDirective", function() { return MyForDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MyForDirective {
    constructor(view, template) {
        this.view = view;
        this.template = template;
    }
    set appMyForOf(collection) {
        this.view.clear();
        collection.forEach((item, index) => {
            this.view.createEmbeddedView(this.template, {
                $implicit: item,
                index,
            });
        });
    }
}
MyForDirective.ɵfac = function MyForDirective_Factory(t) { return new (t || MyForDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
MyForDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MyForDirective, selectors: [["", "appMyFor", "", "appMyForOf", ""]], inputs: { appMyForOf: "appMyForOf" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyForDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appMyFor][appMyForOf]",
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { appMyForOf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "sbMx":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/directives/directives-wrapper/directives-custom/directives-custom.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: DirectivesCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesCustomComponent", function() { return DirectivesCustomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _credit_card_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credit-card.directive */ "gy6Q");
/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip.directive */ "0hAh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_for_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-for.directive */ "qsAy");








function DirectivesCustomComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r5, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, item_r4.name), " ");
} }
function DirectivesCustomComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r7, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, item_r6.name), " ");
} }
function DirectivesCustomComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r9, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, item_r8.name), " ");
} }
class DirectivesCustomComponent {
    constructor() {
        this.items = [
            {
                name: "Mark Hoppus",
                age: 44,
                location: "California",
            },
            {
                name: "Tom Delonge",
                age: 41,
                location: "California",
            },
            {
                name: "Travis Barker",
                age: 41,
                location: "California",
            },
        ];
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.items)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000))
            .subscribe((res) => {
            this.items = [
                ...this.items,
                {
                    name: "New item",
                    age: 3341,
                    location: "Nueva California",
                },
            ];
        });
    }
}
DirectivesCustomComponent.ɵfac = function DirectivesCustomComponent_Factory(t) { return new (t || DirectivesCustomComponent)(); };
DirectivesCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DirectivesCustomComponent, selectors: [["app-directives-custom"]], decls: 37, vars: 3, consts: [[1, "row"], [1, "col-6"], ["type", "text", "name", "card", "id", "card", "appCreditCard", ""], ["appTooltip", "texto desde el html"], ["myTooltip", "tooltip"], [3, "mouseover", "mouseout"], ["type", "text", "name", "", "id", ""], ["appTooltip", "mentor.JavaScript"], [4, "ngFor", "ngForOf"], [4, "appMyFor", "appMyForOf"], [1, "col-12"], ["appMyFor", "", 3, "appMyForOf"]], template: function DirectivesCustomComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "directives-custom works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Credit card number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "MUESTRA TOOLTIP ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function DirectivesCustomComponent_Template_span_mouseover_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r0.show(); })("mouseout", function DirectivesCustomComponent_Template_span_mouseout_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(?)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Creating a custom structural Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Normal *ngFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DirectivesCustomComponent_li_25_Template, 3, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "By using directive *appMyFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DirectivesCustomComponent_li_30_Template, 3, 4, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "By using appMyFor [appMyForOf]=\"items\" let-item let-i=\"index\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Creating the similar directive to ng-container [ngTemplateOutlet]=\"outlet\" [ngOutletContext]=\"context\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DirectivesCustomComponent_ng_template_36_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appMyForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appMyForOf", ctx.items);
    } }, directives: [_credit_card_directive__WEBPACK_IMPORTED_MODULE_3__["CreditCardDirective"], _tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _my_for_directive__WEBPACK_IMPORTED_MODULE_6__["MyForDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXJlY3RpdmVzLWN1c3RvbS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesCustomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-directives-custom",
                templateUrl: "./directives-custom.component.html",
                styleUrls: ["./directives-custom.component.css"],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-directives-wrapper-directives-wrapper-module.js.map