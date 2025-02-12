import { LocalService } from "@/services/LocalService";
import { LocalDTORequest } from "@/models/LocalDTORequest";
import { LocalDTOResponse } from "@/models/LocalDTOResponse";

export class LocalController {
  static async register(data: LocalDTORequest): Promise<LocalDTOResponse> {
    return await LocalService.register(data);
  }

  static async getLocal(id: number): Promise<LocalDTOResponse> {
    return await LocalService.getLocal(id);
  }

  static async getLocais(): Promise<LocalDTOResponse> {
    return await LocalService.getLocais();
  }

  static async updateLocal(id: number, data: LocalDTORequest): Promise<void> {
    await LocalService.updateLocal(id, data);
  }
}