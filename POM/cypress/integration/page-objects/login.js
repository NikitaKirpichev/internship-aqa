class Login{
    getUserName(){
        return cy.get("input[name='username']")
    }

    getPassword(){
        return cy.get("input[name='password']")
    }

    loginButton(){
        return cy.get("button[type='submit']")
    }
}

export default Login;