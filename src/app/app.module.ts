import { NoteStorageService } from './services/note-storage.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './note/note.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './services/note.service';
import { LoginComponent } from './login/login.component';
import { LandPageComponent } from './land-page/land-page.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteComponent,
    FooterComponent,
    MenuComponent,
    EditComponent,
    ViewComponent,
    AddComponent,
    ListComponent,
    LoginComponent,
    LandPageComponent,
    NotAuthorizedComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NoteService, NoteStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
