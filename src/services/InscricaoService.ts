import { InscricaoRepository } from "@/repositories/InscricaoRepository";

export class InscricaoService {
  static async inscreverParticipante(eventoId: number, participanteId: number): Promise<boolean> {
    return await InscricaoRepository.inscreverParticipante(eventoId, participanteId);
  }

  static async removerParticipante(eventoId: number, participanteId: number): Promise<boolean> {
    return await InscricaoRepository.removerParticipante(eventoId, participanteId);
  }

  static async inscreverPalestrante(eventoId: number, palestranteId: number): Promise<boolean> {
    return await InscricaoRepository.inscreverPalestrante(eventoId, palestranteId);
  }

  static async removerPalestrante(eventoId: number, palestranteId: number): Promise<boolean> {
    return await InscricaoRepository.removerPalestrante(eventoId, palestranteId);
  }
}