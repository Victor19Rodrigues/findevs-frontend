import React from 'react'
import api from './api'
import history from '../history'
import {Redirect} from 'react-router-dom'

export const TOKEN_KEY = "findevs-Token"

export const isAuthenticaded = () => localStorage.getItem('findevs-token') !== null;

export const getToken = () => localStorage.getItem("findevs-Token");

export async function login(values)
{
  alert('login chamado')
  const response = await api.post('/login', values)
  const {token} = response.data;
  if(token){
    localStorage.setItem('findevs-token', token)
    history.push('/')   
    }
};

export const logout = () => {
  localStorage.removeItem('findevs-token')
}
