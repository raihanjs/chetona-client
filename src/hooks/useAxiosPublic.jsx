import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://chetona-server-eight.vercel.app",
});

export default function useAxiosPublic() {
  return axiosPublic;
}
