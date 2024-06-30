import { useState } from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'

function Login() {
  const [currentState, setCurrentState] = useState('Login')

  return (
    <div className='login-container'>
      <div className='login'>
        <div className='login-title'>
          <h1>{currentState}</h1>
          <Link to='/'>
            <p>X</p>
          </Link>
        </div>
        <div className='login-input'>
          {currentState === 'Sign Up' ? (
            <input type='text' placeholder='Your Name' />
          ) : (
            <></>
          )}
          <input type='email' placeholder='Your Emai Address' />
          <input type='password' placeholder='Password' />
        </div>
        <div className='login-button'>
          <button>Continue</button>
        </div>
        <div className='login-detail'>
          {currentState === 'Sign Up' ? (
            <p>
              Alreay havce an account ?
              <span
                onClick={() => {
                  setCurrentState('Login')
                }}
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Continue to proceed.?
              <span
                onClick={() => {
                  setCurrentState('Sign Up')
                }}
              >
                Create an account
              </span>
            </p>
          )}
        </div>
        <div className='login-policy'>
          <input type='checkbox' />
          <p>By Continuing, i agree to the term of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login
