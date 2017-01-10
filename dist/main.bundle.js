webpackJsonp([0,3],{

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return AddBookAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return AddBookSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return AddBookFailAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return RemoveBookAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return RemoveBookSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return RemoveBookFailAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return LoadAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return LoadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return LoadFailAction; });

var ActionTypes = {
    ADD_BOOK: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Add Book'),
    ADD_BOOK_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Add Book Success'),
    ADD_BOOK_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Add Book Fail'),
    REMOVE_BOOK: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Remove Book'),
    REMOVE_BOOK_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Remove Book Success'),
    REMOVE_BOOK_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Remove Book Fail'),
    LOAD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Load'),
    LOAD_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Load Success'),
    LOAD_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Load Fail'),
};
/**
 * Add Book to Collection Actions
 */
var AddBookAction = (function () {
    function AddBookAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_BOOK;
    }
    return AddBookAction;
}());
var AddBookSuccessAction = (function () {
    function AddBookSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_BOOK_SUCCESS;
    }
    return AddBookSuccessAction;
}());
var AddBookFailAction = (function () {
    function AddBookFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_BOOK_FAIL;
    }
    return AddBookFailAction;
}());
/**
 * Remove Book from Collection Actions
 */
var RemoveBookAction = (function () {
    function RemoveBookAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_BOOK;
    }
    return RemoveBookAction;
}());
var RemoveBookSuccessAction = (function () {
    function RemoveBookSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_BOOK_SUCCESS;
    }
    return RemoveBookSuccessAction;
}());
var RemoveBookFailAction = (function () {
    function RemoveBookFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_BOOK_FAIL;
    }
    return RemoveBookFailAction;
}());
/**
 * Load Collection Actions
 */
var LoadAction = (function () {
    function LoadAction() {
        this.type = ActionTypes.LOAD;
    }
    return LoadAction;
}());
var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());
var LoadFailAction = (function () {
    function LoadFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_FAIL;
    }
    return LoadFailAction;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/collection.js.map

/***/ },

/***/ 274:
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/book.js.map

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(239);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GoogleBooksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleBooksService = (function () {
    function GoogleBooksService(http) {
        this.http = http;
        this.API_PATH = 'https://www.googleapis.com/books/v1/volumes';
    }
    GoogleBooksService.prototype.searchBooks = function (queryTitle) {
        return this.http.get(this.API_PATH + "?q=" + queryTitle)
            .map(function (res) { return res.json().items || []; });
    };
    GoogleBooksService.prototype.retrieveBook = function (volumeId) {
        return this.http.get(this.API_PATH + "/" + volumeId)
            .map(function (res) { return res.json(); });
    };
    GoogleBooksService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], GoogleBooksService);
    return GoogleBooksService;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/google-books.js.map

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = type;
/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[label] = true;
    return label;
}
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/util.js.map

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return OpenSidenavAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return CloseSidenavAction; });

var ActionTypes = {
    OPEN_SIDENAV: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Layout] Open Sidenav'),
    CLOSE_SIDENAV: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Layout] Close Sidenav')
};
var OpenSidenavAction = (function () {
    function OpenSidenavAction() {
        this.type = ActionTypes.OPEN_SIDENAV;
    }
    return OpenSidenavAction;
}());
var CloseSidenavAction = (function () {
    function CloseSidenavAction() {
        this.type = ActionTypes.CLOSE_SIDENAV;
    }
    return CloseSidenavAction;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/layout.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CollectionPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CollectionPageComponent = (function () {
    function CollectionPageComponent(store) {
        this.books$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["i" /* getBookCollection */]);
    }
    CollectionPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* Component */])({
            selector: 'bc-collection-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <md-card>\n      <md-card-title>My Collection</md-card-title>\n    </md-card>\n\n    <bc-book-preview-list [books]=\"books$ | async\"></bc-book-preview-list>\n  ",
            /**
             * Container components are permitted to have just enough styles
             * to bring the view together. If the number of styles grow,
             * consider breaking them out into presentational
             * components.
             */
            styles: ["\n    md-card-title {\n      display: flex;\n      justify-content: center;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object])
    ], CollectionPageComponent);
    return CollectionPageComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/collection-page.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailsComponent = (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__(893),
            styles: [__webpack_require__(891)]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailsComponent);
    return DetailsComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/details.component.js.map

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_book__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FindBookPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FindBookPageComponent = (function () {
    function FindBookPageComponent(store) {
        this.store = store;
        this.searchQuery$ = store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["d" /* getSearchQuery */]).take(1);
        this.books$ = store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["e" /* getSearchResults */]);
        this.loading$ = store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["f" /* getSearchLoading */]);
    }
    FindBookPageComponent.prototype.search = function (query) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_book__["d" /* SearchAction */](query));
    };
    FindBookPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* Component */])({
            selector: 'bc-find-book-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <bc-book-search [query]=\"searchQuery$ | async\" [searching]=\"loading$ | async\" (search)=\"search($event)\"></bc-book-search>\n    <bc-book-preview-list [books]=\"books$ | async\"></bc-book-preview-list>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object])
    ], FindBookPageComponent);
    return FindBookPageComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/find-book-page.js.map

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotFoundPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'bc-not-found-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <md-card>\n      <md-card-title>404: Not Found</md-card-title>\n      <md-card-content>\n        <p>Hey! It looks like this page doesn't exist yet.</p>\n      </md-card-content>\n      <md-card-actions>\n        <button md-raised-button color=\"primary\" routerLink=\"/\">Take Me Home</button>\n      </md-card-actions>\n    </md-card>\n  ",
            styles: ["\n    :host {\n      text-align: center;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/not-found-page.js.map

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__(894),
            styles: [__webpack_require__(892)]
        }), 
        __metadata('design:paramtypes', [])
    ], ResumeComponent);
    return ResumeComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/resume.component.js.map

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_add_operator_select__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ngrx_core_add_operator_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_book__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewBookPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Note: Container components are also reusable. Whether or not
 * a component is a presentation component or a container
 * component is an implementation detail.
 *
 * The View Book Page's responsibility is to map router params
 * to a 'Select' book action. Actually showing the selected
 * book remains a responsibility of the
 * SelectedBookPageComponent
 */
