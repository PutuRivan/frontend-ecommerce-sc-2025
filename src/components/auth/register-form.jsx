import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAuth } from '../../context/auth-context';

const registerSchema = z.object({
  user_name: z.string()
    .regex(/^[a-zA-Z\s]+$/, {
      message: 'Hanya huruf dan spasi yang diperbolehkan'
    })
    .nonempty({ message: 'Nama pengguna wajib diisi' }),

  user_birthday: z.coerce.date({
    required_error: 'Tanggal lahir wajib diisi',
    invalid_type_error: 'Format tanggal tidak valid'
  }),

  user_email: z.string()
    .email({ message: 'Email tidak valid' })
    .nonempty({ message: 'Email wajib diisi' }),

  user_password: z.string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, {
      message:
        'Password minimal 8 karakter, mengandung huruf kecil, huruf besar, dan angka'
    })
    .nonempty({ message: 'Password wajib diisi' })
});


const RegisterForm = () => {
  const { signUp } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    const response = await signUp(data);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-[350px]">
      <label className="floating-label">
        <span>Your Username</span>
        <input
          {...register('user_name')}
          type="text"
          placeholder="Username"
          className="input input-md w-full"
        />
      </label>
      <p>{errors.user_name?.message}</p>
      <label className="floating-label">
        <span>Your Birthday</span>
        <input
          {...register('user_birthday')}
          type="date"
          placeholder="Birthday"
          className="input input-md w-full"
        />
      </label>
      <p>{errors.user_birthday?.message}</p>
      <label className="floating-label">
        <span>Your Email</span>
        <input
          {...register('user_email')}
          type="email"
          placeholder="email@example.com"
          className="input input-md w-full"
        />
      </label>
      <p>{errors.user_email?.message}</p>
      <label className="floating-label">
        <span>Your Password</span>
        <input
          {...register('user_password')}
          type="password"
          placeholder="Password"
          className="input input-md w-full"
        />
      </label>
      <p>{errors.user_password?.message}</p>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Your Profile</legend>
        <input {...register('user_profile')} type="file" className="file-input" />
        <label className="label">Max size 2MB</label>
      </fieldset>
      <p>{errors.user_profile?.message}</p>
      <button type='submit' className="btn btn-primary">Register</button>
    </form>
  );
};

export default RegisterForm;
