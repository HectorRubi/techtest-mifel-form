import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IdentificationFormComponent } from './components/identification-form/identification-form.component';
import { IdentificationTableComponent } from './components/identification-table/identification-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdentificationFormComponent,
    IdentificationTableComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