var ViewBookPageComponent = (function () {
    function ViewBookPageComponent(store, route) {
        this.store = store;
        this.actionsSubscription = route.params
            .select('id')
            .map(function (id) { return new __WEBPACK_IMPORTED_MODULE_5__actions_book__["e" /* SelectAction */](id); })
            .subscribe(store);
    }
    ViewBookPageComponent.prototype.ngOnDestroy = function () {
        this.actionsSubscription.unsubscribe();
    };
    ViewBookPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* Component */])({
            selector: 'bc-view-book-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <bc-selected-book-page></bc-selected-book-page>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ViewBookPageComponent);
    return ViewBookPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/view-book-page.js.map

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_let__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_google_books__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducers__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actions_book__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookExistsGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
var BookExistsGuard = (function () {
    function BookExistsGuard(store, googleBooks, router) {
        this.store = store;
        this.googleBooks = googleBooks;
        this.router = router;
    }
    /**
     * This method creates an observable that waits for the `loaded` property
     * of the collection state to turn `true`, emitting one time once loading
     * has finished.
     */
    BookExistsGuard.prototype.waitForCollectionToLoad = function () {
        return this.store.select(__WEBPACK_IMPORTED_MODULE_12__reducers__["a" /* getCollectionLoaded */])
            .filter(function (loaded) { return loaded; })
            .take(1);
    };
    /**
     * This method checks if a book with the given ID is already registered
     * in the Store
     */
    BookExistsGuard.prototype.hasBookInStore = function (id) {
        return this.store.select(__WEBPACK_IMPORTED_MODULE_12__reducers__["b" /* getBookEntities */])
            .map(function (entities) { return !!entities[id]; })
            .take(1);
    };
    /**
     * This method loads a book with the given ID from the API and caches
     * it in the store, returning `true` or `false` if it was found.
     */
    BookExistsGuard.prototype.hasBookInApi = function (id) {
        var _this = this;
        return this.googleBooks.retrieveBook(id)
            .map(function (bookEntity) { return new __WEBPACK_IMPORTED_MODULE_13__actions_book__["c" /* LoadAction */](bookEntity); })
            .do(function (action) { return _this.store.dispatch(action); })
            .map(function (book) { return !!book; })
            .catch(function () {
            _this.router.navigate(['/404']);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(false);
        });
    };
    /**
     * `hasBook` composes `hasBookInStore` and `hasBookInApi`. It first checks
     * if the book is in store, and if not it then checks if it is in the
     * API.
     */
    BookExistsGuard.prototype.hasBook = function (id) {
        var _this = this;
        return this.hasBookInStore(id)
            .switchMap(function (inStore) {
            if (inStore) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(inStore);
            }
            return _this.hasBookInApi(id);
        });
    };
    /**
     * This is the actual method the router will call when our guard is run.
     *
     * Our guard waits for the collection to load, then it checks if we need
     * to request a book from the API or if we already have it in our cache.
     * If it finds it in the cache or in the API, it returns an Observable
     * of `true` and the route is rendered successfully.
     *
     * If it was unable to find it in our cache or in the API, this guard
     * will return an Observable of `false`, causing the router to move
     * on to the next candidate route. In this case, it will move on
     * to the 404 page.
     */
    BookExistsGuard.prototype.canActivate = function (route) {
        var _this = this;
        return this.waitForCollectionToLoad()
            .switchMap(function () { return _this.hasBook(route.params['id']); });
    };
    BookExistsGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__services_google_books__["a" /* GoogleBooksService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__services_google_books__["a" /* GoogleBooksService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], BookExistsGuard);
    return BookExistsGuard;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/book-exists.js.map

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/environment.js.map

/***/ },

/***/ 535:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 535;


/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(712);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/main.js.map

/***/ },

/***/ 712:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_db__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store_devtools__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__effects_book__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__effects_collection__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_book_exists__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__containers_app__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__containers_find_book_page__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__containers_view_book_page__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__containers_resume_resume_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__containers_details_details_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__containers_selected_book_page__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__containers_collection_page__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__containers_not_found_page__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_google_books__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__routes__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reducers__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__db__ = __webpack_require__(725);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__components__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_23__routes__["a" /* routes */], { useHash: true }),
                /**
                 * StoreModule.provideStore is imported once in the root module, accepting a reducer
                 * function or object map of reducer functions. If passed an object of
                 * reducers, combineReducers will be run creating your application
                 * meta-reducer. This returns all providers for an @ngrx/store
                 * based application.
                 */
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["g" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_24__reducers__["j" /* reducer */]),
                /**
                 * @ngrx/router-store keeps router state up-to-date in the store and uses
                 * the store as the single source of truth for the router's state.
                 */
                __WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__["b" /* RouterStoreModule */].connectRouter(),
                /**
                 * Store devtools instrument the store retaining past versions of state
                 * and recalculating new states. This enables powerful time-travel
                 * debugging.
                 *
                 * To use the debugger, install the Redux Devtools extension for either
                 * Chrome or Firefox
                 *
                 * See: https://github.com/zalmoxisus/redux-devtools-extension
                 */
                __WEBPACK_IMPORTED_MODULE_8__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension(),
                /**
                 * EffectsModule.run() sets up the effects class to be initialized
                 * immediately when the application starts.
                 *
                 * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
                 */
                __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_11__effects_book__["a" /* BookEffects */]),
                __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_12__effects_collection__["a" /* CollectionEffects */]),
                /**
                 * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
                 * service available.
                 */
                __WEBPACK_IMPORTED_MODULE_6__ngrx_db__["b" /* DBModule */].provideDB(__WEBPACK_IMPORTED_MODULE_25__db__["a" /* schema */]),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__containers_app__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__containers_find_book_page__["a" /* FindBookPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__containers_resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__containers_details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__containers_selected_book_page__["a" /* SelectedBookPageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__containers_view_book_page__["a" /* ViewBookPageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__containers_collection_page__["a" /* CollectionPageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__containers_not_found_page__["a" /* NotFoundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__containers_resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__containers_details_details_component__["a" /* DetailsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__guards_book_exists__["a" /* BookExistsGuard */],
                __WEBPACK_IMPORTED_MODULE_22__services_google_books__["a" /* GoogleBooksService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_14__containers_app__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/app.module.js.map

/***/ },

