import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_END_POINT_SABEK_USER;

// axios.defaults.baseURL = process.env.REACT_APP_API_END_POINT_RAMADAN_IAM_USER;
// axios.defaults.baseURL = process.env.REACT_APP_API_End_Point_Weather;


export default axios