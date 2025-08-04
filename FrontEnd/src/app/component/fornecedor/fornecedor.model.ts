export interface Fornecedor {
  forId?: number;
  forNomeFantasia: string;
  forRazaoSocial: string;
  forCpf: string;
  forStatus: string;
  forDataCadastro: string | null
  forResponsavel: string

  // Endereço
  endRua: string;
  endNumero: string;
  endCidade: string;
  endCep: string;
  endEstado: string;
  endBairro: string

  // Contato
  conCelular: string;
  conTelefoneComercial: string;
  conEmail: string;
}
