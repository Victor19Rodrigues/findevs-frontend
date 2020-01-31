import React, { Component, Text } from "react";
import { Link } from "react-router-dom";

 
import { Form, Container } from "./styles";

import Logo from '../../assets/Logo3.png'

class SignUp extends Component {
  state = {
    github_user: "",
    password: "",
    confirmPassword: "",
    
  };

  render() {
    return (
      <Container>
        
        <Form >        
        <img src={Logo}/>
        <h1>Novo Dev</h1>    
          <input
            type="text"
            placeholder="Usuário no Github"
            onChange={e => this.setState({ github_user: e.target.value })}
          />
          <input
            type="password"
            placeholder="Crie uma Senha Secreta"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirme sua Senha Secreta"
            onChange={e => this.setState({ confirmPassword: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
        <hr />
          <p className="cadasatrado"> Já se cadastrou? </p>
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default SignUp;