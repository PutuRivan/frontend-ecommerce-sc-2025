import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
	email: z.string().email({ message: 'Invalid email' }),
	password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
})

const LoginForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-[350px]">
			<label className="floating-label">
				<span>Your Email</span>
				<input
					{...register('email')}
					type="text"
					placeholder="email@example.com"
					className="input input-md w-full"
				/>
			</label>
			<p className='text-sm text-error'>{errors.email?.message}</p>
			<label className="floating-label">
				<span>Your Password</span>
				<input
					{...register('password')}
					type="password"
					placeholder="password"
					className="input input-md w-full"
				/>
			</label>
			<p className='text-sm text-error'>{errors.password?.message}</p>
			<div className="flex justify-between">
				<label className="label">
					<input
						type="checkbox"
						defaultChecked
						className="checkbox checkbox-md"
					/>
					Remember me
				</label>
				<a className="link link-primary">Forget Password</a>
			</div>
			<button type="submit" className="btn btn-primary">Login</button>
		</form>
	);
};

export default LoginForm;