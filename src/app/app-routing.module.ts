import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './home/promise/promise.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
     path: '',
     component:HomeComponent
     },
  {
    path: 'promise',
    component: PromiseComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
