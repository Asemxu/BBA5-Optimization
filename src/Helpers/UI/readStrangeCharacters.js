export const readStrangeCharacters = (name) => {
  let regex =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  console.log(name);
  debugger;
  return regex.exec(name)[0];
};
