import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pao } from '../pao.model';
import { PaoService } from '../pao.service';

@Component({
  selector: 'app-pao-create',
  templateUrl: './pao-create.component.html',
  styleUrls: ['./pao-create.component.css']
})
export class PaoCreateComponent implements OnInit {

  id_for: String = ''

  pao: Pao = {
    id: '',
    nome: '',
    tempoPreparo: ''
  }

  nome = new FormControl("", [Validators.minLength(3)]);
  tempoPreparo = new FormControl("", [Validators.minLength(10)]);

  constructor(
    private service: PaoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_for = this.route.snapshot.paramMap.get('id_for')!
  }

  create():void {
    this.service.create(this.pao, this.id_for).subscribe(resposta =>{
      this.router.navigate([`fornadas/${this.id_for}/paes`])
      this.service.mensagem('Pão cadastrado com sucesso!')
    }, err => {
      this.router.navigate([`fornadas/${this.id_for}/paes`])
      this.service.mensagem('Erro ao cadastrar novo pão! Tente mais tarde')
    });
  }

  cancel(): void {
    this.router.navigate([`fornadas/${this.id_for}/paes`])
  }

  getMessage(){

    if(this.nome.invalid ){
      return "O campo Nome deve conter entre 3 e 100 caracteres";
    }
    if(this.tempoPreparo.invalid){
      return "O campo Tempo de Preparo deve conter entre 10 e 100 caracteres";
    }
    return false;
  }

}
