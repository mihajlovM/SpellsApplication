import axios from "axios";
import { getFromFavorites } from "../../utils/storage";

export const BASE_URL = "https://www.dnd5eapi.co/api";

export const fetchSpells = async () => {
  try {
    const savedSpells = getFromFavorites("fav");

    const arr = [];
    savedSpells.forEach((element) => {
      arr.push(axios.get(`${BASE_URL}/spells/${element}`));
    });

    /**
     * Not a reliable endpoint and therefore Promise.all was used parallelization of requests.
     * To explain why the endpoint with multiple query params was not used ↑ was a workaround
     */   
    console.log(arr)

    return await Promise.all(arr);

  } catch (e) {
    return [];
  }
};
