import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import ItemCard from './item-card'

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
				<div className='space-y-4 mt-4 h-[70vh] overflow-y-auto scrollBar px-3'>
					<ItemCard />
					<ItemCard />
					<ItemCard />
				</div>

				<div className='mt-10'>
					<div className='flex justify-between'>
						<p className='font-semibold'>SubTotal</p>
						<p>Rp 30.000</p>
					</div>
					<div>
						<button className='btn btn-primary w-full'>Checkout</button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default NavbarCart