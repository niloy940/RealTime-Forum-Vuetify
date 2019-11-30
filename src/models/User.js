class User {
    static login() {
        this.form
        .post("http://127.0.0.1:8000/api/login")
        .then(({ data }) => {
          console.log(data);
        })
        .catch(error => console.log(error));
    }
}

export default User;
