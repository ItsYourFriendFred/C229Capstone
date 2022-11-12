import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [FooterComponent, NavbarComponent],
  exports: [FooterComponent, NavbarComponent],
})
export class PartialsModule {}
