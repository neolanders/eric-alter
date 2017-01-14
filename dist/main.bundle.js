webpackJsonp([1,5],{

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return AddProjectAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return AddProjectSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return AddProjectFailAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return RemoveProjectAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return RemoveProjectSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return RemoveProjectFailAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return LoadAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return LoadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return LoadFailAction; });

var ActionTypes = {
    ADD_PROJECT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Add Project'),
    ADD_PROJECT_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Add Project Success'),
    ADD_PROJECT_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Add Project Fail'),
    REMOVE_PROJECT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Remove Project'),
    REMOVE_PROJECT_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Remove Project Success'),
    REMOVE_PROJECT_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Remove Project Fail'),
    LOAD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Load'),
    LOAD_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Load Success'),
    LOAD_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Collection] Load Fail'),
};
/**
 * Add PROJECT to Collection Actions
 */
var AddProjectAction = (function () {
    function AddProjectAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_PROJECT;
    }
    return AddProjectAction;
}());
var AddProjectSuccessAction = (function () {
    function AddProjectSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_PROJECT_SUCCESS;
    }
    return AddProjectSuccessAction;
}());
var AddProjectFailAction = (function () {
    function AddProjectFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_PROJECT_FAIL;
    }
    return AddProjectFailAction;
}());
/**
 * Remove PROJECT from Collection Actions
 */
var RemoveProjectAction = (function () {
    function RemoveProjectAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_PROJECT;
    }
    return RemoveProjectAction;
}());
var RemoveProjectSuccessAction = (function () {
    function RemoveProjectSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_PROJECT_SUCCESS;
    }
    return RemoveProjectSuccessAction;
}());
var RemoveProjectFailAction = (function () {
    function RemoveProjectFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_PROJECT_FAIL;
    }
    return RemoveProjectFailAction;
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

//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/project.js.map

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(167);
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
    GoogleBooksService.prototype.searchProjects = function (queryTitle) {
        return this.http.get(this.API_PATH + "?q=" + queryTitle)
            .map(function (res) { return res.json().items || []; });
    };
    GoogleBooksService.prototype.retrieveProject = function (volumeId) {
        return this.http.get(this.API_PATH + "/" + volumeId)
            .map(function (res) { return res.json(); });
    };
    GoogleBooksService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_let__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_google_books__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducers__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actions_project__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectExistsGuard; });
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
var ProjectExistsGuard = (function () {
    function ProjectExistsGuard(store, googleProjects, router) {
        this.store = store;
        this.googleProjects = googleProjects;
        this.router = router;
    }
    /**
     * This method creates an observable that waits for the `loaded` property
     * of the collection state to turn `true`, emitting one time once loading
     * has finished.
     */
    ProjectExistsGuard.prototype.waitForCollectionToLoad = function () {
        return this.store.select(__WEBPACK_IMPORTED_MODULE_12__reducers__["a" /* getCollectionLoaded */])
            .filter(function (loaded) { return loaded; })
            .take(1);
    };
    /**
     * This method checks if a project with the given ID is already registered
     * in the Store
     */
    ProjectExistsGuard.prototype.hasProjectInStore = function (id) {
        return this.store.select(__WEBPACK_IMPORTED_MODULE_12__reducers__["b" /* getProjectEntities */])
            .map(function (entities) { return !!entities[id]; })
            .take(1);
    };
    /**
     * This method loads a project with the given ID from the API and caches
     * it in the store, returning `true` or `false` if it was found.
     */
    ProjectExistsGuard.prototype.hasProjectInApi = function (id) {
        var _this = this;
        return this.googleProjects.retrieveProject(id)
            .map(function (projectEntity) { return new __WEBPACK_IMPORTED_MODULE_13__actions_project__["c" /* LoadAction */](projectEntity); })
            .do(function (action) { return _this.store.dispatch(action); })
            .map(function (project) { return !!project; })
            .catch(function () {
            _this.router.navigate(['/404']);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(false);
        });
    };
    /**
     * `hasProject` composes `hasProjectInStore` and `hasProjectInApi`. It first checks
     * if the project is in store, and if not it then checks if it is in the
     * API.
     */
    ProjectExistsGuard.prototype.hasProject = function (id) {
        var _this = this;
        return this.hasProjectInStore(id)
            .switchMap(function (inStore) {
            if (inStore) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(inStore);
            }
            return _this.hasProjectInApi(id);
        });
    };
    /**
     * This is the actual method the router will call when our guard is run.
     *
     * Our guard waits for the collection to load, then it checks if we need
     * to request a project from the API or if we already have it in our cache.
     * If it finds it in the cache or in the API, it returns an Observable
     * of `true` and the route is rendered successfully.
     *
     * If it was unable to find it in our cache or in the API, this guard
     * will return an Observable of `false`, causing the router to move
     * on to the next candidate route. In this case, it will move on
     * to the 404 page.
     */
    ProjectExistsGuard.prototype.canActivate = function (route) {
        var _this = this;
        return this.waitForCollectionToLoad()
            .switchMap(function () { return _this.hasProject(route.params['id']); });
    };
    ProjectExistsGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__services_google_books__["a" /* GoogleBooksService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__services_google_books__["a" /* GoogleBooksService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], ProjectExistsGuard);
    return ProjectExistsGuard;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/project-exists.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_service__ = __webpack_require__(731);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(contactService) {
        this.contactService = contactService;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.sendMessage = function () {
        var _this = this;
        console.log('#--Send Message--#');
        this.contactService.create(this.name, this.email, this.message)
            .then(function (res) {
            _this.boolMessageSent = true;
        });
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(907),
            styles: [__webpack_require__(903)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */]) === 'function' && _a) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/contact.component.js.map

