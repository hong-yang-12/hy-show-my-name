export const myName = "nyan lin htet";

export const showMyName = () => {
  return myName;
};

export const showMyNameUI = () => {
  const h1 = document.createElement("h1");
  h1.innerText = myName;
  document.body.prepend(h1);
};
showMyNameUI();

console.log(showMyName());