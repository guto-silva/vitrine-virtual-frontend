import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescricaoComponent } from './descricao/descricao.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {path: '', component: MainComponent},
  {path: 'produto/descricao', component: DescricaoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
