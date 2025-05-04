import { History, MapPin, User } from 'lucide-react'
import React from 'react'

const link = [
	{
		name: 'Profile',
		path: '/profile',
		icon: <User />
	},
	{
		name: 'Alamat Saya',
		path: '/address',
		icon: <MapPin />
	},
	{
		name: 'History',
		path: '/history',
		icon: <History />
	},
]

const SidebarLink = () => {
	return (
		<ul className='menu gap-5 bg-base-200 w-56'>
			{link.map((link) => (
				<li>
					<button className=''>
						{link.icon}
						<span>{link.name}</span>
					</button>
				</li>
			))}
		</ul>
	)
}

export default SidebarLink