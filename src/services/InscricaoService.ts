import { InscricaoRepository } from "@/repositories/InscricaoRepository";

export class InscricaoService {
  // Método para inscrever o participante em um evento
  static async inscreverParticipante(eventoId: number, participanteId: number): Promise<boolean> {
    return await InscricaoRepository.inscreverParticipante(eventoId, participanteId);
  }

  // Método para remover o participante de um evento
  static async removerParticipante(eventoId: number, participanteId: number): Promise<boolean> {
    return await InscricaoRepository.removerParticipante(eventoId, participanteId);
  }

  // Método para remover o palestrante de um evento
  static async removerPalestrante(eventoId: number, palestranteId: number): Promise<boolean> {
    return await InscricaoRepository.removerPalestrante(eventoId, palestranteId);
  }

  // Método para inscrever o palestrante em um evento
  static async inscreverPalestrante(eventoId: number, palestranteId: number): Promise<boolean> {
    return await InscricaoRepository.inscreverPalestrante(eventoId, palestranteId);
  }
}