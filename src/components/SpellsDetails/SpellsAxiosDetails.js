import axios from "axios";
export const BASE_URL = "https://www.dnd5eapi.co/api";

export const fetchSpells = async (index) => {
  try {
    return await axios.get(`${BASE_URL}/spells/` + index);
  } catch (e) {
    return [];
  }
};
