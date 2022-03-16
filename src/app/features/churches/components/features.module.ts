import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChurchListComponent } from './church-list/church-list.component';
import { ChurchUpdateComponent } from './church-update/church-update.component';
import { ChurchDetailComponent } from './church-detail/church-detail.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ChurchListComponent,
    ChurchUpdateComponent,
    ChurchDetailComponent
  ],
  exports: [
    ChurchListComponent,
    ChurchUpdateComponent,
    ChurchDetailComponent
  ]
})
export class FeatureModules { }
