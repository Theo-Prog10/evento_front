import { PessoaDTOResponse } from "@/models/PessoaDTOResponse";
import { api } from "@/services/api";

export class AuthRepository {
  static async login(login: string, senha: string): Promise<PessoaDTOResponse | null> {
    try {
      const response = await api.get<PessoaDTOResponse>("api/login", {
        params: { login, senha },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }
}