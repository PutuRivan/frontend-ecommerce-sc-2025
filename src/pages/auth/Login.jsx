import React from 'react'
import { Link } from 'react-router'
import LoginForm from '../../components/auth/login-form'

const Login = () => {
	return (
		<div className='grid place-items-center h-screen'>
			<div className='flex flex-col gap-5 items-center bg-base-300 p-5 rounded-xl'>
				<h1 className='text-3xl font-semibold'>Welcome Back!</h1>
				<LoginForm />
				<p>Don't have an account? <Link to="/register" className='link link-primary'>Register</Link></p>
			</div>
		</div>
	)
}

export default Login