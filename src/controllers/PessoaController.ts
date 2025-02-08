import { PessoaService } from "@/services/PessoaService";
import { PessoaDTORequest } from "@/models/PessoaDTORequest";
import { PessoaDTOResponse } from "@/models/PessoaDTOResponse";

export class PessoaController {
  static async register(data: PessoaDTORequest): Promise<PessoaDTOResponse> {
    return await PessoaService.register(data);
  }
}