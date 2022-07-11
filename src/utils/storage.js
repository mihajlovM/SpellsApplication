/**
 * Retrieve favourite spells from localstorage
 */
export const getFromFavorites = (itemName) => {
  const keys = localStorage.getItem(itemName);
  return keys ? JSON.parse(keys) : [];
};

/**
 *  Set spells to a list of favorite spells and put it in local storage.
 */
export function setToFavorites(index, itemName) {
  let fav = getFromFavorites(itemName);

  if (!fav.includes(index)) {
    fav.push(index);
    localStorage.setItem(itemName, JSON.stringify(fav));
  }
}

/**
 *  Set spells to a list of favorite spells and put it in local storage.
 */
export function deleteFromFavorites(index, itemName) {
  const filterOutSpell = (spellIndexes, index) =>
    spellIndexes.filter((spellIndex) => spellIndex !== index);
  const items = JSON.parse(localStorage.getItem(itemName)) || [];
  localStorage.setItem(itemName, JSON.stringify(filterOutSpell(items, index)));
}
