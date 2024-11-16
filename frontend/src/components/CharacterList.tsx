import { type FC, useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import Pagination from "./Pagination";
import { Character } from "../types";
import { Link } from "react-router-dom";

const CharacterList: FC = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading, error } = useCharacters(page);

	if (isLoading) return <p className='text-center text-gray-500'>Loading characters...</p>;
	if (error) return <p className='text-center text-red-500'>Error fetching characters.</p>;

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-3xl font-bold text-center mb-6 text-red-500'>Character Explorer</h1>
			<div className='p-4'>
				<ul className='grid grid-cols-2 gap-4 md:grid-cols-4 list-none'>
					{data.map((character: Character) => (
						<li
							key={character.id}
							className='p-4 border rounded shadow hover:bg-gray-200 cursor-pointer'>
							<Link to={`/characters/${character.name}`}>
								<img src={character.image} alt='' loading='lazy' />
								{character.name}
							</Link>
						</li>
					))}
				</ul>
				<Pagination currentPage={page} onPageChange={(newPage) => setPage(newPage)} />
			</div>
		</div>
	);
};

export default CharacterList;
