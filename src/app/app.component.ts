import { Component } from '@angular/core';
import { listacurso } from './modelos/listacursos';
import { ServiciocursosService } from './serviciocursos.service';
import { nivel } from './modelos/nivel';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio7-RepasoServiciosyRouting';
  curso : listacurso = new listacurso(0,"",0,nivel.alto)
  cursos : listacurso[]=[]
  ids : number = 0


    constructor(private serviciocursos : ServiciocursosService,
       ){
    this.cursos = this.serviciocursos.micurso
  }
 

  anadir(){
    this.serviciocursos.anadircurso(this.curso)
    this.curso = new listacurso(0,"",0,nivel.alto)
   
}
  eliminar(){
    this.serviciocursos.eliminarfacuta(this.ids)

  }
  buscar(){
    this.serviciocursos.buscarfactura(this.ids)
  }
  modificar(){
    this.serviciocursos.modificarcurso(this.ids, this.curso)
    this.curso = new listacurso(0,"",0,nivel.alto)
  }
  update(number:number){
    this.ids=number
    console.log(this.ids)
    
  }

}

