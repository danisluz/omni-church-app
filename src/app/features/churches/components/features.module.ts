import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChurchListComponent } from './church-list/church-list.component';
import { ChurchEditComponent } from './church-edit/church-edit.component';
import { ChurchDetailComponent } from './church-detail/church-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
  ],
  exports: [
    ChurchListComponent,
    ChurchEditComponent,
    ChurchDetailComponent
  ]
})
export class FeatureModules { }
