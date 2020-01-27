import React, { Component } from "react";
import { Link } from "react-router-dom";
import {FaGithubAlt, FaKey} from 'react-icons/fa'

import logo from '../../assets/Logo3.png'

import { Form, Container } from "./styles";

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  render() {
    return (
      <Container>
         
        <Form onSubmit={this.handleSignUp}>
         <img src={logo} alt='logo'/>
          
           <hr />
         
          <input
            type="text"
            placeholder="Usuário no GitHub"
            onChange={e => this.setState({ github_user: e.target.value })}
          />
        <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Login</button>
         
                  </Form>
      </Container>
    );
  }
}

export default Login;