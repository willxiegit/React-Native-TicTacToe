export default function setNext(newNext) {
  return({
    type: setNext,
    payload: newNext,
  });
}