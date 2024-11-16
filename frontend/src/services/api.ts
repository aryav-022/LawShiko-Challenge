import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_SERVER_URL;

export const api = axios.create({
	baseURL: API_BASE_URL,
});

export const fetchCharacters = async (page: number, query?: string) => {
	const response = await api.get(`characters?page=${page}&startswith=${query}`);
	return response.data;
};

export const fetchCharacter = async (name: string) => {
	const response = await api.get(`character/${name}`);
	console.log(response);
	return response.data;
};

export const fetchEpisodesByCharacter = async (name: string) => {
	const response = await api.get(`episodes?name=${name}`);
	return response.data;
};
