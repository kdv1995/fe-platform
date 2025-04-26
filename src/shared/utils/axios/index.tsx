import axios from "axios";
import { API_URL } from "@/shared/config/vars";
export const client = axios.create({
  baseURL: API_URL,
});
