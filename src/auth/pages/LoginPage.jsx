import React from 'react'
import { useNavigate } from 'react-router'

export const LoginPage = () => {

  const navigation = useNavigate();

  const onLogin = () => {
    navigation('/marvel',{
      replace: true
    });
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button 
        className='btn btn-primary'
        onClick={ onLogin }  
      > 
        Login
      </button>
    </div>
  )
}
