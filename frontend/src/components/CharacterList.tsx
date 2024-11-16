import { type FC, useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import Pagination from "./Pagination";

const CharacterList: FC<{ onSelectCharacter: (name: string) => void }> = ({
	onSelectCharacter,
}) => {
	const [page, setPage] = useState(1);
	const { data, isLoading, error } = useCharacters(page);

	if (isLoading) return <p className='text-center text-gray-500'>Loading characters...</p>;
	if (error) return <p className='text-center text-red-500'>Error fetching characters.</p>;

	return (
		<div className='p-4'>
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-4'>
				{data.map((character: { name: string }) => (
					<li
						key={character.name}
						className='p-4 border rounded shadow hover:bg-gray-200 cursor-pointer'
						onClick={() => onSelectCharacter(character.name)}>
						{character.name}
					</li>
				))}
			</ul>
			<Pagination currentPage={page} onPageChange={(newPage) => setPage(newPage)} />
		</div>
	);
};

export default CharacterList;
