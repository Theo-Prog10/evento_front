import { EventoRepository } from "@/repositories/EventoRepository";
import { EventoDTOResponse } from "@/models/EventoDTOResponse";
import { EventoDTORequest } from "@/models/EventoDTORequest";

export class EventoService {
  // Método para buscar todos os eventos disponíveis
  static async getEventos(): Promise<EventoDTOResponse[]> {
    return await EventoRepository.getEventos();
  }

  static async getEvento(id: number): Promise<EventoDTOResponse> {
    return EventoRepository.getEvento(id)
  }

  static async updateEvento(id: number, data: EventoDTORequest): Promise<void> {
    await EventoRepository.updateEvento(id, data);
  }

  static async register(data: EventoDTORequest): Promise<EventoDTOResponse> {
    return await EventoRepository.register(data);
  }

  static async removerEvento(id: number): Promise<boolean> {
    return await EventoRepository.removerEvento(id);
  }
}