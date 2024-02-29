function zipStrings(strA, strB) {
  let result = "";
  let minLength = Math.min(strA.length, strB.length);

  for (let i = 0; i < minLength; i++) {
    result += strA[i] + strB[i];
  }

  result += strA.slice(minLength) + strB.slice(minLength);

  return result;
}
