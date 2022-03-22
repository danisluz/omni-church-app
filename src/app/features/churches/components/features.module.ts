import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChurchListComponent } from './church-list/church-list.component';
import { ChurchEditComponent } from './church-edit/church-edit.component';
import { ChurchDetailComponent } from './church-detail/church-detail.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ChurchListComponent,
    ChurchEditComponent,
    ChurchDetailComponent
  ],
  exports: [
    ChurchListComponent,
    ChurchEditComponent,
    ChurchDetailComponent
  ]
})
export class FeatureModules { }
