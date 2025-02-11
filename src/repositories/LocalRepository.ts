import { LocalDTORequest } from "@/models/LocalDTORequest";
import { LocalDTOResponse } from "@/models/LocalDTOResponse";
import { api } from "@/services/api";

export class LocalRepository {
  static async register(data: LocalDTORequest): Promise<LocalDTOResponse> {
    const response = await api.post<LocalDTOResponse>("/local", data);
    return response.data;
  }

  static async getLocal(id: number): Promise<LocalDTOResponse> {
    const response = await api.get<LocalDTOResponse>(`/local/${id}`);
    return response.data;
  }

  static async getLocais(): Promise<LocalDTOResponse> {
    const response = await api.get<LocalDTOResponse>(`/locais`);
    return response.data;
  }

  static async updateLocal(id: number, data: LocalDTORequest): Promise<void> {
    await api.put(`/local/${id}`, data);
  }
}