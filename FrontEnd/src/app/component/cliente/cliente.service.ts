import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Cliente } from './cliente.model';
import { Contato } from "../contato/contato-read.model";
import { Endereco } from "src/app/models/endereco.model";

@Injectable({
  providedIn: 'root'
})
export class ClienteContatoService {
  readById(arg0: number) {
    throw new Error('Method not implemented.');
  }

  private clienteBaseUrl = "http://localhost:8080/clientes";
  private contatoBaseUrl = "http://localhost:8080/contatos";
  private enderecoBaseUrl = "http://localhost:8080/enderecos"; // <= ENDEREÇO BASE

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  // ===== CLIENTES =====
  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.clienteBaseUrl, cliente);
  }

  readClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clienteBaseUrl);
  }

  readClienteById(id: string): Observable<Cliente> {
    const url = `${this.clienteBaseUrl}/${id}`;
    return this.http.get<Cliente>(url);
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this.clienteBaseUrl}/${cliente.cliId}`;
    return this.http.put<Cliente>(url, cliente);
  }

  deleteCliente(id: number): Observable<Cliente> {
    const url = `${this.clienteBaseUrl}/${id}`;
    return this.http.delete<Cliente>(url);
  }

  // ===== CONTATOS =====
  createContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.contatoBaseUrl, contato);
  }

  readContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.contatoBaseUrl);
  }

  readContatoById(id: string): Observable<Contato> {
    const url = `${this.contatoBaseUrl}/${id}`;
    return this.http.get<Contato>(url);
  }

  updateContato(contato: Contato): Observable<Contato> {
    const url = `${this.contatoBaseUrl}/${contato.conId}`;
    return this.http.put<Contato>(url, contato);
  }

  deleteContato(id: number): Observable<Contato> {
    const url = `${this.contatoBaseUrl}/${id}`;
    return this.http.delete<Contato>(url);
  }

  // ===== ENDEREÇOS =====
  createEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(this.enderecoBaseUrl, endereco);
  }

  readEnderecos(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.enderecoBaseUrl);
  }

  readEnderecoById(id: string): Observable<Endereco> {
    const url = `${this.enderecoBaseUrl}/${id}`;
    return this.http.get<Endereco>(url);
  }

  updateEndereco(endereco: Endereco): Observable<Endereco> {
    const url = `${this.enderecoBaseUrl}/${endereco.endId}`;
    return this.http.put<Endereco>(url, endereco);
  }

  deleteEndereco(id: number): Observable<Endereco> {
    const url = `${this.enderecoBaseUrl}/${id}`;
    return this.http.delete<Endereco>(url);
  }

  // Total de Cliente
  private _clienteCount = 0;

  setClienteCount(count: number) {
  this._clienteCount = count;
  }

  getClienteCount(): number {
  return this._clienteCount;
  }
}
