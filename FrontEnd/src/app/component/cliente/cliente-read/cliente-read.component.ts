import { Component, Input } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteContatoService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent {
  @Input() clientes: Cliente[] = []; // <- Recebe os dados de fora (como do ClienteCrudComponent)

  displayedColumns = [
    'cliId',
    'cliNome',
    'cliCpf',

    'conCelular',
    'conEmail',
    
    'endCidade',
    
    'cliStatus',
    'action'
  ];



  constructor(private clienteService: ClienteContatoService) {}

  ngOnInit(): void {
    this.clienteService.readClientes().subscribe(clientes => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }
}
