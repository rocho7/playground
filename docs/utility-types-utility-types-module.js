(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utility-types-utility-types-module"],{

/***/ "JJoF":
/*!******************************************************************!*\
  !*** ./src/app/components/utility-types/utility-types.module.ts ***!
  \******************************************************************/
/*! exports provided: UtilityTypesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityTypesModule", function() { return UtilityTypesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utility_types_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility-types-routing.module */ "Jo2l");




class UtilityTypesModule {
}
UtilityTypesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UtilityTypesModule });
UtilityTypesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UtilityTypesModule_Factory(t) { return new (t || UtilityTypesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _utility_types_routing_module__WEBPACK_IMPORTED_MODULE_2__["UtilityTypesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UtilityTypesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _utility_types_routing_module__WEBPACK_IMPORTED_MODULE_2__["UtilityTypesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityTypesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _utility_types_routing_module__WEBPACK_IMPORTED_MODULE_2__["UtilityTypesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Jo2l":
/*!**************************************************************************!*\
  !*** ./src/app/components/utility-types/utility-types-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: UtilityTypesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityTypesRoutingModule", function() { return UtilityTypesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utility_types_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility-types.component */ "Ny6Q");





const routes = [
    {
        path: '',
        component: _utility_types_component__WEBPACK_IMPORTED_MODULE_2__["UtilityTypesComponent"]
    }
];
class UtilityTypesRoutingModule {
}
UtilityTypesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UtilityTypesRoutingModule });
UtilityTypesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UtilityTypesRoutingModule_Factory(t) { return new (t || UtilityTypesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UtilityTypesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityTypesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ny6Q":
/*!*********************************************************************!*\
  !*** ./src/app/components/utility-types/utility-types.component.ts ***!
  \*********************************************************************/
/*! exports provided: UtilityTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityTypesComponent", function() { return UtilityTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utility_types_const_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility-types.const/user.class */ "oJOr");



class UtilityTypesComponent {
    constructor() {
        this.users = new _utility_types_const_user_class__WEBPACK_IMPORTED_MODULE_1__["Users"]();
    }
    ngOnInit() {
        // * la propiedad lastName es opcional
        this.users.add({
            createdAt: new Date('2020/03/01'),
            updateAt: new Date('2021/03/03'),
            name: 'Angel'
        });
        // * La propiedad lastName es obligatoria
        this.users.addWithFullInfo({
            createdAt: new Date('2020/03/01'),
            updateAt: new Date('2021/03/03'),
            name: 'Angel',
            lastName: 'León'
        });
        this.users.find({
            name: 'Angel'
        });
        this.users.update({
            name: 'Federico',
            lastName: 'Lorca'
        });
        this.users.groupByName();
    }
}
UtilityTypesComponent.ɵfac = function UtilityTypesComponent_Factory(t) { return new (t || UtilityTypesComponent)(); };
UtilityTypesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UtilityTypesComponent, selectors: [["app-utility-types"]], decls: 2, vars: 0, template: function UtilityTypesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "utility-types works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1dGlsaXR5LXR5cGVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityTypesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-utility-types',
                templateUrl: './utility-types.component.html',
                styleUrls: ['./utility-types.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oJOr":
/*!****************************************************************************!*\
  !*** ./src/app/components/utility-types/utility-types.const/user.class.ts ***!
  \****************************************************************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
class Users {
    /**
     * Agrega un usuario con lastName opcional
     *
     */
    add(user) {
        // this.users.push(user);
    }
    /**
     * Agrega un usuario con todas sus propiedades
     *
     */
    addWithFullInfo(user) { }
    /**
     * Busca un usuario por cualquiera de sus propiedades
     * Retorna un usuario sin la propiedad createdAt
     * Retorna el usuario en modo lectura
     */
    find(props) {
        return this.users;
    }
    /**
     * Actualiza un usuario de forma parcial
     * Solo se puede actualizar name y lastName
     */
    update(user) { }
    /**
     * Crea un mapa de usuarios agrupados por nombre
     * {
     *  Juan: [users],
     *  ...
     * }
     *
     */
    groupByName() {
        return {};
    }
}


/***/ })

}]);
//# sourceMappingURL=utility-types-utility-types-module.js.map