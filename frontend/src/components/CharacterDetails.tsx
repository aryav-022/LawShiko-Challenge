import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

const CharacterDetails: React.FC = () => {
	const { name } = useParams();
	const { data: character, isLoading, error } = useCharacter(name as string);

	if (character) console.log(character);

	if (isLoading) return <p className='text-center text-gray-500'>Loading details...</p>;
	if (error) return <p className='text-center text-red-500'>Error loading details.</p>;

	return (
		<>
			<Link
				to='/'
				className='my-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600'>
				Back to List
			</Link>

			<div className='grid grid-cols-2 gap-4 bg-gray-100 p-6 rounded-lg shadow-md justify-items-center'>
				<div className='flex justify-around w-full gap-4'>
					<div>
						<h2 className='text-2xl font-bold mb-4'>{character.name}</h2>
						<p className='text-gray-700'>ID: {character.id}</p>
						<p className='text-gray-700'>Status: {character.status}</p>
						<p className='text-gray-700'>Species: {character.species}</p>
						<p className='text-gray-700'>Type: {character.type}</p>
						<p className='text-gray-700'>Gender: {character.gender}</p>
						<p className='text-gray-700'>Origin: {character.origin.name}</p>
						<p className='text-gray-700'>Location: {character.location.name}</p>
					</div>

					<div>
						<img
							src={character.image}
							alt={character.name}
							className='w-56 rounded-md'
						/>
					</div>
				</div>

				<div>
					<h3 className='text-xl font-bold'>Episodes:</h3>
					<ul>
						{character.episode.map((episode: string, index: number) => (
							<li key={index} className='text-gray-700'>
								<Link to={episode} className='text-blue-500' target='_blank'>
									{episode}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default CharacterDetails;