/***/ },

/***/ 464:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__(908),
            styles: [__webpack_require__(904)]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailsComponent);
    return DetailsComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/details.component.js.map

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_project__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FindProjectPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FindProjectPageComponent = (function () {
    function FindProjectPageComponent(store) {
        this.store = store;
        this.searchQuery$ = store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["d" /* getSearchQuery */]).take(1);
        this.projects$ = store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["e" /* getSearchResults */]);
        this.loading$ = store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["f" /* getSearchLoading */]);
    }
    FindProjectPageComponent.prototype.search = function (query) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_project__["d" /* SearchAction */](query));
    };
    FindProjectPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["x" /* Component */])({
            selector: 'bc-find-project-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <bc-project-search [query]=\"searchQuery$ | async\" [searching]=\"loading$ | async\" (search)=\"search($event)\"></bc-project-search>\n    <bc-project-preview-list [projects]=\"projects$ | async\"></bc-project-preview-list>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object])
    ], FindProjectPageComponent);
    return FindProjectPageComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/find-project-page.js.map

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePageComponent = (function () {
    function HomePageComponent(store) {
        this.projects$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["i" /* getProjectCollection */]);
    }
    HomePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* Component */])({
            selector: 'bc-collection-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <md-card>\n      <md-card-title>My Portfolio</md-card-title>\n    </md-card>\n    <bc-project-preview-list [projects]=\"projects$ | async\"></bc-project-preview-list>\n  ",
            /**
             * Container components are permitted to have just enough styles
             * to bring the view together. If the number of styles grow,
             * consider breaking them out into presentational
             * components.
             */
            styles: [__webpack_require__(902)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object])
    ], HomePageComponent);
    return HomePageComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/home-page.js.map

/***/ },

/***/ 467:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'bc-not-found-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <md-card>\n      <md-card-title>404: Not Found</md-card-title>\n      <md-card-content>\n        <p>Hey! It looks like this page doesn't exist yet.</p>\n      </md-card-content>\n      <md-card-actions>\n        <button md-raised-button color=\"primary\" routerLink=\"/\">Take Me Home</button>\n      </md-card-actions>\n    </md-card>\n  ",
            styles: ["\n    :host {\n      text-align: center;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/not-found-page.js.map

/***/ },

/***/ 468:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__(909),
            styles: [__webpack_require__(905)]
        }), 
        __metadata('design:paramtypes', [])
    ], ResumeComponent);
    return ResumeComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/resume.component.js.map

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_add_operator_select__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ngrx_core_add_operator_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_project__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewProjectPageComponent; });
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
 * The View Project Page's responsibility is to map router params
 * to a 'Select' project action. Actually showing the selected
 * project remains a responsibility of the
 * SelectedProjectPageComponent
 */
var ViewProjectPageComponent = (function () {
    function ViewProjectPageComponent(store, route) {
        this.store = store;
        this.actionsSubscription = route.params
            .select('id')
            .map(function (id) { return new __WEBPACK_IMPORTED_MODULE_5__actions_project__["e" /* SelectAction */](id); })
            .subscribe(store);
    }
    ViewProjectPageComponent.prototype.ngOnDestroy = function () {
        this.actionsSubscription.unsubscribe();
    };
    ViewProjectPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["x" /* Component */])({
            selector: 'bc-view-project-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <bc-selected-project-page></bc-selected-project-page>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ViewProjectPageComponent);
    return ViewProjectPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/view-project-page.js.map

/***/ },

/***/ 470:
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

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./pages/playground/playground.module": [
		958,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 536;


/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(715);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/main.js.map

/***/ },

/***/ 715:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_db__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store_devtools__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__effects_project__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__effects_collection__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_project_exists__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_app__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_find_project_page__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_view_project_page__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_resume_resume_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_details_details_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_selected_project_page__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_page__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_not_found_page__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_google_books__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_projects__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__routes__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__reducers__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__db__ = __webpack_require__(726);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__components__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_25__routes__["a" /* routes */], { useHash: true }),
                /**
                 * StoreModule.provideStore is imported once in the root module, accepting a reducer
                 * function or object map of reducer functions. If passed an object of
                 * reducers, combineReducers will be run creating your application
                 * meta-reducer. This returns all providers for an @ngrx/store
                 * based application.
                 */
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["g" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_26__reducers__["j" /* reducer */]),
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
                __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_11__effects_project__["a" /* ProjectEffects */]),
                __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_12__effects_collection__["a" /* CollectionEffects */]),
                /**
                 * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
                 * service available.
                 */
                __WEBPACK_IMPORTED_MODULE_6__ngrx_db__["b" /* DBModule */].provideDB(__WEBPACK_IMPORTED_MODULE_27__db__["a" /* schema */]),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__pages_app__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_find_project_page__["a" /* FindProjectPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_selected_project_page__["a" /* SelectedProjectPageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_view_project_page__["a" /* ViewProjectPageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_page__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_not_found_page__["a" /* NotFoundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact_component__["a" /* ContactComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__guards_project_exists__["a" /* ProjectExistsGuard */],
                __WEBPACK_IMPORTED_MODULE_23__services_google_books__["a" /* GoogleBooksService */],
                __WEBPACK_IMPORTED_MODULE_24__services_projects__["a" /* ProjectsService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_14__pages_app__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/app.module.js.map

/***/ },

