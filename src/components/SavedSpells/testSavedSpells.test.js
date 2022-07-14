import axios from "axios";

import { BASE_URL, fetchSpells } from "../SavedSpells/SavedSpellsAxios";

import { shallow, mount } from 'enzyme'
import SavedSpells from "./SavedSpells";

jest.mock("axios");
 
 
test('when API call fails', async () => {
  const data = await fetchSpells();
  expect(data).toEqual([]);


});

 