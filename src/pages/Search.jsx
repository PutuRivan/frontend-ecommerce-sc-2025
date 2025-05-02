import React from 'react'
import { useParams } from 'react-router';
import Card from '../components/ui/card';

const Search = () => {
	const { keyword } = useParams();
	const decodedKeyword = decodeURIComponent(keyword);

	return (
		<>
			<div className='p-5'>
				<h1 className='text-3xl font-semibold'>Hasil Pencarian Untuk {decodedKeyword} ....</h1>
			</div>
			<div className='grid grid-cols-3 place-items-center gap-4 gap-y-10'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	)
}

export default Search