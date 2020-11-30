import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceXDataComponent } from './components/space-x-data/space-x-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'space-x-data'
  },
  {
    path: 'space-x-data',
    component: SpaceXDataComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
