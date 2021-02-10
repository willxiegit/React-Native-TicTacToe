export default function setTheme(newTheme) {
  return({
    type: setTheme,
    payload: newTheme,
  });
}