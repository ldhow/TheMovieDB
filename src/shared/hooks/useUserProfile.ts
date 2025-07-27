import { useQuery } from "@tanstack/react-query";
import { getProfile } from "~/services/serviceAPIs";
import { IUserProfileResponse } from "~/types/api";

const useUserProfile = () => {

  return useQuery<IUserProfileResponse, EvalErrorConstructor[], IUserProfileResponse, ['profile']>({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export default useUserProfile;
