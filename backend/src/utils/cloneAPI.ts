import { Character } from "../models/Character";

export const cloneAPI = async () => {
	const numOfDocuments = await Character.countDocuments();
	if (numOfDocuments !== 0) return;

	let url = `https://rickandmortyapi.com/api/character/`;

	do {
		let data = await fetch(url).then((res) => res.json());

		url = data.info.next;

		data.results.forEach((entry: JSON) => {
			const character = new Character(entry);
			character.save();
		});
	} while (url);
};
