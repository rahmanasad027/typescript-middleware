import { END_POINTS, REQUEST_TYPE } from "../../lib/constants";
import { apiCaller } from "../apiCaller";
import { ILogin as IProps } from "../../components/Login";

export function getLogin(data: IProps) {
  return apiCaller({
    // <--- added return
    method: REQUEST_TYPE.POST,
    url: END_POINTS.GET_LOGIN,
    data: data as IProps,
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
