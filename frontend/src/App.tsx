import { useState, type FC } from "react";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";

const App: FC = () => {
	const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-3xl font-bold text-center mb-6'>Character Explorer</h1>
			{!selectedCharacter ? (
				<CharacterList onSelectCharacter={setSelectedCharacter} />
			) : (
				<div>
					<CharacterDetails characterName={selectedCharacter} />
					<button
						onClick={() => setSelectedCharacter(null)}
						className='mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600'>
						Back to List
					</button>
				</div>
			)}
		</div>
	);
};

export default App;
