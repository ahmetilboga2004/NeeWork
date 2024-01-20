// ESM
import axios from "../../../axios/dist/esm/axios.js";

export const getAllUser = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
