import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';


// function for getting the cookies

class AuthService {
    getJwt() { 
        const token = Cookies.get('JWT');
        return token;
    }

    getUserId() {
        const token = this.getJwt();
        console.log(token)
        if(token) {
            const decoded =  jwtDecode(token);
            const userId = decoded.userId
            console.log(userId)
            return userId
        } else {
            return null;
        }
    }

    isLoggedIn() {
        const token = this.getJwt()
        if (token) {
            const decoded = jwtDecode(token)
            const isExpired = decoded.exp < (Date.now() / 1000)
            return token && !isExpired ? true : false;
        } else {
            return false;
        }
    }
}

export default new AuthService;