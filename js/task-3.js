function getElementWidth(content, padding, border) {
  const contentWidth = Number.parseFloat(content);
  const paddingWidth = Number.parseFloat(padding);
  const borderWidth = Number.parseFloat(border);
  const borderFix = borderWidth * 2;
  const paddingFix = paddingWidth * 2;
  const functionResult = contentWidth + paddingFix + borderFix;
  return functionResult;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
