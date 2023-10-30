function removeABC(str) {
  if (!/[abc]/i.test(str)) {
  return null;
}
return str.replace(/[abc]/gi, '');
}
export default removeABC;
