import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChurchDetailComponent } from './churches/components/church-detail/church-detail.component';
import { ChurchListComponent } from './churches/components/church-list/church-list.component';
import { ClusterComponent } from './cluster.component';
import { ChurchCreateContainer } from './pages/church-create/church-create.container';
import { ChurchEditContainer } from './pages/church-edit/church-edit.container';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SectorCreateContainer } from './pages/sector-create/sector-create.container';
import { SectorEditContainer } from './pages/sector-edit/sector-edit.container';
import { SectorDetailComponent } from './sectors/components/sector-detail/sector-detail.component';
import { SectorListComponent } from './sectors/components/sector-list/sector-list.component';

const routes: Routes = [
  { path: '', component: ClusterComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },

      { path: 'churches', component: ChurchListComponent },
      { path: 'churches/create', component: ChurchCreateContainer },
      { path: 'churches/edit/:id', component: ChurchEditContainer },
      { path: 'churches/:id', component: ChurchDetailComponent },

      { path: 'sectors', component: SectorListComponent },
      { path: 'sectors/:id', component: SectorDetailComponent },
      { path: 'sectors/edit/:id', component: SectorEditContainer },
      { path: 'sectors/create', component: SectorCreateContainer },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClusterRoutingModule { }
