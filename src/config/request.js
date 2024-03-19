import axios from "axios";
import { loadState } from "./storage";

const request = axios.create({ baseURL: "http://localhost:8080/" });
const token = loadState("user")
const PostData = (config) => {
  setTimeout(() => {
    if (
      config.url !== "/login" &&
      config.url !== "/register" &&
      config.method == "post"
    ) {
      axios
        .post("http://localhost:8080/all", JSON.parse(config.data))
        .then((res) => {
          console.log(res.data);
        });
    }
  }, 500);

  return;
};

request.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${token?.accessToken}`;
    PostData(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { request };
