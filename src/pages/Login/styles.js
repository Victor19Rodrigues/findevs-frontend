import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  img {
      background: #fff;
      width: 250px
  }
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 86px;
    margin-bottom: 15px;
    padding: 15px 20px;
    color: #777;
    font-size: 20px;
    width: 100%;
    text-align: center;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #eee;

   
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background: #5a2ea6;
    height: 56px;
    border: none;
    border-radius: 5px;
    width: 100%;
    cursor: ponter;
  }
  button[type=submit]:hover {
  background: #8e4dff;
  cursor: ponter;
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #eee;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;