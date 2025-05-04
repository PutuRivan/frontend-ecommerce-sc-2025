import { History, LogOut, MapPin, User } from 'lucide-react'
import React from 'react'
import SidebarLink from './sidebar-link'

const UserSidebar = () => {
  return (
    <div className='flex flex-col gap-5 justify-evenly h-[89vh] bg-base-200 w-1/6 px-5'>
      <figure className="flex flex-col">
        <img
          alt="Tailwind CSS Navbar component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          className='rounded-full w-24 h-24 mx-auto'
        />
        <figcaption className='text-center text-2xl font-bold'>Putu Rivan</figcaption>
      </figure>
      <SidebarLink />

      <button className='btn btn-secondary w-full'>
        <LogOut />
        <span>Logout</span>
      </button>
    </div>
  )
}

export default UserSidebar