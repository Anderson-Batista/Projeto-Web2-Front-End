import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornada } from '../fornada.model';
import { FornadaService } from '../fornada.service';

@Component({
  selector: 'app-fornada-create',
  templateUrl: './fornada-create.component.html',
  styleUrls: ['./fornada-create.component.css']
})
export class FornadaCreateComponent implements OnInit {

  fornada: Fornada = {
    nomePao: '',
    descricao: '',
    status: '',
  }

  constructor(private service: FornadaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.fornada).subscribe((resposta) =>{
      this.router.navigate(['fornadas'])
      this.service.mensagem('Fornada Criada com Sucesso!')
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message);
      }
    })
  }

}
