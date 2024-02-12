import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloWorldComponent} from "./hello-world.component";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { MedecinComponent } from './medecin/medecin.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { EditMedecinComponent } from './edit-medecin/edit-medecin.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    LoginComponent,
    MedecinComponent,
    AddMedecinComponent,
    EditMedecinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
