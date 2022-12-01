import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [AboutComponent, ContactComponent, HomeComponent, FaqComponent],
  exports: [AboutComponent, ContactComponent, HomeComponent, FaqComponent],
})
export class PagesModule {}
