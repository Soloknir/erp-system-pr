import type { ILoginDto } from '@/types';
import type HttpService from '../http/http-service';



const auth = (http: HttpService) => {
  return {
    async login(options: ILoginDto) {
      return await http.post('/auth/login', options);
    }
  }
}

export default auth
