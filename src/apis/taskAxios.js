import axios from "axios";

const taskAxios = axios.create({
  baseURL: "https://www.dnd5eapi.co/api",
});

export default taskAxios;
