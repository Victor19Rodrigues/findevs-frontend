import React, { Component, Text, useState } from "react";
import {Link} from 'react-router-dom'
import { Form, Container } from "./styles";

//import {ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup'

import Logo from '../../assets/Logo3.png'
import {login} from '../../services/auth'



const LoginPage = () => {  
  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  const validations = yup.object().shape({
    github_user: yup.string().required(),
    password: yup.string().required()
  })

    return (

      <>
      <Container>
        
        <Form > 
        <img src={Logo}/>
          <h1>Login</h1>       
          <input
            type="text"
            placeholder="Usuário no Github"
            onChange={e => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Sua Senha Secreta"
            onChange={e => setPassword(e.target.value)}
          />
          
          <button type="submit" onSubmit={login}>Login</button>
        <hr />
          <p className="cadasatrado"> Ainda não se cadastrou? </p>
          <Link to="/signup">Criar uma Conta</Link>
        </Form>
      </Container>
       
      </>
    );
  
}

 


export default LoginPage;