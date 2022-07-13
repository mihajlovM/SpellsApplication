import axios from "axios";

import { BASE_URL, fetchSpells } from "../SpellsDetails/SpellsAxiosDetails";

jest.mock("axios");

describe("fetchUsers", () => {
  describe("when API call is successful", () => {
    it("should return spell", async () => {
      // given
      const spell = {
        index: "acid-arrow",
        name: "Acid Arrow",
        url: "/api/spells/acid-arrow",
      };

      axios.get.mockResolvedValueOnce(spell);

      // when
      const result = await fetchSpells(spell.index);

      // then
      expect(axios.get).toHaveBeenCalledWith(
        `${BASE_URL}/spells/` + spell.index
      );
      expect(result).toEqual(spell);
    });
  });

  describe("when API call fails", () => {
    it("should return empty list", async () => {
      // given
      const spell = {
        index: "acid-arroa",
        name: "Acid Arrow",
        url: "/api/spells/acid-arrow",
      };

      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchSpells(spell.index);

      // then
      expect(axios.get).toHaveBeenCalledWith(
        `${BASE_URL}/spells/` + spell.index
      );
      expect(result).toEqual([]);
    });
  });
});

describe("when API call fails", () => {
  it("Should reject with an error when API call fails", async () => {
    const spell = {
      index: "acid-arroa",
      name: "Acid Arrow",
      url: "/api/spells/acid-arrow",
    };

    // given
    const err = "Network Error";
    axios.get.mockRejectedValueOnce(new Error(err));
    try {
      await fetchSpells(spell.index);
    } catch (e) {
      expect(e).toEqual(err);
    }
  });
});
