export interface Product {
    proId?: number
    proNome: string
    proPrecoCusto: number | null
    proPrecoVenda: number | null
    proMarca: string
    proEstoque: number | null
    proDescricao: string
    proCategoria: string
    proCodigoBarras: string
    proDataCadastro: string | null
    proDataAtualizacao: string | null
    proAtivo: string
    proFreteGratis: string

    // Objeto fornecedor que pelo menos deve ter o ID (forId)
    fornecedor: {
    forId: number;
  } | null;  // Pode ser null se quiser permitir produto sem fornecedor
}