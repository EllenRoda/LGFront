import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/component/fornecedor/fornecedor.model';
import { FornecedorService } from 'src/app/component/fornecedor/fornecedor.service';

@Component({
  selector: 'app-fornecedor-crud', // Define o seletor do componente
  templateUrl: './fornecedor-crud.component.html', // Caminho para o template HTML
  styleUrls: ['./fornecedor-crud.component.css'] // Caminho para o arquivo de estilos CSS
})
export class FornecedorCrudComponent implements OnInit {
  searchTerm: string = '';
  allFornecedor: Fornecedor[] = [];
  filteredFornecedor: Fornecedor[] = [];
    // Construtor para injetar o serviço de roteamento
    constructor(
       private router: Router,
       private fornecedorService: FornecedorService) { }

    // Método chamado ao inicializar o componente
    ngOnInit(): void {
      this.fornecedorService.readFornecedores().subscribe((fornecedor: Fornecedor[]) => {
        this.allFornecedor = fornecedor;
        this.filteredFornecedor = fornecedor;
      });
    }

    // Método para navegar para a tela de criação de fornecedores
    navigateToFornecedorCreate(): void {
      this.router.navigate(['/fornecedor/create']);
    }
    // Método para filtrar a lista de fornecedores com base no termo de pesquisa
    filterFornecedor(): void {
      const term = this.searchTerm.toLowerCase();
      this.filteredFornecedor = this.allFornecedor.filter(f =>
        f.forNomeFantasia.toLowerCase().includes(term) ||
        f.forRazaoSocial.toLowerCase().includes(term) ||
        f.forCpf.toLowerCase().includes(term)
      );
    }
}