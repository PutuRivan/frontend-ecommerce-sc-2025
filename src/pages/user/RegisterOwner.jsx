import AdminRegisterForm from '../../components/auth/admin-register-form'

export default function RegisterOwner() {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className="flex flex-col gap-5  bg-base-300 p-5 rounded-xl">
        <h1 className="text-3xl font-semibold text-center">Create Store</h1>
        <AdminRegisterForm />
      </div>
    </div>
  )
}