/***/ 716:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_authors__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_detail__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_preview__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__project_preview_list__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project_search__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nav_item__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sidenav__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__toolbar__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes__ = __webpack_require__(735);
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
    __WEBPACK_IMPORTED_MODULE_5__project_authors__["a" /* ProjectAuthorsComponent */],
    __WEBPACK_IMPORTED_MODULE_6__project_detail__["a" /* ProjectDetailComponent */],
    __WEBPACK_IMPORTED_MODULE_7__project_preview__["a" /* ProjectPreviewComponent */],
    __WEBPACK_IMPORTED_MODULE_8__project_preview_list__["a" /* ProjectPreviewListComponent */],
    __WEBPACK_IMPORTED_MODULE_9__project_search__["a" /* ProjectSearchComponent */],
    __WEBPACK_IMPORTED_MODULE_10__layout__["a" /* LayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_11__nav_item__["a" /* NavItemComponent */],
    __WEBPACK_IMPORTED_MODULE_12__sidenav__["a" /* SidenavComponent */],
    __WEBPACK_IMPORTED_MODULE_13__toolbar__["a" /* ToolbarComponent */],
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["MaterialModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
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

/***/ 717:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
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

/***/ 718:
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
        this.activate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], NavItemComponent.prototype, "icon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], NavItemComponent.prototype, "hint", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], NavItemComponent.prototype, "routerLink", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(), 
        __metadata('design:type', Object)
    ], NavItemComponent.prototype, "activate", void 0);
    NavItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
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

