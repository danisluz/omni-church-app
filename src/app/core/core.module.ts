import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SidebarComponent,
    FooterComponent,
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
  ]
})
export class CoreModules { }
