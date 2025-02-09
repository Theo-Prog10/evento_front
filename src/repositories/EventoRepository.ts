import { EventoDTOResponse } from "@/models/EventoDTOResponse";
import { api } from "@/services/api";

export class EventoRepository {
  static async getEventos(): Promise<EventoDTOResponse[]> {
    const response = await api.get<EventoDTOResponse | EventoDTOResponse[]>("/eventos");
    return Array.isArray(response.data) ? response.data : [response.data];
  }
}
