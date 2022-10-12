// import { ResourceLimits } from "worker_threads";

import { ResourceLimits } from "worker_threads";

// export type RidersData = {
//   count: number;
//   next: string;
//   previous: null;
//   per_page: number;
//   results: Array<Results>;
// };
export const BASE_URL = "https://do-rider.cheetay.pk/alerts_rider?page=1";
export const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "token 6915953acf827475ce611bf14fd9820f51fbd454",
  },
};

export type RidersData = {
  id: number;
  name: string;
  mobileNumber: string;
  profileImage: null;
  lastAlert: LastAlert;
};
type LastAlert = {
  id: number;
  title: string;
  isSeen: boolean;
  description: string;
  createdAt: string;
  updatedAt: string;
  rider: number;
};

// export type Request = {
//   ALL_RIDERS: string;
// };

// export type RidersData = {
//   count: number;
//   next: string;
//   previous: null;
//   perPage: number;
//   results: Results;
// };
