import { InscricaoService } from "@/services/InscricaoService";

export class InscricaoController {
  static async inscreverParticipante(eventoId: number, participanteId: number): Promise<boolean> {
    return await InscricaoService.inscreverParticipante(eventoId, participanteId);
  }

  static async removerParticipante(eventoId: number, participanteId: number): Promise<boolean> {
    return await InscricaoService.removerParticipante(eventoId, participanteId);
  }

  static async removerPalestrante(eventoId: number, palestranteId: number): Promise<boolean> {
    return await InscricaoService.removerPalestrante(eventoId, palestranteId);
  }

  static async inscreverPalestrante(eventoId: number, palestranteId: number): Promise<boolean> {
    return await InscricaoService.inscreverPalestrante(eventoId, palestranteId);
  }
}