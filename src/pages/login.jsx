import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../components/background';
import Header from '../components/header';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from "../utilities/firebase-config";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues; 
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate('/');
    }
  })

  return (
    <Container>
    </Container>
  );
}


const Container = styled.div`
position: relative;
.content {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
}
.body {
  gap: 1rem;
}
.text {
  gap: 1rem;
  text-align: center;
  font-size: 1.5rem;
  h1 {
    padding: 0 25rem;
  }
}
.form {
  display: grid;
  grid-template-columns: ${({ showPassword }) =>
    showPassword ? '1fr 1fr' : '2fr 1fr'};
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
`;
