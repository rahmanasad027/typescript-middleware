import axios from "axios";

interface Params {
  method: string;
  url: string;
  data?: any;
}

export function apiCaller({ method, url, data }: Params) {
  return axios({
    method,
    url,
    data,
    headers: {
      Authorization: "token 6915953acf827475ce611bf14fd9820f51fbd454",
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.data.results)
    .catch((e) => console.log(e));
}
