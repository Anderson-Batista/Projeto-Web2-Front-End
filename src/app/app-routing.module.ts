import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
