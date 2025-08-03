import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from '../../fornecedor/fornecedor.service';
import { Fornecedor } from '../../fornecedor/fornecedor.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
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
      forId: 0, // Inicializa com valor padrão
    }
  }; // Inicializa com valores padrão
  fornecedores: Fornecedor[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private fornecedorService: FornecedorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('proId');
    if (id) {
      this.productService.readById(id).subscribe({
        next: (product: Product) => {
          this.product = product;
          console.log('Produto carregado:', product); // Depuração
        },
        error: (err) => {
          console.error('Erro ao carregar produto:', err);
          this.productService.showMessage('Erro ao carregar produto!');
        }
      });
    } else {
      console.error('ID do produto não encontrado na rota');
      this.productService.showMessage('ID do produto inválido!');
      this.router.navigate(['/products']);
    }
    this.fornecedorService.readFornecedores().subscribe({
      next: (data: Fornecedor[]) => {
        this.fornecedores = data;
      },
      error: (err) => {
        console.error('Erro ao carregar fornecedores:', err);
      }
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe({
      next: () => {
        this.productService.showMessage('Produto atualizado com sucesso!');
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error('Erro ao atualizar produto:', err);
        this.productService.showMessage('Erro ao atualizar produto!');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}