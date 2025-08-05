import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from '../formaPagamento.model';
import { formaPagamentoService } from '../formaPagamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-create', // Define o seletor do componente
  templateUrl: './forma-pagamento-create.component.html', // Caminho para o template HTML
  styleUrls: ['./forma-pagamento-create.component.css'] // Caminho para o arquivo de estilos CSS
})
export class FormaPagamentoCreateComponent implements OnInit {
  // Inicializa o objeto formaPagamento com uma descrição vazia
  formaPagamento: FormaPagamento = {
    fpgCredito: '',
    fpgFechamento: '',
    fpgDescricao: '',
    fpgStatus: ''
  };

  // Injeta o serviço formaPagamentoService e o roteador Router no construtor
  constructor(
    private formaPagamentoService: formaPagamentoService,
    private router: Router
  ) {}

  // Método executado ao inicializar o componente
  ngOnInit(): void {}

  // Método para criar uma nova forma de pagamento
  createFormaPagamento(): void {
    this.formaPagamentoService.create(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma Pagamento criado!'); // Exibe mensagem de sucesso
      this.router.navigate(['/formaPagamento']); // Redireciona para a lista de formas de pagamento
    });
  }

  // Método para cancelar a criação e voltar para a lista de formas de pagamento
  cancel(): void {
    this.router.navigate(['/formaPagamento']);
  }
}