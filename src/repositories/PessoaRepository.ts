import { PessoaDTORequest } from "@/models/PessoaDTORequest";
import { PessoaDTOResponse } from "@/models/PessoaDTOResponse";
import { api } from "@/services/api";

export class PessoaRepository {
  static async register(data: PessoaDTORequest): Promise<PessoaDTOResponse> {
    const response = await api.post<PessoaDTOResponse>("/pessoa", data);
    return response.data;
  }
}