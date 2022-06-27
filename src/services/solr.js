import axios from "axios";

function search() {
    
    const api = axios.create({
      baseURL: "http://localhost:8983/solr/",
    });
    //api.defaults.headers["Content-Type"] = 'application/x-www-form-urlencoded'
  
   
    return api;
  }
  
export const api = search()