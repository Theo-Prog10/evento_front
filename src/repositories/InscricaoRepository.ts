import { api } from "@/services/api";

export class InscricaoRepository {
    // Método para inscrever o participante em um evento
    static async inscreverParticipante(eventoId: number, participanteId: number): Promise<boolean> {
      try {
        const response = await api.post(`/api/ControllerInscricao/evento/${eventoId}/participantes/${participanteId}`);
        return response.status === 200;
      } catch (error) {
        return false;
      }
    }
  
    // Método para remover o participante de um evento
    static async removerParticipante(eventoId: number, participanteId: number): Promise<boolean> {
      try {
        const response = await api.delete(`/api/ControllerInscricao/evento/${eventoId}/participantes/${participanteId}`);
        return response.status === 204;
      } catch (error) {
        return false;
      }
    }

    // Método para remover o palestrante de um evento
    static async removerPalestrante(eventoId: number, palestranteId: number): Promise<boolean> {
      try {
        const response = await api.delete(`/api/ControllerInscricao/evento/${eventoId}/palestrantes/${palestranteId}`);
        return response.status === 204;
      } catch (error) {
        return false;
      }
    }

    // Método para inscrever o palestrante em um evento
    static async inscreverPalestrante(eventoId: number, palestranteId: number): Promise<boolean> {
      try {
        const response = await api.post(`/api/ControllerInscricao/evento/${eventoId}/palestrantes/${palestranteId}`);
        return response.status === 200;
      } catch (error) {
        return false;
      }
  }
  }