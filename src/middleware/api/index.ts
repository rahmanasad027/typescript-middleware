import { END_POINTS, REQUEST_TYPE } from "../../lib/constants";
import { RidersData } from "../../lib/types";
import { apiCaller } from "../apiCaller";

export function getAllRiders() {
  apiCaller({
    method: REQUEST_TYPE.GET,
    url: END_POINTS.ALL_RIDERS,
  });
}
