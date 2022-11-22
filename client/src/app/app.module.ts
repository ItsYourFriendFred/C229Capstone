import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { PartialsModule } from './partials/components.module';
import { SurveyModule } from './survey/survey.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@auth0/angular-jwt';

export function jwtTokenGetter(): string {
  return localStorage.getItem('id_token')!;
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    PartialsModule,
    SurveyModule,
    UserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
