export default function setHistory(newHistory) {
  return({
    type: setHistory,
    payload: newHistory,
  });
}