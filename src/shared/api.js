import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001/';

const Get = async (cheese) => {

  await axios.get(cheese)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    })
}

const Post = async (cheese) => {

  await axios.post(cheese)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    })
}

export { Get, Post };