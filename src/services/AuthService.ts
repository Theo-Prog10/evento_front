import { AuthRepository } from "@/repositories/AuthRepository";
import { PessoaDTOResponse } from "@/models/PessoaDTOResponse";

export class AuthService {
  static async login(login: string, senha: string): Promise<PessoaDTOResponse | null> {
    return await AuthRepository.login(login, senha);
  }
}