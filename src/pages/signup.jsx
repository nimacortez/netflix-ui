import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Background from '../components/background';
import Header from '../components/header';

export default function Signup() {
  const navigate = useNavigate();
  return (
    <Container>
      <Background />
      <div className="content">
      <Header />
      <div className="body flex column a-center">
        <div className="text flex column" style={{margin: '20px'}}> 
          <h1>Unlimited movies, TV shows and more.</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h6>Ready to watch? Enter your email to create your membership.</h6>
        </div>
        <div className="form">
          <input type="email" placeholder="Email Address" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Get Started</button>
        </div>
        <button>Log In</button>
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
    }
`;
