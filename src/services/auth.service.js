import axios from "axios";

class AuthService {
    login(loginModel) {
        return axios.post('auth/login', {
            'email': loginModel.email,
            'password': loginModel.password,
            'stayInSystem': loginModel.stayInSystem
        }).then(response => {
            if (response.status === 200) {
                localStorage.setItem('currentUser',
                    JSON.stringify(response.data))
            }
            return response.data;
        });
    }

    register(registerModel) {
        return axios.post("auth/register", {
            'email': registerModel.email,
            'password': registerModel.password,
            'confirmPassword': registerModel.confirmPassword,
            'personalDataAgreement': registerModel.personalDataAgreement
        });
    }

    logout() {
        axios.post('auth/logout').then(response => {
            if (response.status === 200) {
                localStorage.removeItem('currentUser')
            }
        })
    }
}

export default new AuthService();