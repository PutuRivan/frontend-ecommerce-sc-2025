import React from 'react'
import { Link } from 'react-router'
import RegisterForm from '../../components/auth/register-form'

const Register = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='flex flex-col gap-5 items-center bg-base-300 p-5 rounded-xl'>
        <h1 className='text-3xl font-semibold'>Create Your Account!</h1>
        <RegisterForm />
        <p>Already have an account? <Link to="/login" className='link link-primary'>Login</Link></p>
      </div>
    </div>
  )
} 

export default Register