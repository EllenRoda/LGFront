import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read', // Define o seletor do componente
  templateUrl: './product-read.component.html', // Caminho para o template HTML
  styleUrls: ['./product-read.component.css'] // Caminho para o arquivo de estilos CSS
})
export class ProductReadComponent implements OnInit {
  @Input()
  products!: Product[]; // Lista de produtos
  displayedColumns = [
    'proNome',
    'proPrecoCusto',
    'proPrecoVenda',
    'proEstoque',
    'proCategoria', 
    'proAtivo', 
    'forNomeFantasia', 
    'actions'];
  // Injeta o serviço ProductService no construtor
  constructor(private productService: ProductService) { }

  // Método executado ao inicializar o componente
  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products; // Atribui os dados recebidos à lista de produtos
      console.log(products); // Exibe os dados no console para depuração
    });
  }
}