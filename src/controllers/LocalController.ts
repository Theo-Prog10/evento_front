import { LocalService } from "@/services/LocalService";
import { LocalDTORequest } from "@/models/LocalDTORequest";
import { LocalDTOResponse } from "@/models/LocalDTOResponse";

export class LocalController {
  static async register(data: LocalDTORequest): Promise<LocalDTOResponse> {
    return await LocalService.register(data);
  }

  // Método para buscar os dados da Local
  static async getLocal(id: number): Promise<LocalDTOResponse> {
    return await LocalService.getLocal(id);
  }

  // Método para atualizar os dados da Local
  static async updateLocal(id: number, data: LocalDTORequest): Promise<void> {
    await LocalService.updateLocal(id, data);
  }
}