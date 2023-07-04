import axios from "axios";

const instance = axios.create({
  baseURL: "https://mine-cart-backend-debc.vercel.app/",
});

export default instance;
