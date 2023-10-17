import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../components/background';
import Header from '../components/header';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from "../utilities/firebase-config";

export default function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleLogIn = async () => {
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
      <Background />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center-">
          <div className="form flex column a-center j-center">
            <div className="title">
            <h3>Login</h3>
          </div>
          <div className='container flex column'>
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="email"
              value={formValues.email}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="password"
                value={formValues.password}
            />
            <button onClick={handleLogIn}>Login</button>
            </div>  
          </div>
        </div>
      </div>
    </Container>
  );
}


const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        border-radius: 10px;
        width: 45vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 1.5rem;
          input {
            padding: 0.5rem 1rem;
            width: 20rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

