import { Schema, model } from "mongoose";

const CharacterSchema = new Schema({
	id: {
		type: Number,
		unique: true,
	},
	name: String,
	status: String,
	species: String,
	type: String,
	gender: String,
	origin: {
		name: String,
		url: String,
	},
	location: {
		name: String,
		url: String,
	},
	image: String,
	episode: [String],
	url: String,
	created: String,
});

const Character = model("Character", CharacterSchema);

export { Character };
