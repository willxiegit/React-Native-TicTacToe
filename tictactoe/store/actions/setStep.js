export default function setStep(newStep) {
  return({
    type: setStep,
    payload: newStep,
  });
}