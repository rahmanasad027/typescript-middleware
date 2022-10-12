import { END_POINTS, REQUEST_TYPE } from "../../lib/constants";
import { ILogin as IProps } from "../../components/Login";
import { apiCaller } from "../apiCaller";

export function getLogin(data: IProps["Login"]) {
  return apiCaller({
    // <--- added return
    method: REQUEST_TYPE.POST,
    url: END_POINTS.GET_LOGIN,
    data: data as IProps["Login"],
    // isTransformRequestRequired: true,
  });
}

export function getAllRiders() {
  return apiCaller({
    // <--- added return
    method: REQUEST_TYPE.GET,
    url: END_POINTS.ALL_RIDERS,
    // isTransformRequestRequired: true,
  });
}
