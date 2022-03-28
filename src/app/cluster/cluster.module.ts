import { CoreModules } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChurchListComponent } from './churches/components/church-list/church-list.component';
import { ChurchEditComponent } from './churches/components/church-edit/church-edit.component';
import { ChurchDetailComponent } from './churches/components/church-detail/church-detail.component';
import { SectorListComponent } from './sectors/components/sector-list/sector-list.component';
import { SectorDetailComponent } from './sectors/components/sector-detail/sector-detail.component';
import { SectorEditComponent } from './sectors/components/sector-edit/sector-edit.component';
import { ClusterComponent } from './cluster.component';
import { ClusterRoutingModule } from './cluster.routing.module';
import { ChurchCreateContainer } from './pages/church-create/church-create.container';
import { ChurchEditContainer } from './pages/church-edit/church-edit.container';
import { SectorCreateContainer } from './pages/sector-create/sector-create.container';
import { SectorEditContainer } from './pages/sector-edit/sector-edit.container';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ClusterRoutingModule,
    ReactiveFormsModule,
    CoreModules
  ],
  declarations: [
    ChurchCreateContainer,
    SectorEditContainer,
    SectorCreateContainer,
    ChurchEditContainer,
    ClusterComponent,
    ChurchListComponent,
    ChurchEditComponent,
    ChurchDetailComponent,
    SectorListComponent,
    SectorDetailComponent,
    SectorEditComponent,
  ],
  exports: []
})
export class ClusterModule { }
