import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChurchDetailComponent } from './features/churches/components/church-detail/church-detail.component';
import { ChurchListComponent } from './features/churches/components/church-list/church-list.component';
import { ChurchCreateContainer } from './pages/church-create/church-create.container';
import { ChurchEditContainer } from './pages/church-edit/church-edit.container';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },

  {
    path: 'churches',
    component: ChurchListComponent,
    children: [],
  },
  { path: 'churches/create', component: ChurchCreateContainer },
  { path: 'churches/edit/:id', component: ChurchEditContainer },
  { path: 'churches/:id', component: ChurchDetailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
