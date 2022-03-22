import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChurchDetailComponent } from './features/churches/components/church-detail/church-detail.component';
import { ChurchEditComponent } from './features/churches/components/church-edit/church-edit.component';
import { ChurchListComponent } from './features/churches/components/church-list/church-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },

  { path: "churches", component: ChurchListComponent},
  { path: "churches/:id", component: ChurchDetailComponent},
  { path: "churches/edit/:id", component: ChurchEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
