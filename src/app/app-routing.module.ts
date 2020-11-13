import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/tipo-eva/add/add.component';
import { ListarComponent } from './components/tipo-eva/listar/listar.component';
import { UpdateComponent } from './components/tipo-eva/update/update.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'listar', component: ListarComponent},
  { path: "tipoeva/add", component: AddComponent },
  { path: "editar/:id", component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