/***/ 719:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_project__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectAuthorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectAuthorsComponent = (function () {
    function ProjectAuthorsComponent() {
    }
    Object.defineProperty(ProjectAuthorsComponent.prototype, "authors", {
        get: function () {
            return this.project.volumeInfo.authors;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_project__["Project"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_project__["Project"]) === 'function' && _a) || Object)
    ], ProjectAuthorsComponent.prototype, "project", void 0);
    ProjectAuthorsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'bc-project-authors',
            template: "\n    <h5 md-subheader>Written By:</h5>\n    <span>\n      {{ authors | bcAddCommas }}\n    </span>\n  ",
            styles: ["\n    h5 {\n      margin-bottom: 5px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectAuthorsComponent);
    return ProjectAuthorsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/project-authors.js.map

/***/ },

/***/ 720:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_project__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectDetailComponent = (function () {
    function ProjectDetailComponent() {
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    Object.defineProperty(ProjectDetailComponent.prototype, "id", {
        /**
         * Tip: Utilize getters to keep templates clean
         */
        get: function () {
            return this.project.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectDetailComponent.prototype, "title", {
        get: function () {
            return this.project.volumeInfo.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectDetailComponent.prototype, "subtitle", {
        get: function () {
            return this.project.volumeInfo.subtitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectDetailComponent.prototype, "description", {
        get: function () {
            return this.project.volumeInfo.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectDetailComponent.prototype, "thumbnail", {
        get: function () {
            return this.project.volumeInfo.imageLinks.smallThumbnail;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_project__["Project"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_project__["Project"]) === 'function' && _a) || Object)
    ], ProjectDetailComponent.prototype, "project", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], ProjectDetailComponent.prototype, "inCollection", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(), 
        __metadata('design:type', Object)
    ], ProjectDetailComponent.prototype, "add", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(), 
        __metadata('design:type', Object)
    ], ProjectDetailComponent.prototype, "remove", void 0);
    ProjectDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'bc-project-detail',
            template: "\n    <md-card *ngIf=\"project\">\n      <md-card-title-group>\n        <md-card-title>{{ title }}</md-card-title>\n        <md-card-subtitle *ngIf=\"subtitle\">{{ subtitle }}</md-card-subtitle>\n        <img md-card-sm-image *ngIf=\"thumbnail\" [src]=\"thumbnail\"/>\n      </md-card-title-group>\n      <md-card-content>\n        <p [innerHtml]=\"description\"></p>\n      </md-card-content>\n      <md-card-footer class=\"footer\">\n        <bc-project-authors [project]=\"project\"></bc-project-authors>\n      </md-card-footer>\n      <md-card-actions align=\"end\">\n        <button md-raised-button color=\"warn\" *ngIf=\"inCollection\" (click)=\"remove.emit(project)\">\n        Remove Project from Collection\n        </button>\n\n        <button md-raised-button color=\"primary\" *ngIf=\"!inCollection\" (click)=\"add.emit(project)\">\n        Add Project to Collection\n        </button>\n      </md-card-actions>\n    </md-card>\n\n  ",
            styles: ["\n    :host {\n      display: flex;\n      justify-content: center;\n      margin: 75px 0;\n    }\n    md-card {\n      max-width: 600px;\n    }\n    md-card-title {\n      margin-left: 10px;\n    }\n    img {\n      width: 60px;\n      min-width: 60px;\n      margin-left: 5px;\n    }\n    md-card-content {\n      margin-top: 15px;\n      margin-bottom: 125px;\n    }\n    md-card-actions {\n      margin-bottom: 0 !important;\n      margin-right: 0;\n    }\n    md-card-footer {\n      padding: 0 25px 25px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/project-detail.js.map

/***/ },

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectPreviewListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectPreviewListComponent = (function () {
    function ProjectPreviewListComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Array)
    ], ProjectPreviewListComponent.prototype, "projects", void 0);
    ProjectPreviewListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'bc-project-preview-list',
            template: "\n    <bc-project-preview *ngFor=\"let project of projects\" [project]=\"project\"></bc-project-preview>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectPreviewListComponent);
    return ProjectPreviewListComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/project-preview-list.js.map

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_project__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectPreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectPreviewComponent = (function () {
    function ProjectPreviewComponent() {
    }
    Object.defineProperty(ProjectPreviewComponent.prototype, "id", {
        get: function () {
            return this.project.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectPreviewComponent.prototype, "title", {
        get: function () {
            return this.project.volumeInfo.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectPreviewComponent.prototype, "subtitle", {
        get: function () {
            return this.project.volumeInfo.subtitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectPreviewComponent.prototype, "description", {
        get: function () {
            return this.project.volumeInfo.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectPreviewComponent.prototype, "thumbnail", {
        get: function () {
            if (this.project.volumeInfo.imageLinks) {
                return this.project.volumeInfo.imageLinks.smallThumbnail;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_project__["Project"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_project__["Project"]) === 'function' && _a) || Object)
    ], ProjectPreviewComponent.prototype, "project", void 0);
    ProjectPreviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'bc-project-preview',
            template: "\n    <!--<a [routerLink]=\"['/project', id]\">-->\n      <div class=\"panel\">\n        <md-card class=\"front card\">\n          <md-card-title-group>\n            <img md-card-sm-image *ngIf=\"thumbnail\" [src]=\"thumbnail\"/>\n            <md-card-title>{{ title }}</md-card-title>\n            <md-card-subtitle *ngIf=\"subtitle\">{{ subtitle }}</md-card-subtitle>\n          </md-card-title-group>\n          <md-card-content>\n            <p *ngIf=\"description\">{{ description | bcEllipsis }}</p>\n          </md-card-content>\n          <md-card-footer>\n            <bc-project-authors [project]=\"project\"></bc-project-authors>\n          </md-card-footer>\n        </md-card>\n        <md-card class=\"back card\">\n          <md-card-title-group>\n            ddddd BACK\n          </md-card-title-group>\n          <md-card-content>\n            ddddddd\n          </md-card-content>\n          <md-card-footer>\n            6666666\n          </md-card-footer>\n        </md-card>\n      </div>      \n    <!--</a>-->\n  ",
            styles: [__webpack_require__(899)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectPreviewComponent);
    return ProjectPreviewComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/project-preview.js.map

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectSearchComponent = (function () {
    function ProjectSearchComponent() {
        this.query = '';
        this.searching = false;
        this.search = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], ProjectSearchComponent.prototype, "query", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ProjectSearchComponent.prototype, "searching", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["E" /* Output */])(), 
        __metadata('design:type', Object)
    ], ProjectSearchComponent.prototype, "search", void 0);
    ProjectSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* Component */])({
            selector: 'bc-project-search',
            template: "\n    <md-card>\n      <md-card-title>Find a Project</md-card-title>\n      <md-card-content>\n        <md-input placeholder=\"Search for a project\" [value]=\"query\" (keyup)=\"search.emit($event.target.value)\"></md-input>\n        <md-spinner [class.show]=\"searching\"></md-spinner>\n      </md-card-content>\n    </md-card>\n  ",
            styles: [__webpack_require__(900)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectSearchComponent);
    return ProjectSearchComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/project-search.js.map

/***/ },

/***/ 724:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SidenavComponent.prototype, "open", void 0);
    SidenavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
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

/***/ 725:
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
        this.openMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(), 
        __metadata('design:type', Object)
    ], ToolbarComponent.prototype, "openMenu", void 0);
    ToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'portfolio-toolbar',
            styles: [__webpack_require__(901)],
            template: "\n    <md-toolbar color=\"primary\">\n      <div class=\"al-user-profile\">\n          <img src=\"https://avatars1.githubusercontent.com/u/1858504?v=3&s=460\">\n      </div>\n      <button md-icon-button (click)=\"openMenu.emit()\">\n        <md-icon>menu</md-icon>\n      </button>\n      <ng-content></ng-content>\n    </md-toolbar>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/toolbar.js.map

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return schema; });
/**
 * ngrx/db uses a simple schema config object to initialize stores in IndexedDB.
 */
var schema = {
    version: 1,
    name: 'projects_app',
    stores: {
        projects: {
            autoIncrement: true,
            primaryKey: 'id'
        }
    }
};
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/db.js.map

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_db__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_collection__ = __webpack_require__(182);
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
            return _this.db.open('projects_app');
        });
        /**
         * This effect makes use of the `startWith` operator to trigger
         * the effect immediately on startup.
         */
        this.loadCollection$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_collection__["a" /* ActionTypes */].LOAD)
            .startWith(new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["b" /* LoadAction */]())
            .switchMap(function () {
            return _this.db.query('projects')
                .toArray()
                .map(function (projects) { return new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["c" /* LoadSuccessAction */](projects); })
                .catch(function (error) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["d" /* LoadFailAction */](error)); });
        });
        this.addProjectToCollection$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_collection__["a" /* ActionTypes */].ADD_PROJECT)
            .map(function (action) { return action.payload; })
            .mergeMap(function (project) {
            return _this.db.insert('projects', [project])
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["e" /* AddProjectSuccessAction */](project); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["f" /* AddProjectFailAction */](project)); });
        });
        this.removeProjectFromCollection$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_collection__["a" /* ActionTypes */].REMOVE_PROJECT)
            .map(function (action) { return action.payload; })
            .mergeMap(function (project) {
            return _this.db.executeWrite('projects', 'delete', [project.id])
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["g" /* RemoveProjectSuccessAction */](project); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_collection__["h" /* RemoveProjectFailAction */](project)); });
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
    ], CollectionEffects.prototype, "addProjectToCollection$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Effect */])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"]) === 'function' && _d) || Object)
    ], CollectionEffects.prototype, "removeProjectFromCollection$", void 0);
    CollectionEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["c" /* Injectable */])(), 
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__(922);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_project__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectEffects; });
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
var ProjectEffects = (function () {
    function ProjectEffects(actions$, googleProjects) {
        var _this = this;
        this.actions$ = actions$;
        this.googleProjects = googleProjects;
        this.search$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_project__["a" /* ActionTypes */].SEARCH)
            .debounceTime(300)
            .map(function (action) { return action.payload; })
            .switchMap(function (query) {
            if (query === '') {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty__["empty"])();
            }
            var nextSearch$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_12__actions_project__["a" /* ActionTypes */].SEARCH).skip(1);
            return _this.googleProjects.searchProjects(query)
                .takeUntil(nextSearch$)
                .map(function (projects) { return new __WEBPACK_IMPORTED_MODULE_12__actions_project__["b" /* SearchCompleteAction */](projects); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_project__["b" /* SearchCompleteAction */]([])); });
        });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Effect */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === 'function' && _a) || Object)
    ], ProjectEffects.prototype, "search$", void 0);
    ProjectEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Actions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Actions */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11__services_google_books__["a" /* GoogleBooksService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__services_google_books__["a" /* GoogleBooksService */]) === 'function' && _c) || Object])
    ], ProjectEffects);
    return ProjectEffects;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/project.js.map

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Message; });
var Message = (function () {
    function Message(name, email, message, date) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.date = date;
    }
    return Message;
}());
;
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/message.js.map

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__ = __webpack_require__(193);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* Component */])({
            selector: 'project-collection-app',
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <portfolio-layout>\n      <portfolio-sidenav [open]=\"showSidenav$ | async\">\n        <portfolio-nav-item (activate)=\"closeSidenav()\" routerLink=\"/\" icon=\"book\" hint=\"View my works\">\n          My Work\n        </portfolio-nav-item>\n        <portfolio-nav-item (activate)=\"closeSidenav()\" routerLink=\"/project/find\" icon=\"search\" hint=\"Find my projects\">\n          Browse Projects\n        </portfolio-nav-item>\n        <portfolio-nav-item (activate)=\"closeSidenav()\" routerLink=\"/resume\" icon=\"book\" hint=\"My Resume\">\n          Resume\n        </portfolio-nav-item>\n        <portfolio-nav-item (activate)=\"closeSidenav()\" routerLink=\"/details\" icon=\"create\" hint=\"Why this portfolio\">\n          This portfolio\n        </portfolio-nav-item>\n        <portfolio-nav-item (activate)=\"closeSidenav()\" routerLink=\"/contact\" icon=\"contact mail\" hint=\"Contact me\">\n          Contact\n        </portfolio-nav-item>\n        <portfolio-nav-item (activate)=\"closeSidenav()\" routerLink=\"/playground\" icon=\"chrome reader mode\" hint=\"Playground\">\n          Playground\n        </portfolio-nav-item>\n      </portfolio-sidenav>\n      <portfolio-toolbar (openMenu)=\"openSidenav()\">\n        Eric Alter \n      </portfolio-toolbar>\n      <router-outlet></router-outlet>\n    </portfolio-layout>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/app.js.map

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message__ = __webpack_require__(729);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactService; });


