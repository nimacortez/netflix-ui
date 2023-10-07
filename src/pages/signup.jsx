import React from 'react';
import styled from 'styled-components';
import Background from '../components/background';
import Header from '../components/header';

export default function Signup() {
  return (
    <Container>
      <Background />
      <Header />
      <div className="body flex column a-center j-center">
        <div className="text flex column"> 
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
    </Container>
  )
}

const Container = styled.div``;
