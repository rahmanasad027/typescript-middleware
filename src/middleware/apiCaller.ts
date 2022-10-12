import axios from "axios";
// import { camelCase } from "change-case";
// import { snakeCase } from "snake-case";
// import * as queryString from "query-string";
interface Params {
  method: string;
  url: string;
  data?: any;
  isTransformRequestRequired?: boolean;
}

export function apiCaller({
  method,
  url,
  data,
}: // isTransformRequestRequired = true,
Params) {
  return axios({
    method,
    url,
    data,
    // transformRequest: [
    //   (reqData) =>
    //     isTransformRequestRequired
    //       ? JSON.stringify(snakeCase(reqData))
    //       : reqData,
    // ],
    // paramsSerializer: (queryParams) =>
    //   queryString.stringify(snakeCase(queryParams)),
    // transformRequest: [
    //   (reqData) => {
    //     const req = JSON.stringify(reqData);
    //     const req1 = snakeCase(req);
    //     return req1;
    //   },
    // ],
    // transformResponse: [(respData) => camelCase(respData)],
    headers: {
      Authorization: "token 6915953acf827475ce611bf14fd9820f51fbd454",
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.data.results)
    .catch((e) => console.log(e));
}
