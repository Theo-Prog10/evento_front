import { PessoaService } from "@/services/PessoaService";
import { PessoaDTORequest } from "@/models/PessoaDTORequest";
import { PessoaDTOResponse } from "@/models/PessoaDTOResponse";

export class PessoaController {
  static async register(data: PessoaDTORequest): Promise<PessoaDTOResponse> {
    return await PessoaService.register(data);
  }

  // Método para buscar os dados da pessoa
  static async getProfile(id: number): Promise<PessoaDTOResponse> {
    return await PessoaService.getProfile(id);
  }

  // Método para atualizar os dados da pessoa
  static async updateProfile(id: number, data: PessoaDTORequest): Promise<void> {
    await PessoaService.updateProfile(id, data);
  }
}