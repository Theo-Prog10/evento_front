import { EventoService } from "@/services/EventoService";
import { EventoDTOResponse } from "@/models/EventoDTOResponse";
import { EventoDTORequest } from "@/models/EventoDTORequest";

export class EventoController {
  // Método para buscar todos os eventos disponíveis
  static async getEventos(): Promise<EventoDTOResponse[]> {
    return await EventoService.getEventos();
  }

  static async getEvento(id: number): Promise<EventoDTOResponse> {
    return await EventoService.getEvento(id);
  }

  static async updateEvento(id: number, data: EventoDTORequest): Promise<void> {
    await EventoService.updateEvento(id, data);
  }

  static async register(data: EventoDTORequest): Promise<EventoDTOResponse> {
    return await EventoService.register(data);
  }

  static async removerEvento(id: number): Promise<boolean> {
    return await EventoService.removerEvento(id);
  }
}