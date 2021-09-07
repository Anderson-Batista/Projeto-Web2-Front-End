import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pao } from '../pao.model';
import { PaoService } from '../pao.service';

@Component({
  selector: 'app-pao-read',
  templateUrl: './pao-read.component.html',
  styleUrls: ['./pao-read.component.css']
})
export class PaoReadComponent implements OnInit {

  id_for: String = ''

  pao: Pao = {
    id: '',
    nome: '',
    tempoPreparo: ''
  }

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
}
