import React from 'react'

const LoginForm = () => {
    return (
        <form action="" className='flex flex-col gap-5 w-[350px]'>
            <label className="floating-label">
                <span>Your Email</span>
                <input type="text" placeholder="email@example.com" className="input input-md w-full" />
            </label>
            <label className="floating-label">
                <span>Your Password</span>
                <input type="password" placeholder="password" className="input input-md w-full" />
            </label>
            <div className='flex justify-between'>
                <label className="label">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-md" />
                    Remember me
                </label>
                <a className="link link-primary">Forget Password</a>
            </div>
            <button className='btn btn-primary'>Login</button>
        </form>
    )
}

export default LoginForm