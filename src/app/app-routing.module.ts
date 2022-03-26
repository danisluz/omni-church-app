import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChurchDetailComponent } from './features/churches/components/church-detail/church-detail.component';
import { ChurchListComponent } from './features/churches/components/church-list/church-list.component';
import { SectorDetailComponent } from './features/sectors/components/sector-detail/sector-detail.component';
import { SectorListComponent } from './features/sectors/components/sector-list/sector-list.component';
import { ChurchCreateContainer } from './pages/church-create/church-create.container';
import { ChurchEditContainer } from './pages/church-edit/church-edit.container';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [

  { path: '', component: DashboardComponent },

  { path: 'churches', component: ChurchListComponent },
  { path: 'churches/create', component: ChurchCreateContainer },
  { path: 'churches/edit/:id', component: ChurchEditContainer },
  { path: 'churches/:id', component: ChurchDetailComponent },

  { path: 'sectors', component: SectorListComponent },
  { path: 'sectors/:id', component: SectorDetailComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
