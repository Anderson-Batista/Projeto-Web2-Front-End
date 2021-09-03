import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornada } from '../fornada.model';
import { FornadaService } from '../fornada.service';

@Component({
  selector: 'app-fornada-read',
  templateUrl: './fornada-read.component.html',
  styleUrls: ['./fornada-read.component.css']
})
export class FornadaReadComponent implements OnInit {

  fornadas: Fornada[] = [];

  displayedColumns: string[] = ['id', 'nomePao', 'descricao', 'status', 'paes', 'acoes'];

  constructor(private service: FornadaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta =>{
      console.log(resposta);
      this.fornadas = resposta;
    })
  }

  navegarParaFornadaCreate(){
    this.router.navigate(["fornadas/create"]);
  }
  
}
