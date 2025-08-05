import { Component, Input, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-read', // Define o seletor do componente
  templateUrl: './fornecedor-read.component.html', // Caminho para o template HTML
  styleUrls: ['./fornecedor-read.component.css'] // Caminho para o arquivo de estilos CSS
})
export class FornecedorReadComponent implements OnInit {
  @Input() // Termo de pesquisa para filtrar fornecedores
  fornecedor!: Fornecedor[]; // Lista de fornecedores

  displayedColumns: string[] = [
    'forId',
    'forNomeFantasia',
    'forCpf',
    
    'endCidade',
    
    'conCelular',
    'conEmail',
    
    'forStatus',
    'action'
  ];
  // Injeta o serviço FornecedorService no construtor
  constructor(private fornecedorService: FornecedorService) {}

  // Método executado ao inicializar o componente
  ngOnInit(): void {
    this.fornecedorService.readFornecedores().subscribe(fornecedor => {
      this.fornecedor = fornecedor; // Atribui os dados recebidos à lista de fornecedores
      console.log(fornecedor); // Exibe os dados no console para depuração
    });
  }
}