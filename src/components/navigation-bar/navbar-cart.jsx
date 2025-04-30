import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'

const NavbarCart = () => {
	return (
		<Sheet>
			<SheetTrigger role="button" className="btn btn-ghost btn-circle">
				<div className="indicator">
					<ShoppingCart />
					<span className="badge badge-sm indicator-item">8</span>
				</div>
			</SheetTrigger>
			<SheetContent side="right">
				<SheetHeader>
					<SheetTitle>Shopping Cart</SheetTitle>
				</SheetHeader>
				<p className='p-3'>Isi konten di sini</p>
			</SheetContent>
		</Sheet>
	)
}

export default NavbarCart