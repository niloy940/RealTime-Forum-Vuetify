class AppStorage{
    static storeToken(token) {
        localStorage.setItem('token', token);
    }

    /*static storeUser(user, token) {
        localStorage.setItem('user', user);
    }

    static store(user, token) {
        this.storeToken(token);
        this.storeUser(user);
    }*/

    static clear() {
        localStorage.removeItem('token');
    }

    static getToken() {
        return localStorage.getItem('token');
    }
}

export default AppStorage;
