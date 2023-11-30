import {API_KEY, baseURL} from "../constants";

import axios from "axios";


const axiosService = axios.create({baseURL, headers: {Authorization:API_KEY}})


export {
axiosService
}
