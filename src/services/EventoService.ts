import { EventoRepository } from "@/repositories/EventoRepository";
import { EventoDTOResponse } from "@/models/EventoDTOResponse";

export class EventoService {
  // Método para buscar todos os eventos disponíveis
  static async getEventos(): Promise<EventoDTOResponse[]> {
    return await EventoRepository.getEventos();
  }
}