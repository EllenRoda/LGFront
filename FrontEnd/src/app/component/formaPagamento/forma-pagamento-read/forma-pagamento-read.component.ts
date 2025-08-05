import { Component, OnInit, Input } from '@angular/core';
import { FormaPagamento } from '../formaPagamento.model';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent implements OnInit {
  
  @Input()
  formaPagamento: FormaPagamento[] = [];

  displayedColumns: string[] = [
    'fpgId',
    'fpgCredito',
    'fpgFechamento',
    'fpgDescricao',
    'fpgStatus',
    'actions'
  ];

  constructor() {}

  ngOnInit(): void {
    // Não busca dados via serviço neste caso, pois recebe via input
  }
}
