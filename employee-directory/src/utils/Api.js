import axios from "axios";

function userDirectory() {
  return axios.get("https://randomuser.me/api/?results=100");
}

export default {
  userDirectory,
};