/***/ 713:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_book__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookAuthorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookAuthorsComponent = (function () {
    function BookAuthorsComponent() {
    }
    Object.defineProperty(BookAuthorsComponent.prototype, "authors", {
        get: function () {
            return this.book.volumeInfo.authors;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_book__["Book"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_book__["Book"]) === 'function' && _a) || Object)
    ], BookAuthorsComponent.prototype, "book", void 0);
    BookAuthorsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'bc-book-authors',
            template: "\n    <h5 md-subheader>Written By:</h5>\n    <span>\n      {{ authors | bcAddCommas }}\n    </span>\n  ",
            styles: ["\n    h5 {\n      margin-bottom: 5px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], BookAuthorsComponent);
    return BookAuthorsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/book-authors.js.map

/***/ },

/***/ 714:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_book__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookDetailComponent = (function () {
    function BookDetailComponent() {
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    Object.defineProperty(BookDetailComponent.prototype, "id", {
        /**
         * Tip: Utilize getters to keep templates clean
         */
        get: function () {
            return this.book.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookDetailComponent.prototype, "title", {
        get: function () {
            return this.book.volumeInfo.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookDetailComponent.prototype, "subtitle", {
        get: function () {
            return this.book.volumeInfo.subtitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookDetailComponent.prototype, "description", {
        get: function () {
            return this.book.volumeInfo.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookDetailComponent.prototype, "thumbnail", {
        get: function () {
            return this.book.volumeInfo.imageLinks.smallThumbnail;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_book__["Book"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_book__["Book"]) === 'function' && _a) || Object)
    ], BookDetailComponent.prototype, "book", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], BookDetailComponent.prototype, "inCollection", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], BookDetailComponent.prototype, "add", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], BookDetailComponent.prototype, "remove", void 0);
    BookDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'bc-book-detail',
            template: "\n    <md-card *ngIf=\"book\">\n      <md-card-title-group>\n        <md-card-title>{{ title }}</md-card-title>\n        <md-card-subtitle *ngIf=\"subtitle\">{{ subtitle }}</md-card-subtitle>\n        <img md-card-sm-image *ngIf=\"thumbnail\" [src]=\"thumbnail\"/>\n      </md-card-title-group>\n      <md-card-content>\n        <p [innerHtml]=\"description\"></p>\n      </md-card-content>\n      <md-card-footer class=\"footer\">\n        <bc-book-authors [book]=\"book\"></bc-book-authors>\n      </md-card-footer>\n      <md-card-actions align=\"end\">\n        <button md-raised-button color=\"warn\" *ngIf=\"inCollection\" (click)=\"remove.emit(book)\">\n        Remove Book from Collection\n        </button>\n\n        <button md-raised-button color=\"primary\" *ngIf=\"!inCollection\" (click)=\"add.emit(book)\">\n        Add Book to Collection\n        </button>\n      </md-card-actions>\n    </md-card>\n\n  ",
            styles: ["\n    :host {\n      display: flex;\n      justify-content: center;\n      margin: 75px 0;\n    }\n    md-card {\n      max-width: 600px;\n    }\n    md-card-title {\n      margin-left: 10px;\n    }\n    img {\n      width: 60px;\n      min-width: 60px;\n      margin-left: 5px;\n    }\n    md-card-content {\n      margin-top: 15px;\n      margin-bottom: 125px;\n    }\n    md-card-actions {\n      margin-bottom: 0 !important;\n      margin-right: 0;\n    }\n    md-card-footer {\n      padding: 0 25px 25px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], BookDetailComponent);
    return BookDetailComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/book-detail.js.map

/***/ },

/***/ 715:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookPreviewListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookPreviewListComponent = (function () {
    function BookPreviewListComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], BookPreviewListComponent.prototype, "books", void 0);
    BookPreviewListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'bc-book-preview-list',
            template: "\n    <bc-book-preview *ngFor=\"let book of books\" [book]=\"book\"></bc-book-preview>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], BookPreviewListComponent);
    return BookPreviewListComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/book-preview-list.js.map

/***/ },

/***/ 716:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_book__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookPreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookPreviewComponent = (function () {
    function BookPreviewComponent() {
    }
    Object.defineProperty(BookPreviewComponent.prototype, "id", {
        get: function () {
            return this.book.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookPreviewComponent.prototype, "title", {
        get: function () {
            return this.book.volumeInfo.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookPreviewComponent.prototype, "subtitle", {
        get: function () {
            return this.book.volumeInfo.subtitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookPreviewComponent.prototype, "description", {
        get: function () {
            return this.book.volumeInfo.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookPreviewComponent.prototype, "thumbnail", {
        get: function () {
            if (this.book.volumeInfo.imageLinks) {
                return this.book.volumeInfo.imageLinks.smallThumbnail;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_book__["Book"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_book__["Book"]) === 'function' && _a) || Object)
    ], BookPreviewComponent.prototype, "book", void 0);
    BookPreviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'bc-book-preview',
            template: "\n    <a [routerLink]=\"['/book', id]\">\n      <md-card>\n        <md-card-title-group>\n          <img md-card-sm-image *ngIf=\"thumbnail\" [src]=\"thumbnail\"/>\n          <md-card-title>{{ title }}</md-card-title>\n          <md-card-subtitle *ngIf=\"subtitle\">{{ subtitle }}</md-card-subtitle>\n        </md-card-title-group>\n        <md-card-content>\n          <p *ngIf=\"description\">{{ description | bcEllipsis }}</p>\n        </md-card-content>\n        <md-card-footer>\n          <bc-book-authors [book]=\"book\"></bc-book-authors>\n        </md-card-footer>\n      </md-card>\n    </a>\n  ",
            styles: ["\n    md-card {\n      width: 400px;\n      height: 300px;\n      margin: 15px;\n    }\n    md-card-title {\n      margin-right: 10px;\n    }\n    a {\n      color: inherit;\n      text-decoration: none;\n    }\n    img {\n      width: 60px;\n      min-width: 60px;\n      margin-left: 5px;\n    }\n    md-card-content {\n      margin-top: 15px;\n    }\n    span {\n      display: inline-block;\n      font-size: 13px;\n    }\n    md-card-footer {\n      padding: 0 25px 25px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], BookPreviewComponent);
    return BookPreviewComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/book-preview.js.map

/***/ },

/***/ 717:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookSearchComponent = (function () {
    function BookSearchComponent() {
        this.query = '';
        this.searching = false;
        this.search = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["_20" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], BookSearchComponent.prototype, "query", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], BookSearchComponent.prototype, "searching", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], BookSearchComponent.prototype, "search", void 0);
    BookSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["G" /* Component */])({
            selector: 'bc-book-search',
            template: "\n    <md-card>\n      <md-card-title>Find a Book</md-card-title>\n      <md-card-content>\n        <md-input placeholder=\"Search for a book\" [value]=\"query\" (keyup)=\"search.emit($event.target.value)\"></md-input>\n        <md-spinner [class.show]=\"searching\"></md-spinner>\n      </md-card-content>\n    </md-card>\n  ",
            styles: ["\n    md-card-title,\n    md-card-content {\n      display: flex;\n      justify-content: center;\n    }\n\n    md-input {\n      width: 300px;\n    }\n\n    md-card-spinner {\n      padding-left: 60px; // Make room for the spinner\n    }\n\n    md-spinner {\n      width: 30px;\n      height: 30px;\n      position: relative;\n      top: 10px;\n      left: 10px;\n      opacity: 0.0;\n    }\n\n    md-spinner.show {\n      opacity: 1.0;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], BookSearchComponent);
    return BookSearchComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/book-search.js.map

/***/ },

/***/ 718:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_authors__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_detail__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_preview__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_preview_list__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__book_search__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nav_item__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sidenav__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__toolbar__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes__ = __webpack_require__(730);
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__book_authors__["a" /* BookAuthorsComponent */],
    __WEBPACK_IMPORTED_MODULE_6__book_detail__["a" /* BookDetailComponent */],
    __WEBPACK_IMPORTED_MODULE_7__book_preview__["a" /* BookPreviewComponent */],
    __WEBPACK_IMPORTED_MODULE_8__book_preview_list__["a" /* BookPreviewListComponent */],
    __WEBPACK_IMPORTED_MODULE_9__book_search__["a" /* BookSearchComponent */],
    __WEBPACK_IMPORTED_MODULE_10__layout__["a" /* LayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_11__nav_item__["a" /* NavItemComponent */],
    __WEBPACK_IMPORTED_MODULE_12__sidenav__["a" /* SidenavComponent */],
    __WEBPACK_IMPORTED_MODULE_13__toolbar__["a" /* ToolbarComponent */],
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["MaterialModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_14__pipes__["a" /* PipesModule */],
            ],
            declarations: COMPONENTS,
            exports: COMPONENTS
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentsModule);
    return ComponentsModule;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/index.js.map

/***/ },

/***/ 719:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'portfolio-layout',
            template: "\n    <md-sidenav-layout fullscreen>\n      <ng-content></ng-content>\n    </md-sidenav-layout>\n  ",
            styles: ["\n    md-sidenav-layout {\n      background: rgba(0, 0, 0, 0.03);\n    }\n    \n    *, /deep/ * {\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutComponent);
    return LayoutComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/layout.js.map

/***/ },

/***/ 720:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavItemComponent = (function () {
    function NavItemComponent() {
        this.icon = '';
        this.hint = '';
        this.routerLink = '/';
        this.activate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], NavItemComponent.prototype, "icon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], NavItemComponent.prototype, "hint", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], NavItemComponent.prototype, "routerLink", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], NavItemComponent.prototype, "activate", void 0);
    NavItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'portfolio-nav-item',
            template: "\n    <a md-list-item [routerLink]=\"routerLink\" (click)=\"activate.emit()\">\n      <md-icon md-list-icon>{{ icon }}</md-icon>\n      <span md-line><ng-content></ng-content></span>\n      <span md-line class=\"secondary\">{{ hint }}</span>\n    </a>\n  ",
            styles: ["\n    .secondary {\n      color: rgba(0, 0, 0, 0.54);\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], NavItemComponent);
    return NavItemComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/nav-item.js.map

/***/ },

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = (function () {
    function SidenavComponent() {
        this.open = false;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], SidenavComponent.prototype, "open", void 0);
    SidenavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'portfolio-sidenav',
            template: "\n    <md-sidenav [opened]=\"open\">\n      <md-nav-list>\n        <ng-content></ng-content>\n      </md-nav-list>\n    </md-sidenav>\n  ",
            styles: ["\n    md-sidenav {\n      width: 300px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], SidenavComponent);
    return SidenavComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/sidenav.js.map

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.openMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], ToolbarComponent.prototype, "openMenu", void 0);
    ToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'portfolio-toolbar',
            template: "\n    <md-toolbar color=\"primary\">\n      <button md-icon-button (click)=\"openMenu.emit()\">\n        <md-icon>menu</md-icon>\n      </button>\n      <ng-content></ng-content>\n    </md-toolbar>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/toolbar.js.map

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_layout__ = __webpack_require__(461);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        /**
         * Selectors can be applied with the `select` operator which passes the state
         * tree to the provided selector
         */
        this.showSidenav$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["c" /* getShowSidenav */]);
    }
    AppComponent.prototype.closeSidenav = function () {
        /**
         * All state updates are handled through dispatched actions in 'container'
         * components. This provides a clear, reproducible history of state
         * updates and user interaction through the life of our
         * application.
         */
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_layout__["b" /* CloseSidenavAction */]());
    };
    AppComponent.prototype.openSidenav = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_layout__["c" /* OpenSidenavAction */]());
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* Component */])({
            selector: 'project-collection-app',
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <portfolio-layout>\n      <portfolio-sidenav [open]=\"showSidenav$ | async\">\n        <portfolio-nav-item (activate)=\"closeSidenav()\" routerLink=\"/\" icon=\"book\" hint=\"View my works\">\n          My Work\n        </portfolio-nav-item>\n        <portfolio-nav-item (activate)=\"closeSidenav()\" routerLink=\"/project/find\" icon=\"search\" hint=\"Find my projects\">\n          Browse Projects\n        </portfolio-nav-item>\n        <portfolio-nav-item (activate)=\"closeSidenav()\" routerLink=\"/resume\" icon=\"search\" hint=\"Find my projects\">\n          Resume\n        </portfolio-nav-item>\n        <portfolio-nav-item (activate)=\"closeSidenav()\" routerLink=\"/details\" icon=\"search\" hint=\"Find my projects\">\n          This portfolio\n        </portfolio-nav-item>\n      </portfolio-sidenav>\n      <portfolio-toolbar (openMenu)=\"openSidenav()\">\n        Eric Alter\n      </portfolio-toolbar>\n\n      <router-outlet></router-outlet>\n    </portfolio-layout>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/app.js.map

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_collection__ = __webpack_require__(181);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SelectedBookPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectedBookPageComponent = (function () {
    function SelectedBookPageComponent(store) {
        this.store = store;
        this.book$ = store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["g" /* getSelectedBook */]);
        this.isSelectedBookInCollection$ = store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["h" /* isSelectedBookInCollection */]);
    }
    SelectedBookPageComponent.prototype.addToCollection = function (book) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_collection__["i" /* AddBookAction */](book));
    };
    SelectedBookPageComponent.prototype.removeFromCollection = function (book) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_collection__["j" /* RemoveBookAction */](book));
    };
    SelectedBookPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'bc-selected-book-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <bc-book-detail\n      [book]=\"book$ | async\"\n      [inCollection]=\"isSelectedBookInCollection$ | async\"\n      (add)=\"addToCollection($event)\"\n      (remove)=\"removeFromCollection($event)\">\n    </bc-book-detail>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object])
    ], SelectedBookPageComponent);
    return SelectedBookPageComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/selected-book-page.js.map

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return schema; });
/**
 * ngrx/db uses a simple schema config object to initialize stores in IndexedDB.
 */
var schema = {
    version: 1,
    name: 'books_app',
    stores: {
        books: {
            autoIncrement: true,
            primaryKey: 'id'
        }
    }
};
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/db.js.map

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_google_books__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_book__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */
var BookEffects = (function () {
    function BookEffects(actions$, googleBooks) {
        var _this = this;
        this.actions$ = actions$;
        this.googleBooks = googleBooks;
        this.search$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_book__["a" /* ActionTypes */].SEARCH)
            .debounceTime(300)
            .map(function (action) { return action.payload; })
            .switchMap(function (query) {
            if (query === '') {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty__["empty"])();
            }
            var nextSearch$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_12__actions_book__["a" /* ActionTypes */].SEARCH).skip(1);
            return _this.googleBooks.searchBooks(query)
                .takeUntil(nextSearch$)
                .map(function (books) { return new __WEBPACK_IMPORTED_MODULE_12__actions_book__["b" /* SearchCompleteAction */](books); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_book__["b" /* SearchCompleteAction */]([])); });
        });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Effect */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === 'function' && _a) || Object)
    ], BookEffects.prototype, "search$", void 0);
    BookEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Actions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Actions */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11__services_google_books__["a" /* GoogleBooksService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__services_google_books__["a" /* GoogleBooksService */]) === 'function' && _c) || Object])
    ], BookEffects);
    return BookEffects;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/book.js.map

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_db__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_collection__ = __webpack_require__(181);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CollectionEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CollectionEffects = (function () {
    function CollectionEffects(actions$, db) {
        var _this = this;
        this.actions$ = actions$;
        this.db = db;
        /**
         * This effect does not yield any actions back to the store. Set
         * `dispatch` to false to hint to @ngrx/effects that it should
         * ignore any elements of this effect stream.
         *
         * The `defer` observable accepts an observable factory function
         * that is called when the observable is subscribed to.
         * Wrapping the database open call in `defer` makes
         * effect easier to test.
         */
        this.openDB$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer__["defer"])(function () {
            return _this.db.open('books_app');
        });
        /**
         * This effect makes use of the `startWith` operator to trigger
         * the effect immediately on startup.
         */
        this.loadCollection$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_collection__["a" /* ActionTypes */].LOAD)
            .startWith(new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["b" /* LoadAction */]())
            .switchMap(function () {
            return _this.db.query('books')
                .toArray()
                .map(function (books) { return new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["c" /* LoadSuccessAction */](books); })
                .catch(function (error) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["d" /* LoadFailAction */](error)); });
        });
        this.addBookToCollection$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_collection__["a" /* ActionTypes */].ADD_BOOK)
            .map(function (action) { return action.payload; })
            .mergeMap(function (book) {
            return _this.db.insert('books', [book])
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["e" /* AddBookSuccessAction */](book); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["f" /* AddBookFailAction */](book)); });
        });
        this.removeBookFromCollection$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_collection__["a" /* ActionTypes */].REMOVE_BOOK)
            .map(function (action) { return action.payload; })
            .mergeMap(function (book) {
            return _this.db.executeWrite('books', 'delete', [book.id])
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["g" /* RemoveBookSuccessAction */](book); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["h" /* RemoveBookFailAction */](book)); });
        });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Effect */])({ dispatch: false }), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"]) === 'function' && _a) || Object)
    ], CollectionEffects.prototype, "openDB$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Effect */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"]) === 'function' && _b) || Object)
    ], CollectionEffects.prototype, "loadCollection$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Effect */])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"]) === 'function' && _c) || Object)
    ], CollectionEffects.prototype, "addBookToCollection$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Effect */])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"]) === 'function' && _d) || Object)
    ], CollectionEffects.prototype, "removeBookFromCollection$", void 0);
    CollectionEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Actions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Actions */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__ngrx_db__["a" /* Database */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__ngrx_db__["a" /* Database */]) === 'function' && _f) || Object])
    ], CollectionEffects);
    return CollectionEffects;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/collection.js.map

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddCommasPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddCommasPipe = (function () {
    function AddCommasPipe() {
    }
    AddCommasPipe.prototype.transform = function (authors) {
        if (!authors)
            return 'Author Unknown';
        switch (authors.length) {
            case 0:
                return 'Author Unknown';
            case 1:
                return authors[0];
            case 2:
                return authors.join(' and ');
            default:
                var last = authors[authors.length - 1];
                var remaining = authors.slice(0, -1);
                return remaining.join(', ') + ", and " + last;
        }
    };
    AddCommasPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({ name: 'bcAddCommas' }), 
        __metadata('design:paramtypes', [])
    ], AddCommasPipe);
    return AddCommasPipe;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/add-commas.js.map

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EllipsisPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EllipsisPipe = (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (str) {
        var withoutHtml = str.replace(/(<([^>]+)>)/ig, '');
        if (str.length >= 250) {
            return withoutHtml.slice(0, 250) + '...';
        }
        return withoutHtml;
    };
    EllipsisPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({ name: 'bcEllipsis' }), 
        __metadata('design:paramtypes', [])
    ], EllipsisPipe);
    return EllipsisPipe;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/ellipsis.js.map

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_commas__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ellipsis__ = __webpack_require__(729);
/* unused harmony export PIPES */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PIPES = [
    __WEBPACK_IMPORTED_MODULE_1__add_commas__["a" /* AddCommasPipe */],
    __WEBPACK_IMPORTED_MODULE_2__ellipsis__["a" /* EllipsisPipe */],
];
var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: PIPES,
            exports: PIPES
        }), 
        __metadata('design:paramtypes', [])
    ], PipesModule);
    return PipesModule;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/index.js.map

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_book__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_collection__ = __webpack_require__(181);
/* harmony export (immutable) */ exports["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return getSelectedId; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return getSelected; });
/* unused harmony export getAll */



;
var initialState = {
    ids: [],
    entities: {},
    selectedBookId: null,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_book__["a" /* ActionTypes */].SEARCH_COMPLETE:
        case __WEBPACK_IMPORTED_MODULE_2__actions_collection__["a" /* ActionTypes */].LOAD_SUCCESS: {
            var books = action.payload;
            var newBooks = books.filter(function (book) { return !state.entities[book.id]; });
            var newBookIds = newBooks.map(function (book) { return book.id; });
            var newBookEntities = newBooks.reduce(function (entities, book) {
                return Object.assign(entities, (_a = {},
                    _a[book.id] = book,
                    _a
                ));
                var _a;
            }, {});
            return {
                ids: state.ids.concat(newBookIds),
                entities: Object.assign({}, state.entities, newBookEntities),
                selectedBookId: state.selectedBookId
            };
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_book__["a" /* ActionTypes */].LOAD: {
            var book_1 = action.payload;
            if (state.ids.indexOf(book_1.id) > -1) {
                return state;
            }
            return {
                ids: state.ids.concat([book_1.id]),
                entities: Object.assign({}, state.entities, (_a = {},
                    _a[book_1.id] = book_1,
                    _a
                )),
                selectedBookId: state.selectedBookId
            };
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_book__["a" /* ActionTypes */].SELECT: {
            return {
                ids: state.ids,
                entities: state.entities,
                selectedBookId: action.payload
            };
        }
        default: {
            return state;
        }
    }
    var _a;
}
/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
var getEntities = function (state) { return state.entities; };
var getIds = function (state) { return state.ids; };
var getSelectedId = function (state) { return state.selectedBookId; };
var getSelected = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntities, getSelectedId, function (entities, selectedId) {
    return entities[selectedId];
});
var getAll = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntities, getIds, function (entities, ids) {
    return ids.map(function (id) { return entities[id]; });
});
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/books.js.map

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_collection__ = __webpack_require__(181);
/* harmony export (immutable) */ exports["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getLoaded; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return getIds; });

;
var initialState = {
    loaded: false,
    loading: false,
    ids: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["a" /* ActionTypes */].LOAD: {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["a" /* ActionTypes */].LOAD_SUCCESS: {
            var books = action.payload;
            return {
                loaded: true,
                loading: false,
                ids: books.map(function (book) { return book.id; })
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["a" /* ActionTypes */].ADD_BOOK_SUCCESS:
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["a" /* ActionTypes */].REMOVE_BOOK_FAIL: {
            var book = action.payload;
            if (state.ids.indexOf(book.id) > -1) {
                return state;
            }
            return Object.assign({}, state, {
                ids: state.ids.concat([book.id])
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["a" /* ActionTypes */].REMOVE_BOOK_SUCCESS:
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["a" /* ActionTypes */].ADD_BOOK_FAIL: {
            var book_1 = action.payload;
            return Object.assign({}, state, {
                ids: state.ids.filter(function (id) { return id !== book_1.id; })
            });
        }
        default: {
            return state;
        }
    }
}
var getLoaded = function (state) { return state.loaded; };
var getLoading = function (state) { return state.loading; };
var getIds = function (state) { return state.ids; };
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/collection.js.map

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_layout__ = __webpack_require__(461);
/* harmony export (immutable) */ exports["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getShowSidenav; });

var initialState = {
    showSidenav: false,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["a" /* ActionTypes */].CLOSE_SIDENAV:
            return {
                showSidenav: false
            };
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["a" /* ActionTypes */].OPEN_SIDENAV:
            return {
                showSidenav: true
            };
        default:
            return state;
    }
}
var getShowSidenav = function (state) { return state.showSidenav; };
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/layout.js.map

/***/ },

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_book__ = __webpack_require__(97);
/* harmony export (immutable) */ exports["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return getQuery; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return getLoading; });

;
var initialState = {
    ids: [],
    loading: false,
    query: ''
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_book__["a" /* ActionTypes */].SEARCH: {
            var query = action.payload;
            if (query === '') {
                return {
                    ids: [],
                    loading: false,
                    query: query
                };
            }
            return Object.assign({}, state, {
                query: query,
                loading: true
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_book__["a" /* ActionTypes */].SEARCH_COMPLETE: {
            var books = action.payload;
            return {
                ids: books.map(function (book) { return book.id; }),
                loading: false,
                query: state.query
            };
        }
        default: {
            return state;
        }
    }
}
var getIds = function (state) { return state.ids; };
var getQuery = function (state) { return state.query; };
var getLoading = function (state) { return state.loading; };
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/search.js.map

/***/ },

/***/ 735:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_book_exists__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_find_book_page__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_resume_resume_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_details_details_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_not_found_page__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_view_book_page__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_collection_page__ = __webpack_require__(462);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__containers_collection_page__["a" /* CollectionPageComponent */]
    },
    {
        path: 'project/find',
        component: __WEBPACK_IMPORTED_MODULE_1__containers_find_book_page__["a" /* FindBookPageComponent */]
    },
    {
        path: 'resume',
        component: __WEBPACK_IMPORTED_MODULE_2__containers_resume_resume_component__["a" /* ResumeComponent */]
    },
    {
        path: 'details',
        component: __WEBPACK_IMPORTED_MODULE_3__containers_details_details_component__["a" /* DetailsComponent */]
    },
    {
        path: 'book/:id',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_book_exists__["a" /* BookExistsGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_5__containers_view_book_page__["a" /* ViewBookPageComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__containers_not_found_page__["a" /* NotFoundPageComponent */]
    }
];
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/routes.js.map

/***/ },

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(939);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/polyfills.js.map

/***/ },

/***/ 891:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 892:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 893:
/***/ function(module, exports) {

module.exports = "<p>\n  details works!\n</p>\n"

/***/ },

/***/ 894:
/***/ function(module, exports) {

module.exports = "<p>\n  resume works!\n</p>\n"

/***/ },

/***/ 940:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(536);


/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return SearchAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return SearchCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return LoadAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return SelectAction; });

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
var ActionTypes = {
    SEARCH: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Book] Search'),
    SEARCH_COMPLETE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Book] Search Complete'),
    LOAD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Book] Load'),
    SELECT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Book] Select'),
};
/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
var SearchAction = (function () {
    function SearchAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEARCH;
    }
    return SearchAction;
}());
var SearchCompleteAction = (function () {
    function SearchCompleteAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEARCH_COMPLETE;
    }
    return SearchCompleteAction;
}());
var LoadAction = (function () {
    function LoadAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD;
    }
    return LoadAction;
}());
var SelectAction = (function () {
    function SelectAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SELECT;
    }
    return SelectAction;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/book.js.map

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__books__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collection__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout__ = __webpack_require__(733);
/* harmony export (immutable) */ exports["j"] = reducer;
/* unused harmony export getBooksState */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getBookEntities; });
/* unused harmony export getBookIds */
/* unused harmony export getSelectedBookId */
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return getSelectedBook; });
/* unused harmony export getSearchState */
/* unused harmony export getSearchBookIds */
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return getSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return getSearchLoading; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return getSearchResults; });
/* unused harmony export getCollectionState */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return getCollectionLoaded; });
/* unused harmony export getCollectionLoading */
/* unused harmony export getCollectionBookIds */
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return getBookCollection; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return isSelectedBookInCollection; });
/* unused harmony export getLayoutState */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return getShowSidenav; });










