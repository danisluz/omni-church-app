import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeaderComponent } from './Components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    HeaderComponent,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
  ]
})
export class CoreModules { }
