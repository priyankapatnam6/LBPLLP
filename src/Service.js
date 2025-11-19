import axios from "axios";

export const REACT_APP_CONTROL_SERVICE = "http://localhost:8080";

export const getLocations = () => {
    console.log("welcome1");

  return axios.get(`${REACT_APP_CONTROL_SERVICE}/locations`);};


