/**
 * Retrieve favourite spells from localstorage
 */
export const getFromFavorites = () => {
  const keys = localStorage.getItem("fav");
  return keys ? JSON.parse(keys) : [];
};

/**
 *  Set spells to a list of favorite spells and put it in local storage.
 */
export function setToFavorites(index) {
  let fav = getFromFavorites();
  console.log(fav, index);
  if (!fav.includes(index)) {
    fav.push(index);
    localStorage.setItem("fav", JSON.stringify(fav));
  }
}

/**
 *  Set spells to a list of favorite spells and put it in local storage.
 */
export function deleteFromFavorites(index) {
  const filterOutSpell = (spellIndexes, index) =>
    spellIndexes.filter((spellIndex) => spellIndex !== index);
  const items = JSON.parse(localStorage.getItem("fav")) || [];
  localStorage.setItem("fav", JSON.stringify(filterOutSpell(items, index)));
}
