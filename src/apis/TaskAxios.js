import axios from 'axios';

var TaskAxios = axios.create({
  baseURL: 'https://www.dnd5eapi.co/api',
  /* other custom settings */
});

export default TaskAxios;
