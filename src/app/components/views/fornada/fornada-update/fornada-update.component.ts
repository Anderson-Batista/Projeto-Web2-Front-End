import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornada } from '../fornada.model';
import { FornadaService } from '../fornada.service';

@Component({
  selector: 'app-fornada-update',
  templateUrl: './fornada-update.component.html',
  styleUrls: ['./fornada-update.component.css']
})
export class FornadaUpdateComponent implements OnInit {

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

  update(): void {
    this.service.update(this.fornada).subscribe((resposta) => {
      this.router.navigate(["fornadas"]);
      this.service.mensagem("Fornada Atualizada com Sucesso!");
    }, err => {
      this.service.mensagem('Verificar se todos os campos estão preenchidos corretamente!');
    })
  }

  cancel(): void {
    this.router.navigate(['fornadas'])
  }

}
