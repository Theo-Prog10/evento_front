export interface PessoaDTOResponse {
    nome?: string;
    nascimento?: string;
    cpf?: string;
    biografia?: string;
    especialidade?: string;
    contato?: string;
    eventosInscritos: number[];
    eventosPalestrados: number[];
    eventosOrganizados: number[];
  }