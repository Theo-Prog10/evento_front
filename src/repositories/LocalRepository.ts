import { LocalDTORequest } from "@/models/LocalDTORequest";
import { LocalDTOResponse } from "@/models/LocalDTOResponse";
import { api } from "@/services/api";

export class LocalRepository {
  static async register(data: LocalDTORequest): Promise<LocalDTOResponse> {
    const response = await api.post<LocalDTOResponse>("/local", data);
    return response.data;
  }

  // Método para buscar os dados da Local
  static async getLocal(id: number): Promise<LocalDTOResponse> {
    const response = await api.get<LocalDTOResponse>(`/local/${id}`);
    return response.data;
  }

  // Método para atualizar os dados da Local
  static async updateLocal(id: number, data: LocalDTORequest): Promise<void> {
    await api.put(`/local/${id}`, data);
  }
}