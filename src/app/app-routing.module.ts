import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { MainComponent } from './main/main.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [

{path: 'experience', component:ExperienceComponent},
{path: 'contact', component:ContactComponent},
{path: 'main', component:MainComponent},
{path: 'skill', component:SkillComponent},
{path: 'education', component:EducationComponent},
 {path: '', redirectTo: '/main', pathMatch: 'full'}

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponests = [ExperienceComponent,MainComponent,ContactComponent,SkillComponent,EducationComponent]