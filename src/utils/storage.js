export const getFromFavorites = () => {
  const keys = localStorage.getItem("fav");
  return keys ? JSON.parse(keys) : [];
};

export function setToFavorites(index) {
  let fav = getFromFavorites();
  console.log(index);
  fav.push(index);
  localStorage.setItem("fav", JSON.stringify(fav));
}

// [1, 2, 3] 1
// 1 !== 1
// 2 !== 1
// 3 !== 1
// [2, 3]
const filterOutSpell = (spellIndexes, index) =>
  spellIndexes.filter((spellIndex) => spellIndex !== index);

export function deleteFromFavorites(index) {
  const items = JSON.parse(localStorage.getItem("fav")) || [];

  localStorage.setItem("fav", JSON.stringify(filterOutSpell(items, index)));
}
