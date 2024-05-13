import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminKbComponent } from './components/admin-kb/admin-kb.component';
import { FunctionalityComponent } from './components/functionality/functionality.component';
import { DocumentationComponent } from './components/documentation/documentation.component';

export const routes: Routes = 
[
{path:'home', component: HomeComponent},
{path:'functionality', component: FunctionalityComponent},
{path:'documentation', component: DocumentationComponent},
{path:'admin',component: AdminKbComponent},
{path: '', redirectTo:'/home', pathMatch:'full'}
];
