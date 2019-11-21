import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './photo/photo-list/photo-list.component';
import { PhotoCreateComponent } from './photo/photo-create/photo-create.component';
import { PhotoEditComponent } from './photo/photo-edit/photo-edit.component';
import { PhotoDeleteComponent } from './photo/photo-delete/photo-delete.component';
import { PhotoDetailComponent } from './photo/photo-detail/photo-detail.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoCreateComponent,
    PhotoEditComponent,
    PhotoDeleteComponent,
    PhotoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
