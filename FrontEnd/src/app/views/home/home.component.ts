import { Component, OnInit } from '@angular/core';
import { ClienteContatoService } from 'src/app/component/cliente/cliente.service';
import { FornecedorService } from 'src/app/component/fornecedor/fornecedor.service';
import { ProductService } from 'src/app/component/product/product.service';

@Component({
  selector: 'app-home', // Define o seletor do componente
  templateUrl: './home.component.html', // Caminho para o template HTML
  styleUrls: ['./home.component.css'] // Caminho para o arquivo de estilos CSS
})
export class HomeComponent implements OnInit {
  constructor(public productService: ProductService, public clienteService: ClienteContatoService, public fornecedorService: FornecedorService) { }
  productCount: number = 0;
  fornecedorCount: number = 0;
  clienteCount: number = 0;

  ngOnInit(): void {
    /*this.productService.read().subscribe(products => {
      this.productCount = products.length;
    });

    this.fornecedorService.read().subscribe(fornecedores => {
      this.fornecedorCount = fornecedores.length;
      });

      this.clienteService.read().subscribe(clientes => {
      this.clienteCount = clientes.length;
      });*/
  }
}