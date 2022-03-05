import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChurchReadComponent } from './features/churches/components/church-read/church-read.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },

  { path: "churches", component: ChurchReadComponent,
    children: [
      { path: 'create', component: ChurchReadComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
