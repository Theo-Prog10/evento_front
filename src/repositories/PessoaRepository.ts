import { PessoaDTORequest } from "@/models/PessoaDTORequest";
import { PessoaDTOResponse } from "@/models/PessoaDTOResponse";
import { api } from "@/services/api";

export class PessoaRepository {
  static async register(data: PessoaDTORequest): Promise<PessoaDTOResponse> {
    const response = await api.post<PessoaDTOResponse>("/pessoa", data);
    return response.data;
  }

  // Método para buscar os dados da pessoa
  static async getProfile(id: number): Promise<PessoaDTOResponse> {
    const response = await api.get<PessoaDTOResponse>(`/pessoa/${id}`);
    return response.data;
  }

  // Método para atualizar os dados da pessoa
  static async updateProfile(id: number, data: PessoaDTORequest): Promise<void> {
    await api.put(`/pessoa/${id}`, data);
  }
}