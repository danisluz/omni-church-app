import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChurchReadComponent } from './church-read/church-read.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ChurchReadComponent
  ],
  exports: [
    ChurchReadComponent
  ]
})
export class FeatureModules { }
