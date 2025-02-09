import { PessoaRepository } from "@/repositories/PessoaRepository";
import { PessoaDTORequest } from "@/models/PessoaDTORequest";
import { PessoaDTOResponse } from "@/models/PessoaDTOResponse";

export class PessoaService {
  static async register(data: PessoaDTORequest): Promise<PessoaDTOResponse> {
    return await PessoaRepository.register(data);
  }

  // Método para buscar os dados da pessoa
  static async getProfile(id: number): Promise<PessoaDTOResponse> {
    return await PessoaRepository.getProfile(id);
  }

  // Método para atualizar os dados da pessoa
  static async updateProfile(id: number, data: PessoaDTORequest): Promise<void> {
    await PessoaRepository.updateProfile(id, data);
  }
}