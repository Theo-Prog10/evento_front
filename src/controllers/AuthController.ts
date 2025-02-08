import { AuthService } from "@/services/AuthService";
import { PessoaDTOResponse } from "@/models/PessoaDTOResponse";

export class AuthController {
  static async login(login: string, senha: string): Promise<PessoaDTOResponse | null> {
    return await AuthService.login(login, senha);
  }
}