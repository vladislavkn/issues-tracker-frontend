export const copyText = (text: string) => {
  if (window.navigator) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise((resolve, reject) => {
    const textElement = document.createElement("textarea");
    textElement.value = text;
    try {
      textElement.select();
      textElement.setSelectionRange(0, 99999);
      document.execCommand("copy");
      return resolve(void 0);
    } catch (e) {
      return reject(e);
    }
  });
};
