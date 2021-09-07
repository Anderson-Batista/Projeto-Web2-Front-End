import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pao } from '../pao.model';
import { PaoService } from '../pao.service';

@Component({
  selector: 'app-pao-update',
  templateUrl: './pao-update.component.html',
  styleUrls: ['./pao-update.component.css']
})
export class PaoUpdateComponent implements OnInit {

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
    this.pao.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  cancel(): void {
    this.router.navigate([`fornadas/${this.id_for}/paes`])
  }

  findById(): void{
    this.service.findById(this.pao.id!).subscribe((resposta) => {
      this.pao = resposta
    })
  }

  update(): void {
    this.service.update(this.pao).subscribe((resposta) =>{
      this,this.router.navigate([`fornadas/${this.id_for}/paes`]);
      this.service.mensagem('Pão atualizado com sucesso!')
    }, err => {
      this,this.router.navigate([`fornadas/${this.id_for}/paes`]);
      this.service.mensagem('Falha ao atualizar pão com sucesso! Tente Novamente')
    })
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
