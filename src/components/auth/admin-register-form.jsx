import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/auth-context';
import { useNavigate } from 'react-router';

export default function AdminRegisterForm() {
  const { user, logout } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('store_name', data.store_name);
      formData.append('store_description', data.store_description);
      formData.append('store_picture', data.store_picture[0]);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/store/new/${user.id_user}`, {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
        credentials: 'include',
        body: formData,

      })
      const responseConvert = await response.json();
      if (!responseConvert.success) {
        return new Error(responseConvert.message);
      }
      logout();
      navigate('/login');
    } catch (error) {

    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-[350px]"
    >
      <label className="floating-label">
        <span>Store Name</span>
        <input
          {...register('store_name')}
          type="text"
          placeholder="store name"
          className="input input-md w-full"
        />
      </label>
      <p>{errors.store_name?.message}</p>
      <label className="floating-label">
        <span>Store Description</span>
        <input
          {...register('store_description')}
          type="text"
          placeholder="store description"
          className="input input-md w-full"
        />
      </label>
      <p>{errors.store_description?.message}</p>
      <fieldset className="fieldset">
        <input
          {...register('store_picture')}
          type="file"
          className="file-input"
        />
        <label className="label">Max size 2MB</label>
      </fieldset>
      <p className="text-sm text-error">{errors.store_picture?.message}</p>
      <button type="submit" className="btn btn-primary">
        Register Owner
      </button>
    </form>
  )
}
