import axios from "axios";

const instance = axios.create({
  baseURL: "https://mine-cart-backend-detx.vercel.app",
});

export default instance;
