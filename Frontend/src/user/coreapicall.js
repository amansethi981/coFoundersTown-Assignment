import { API } from "../../src/backend";
import axios from "axios";

// export const signup = user => {
//     return fetch(`${API}/signup`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(user.name)
//     })
//       .then(response => {
//         return response.json();
//       })
//       .catch(err => console.log(err));
//   };

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

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

export const signup = async ({ values }) => {
  const { data } = await axios.post(`http://localhost:8000/api/signup`, {
    name: values.name,
    age: parseInt(values.age),
    email: values.email,
    userame: values.userame,
    password: values.password,
  });
  console.log(data);
  return data;
};
export const signin = async ({ values }) => {
  const { data } = await axios.post(`http://localhost:8000/api/signin`, {
    email: values.email,
    password: values.password,
  });
  console.log(data);
  // localStorage.setItem("jwt",data.token);
  return data;
};

export const createArticle = async ({ values }) => {
  const { data } = await axios.post(`http://localhost:8000/api/publish`, {
    description: values.description,
  });
  console.log(data);
  return data;
};
