export interface Cliente {
    cliId?: number;
    cliNome: string;
    cliCpf: string;
    cliStatus: string;

    // Campos de contato
    conCelular: string;
    conTelefoneComercial: string;
    conEmail: string;

    // Campos de endereço
    endRua: string;
    endNumero: string;
    endCidade: string;
    endCep: string;
    endEstado: string;
    endBairro: string;
}