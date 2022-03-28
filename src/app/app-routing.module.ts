import { SignInComponent } from './core/auth/components/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChurchDetailComponent } from './cluster/churches/components/church-detail/church-detail.component';
import { ChurchListComponent } from './cluster/churches/components/church-list/church-list.component';
import { SectorDetailComponent } from './cluster/sectors/components/sector-detail/sector-detail.component';
import { SectorListComponent } from './cluster/sectors/components/sector-list/sector-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ChurchCreateContainer } from './pages/church-create/church-create.container';
import { ChurchEditContainer } from './pages/church-edit/church-edit.container';

import { SectorEditContainer } from './pages/sector-edit/sector-edit.container';
import { SectorCreateContainer } from './pages/sector-create/sector-create.container';

const routes: Routes = [


  { path: 'sign-in', component: SignInComponent },

  { path: 'cluster', loadChildren: () => import('./cluster/cluster.module').then(m => m.ClusterModule) },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
