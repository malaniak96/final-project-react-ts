import axios from "axios";

import {API_KEY, baseURL} from "../constants";

const axiosService = axios.create({baseURL, headers: {Authorization:API_KEY}})


export {
axiosService
}
