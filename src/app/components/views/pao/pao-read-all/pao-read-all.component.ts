import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pao } from '../pao.model';
import { PaoService } from '../pao.service';

@Component({
  selector: 'app-pao-read-all',
  templateUrl: './pao-read-all.component.html',
  styleUrls: ['./pao-read-all.component.css']
})
export class PaoReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'tempoPreparo', 'paes', 'acoes'];

  id_for: String = ''

  paes: Pao[] = []

  constructor(private service: PaoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_for = this.route.snapshot.paramMap.get('id_for')!
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByFornada(this.id_for).subscribe((resposta) => {
      this.paes = resposta
    });
  }

  navegarParaCriarPao(): void{
    this.router.navigate([`fornadas/${this.id_for}/paes/create`])
  }

}