/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
var reducers = {
    search: __WEBPACK_IMPORTED_MODULE_6__search__["a" /* reducer */],
    books: __WEBPACK_IMPORTED_MODULE_7__books__["a" /* reducer */],
    collection: __WEBPACK_IMPORTED_MODULE_8__collection__["a" /* reducer */],
    layout: __WEBPACK_IMPORTED_MODULE_9__layout__["a" /* reducer */],
    router: __WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__["a" /* routerReducer */],
};
var developmentReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* combineReducers */])(reducers);
var productionReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* combineReducers */])(reducers);
function reducer(state, action) {
    if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */
var getBooksState = function (state) { return state.books; };
/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * Once again our compose function comes in handy. From right to left, we
 * first select the books state then we pass the state to the book
 * reducer's getBooks selector, finally returning an observable
 * of search results.
 *
 * Share memoizes the selector functions and publishes the result. This means
 * every time you call the selector, you will get back the same result
 * observable. Each subscription to the resultant observable
 * is shared across all subscribers.
 */
var getBookEntities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getBooksState, __WEBPACK_IMPORTED_MODULE_7__books__["b" /* getEntities */]);
var getBookIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getBooksState, __WEBPACK_IMPORTED_MODULE_7__books__["c" /* getIds */]);
var getSelectedBookId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getBooksState, __WEBPACK_IMPORTED_MODULE_7__books__["d" /* getSelectedId */]);
var getSelectedBook = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getBooksState, __WEBPACK_IMPORTED_MODULE_7__books__["e" /* getSelected */]);
/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
var getSearchState = function (state) { return state.search; };
var getSearchBookIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getSearchState, __WEBPACK_IMPORTED_MODULE_6__search__["b" /* getIds */]);
var getSearchQuery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getSearchState, __WEBPACK_IMPORTED_MODULE_6__search__["c" /* getQuery */]);
var getSearchLoading = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getSearchState, __WEBPACK_IMPORTED_MODULE_6__search__["d" /* getLoading */]);
/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of books in the store.
 */
var getSearchResults = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getBookEntities, getSearchBookIds, function (books, searchIds) {
    return searchIds.map(function (id) { return books[id]; });
});
var getCollectionState = function (state) { return state.collection; };
var getCollectionLoaded = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCollectionState, __WEBPACK_IMPORTED_MODULE_8__collection__["b" /* getLoaded */]);
var getCollectionLoading = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCollectionState, __WEBPACK_IMPORTED_MODULE_8__collection__["c" /* getLoading */]);
var getCollectionBookIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCollectionState, __WEBPACK_IMPORTED_MODULE_8__collection__["d" /* getIds */]);
var getBookCollection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getBookEntities, getCollectionBookIds, function (entities, ids) {
    return ids.map(function (id) { return entities[id]; });
});
var isSelectedBookInCollection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCollectionBookIds, getSelectedBookId, function (ids, selected) {
    return ids.indexOf(selected) > -1;
});
/**
 * Layout Reducers
 */
var getLayoutState = function (state) { return state.layout; };
var getShowSidenav = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getLayoutState, __WEBPACK_IMPORTED_MODULE_9__layout__["b" /* getShowSidenav */]);
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/index.js.map

/***/ }

},[940]);
//# sourceMappingURL=main.bundle.map