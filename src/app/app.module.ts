import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IdentificationFormComponent } from './components/identification-form/identification-form.component';
import { IdentificationTableComponent } from './components/identification-table/identification-table.component';
import { EditIconComponent } from './components/identification-table/edit-icon/edit-icon.component';
import { DeleteIconComponent } from './components/identification-table/delete-icon/delete-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdentificationFormComponent,
    IdentificationTableComponent,
    EditIconComponent,
    DeleteIconComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
