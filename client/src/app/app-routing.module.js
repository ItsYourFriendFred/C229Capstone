"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const about_component_1 = require("./pages/about/about.component");
const contact_component_1 = require("./pages/contact/contact.component");
const faq_component_1 = require("./pages/faq/faq.component");
const home_component_1 = require("./pages/home/home.component");
const login_component_1 = require("./pages/login/login.component");
const register_component_1 = require("./pages/register/register.component");
const survey_details_component_1 = require("./survey/survey-details/survey-details.component");
const survey_list_component_1 = require("./survey/survey-list/survey-list.component");
const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent, data: { title: '' } },
    { path: 'about', component: about_component_1.AboutComponent, data: { title: '' } },
    { path: 'contact', component: contact_component_1.ContactComponent, data: { title: '' } },
    { path: 'faq', component: faq_component_1.FaqComponent, data: { title: '' } },
    { path: 'survey-list', component: survey_list_component_1.SurveyListComponent, data: { title: '' } },
    { path: 'survey-details', component: survey_details_component_1.SurveyDetailsComponent, data: { title: '' } },
    { path: 'login', component: login_component_1.LoginComponent, data: { title: '' } },
    { path: 'register', component: register_component_1.RegisterComponent, data: { title: '' } }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map