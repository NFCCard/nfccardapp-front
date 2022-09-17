import api from "api";
import { useQuery } from "react-query";

const useGetUserList = () => {
	const { data, isLoading, status, refetch } = useQuery("getUserList", api.get.getUserList, {
		retry: 0,
	});
	return { data, isLoading, status, refetch };
};
export { useGetUserList };
