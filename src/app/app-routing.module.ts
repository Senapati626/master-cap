import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { SearchComponent } from "./search/search.component";
import { AuthGuard } from "./auth.guard";
import { JobsSearchComponent } from "./jobs-search/jobs-search.component";
import { NewzSearchComponent } from "./newz-search/newz-search.component";
import { MuzixSearchComponent } from "./muzix-search/muzix-search.component";
export const routes : Routes = [
   {path:'', component:LoginComponent},
   {path:'login', component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'searchBook',component:SearchComponent,},
   {path:'searchJobs',component:JobsSearchComponent},
   {path:'searchNews',component:NewzSearchComponent},
   {path:'searchAlbums',component:MuzixSearchComponent},
   {path:'**', component:LoginComponent},
]

@NgModule({
   imports : [CommonModule,RouterModule.forRoot(routes)],
   exports : [RouterModule],
   declarations : []
})
export class AppRoutingModule {

}