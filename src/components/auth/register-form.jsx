import React from 'react'

const RegisterForm = () => {
    return (
        <form action="" className='flex flex-col gap-5 w-[350px]'>
            <label className="floating-label">
                <span>Your Username</span>
                <input type="text" placeholder="email@example.com" className="input input-md w-full" />
            </label>
            <label className="floating-label">
                <span>Your Birthday</span>
                <input type="date" placeholder="email@example.com" className="input input-md w-full" />
            </label>
            <label className="floating-label">
                <span>Your Email</span>
                <input type="email" placeholder="email@example.com" className="input input-md w-full" />
            </label>
            <label className="floating-label">
                <span>Your Password</span>
                <input type="password" placeholder="Password" className="input input-md w-full" />
            </label>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Your Profile</legend>
                <input type="file" className="file-input" />
                <label className="label">Max size 2MB</label>
            </fieldset>
            <button className='btn btn-primary'>Register</button>
        </form>
    )
}

export default RegisterForm