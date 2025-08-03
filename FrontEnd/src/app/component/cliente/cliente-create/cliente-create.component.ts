import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model'; // Modelo de dados do cliente
import { Router } from '@angular/router'; // Para navegação entre rotas
import { ClienteContatoService } from '../cliente.service'; // Serviço para manipulação de dados do cliente
import { HttpClient } from '@angular/common/http'; // Para fazer a requisição ao ViaCEP

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    cliNome: '',
    cliCpf: '',
    cliStatus: '',

    conCelular: '',
    conTelefoneComercial: '',
    conEmail: '',

    endRua: '',
    endNumero: '',
    endCidade: '',
    endCep: '',
    endEstado: '',
    endBairro: ''
  };

  constructor(
    private clienteService: ClienteContatoService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  // Busca o endereço no ViaCEP sempre que o campo CEP for alterado
  buscarEnderecoPorCep(): void {
    const cep = this.cliente.endCep?.replace(/\D/g, '');

    if (cep && cep.length === 8) {
      this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`).subscribe({
        next: (data) => {
          if (!data.erro) {
            this.cliente.endRua = data.logradouro;
            this.cliente.endCidade = data.localidade;
            this.cliente.endEstado = data.uf;
          }
        },
        error: () => {
          console.error('Erro ao buscar o CEP');
        }
      });
    }
  }

  createCliente(): void {
    this.clienteService.createCliente(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente criado!');
      this.router.navigate(['/clientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
