import axios from "axios";

const api = axios.create({
    baseURL: "https://fake-server-nine.vercel.app/"
})

export default api