import http from '../http-common'
class UserDataService{
    create (data) {
        return http.post('/user', data)
    }

    postLogin (data) {
        return http.post('/user/login', data)
    }

    getLogout () {
        return http.get('/user/logout')
    }

}
export default new UserDataService()