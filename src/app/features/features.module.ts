import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChurchListComponent } from './churches/components/church-list/church-list.component';
import { ChurchEditComponent } from './churches/components/church-edit/church-edit.component';
import { ChurchDetailComponent } from './churches/components/church-detail/church-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectorListComponent } from './sectors/components/sector-list/sector-list.component';
import { SectorDetailComponent } from './sectors/components/sector-detail/sector-detail.component';
import { SectorEditComponent } from './sectors/components/sector-edit/sector-edit.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ChurchListComponent,
    ChurchEditComponent,
    ChurchDetailComponent,
    SectorListComponent,
    SectorDetailComponent,
    SectorEditComponent,
  ],
  exports: [
    ChurchListComponent,
    ChurchEditComponent,
    ChurchDetailComponent,
    SectorListComponent,
    SectorDetailComponent,
    SectorEditComponent,
  ]
})
export class FeatureModules { }
