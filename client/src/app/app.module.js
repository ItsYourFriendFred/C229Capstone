"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const about_component_1 = require("./pages/about/about.component");
const contact_component_1 = require("./pages/contact/contact.component");
const home_component_1 = require("./pages/home/home.component");
const faq_component_1 = require("./pages/faq/faq.component");
const footer_component_1 = require("./components/footer/footer.component");
const navbar_component_1 = require("./components/navbar/navbar.component");
const survey_details_component_1 = require("./survey/survey-details/survey-details.component");
const survey_list_component_1 = require("./survey/survey-list/survey-list.component");
const login_component_1 = require("./pages/login/login.component");
const register_component_1 = require("./pages/register/register.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            home_component_1.HomeComponent,
            faq_component_1.FaqComponent,
            footer_component_1.FooterComponent,
            navbar_component_1.NavbarComponent,
            survey_details_component_1.SurveyDetailsComponent,
            survey_list_component_1.SurveyListComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map