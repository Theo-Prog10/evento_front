import { LocalRepository } from "@/repositories/LocalRepository";
import { LocalDTORequest } from "@/models/LocalDTORequest";
import { LocalDTOResponse } from "@/models/LocalDTOResponse";

export class LocalService {
  static async register(data: LocalDTORequest): Promise<LocalDTOResponse> {
    return await LocalRepository.register(data);
  }

  // Método para buscar os dados da Local
  static async getLocal(id: number): Promise<LocalDTOResponse> {
    return await LocalRepository.getLocal(id);
  }

  // Método para atualizar os dados da Local
  static async updateLocal(id: number, data: LocalDTORequest): Promise<void> {
    await LocalRepository.updateLocal(id, data);
  }
}