export interface EventoDTOResponse {
    id: number;
    nome: string;
    descricao?: string;
    data?: string;
    horario?: string;
    nomeLocal: string;
    idOrganizador: number;
    palestrantes: number[];
    participantes: number[];
  }