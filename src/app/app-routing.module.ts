import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornadaCreateComponent } from './components/views/fornada/fornada-create/fornada-create.component';
import { FornadaReadComponent } from './components/views/fornada/fornada-read/fornada-read.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'fornadas',
  component: FornadaReadComponent
},
{
  path: 'fornadas/create',
  component: FornadaCreateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
