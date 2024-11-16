import { useQuery } from "react-query";
import { fetchEpisodesByCharacter } from "../services/api";

export const useEpisodes = (name: string) => {
	return useQuery(["episodes", name], () => fetchEpisodesByCharacter(name), {
		enabled: !!name, // Fetch only when a name is provided
	});
};
