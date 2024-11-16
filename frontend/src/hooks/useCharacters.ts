import { useQuery } from "react-query";
import { fetchCharacters } from "../services/api";

export const useCharacters = (page: number, query?: string) => {
	return useQuery(["characters", page, query], () => fetchCharacters(page, query), {
		keepPreviousData: true, // Caching for better performance
	});
};
