export interface PessoaDTOResponse {
    nome?: string;
    nascimento?: string;
    cpf?: string;
    eventosInscritos: number[];
    eventosPalestrados: number[];
    eventosOrganizados: number[];
  }