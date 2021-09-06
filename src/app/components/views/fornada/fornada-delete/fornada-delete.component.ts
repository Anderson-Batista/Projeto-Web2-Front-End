import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornada } from '../fornada.model';
import { FornadaService } from '../fornada.service';

@Component({
  selector: 'app-fornada-delete',
  templateUrl: './fornada-delete.component.html',
  styleUrls: ['./fornada-delete.component.css']
})
export class FornadaDeleteComponent implements OnInit {

  fornada: Fornada = {
    id: '',
    nomePao: '',
    descricao: '',
    status: ''
  }

  constructor(private service: FornadaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.fornada.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void{
    this.service.findById(this.fornada.id!).subscribe((resposta) => {
      this.fornada.nomePao = resposta.nomePao
      this.fornada.descricao = resposta.descricao
      this.fornada.status = resposta.status
    })
  }

  delete(): void {
    this.service.delete(this.fornada.id!).subscribe((resposta) => {
      this.router.navigate(['fornadas'])
      this.service.mensagem('Fornada Deletada com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['fornadas'])
  }

}
