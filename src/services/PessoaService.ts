import { PessoaRepository } from "@/repositories/PessoaRepository";
import { PessoaDTORequest } from "@/models/PessoaDTORequest";
import { PessoaDTOResponse } from "@/models/PessoaDTOResponse";

export class PessoaService {
  static async register(data: PessoaDTORequest): Promise<PessoaDTOResponse> {
    return await PessoaRepository.register(data);
  }
}