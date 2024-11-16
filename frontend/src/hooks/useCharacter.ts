import { useQuery } from "react-query";
import { fetchCharacter } from "../services/api";

export const useCharacter = (name: string) => {
	return useQuery([name], () => fetchCharacter(name), {
		keepPreviousData: true, // Caching for better performance
	});
};
