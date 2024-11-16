import { useQuery } from "react-query";
import { fetchCharacters } from "../services/api";

export const useCharacters = (page: number) => {
	return useQuery(["characters", page], () => fetchCharacters(page), {
		keepPreviousData: true, // Caching for better performance
	});
};
