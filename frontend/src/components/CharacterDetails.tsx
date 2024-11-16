import React from "react";
import { useEpisodes } from "../hooks/useEpisodes";

const CharacterDetails: React.FC<{ characterName: string }> = ({ characterName }) => {
	const { data, isLoading, error } = useEpisodes(characterName);

	if (isLoading) return <p className='text-center text-gray-500'>Loading episodes...</p>;
	if (error) return <p className='text-center text-red-500'>Error fetching episodes.</p>;

	return (
		<div className='p-4'>
			<h2 className='text-2xl font-bold text-center'>{data.character}</h2>
			<ul className='mt-4 space-y-2'>
				{data.episodes.map((episode: number) => (
					<li key={episode} className='p-2 bg-gray-100 rounded shadow'>
						Episode {episode}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CharacterDetails;
