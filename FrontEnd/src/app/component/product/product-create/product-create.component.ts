import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FornecedorService } from '../../fornecedor/fornecedor.service'; // Corrigir o caminho conforme seu projeto
import { Fornecedor } from '../../fornecedor/fornecedor.model'; // Opcional: se você tiver um modelo de Fornecedor

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  fornecedores: Fornecedor[] = [];

  product: Product = {
    proNome: '',
    proPrecoCusto: null,
    proPrecoVenda: null,
    proMarca: '',
    proEstoque: null,
    proDescricao: '',
    proCategoria: '',
    proCodigoBarras: '',
    proDataCadastro: '',
    proDataAtualizacao: '',
    proAtivo: '',
    proFreteGratis: '',
    fornecedor: {
      forId: 0,
    }
  };

  constructor(
    private productService: ProductService,
    private fornecedorService: FornecedorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fornecedorService.readFornecedores().subscribe((data: Fornecedor[]) => {
      this.fornecedores = data;
    });
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
