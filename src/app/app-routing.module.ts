import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MedecinComponent} from "./medecin/medecin.component";
import {AddMedecinComponent} from "./add-medecin/add-medecin.component";
import {EditMedecinComponent} from "./edit-medecin/edit-medecin.component";
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {NewProductComponent} from "./new-product/new-product.component";
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductComponent},
  {path:'newProduct',component:NewProductComponent},
  {path:'login',component:LoginComponent},
  {path:'medecins',component:MedecinComponent},
  {path:'medecins/add',component:AddMedecinComponent},
  {path:'medecins/edit/:id',component:EditMedecinComponent},
  {path:'', redirectTo:'/home',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
