import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Background from '../components/background';
import Header from '../components/header';

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })
  return (
    <Container showPassword={showPassword}>
      <Background />
      <div className="content">
      <Header login/>
      <div className="body flex column a-center">
        <div className="text flex column a-center" style={{margin: '20px'}}> 
          <h1>Unlimited movies, TV shows and more.</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h6>Ready to watch? Enter your email to create your membership.</h6>
        </div>
        <div className="form text flex column a-center">
          <input type="email" placeholder="Email Address" name="email" value={formValues.email} onChange={(e) => setFormValues({...formValues,[e.target.name]: e.target.value,})
        } />
          {
            showPassword &&
          <input type="password" placeholder="Password" name="password" />}
          {
            !showPassword && 
          <button onClick={() => setShowPassword(true)}>Get Started</button>}
        </div>
        <button>Sign Up</button>
      </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative; 
    .content {
      position: absolute; 
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.5);
      height: 100vh;
      width: 100vw;
      display: grid; 
      grid-template-rows: 15vh 85vh;
      .body {
        gap: 1rem;
        .text {
          gap: 1rem; 
          text-align center; 
          font-size: 1.5rem;
          h1 {
            padding: 0 25 rem; 
          }
        }
        .form {
          display: grid;
          grid-template-columns: ${({ showPassword }) =>
            showPassword ? "1fr 1fr" : "2fr 1fr"};
          width: 60%;
          input {
            color: black;
            border: none;
            padding: 1.5rem;
            font-size: 1.2rem;
            border: 1px solid black;
            &:focus {
              outline: none;
            }
          }
          button {
            padding: 1.5rem 1.5rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            font-weight: bolder;
            font-size: 1.35rem;
            border-radius: 0.55rem;
            }
          }
          button {
            padding: 0.5rem 1.5rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.3rem;
            font-weight: bolder;
            font-size: 1.35rem;
          }
      }
    }
`;
