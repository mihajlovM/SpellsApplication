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

export function deleteFromFavorites(index) {
  let items = JSON.parse(localStorage.getItem("fav"));
  console.log(items);
  console.log(index);
  var s = items.indexOf(index);
  console.log(s);
  if (s !== -1) {
    items.splice(s, 1);
  }
  localStorage.setItem("fav", JSON.stringify(items));
}
