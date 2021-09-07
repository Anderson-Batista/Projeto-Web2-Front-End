import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornadaCreateComponent } from './components/views/fornada/fornada-create/fornada-create.component';
import { FornadaDeleteComponent } from './components/views/fornada/fornada-delete/fornada-delete.component';
import { FornadaReadComponent } from './components/views/fornada/fornada-read/fornada-read.component';
import { FornadaUpdateComponent } from './components/views/fornada/fornada-update/fornada-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { PaoCreateComponent } from './components/views/pao/pao-create/pao-create.component';
import { PaoReadAllComponent } from './components/views/pao/pao-read-all/pao-read-all.component';
import { PaoUpdateComponent } from './components/views/pao/pao-update/pao-update.component';

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
},
{
  path: 'fornadas/delete/:id',
  component: FornadaDeleteComponent
},
{
  path: 'fornadas/update/:id',
  component: FornadaUpdateComponent
},
{
  path: 'fornadas/:id_for/paes',
  component: PaoReadAllComponent
},
{
  path: 'fornadas/:id_for/paes/create',
  component: PaoCreateComponent
},
{
  path: 'fornadas/:id_for/paes/:id/update',
  component: PaoUpdateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
