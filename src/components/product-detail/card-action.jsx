import { Minus, Plus } from 'lucide-react'
import React from 'react'

const CardAction = () => {
	return (
		<div className='card card-lg w-96 bg-base-300'>
			<div className='card-body '>
				<h1>Quantity</h1>
				<div className="border-y-2 border-black flex flex-row gap-4 w-full rounded-xl">
					<button
						type="button"
						className="border-l-2 hover:bg-accent cursor-pointer rounded-xl border-black w-full h-full p-2 flex justify-center"
					>
						<Minus size={24} />
					</button>
					<input
						id="quantity"
						type="text"
						placeholder='1'
						className="w-full text-center"
					/>
					<button
						type="button"
						className="border-r-2 hover:bg-accent cursor-pointer rounded-xl border-black w-full h-full p-2 flex justify-center"
					>
						<Plus size={24} />
					</button>
				</div>
				<div className='card-side'>
					<h3 className='text-lg flex flex-row justify-between items-end'>Subtotal <span>Rp. 30.000</span></h3>
				</div>
			</div>
			<div className='card-actions p-5'>
				<button className='btn btn-secondary w-full'>Buy Now</button>
				<button className='btn btn-primary w-full'>Add To Cart</button>
			</div>
		</div>
	)
}

export default CardAction