import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});
export default AXIOS;
