import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './myComponents/search/search.component';
import { DataComponent } from './myComponents/data/data.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'data/:login', component: DataComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
