import {http} from '../service/http';

class ReqresApi {
    private API: string = 'https://reqres.in/api';
    private USERS: string = `${this.API}/users`;

    public getUserList = () => {
        return http.get(this.USERS);
    }
}

export const ReqresApiService = new ReqresApi();
