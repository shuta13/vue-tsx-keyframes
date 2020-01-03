export const keyframes = (rules: string) => {
  const styleElem = document.createElement("style");
  document.head.appendChild(styleElem);
  let styleSheet = styleElem.sheet as CSSStyleSheet | null; // eslint-disable-line
  styleSheet === null
    ? console.log("err")
    : styleSheet.insertRule(rules, styleSheet.cssRules.length);
};
