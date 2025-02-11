import { LocalRepository } from "@/repositories/LocalRepository";
import { LocalDTORequest } from "@/models/LocalDTORequest";
import { LocalDTOResponse } from "@/models/LocalDTOResponse";

export class LocalService {
  static async register(data: LocalDTORequest): Promise<LocalDTOResponse> {
    return await LocalRepository.register(data);
  }

  static async getLocal(id: number): Promise<LocalDTOResponse> {
    return await LocalRepository.getLocal(id);
  }

  static async getLocais(): Promise<LocalDTOResponse> {
    return await LocalRepository.getLocais();
  }

  static async updateLocal(id: number, data: LocalDTORequest): Promise<void> {
    await LocalRepository.updateLocal(id, data);
  }
}