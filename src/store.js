import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  token: "",
  setToken: (userToken, state) => {
    console.log(userToken, "userToken");
    set({ token: userToken });
    console.log(state.token, "state.token");
  },
});

const useToken = create(devtools(store));

export default useToken;
