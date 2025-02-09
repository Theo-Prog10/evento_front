import { EventoService } from "@/services/EventoService";
import { EventoDTOResponse } from "@/models/EventoDTOResponse";

export class EventoController {
  // Método para buscar todos os eventos disponíveis
  static async getEventos(): Promise<EventoDTOResponse[]> {
    return await EventoService.getEventos();
  }
}