//import * as Firebase from 'firebase/firebase';
var Firebase = __webpack_require__(895);
// let Firebase = firebaseLib.initializeApp({
//     apiKey: '<your-api-key>',
//     authDomain: '<your-auth-domain>',
//     databaseURL: '<your-database-url>',
//     storageBucket: '<your-storage-bucket>',
//     messagingSenderId: '<your-sender-id>'
// });
// var Firebase = require('firebase/lib/firebase-web');
var ContactService = (function () {
    function ContactService() {
        this.db = new Firebase('https://eric-alter.firebaseio.com/messages');
    }
    ContactService.prototype.create = function (name, email, message, date) {
        console.log('#--CREATED--#', this.db);
        if (!date) {
            date = new Date().toDateString();
        }
        var that = this;
        return new Promise(function (resolve, reject) {
            that.db.push({
                name: name,
                email: email,
                message: message,
                date: date
            }, function (res) {
                resolve(res);
            });
        });
    };
    ContactService.prototype.getAll = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (observer) {
            var listener = _this.db.on('child_added', function (snapshot) {
                var data = snapshot.val();
                observer.next(new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */](data.name, data.email, data.message, data.date));
            }, observer.error);
            return function () {
                _this.db.off('child_added', listener);
            };
        });
    };
    return ContactService;
}());
;
/*
Sample code:
 https://github.com/OasisDigital/angular2-firebase-demo/blob/master/app/app.ts


 import * as Firebase from 'firebase';

 import {fbName} from './fbConfig';

 export class Generator {
 ref: Firebase;

 constructor() {
 this.ref = new Firebase(fbName).child("stuff");
 }

 next() {
 let category = "cat" + Math.floor((Math.random() * 3) + 1);
 let id = "id" + Math.floor((Math.random() * 10) + 2001);
 let name = "Joe" + Math.floor((Math.random() * 900) + 1001);
 let score = Math.floor((Math.random() * 100) + 1);

 this.ref.child(category).child(id).set({
 name: name,
 score: score,
 present: score>2
 });
 }
 }
 */ 
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/contact.service.js.map

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_collection__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SelectedProjectPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectedProjectPageComponent = (function () {
    function SelectedProjectPageComponent(store) {
        this.store = store;
        this.project$ = store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["g" /* getSelectedProject */]);
        this.isSelectedProjectInCollection$ = store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["h" /* isSelectedProjectInCollection */]);
    }
    SelectedProjectPageComponent.prototype.addToCollection = function (project) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_collection__["i" /* AddProjectAction */](project));
    };
    SelectedProjectPageComponent.prototype.removeFromCollection = function (project) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_collection__["j" /* RemoveProjectAction */](project));
    };
    SelectedProjectPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'bc-selected-project-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <bc-project-detail\n      [project]=\"project$ | async\"\n      [inCollection]=\"isSelectedProjectInCollection$ | async\"\n      (add)=\"addToCollection($event)\"\n      (remove)=\"removeFromCollection($event)\">\n    </bc-project-detail>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object])
    ], SelectedProjectPageComponent);
    return SelectedProjectPageComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/selected-project-page.js.map

