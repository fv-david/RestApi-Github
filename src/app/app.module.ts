import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ngx-bootstrap';

import { SearchUsersService } from './services/search-users.service';

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [
  	SearchUsersService
  ],
  entryComponents: [
    ModalContentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
