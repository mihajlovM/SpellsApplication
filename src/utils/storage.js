/**
 * Retrieve favourite spells from localstorage
 */
export const getFromFavorites = () => {
  const keys = localStorage.getItem("fav");
  return keys ? JSON.parse(keys) : [];
};

// TODO: Only unique items should go here
export function setToFavorites(index) {
  let fav = getFromFavorites();
  console.log(fav, index);
  if (!fav.includes(index)) {
    fav.push(index);
    localStorage.setItem("fav", JSON.stringify(fav));
  }
}

const filterOutSpell = (spellIndexes, index) =>
  spellIndexes.filter((spellIndex) => spellIndex !== index);

export function deleteFromFavorites(index) {
  const items = JSON.parse(localStorage.getItem("fav")) || [];

  localStorage.setItem("fav", JSON.stringify(filterOutSpell(items, index)));
}
