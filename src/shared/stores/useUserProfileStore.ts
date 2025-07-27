import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IUserProfile } from "~/types/model";

interface IUserProfileStore {
  userProfile?: IUserProfile;
  actions: {
    setUserProfile: (userProfile: IUserProfile) => void
  }
}

export const useUserProfileStore = create<IUserProfileStore>()(persist((set) => ({
  actions: {
    setUserProfile:
      (userProfile: IUserProfile) => set((prev) => ({ userProfile }))
  }
}), {
  name: 'user-profile',
  storage: createJSONStorage(() => AsyncStorage),
  partialize(state) {
    return {
      userProfile: state.userProfile,
    };
  },
}));

export const useUserProfileActions = () => useUserProfileStore(state => state.actions);
