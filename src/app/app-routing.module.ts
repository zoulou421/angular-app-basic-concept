import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MedecinComponent} from "./medecin/medecin.component";
import {AddMedecinComponent} from "./add-medecin/add-medecin.component";
import {EditMedecinComponent} from "./edit-medecin/edit-medecin.component";
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'medecins',component:MedecinComponent},
  {path:'medecins/add',component:AddMedecinComponent},
  {path:'medecins/edit/:id',component:EditMedecinComponent},
  {path:'', redirectTo:'/login',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
