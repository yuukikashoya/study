import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

{path: 'experience', component:ExperienceComponent},
{path: 'contact', component:ContactComponent},
{path: 'main', component:MainComponent},
 {path: '', redirectTo: '/main', pathMatch: 'full'}

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponests = [ExperienceComponent,MainComponent,ContactComponent]