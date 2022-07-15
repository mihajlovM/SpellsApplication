import axios from "axios";

import { fetchSpells } from "../SavedSpells/SavedSpellsAxios";

jest.mock("axios");

test("when API call fails", async () => {
  const data = await fetchSpells();
  expect(data).toEqual([]);
});
