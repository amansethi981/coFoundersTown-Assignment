import { API } from "../../config";
import axios from "axios"

export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
export const signout=async(next)=>{
  if(typeof window!=="undefined"){
    localStorage.removeItem("jwt");
    next();
    try{
    const {data}=await axios.get(`http://localhost:8000/api/signout`)
    console.log(data);
    return data;
    }
    catch(err){
      console.log(err);
    }
  }
}

export const getallarticle = () => {
  return fetch(`${API}/home`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
