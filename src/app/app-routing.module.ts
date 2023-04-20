import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1ModificarComponent } from './componente1-modificar/componente1-modificar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'modificar/:ids',component:Componente1ModificarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
