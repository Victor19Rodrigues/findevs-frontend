import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  background: #fff;
  margin-top: 100px;
  padding: 0;
  width: 60vh;
   
`;

export const Form = styled.form`
  
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 45px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 0;
    margin-bottom: 20px;
    color: #494198
  }

  img {
    width: 350px;
    height: 160px;
    margin: 10px 0 40px;
  }

  p {
    font-size: 22px;
    color: #999;
    margin-bottom: 15px;    
    padding: 10px;    
    text-align: center;
  }
  
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 20px 20px;
    color: #777;
    font-size: 20px;    
    width: 400px;
    border: 2px solid #494198;
    border-radius: 20px;
    transition: 0.2s;

    &::placeholder {
      color: #999;
      text-align: center;
      font-size: 17px;
    }
  }

  input:focus{
    border-color: #494198;
    border: 3px solid #494198;
    width: 500px;

  }



  button {
    color: #fff;
    margin-top: 25px;
    font-size: 20px;
    background: #494198;
    height: 56px;
    border: 0;
    border-radius: 20px;
    width: 400px;
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover{
    width: 490px;
    background: #8e4dff;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 20px;
    font-weight: bold;
    color: #494198;
    text-decoration: none;
  }



`;
