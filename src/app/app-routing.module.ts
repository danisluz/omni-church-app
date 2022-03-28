import { SignInComponent } from './core/auth/components/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'cluster',
    pathMatch: 'full'
  },

  { path: 'sign-in', component: SignInComponent },

  { path: 'cluster', loadChildren: () => import('./cluster/cluster.module').then(m => m.ClusterModule) },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
