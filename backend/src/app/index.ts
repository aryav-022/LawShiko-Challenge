import express, { type Express, type Request, type Response } from "express";
import { cloneAPI } from "../utils/cloneAPI";
import { connect } from "mongoose";
import { Character } from "../models/Character";
import { CHARACTERS_PER_PAGE } from "../config";
import cors from "cors";

const PORT = 8000;

const app: Express = express();

app.use(
	cors({
		origin: process.env.CLIENT_URL,
	})
);

app.get("/", (req: Request, res: Response) => {
	res.send("Node.JS server to return Rick and Morty Data");
});

app.get("/characters", async (req: Request, res: Response) => {
	try {
		const page = parseInt(req.query.page as string) || 1;
		const startswith = req.query.startswith as string | undefined;

		const offset = (page - 1) * CHARACTERS_PER_PAGE;

		const query: Record<string, any> = {};
		if (startswith) {
			query.name = { $regex: `^${startswith}`, $options: "i" }; // Case-insensitive
		}

		const data = await Character.find(query).sort({ id: 1 }).skip(offset).limit(CHARACTERS_PER_PAGE);

		res.status(200).json(data);
	} catch (err) {
		console.error("Error fetching characters:", err);
		res.status(500).json({ message: "Internal server error", error: err });
	}
});

app.get("/episodes", async (req: Request, res: Response) => {
	try {
		const { name } = req.query;

		if (!name || typeof name !== "string") {
			res.status(400).json({ message: "Character name is required and must be a string." });
			return;
		}

		// Find the character by name (case-insensitive)
		const character = await Character.findOne({ name: { $regex: `^${name}$`, $options: "i" } });

		if (!character) {
			res.status(404).json({ message: `Character with name '${name}' not found.` });
			return;
		}

		res.status(200).json({
			character: character.name,
			episodes: character.episode,
		});
	} catch (err) {
		console.error("Error fetching episodes:", err);
		res.status(500).json({ message: "Internal server error", error: err });
	}
});

app.listen(PORT, async () => {
	await connect(process.env.MONGODB_URI as string);
	await cloneAPI();
	console.log(`Server running on port ${PORT}`);
});
