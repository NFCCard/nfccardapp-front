import api from "api";
import { useQuery } from "react-query";

const useVcf = (username) => {
	const { data, isLoading, status, refetch } = useQuery(
		"getUserVcf",
		() => api.get.getUserVcf({ username }),
		{
			retry: 0,
		}
	);
	return { data, isLoading, status, refetch };
};
export { useVcf };
