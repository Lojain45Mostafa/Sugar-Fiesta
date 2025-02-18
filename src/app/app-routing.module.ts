import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { MenuComponent } from 'src/app/menu/menu.component';
const routes: Routes = [

{ path: 'home', component: HomeComponent },
{ path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// {path:'',redirectTo:'home', pathMatch: 'full' },
