import { EventoDTORequest } from "@/models/EventoDTORequest";
import { EventoDTOResponse } from "@/models/EventoDTOResponse";
import { api } from "@/services/api";

export class EventoRepository {
  static async getEventos(): Promise<EventoDTOResponse[]> {
    const response = await api.get<EventoDTOResponse | EventoDTOResponse[]>("/eventos");
    return Array.isArray(response.data) ? response.data : [response.data];
  }

  static async getEvento(id: number): Promise<EventoDTOResponse> {
    const response = await api.get<EventoDTOResponse>(`/evento/${id}`);
    return response.data;
  }

  static async updateEvento(id: number, data: EventoDTORequest): Promise<void> {
    await api.put<EventoDTOResponse>(`/evento/${id}`, data);
  }

  static async register(data: EventoDTORequest): Promise<EventoDTOResponse> {
    const response = await api.post<EventoDTOResponse>("/eventos", data);
    return response.data;
  }
  
  static async removerEvento(id: number): Promise<boolean> {
    const response = await api.delete<boolean>(`/evento/${id}`);
    return response.data;
  }
}
