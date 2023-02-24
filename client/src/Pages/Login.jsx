import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import styled from "styled-components";
import {mobile} from "../responsive";

const Login=()=>{
  const[detail,setDetail] = useState({
    username: "",
    password: "",
  });

  const inputEvent=(event)=>{
    const value = event.target.value;
    const detail = event.target.name;
    setDetail((preValue)=>{
      return{
        ...preValue,
        [detail]:value
      }
  })};

  const dispatch = useDispatch();
  const loginEvent=(event)=>{
    event.preventDefault();
    dispatch(login({
      username: detail.username,
      password: detail.password,
    }));
  }

  return(
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
        <Input placeholder="Enter your username" name="username" type="text" onChange={inputEvent} />
        <Input placeholder="Enter your password" name="password" type="password" onChange={inputEvent} />
        <Button onClick={loginEvent}>LOGIN</Button>
          <Link style={{textDecoration: "none"}}>FORGOT PASSWORD? CLICK HERE</Link>
          <Link style={{textDecoration: "none"}}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3)
  ),
  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  margin-right: 20%;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export default Login;