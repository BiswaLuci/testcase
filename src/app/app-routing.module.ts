import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CounttimerComponent } from './counttimer/counttimer.component';
import { DynamicdivComponent } from './dynamicdiv/dynamicdiv.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { FloatingimageComponent } from './floatingimage/floatingimage.component';
import { HomeComponent } from './home/home.component';
import { ServicecountComponent } from './servicecount/servicecount.component';
import { StudentmarkComponent } from './studentmark/studentmark.component';
const appRoutes: Routes =[
    {path:'', component: HomeComponent },
    {path:'Floatingimage', component: FloatingimageComponent },
    {path:'Ecommerce', component: EcommerceComponent },
    {path:'Counttimer', component: CounttimerComponent },
    {path:'Servicecount', component: ServicecountComponent },
    {path:'Studentmark', component: StudentmarkComponent },
    {path:'Dynamicdiv', component: DynamicdivComponent }, 
  ]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]

})

export class AppRoutingModule{

}