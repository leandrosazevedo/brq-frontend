import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PessoaComponent } from './pages/pessoa/views/pessoa.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'pessoas',
    component: PessoaComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
