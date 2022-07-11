import axios from "axios";

import { BASE_URL, fetchSpells } from "./testAxios";

jest.mock("axios");

describe("fetchUsers", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const spells = [
        {
          index: "acid-arrow",
          name: "Acid Arrow",
          url: "/api/spells/acid-arrow",
        },
        {
          index: "acid-splash",
          name: "Acid Splash",
          url: "/api/spells/acid-splash",
        },
      ];
      axios.get.mockResolvedValueOnce(spells);

      // when
      const result = await fetchSpells();

      console.log(result);

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/spells`);
      expect(result).toEqual(spells);
    });
  });

 
  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      // given
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchSpells();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/spells`);
      expect(result).toEqual([]);
    });
  });
});