/***/ },

/***/ 733:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Pipe */])({ name: 'bcAddCommas' }), 
        __metadata('design:paramtypes', [])
    ], AddCommasPipe);
    return AddCommasPipe;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/add-commas.js.map

/***/ },

/***/ 734:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Pipe */])({ name: 'bcEllipsis' }), 
        __metadata('design:paramtypes', [])
    ], EllipsisPipe);
    return EllipsisPipe;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/ellipsis.js.map

/***/ },

/***/ 735:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_commas__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ellipsis__ = __webpack_require__(734);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */])({
            declarations: PIPES,
            exports: PIPES
        }), 
        __metadata('design:paramtypes', [])
    ], PipesModule);
    return PipesModule;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/index.js.map

/***/ },

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_collection__ = __webpack_require__(182);
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
            var projects = action.payload;
            return {
                loaded: true,
                loading: false,
                ids: projects.map(function (project) { return project.id; })
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["a" /* ActionTypes */].ADD_PROJECT_SUCCESS:
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["a" /* ActionTypes */].REMOVE_PROJECT_FAIL: {
            var project = action.payload;
            if (state.ids.indexOf(project.id) > -1) {
                return state;
            }
            return Object.assign({}, state, {
                ids: state.ids.concat([project.id])
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["a" /* ActionTypes */].REMOVE_PROJECT_SUCCESS:
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["a" /* ActionTypes */].ADD_PROJECT_FAIL: {
            var project_1 = action.payload;
            return Object.assign({}, state, {
                ids: state.ids.filter(function (id) { return id !== project_1.id; })
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

/***/ 737:
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

/***/ 738:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_project__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_collection__ = __webpack_require__(182);
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
    selectedProjectId: null,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_project__["a" /* ActionTypes */].SEARCH_COMPLETE:
        case __WEBPACK_IMPORTED_MODULE_2__actions_collection__["a" /* ActionTypes */].LOAD_SUCCESS: {
            var projects = action.payload;
            var newProjects = projects.filter(function (project) { return !state.entities[project.id]; });
            var newProjectIds = newProjects.map(function (project) { return project.id; });
            var newProjectEntities = newProjects.reduce(function (entities, project) {
                return Object.assign(entities, (_a = {},
                    _a[project.id] = project,
                    _a
                ));
                var _a;
            }, {});
            return {
                ids: state.ids.concat(newProjectIds),
                entities: Object.assign({}, state.entities, newProjectEntities),
                selectedProjectId: state.selectedProjectId
            };
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_project__["a" /* ActionTypes */].LOAD: {
            var project_1 = action.payload;
            if (state.ids.indexOf(project_1.id) > -1) {
                return state;
            }
            return {
                ids: state.ids.concat([project_1.id]),
                entities: Object.assign({}, state.entities, (_a = {},
                    _a[project_1.id] = project_1,
                    _a
                )),
                selectedProjectId: state.selectedProjectId
            };
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_project__["a" /* ActionTypes */].SELECT: {
            return {
                ids: state.ids,
                entities: state.entities,
                selectedProjectId: action.payload
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
var getSelectedId = function (state) { return state.selectedProjectId; };
var getSelected = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntities, getSelectedId, function (entities, selectedId) {
    return entities[selectedId];
});
var getAll = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntities, getIds, function (entities, ids) {
    return ids.map(function (id) { return entities[id]; });
});
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/projects.js.map

/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_project__ = __webpack_require__(97);
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_project__["a" /* ActionTypes */].SEARCH: {
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_project__["a" /* ActionTypes */].SEARCH_COMPLETE: {
            var projects = action.payload;
            return {
                ids: projects.map(function (project) { return project.id; }),
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

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_project_exists__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_find_project_page__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_resume_resume_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_contact_contact_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_details_details_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_not_found_page__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_view_project_page__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_page__ = __webpack_require__(466);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_home_page__["a" /* HomePageComponent */]
    },
    {
        path: 'project/find',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_find_project_page__["a" /* FindProjectPageComponent */]
    },
    {
        path: 'resume',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_resume_resume_component__["a" /* ResumeComponent */]
    },
    {
        path: 'details',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_details_details_component__["a" /* DetailsComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'playground',
        loadChildren: './pages/playground/playground.module#PlaygroundModule' // -- for aot compilation
    },
    {
        path: 'project/:id',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_project_exists__["a" /* ProjectExistsGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_6__pages_view_project_page__["a" /* ViewProjectPageComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_not_found_page__["a" /* NotFoundPageComponent */]
    }
];
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/routes.js.map

/***/ },

/***/ 741:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsService = (function () {
    function ProjectsService(http) {
        this.http = http;
        this.API_PATH = 'https://www.googleapis.com/books/v1/volumes';
    }
    ProjectsService.prototype.searchProject = function (queryTitle) {
        return this.http.get(this.API_PATH + "?q=" + queryTitle)
            .map(function (res) { return res.json().items || []; });
    };
    ProjectsService.prototype.retrieveProject = function (volumeId) {
        return this.http.get(this.API_PATH + "/" + volumeId)
            .map(function (res) { return res.json(); });
    };
    ProjectsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ProjectsService);
    return ProjectsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/projects.js.map

/***/ },

/***/ 742:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/polyfills.js.map

/***/ },

/***/ 899:
/***/ function(module, exports) {

module.exports = "md-card {\n  width: 400px;\n  height: 300px;\n  margin: 15px; }\n  md-card.card {\n    margin: 5px;\n    -webkit-transition: all .5s;\n    transition: all .5s;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    position: absolute; }\n\nmd-card-title {\n  margin-right: 10px; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\nimg {\n  width: 60px;\n  min-width: 60px;\n  margin-left: 5px; }\n\nmd-card-content {\n  margin-top: 15px; }\n\nspan {\n  display: inline-block;\n  font-size: 13px; }\n\nmd-card-footer {\n  padding: 0 25px 25px; }\n\n.panel {\n  width: 400px;\n  height: 300px;\n  position: relative; }\n  .panel .front {\n    z-index: 2; }\n  .panel .back {\n    z-index: 1;\n    -webkit-transform: rotateX(-180deg);\n    transform: rotateX(-180deg); }\n  .panel:hover .front {\n    z-index: 1;\n    -webkit-transform: rotateX(180deg);\n    transform: rotateX(180deg); }\n  .panel:hover .back {\n    z-index: 2;\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); }\n"

/***/ },

/***/ 900:
/***/ function(module, exports) {

module.exports = "md-card-title,\nmd-card-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\nmd-input {\n  width: 300px; }\n\nmd-card-spinner {\n  padding-left: 60px; }\n\nmd-spinner {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  top: 10px;\n  left: 10px;\n  opacity: 0.0; }\n\nmd-spinner.show {\n  opacity: 1.0; }\n"

/***/ },

/***/ 901:
/***/ function(module, exports) {

module.exports = ".al-user-profile {\n  float: right;\n  margin-right: 12px;\n  -webkit-transition: all .15s ease-in-out;\n  transition: all .15s ease-in-out;\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  opacity: 1;\n  position: relative;\n  display: block; }\n  .al-user-profile img {\n    width: 45px;\n    height: 45px;\n    border-radius: 50%; }\n"

/***/ },

/***/ 902:
/***/ function(module, exports) {

module.exports = "md-card-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n"

/***/ },

/***/ 903:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 904:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 905:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 907:
/***/ function(module, exports) {

module.exports = "<div class=\"connect\" *ngIf=\"!boolMessageSent\">\n  <div class=\"connect__header\">Connect</div>\n  <!--<div class=\"connect__input\">-->\n    <!--<input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"name\">-->\n  <!--</div>-->\n  <!--<div class=\"connect__input\">-->\n    <!--<input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\">-->\n  <!--</div>-->\n  <!--<div class=\"connect__input connect__input&#45;&#45;message\">-->\n    <!--<textarea type=\"text\" placeholder=\"Message\" [(ngModel)]=\"message\"></textarea>-->\n  <!--</div>-->\n  <div class=\"connect__input\">\n    <button class=\"btn connect__send\" (click)=\"sendMessage()\">Send</button>\n  </div>\n</div>\n\n<div class=\"connect__okay\" *ngIf=\"boolMessageSent\">\n  <img src=\"img/okay.png\" alt=\"\">\n</div>"

/***/ },

/***/ 908:
/***/ function(module, exports) {

module.exports = "<p>\n  details works!\n</p>\n"

/***/ },

/***/ 909:
/***/ function(module, exports) {

module.exports = "<p>\n  resume works!\n</p>\n"

/***/ },

/***/ 955:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(537);


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
    SEARCH: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Project] Search'),
    SEARCH_COMPLETE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Project] Search Complete'),
    LOAD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Project] Load'),
    SELECT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Project] Select'),
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
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/project.js.map

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collection__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout__ = __webpack_require__(737);
/* harmony export (immutable) */ exports["j"] = reducer;
/* unused harmony export getProjectsState */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getProjectEntities; });
/* unused harmony export getProjectIds */
/* unused harmony export getSelectedProjectId */
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return getSelectedProject; });
/* unused harmony export getSearchState */
/* unused harmony export getSearchProjectIds */
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return getSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return getSearchLoading; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return getSearchResults; });
/* unused harmony export getCollectionState */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return getCollectionLoaded; });
/* unused harmony export getCollectionLoading */
/* unused harmony export getCollectionProjectIds */
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return getProjectCollection; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return isSelectedProjectInCollection; });
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
    projects: __WEBPACK_IMPORTED_MODULE_7__projects__["a" /* reducer */],
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
 * piece of state. This selector simply selects the `projects` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.projectsState$ = state$.select(getProjectsState);
 * 	}
 * }
 * ```
 */
var getProjectsState = function (state) { return state.projects; };
/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * Once again our compose function comes in handy. From right to left, we
 * first select the projects state then we pass the state to the project
 * reducer's getProjects selector, finally returning an observable
 * of search results.
 *
 * Share memoizes the selector functions and publishes the result. This means
 * every time you call the selector, you will get back the same result
 * observable. Each subscription to the resultant observable
 * is shared across all subscribers.
 */
var getProjectEntities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getProjectsState, __WEBPACK_IMPORTED_MODULE_7__projects__["b" /* getEntities */]);
var getProjectIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getProjectsState, __WEBPACK_IMPORTED_MODULE_7__projects__["c" /* getIds */]);
var getSelectedProjectId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getProjectsState, __WEBPACK_IMPORTED_MODULE_7__projects__["d" /* getSelectedId */]);
var getSelectedProject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getProjectsState, __WEBPACK_IMPORTED_MODULE_7__projects__["e" /* getSelected */]);
/**
 * Just like with the projects selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
var getSearchState = function (state) { return state.search; };
var getSearchProjectIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getSearchState, __WEBPACK_IMPORTED_MODULE_6__search__["b" /* getIds */]);
var getSearchQuery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getSearchState, __WEBPACK_IMPORTED_MODULE_6__search__["c" /* getQuery */]);
var getSearchLoading = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getSearchState, __WEBPACK_IMPORTED_MODULE_6__search__["d" /* getLoading */]);
/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of projects in the store.
 */
var getSearchResults = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getProjectEntities, getSearchProjectIds, function (projects, searchIds) {
    return searchIds.map(function (id) { return projects[id]; });
});
var getCollectionState = function (state) { return state.collection; };
var getCollectionLoaded = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCollectionState, __WEBPACK_IMPORTED_MODULE_8__collection__["b" /* getLoaded */]);
var getCollectionLoading = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCollectionState, __WEBPACK_IMPORTED_MODULE_8__collection__["c" /* getLoading */]);
var getCollectionProjectIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCollectionState, __WEBPACK_IMPORTED_MODULE_8__collection__["d" /* getIds */]);
var getProjectCollection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getProjectEntities, getCollectionProjectIds, function (entities, ids) {
    return ids.map(function (id) { return entities[id]; });
});
var isSelectedProjectInCollection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCollectionProjectIds, getSelectedProjectId, function (ids, selected) {
    return ids.indexOf(selected) > -1;
});
/**
 * Layout Reducers
 */
var getLayoutState = function (state) { return state.layout; };
var getShowSidenav = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getLayoutState, __WEBPACK_IMPORTED_MODULE_9__layout__["b" /* getShowSidenav */]);
//# sourceMappingURL=C:/Users/dell/WebstormProjects/eric-alter/src/index.js.map

/***/ }

},[955]);
//# sourceMappingURL=main.bundle.map