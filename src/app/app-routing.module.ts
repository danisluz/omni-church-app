import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChurchDetailComponent } from './features/churches/components/church-detail/church-detail.component';
import { ChurchListComponent } from './features/churches/components/church-list/church-list.component';
import { ChurchCreateContainer } from './pages/church-create/church-create.container';
import { ChurchEditContainer } from './pages/church-edit/church-edit.container';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "404", component: DashboardComponent },

  { path: "churches", pathMatch: "full", component: ChurchListComponent},
  { path: "churches/:id", pathMatch: "full", component: ChurchDetailComponent},
  { path: "churches/edit/:id", pathMatch: "full", component: ChurchEditContainer},
  { path: "churches/putinho", pathMatch: "full", component: ChurchCreateContainer}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
