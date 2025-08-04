import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedor: Fornecedor = {
    forNomeFantasia: '',
    forRazaoSocial: '',
    forCpf: '',
    forStatus: '',
    forDataCadastro: null,
    forResponsavel: '',

    endRua: '',
    endNumero: '',
    endCep: '',
    endCidade: '',
    endEstado: '',
    endBairro: '',
    
    conCelular: '',
    conTelefoneComercial: '',
    conEmail: ''
  };

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  // Busca o endereço no ViaCEP sempre que o campo CEP for alterado
  buscarEnderecoPorCep(): void {
    const cep = this.fornecedor.endCep?.replace(/\D/g, '');

    if (cep && cep.length === 8) {
      this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`).subscribe({
        next: (data) => {
          if (!data.erro) {
            this.fornecedor.endRua = data.logradouro;
            this.fornecedor.endCidade = data.localidade;
            this.fornecedor.endEstado = data.uf;
          }
        },
        error: () => {
          console.error('Erro ao buscar o CEP');
        }
      });
    }
  }

  createFornecedor(): void {
    this.fornecedorService.createFornecedor(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor criado com sucesso!');
      this.router.navigate(['/fornecedor']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedor']);
  }
}
