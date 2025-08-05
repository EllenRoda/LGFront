import { HttpClient } from "@angular/common/http"; // Importa o cliente HTTP para realizar requisições
import { Injectable } from "@angular/core"; // Permite que a classe seja injetada como serviço
import { MatSnackBar } from "@angular/material/snack-bar"; // Importa o componente para exibir mensagens de notificação
import { Observable } from "rxjs"; // Importa o tipo Observable para lidar com operações assíncronas
import { FormaPagamento } from "./formaPagamento.model"; // Importa o modelo de dados FormaPagamento

@Injectable({
    providedIn: 'root' // Define que o serviço será fornecido na raiz da aplicação
})
export class formaPagamentoService {

    baseUrl = "http://localhost:8080/formapagamentos"; // URL base para as requisições HTTP

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    // Exibe uma mensagem de notificação usando o MatSnackBar
    showMessage(msg: string): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000, // Duração da mensagem em milissegundos
            horizontalPosition: "right", // Posição horizontal
            verticalPosition: "top" // Posição vertical
        });
    }

    // Cria uma nova forma de pagamento enviando uma requisição POST
    create(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
        return this.http.post<FormaPagamento>(this.baseUrl, formaPagamento);
    }

    // Obtém a lista de formas de pagamento enviando uma requisição GET
    read(): Observable<FormaPagamento[]> {
        return this.http.get<FormaPagamento[]>(this.baseUrl);
    }

    // Obtém uma forma de pagamento específica pelo ID enviando uma requisição GET
    readById(id: string): Observable<FormaPagamento> {
        const url = `${this.baseUrl}/${id}`; // Concatena o ID à URL base
        return this.http.get<FormaPagamento>(url);
    }

    // Atualiza uma forma de pagamento existente enviando uma requisição PUT
    update(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
        const url = `${this.baseUrl}/${formaPagamento.fpgId}`; // Concatena o ID da forma de pagamento à URL base
        return this.http.put<FormaPagamento>(url, formaPagamento);
    }

    // Exclui uma forma de pagamento pelo ID enviando uma requisição DELETE
    delete(id: number): Observable<FormaPagamento> {
        const url = `${this.baseUrl}/${id}`; // Concatena o ID à URL base
        return this.http.delete<FormaPagamento>(url);
    }
}