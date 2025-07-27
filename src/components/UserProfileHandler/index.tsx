import { FC, ReactNode, useEffect } from "react";
import useUserProfile from "~/shared/hooks/useUserProfile";
import {
  useUserProfileActions,
  useUserProfileStore,
} from "~/shared/stores/useUserProfileStore";
import { isShallowDifferent } from "~/utils";

interface IUserProfileHandlerProps {
  children: ReactNode;
}

const UserProfileHandler: FC<IUserProfileHandlerProps> = ({ children }) => {
  const { data, isFetched } = useUserProfile();
  const { setUserProfile } = useUserProfileActions();
  const { userProfile } = useUserProfileStore();

  useEffect(() => {
    if (isFetched && data && isShallowDifferent(data, userProfile)) {
      setUserProfile(data);
    }
  }, [data, isFetched]);

  return <>{children}</>;
};

export default UserProfileHandler;
