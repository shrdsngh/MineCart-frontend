import axios from "axios";

const instance = axios.create({
  baseURL: "https://mine-cart-backend-uz4r.vercel.app//",
});

export default instance;
