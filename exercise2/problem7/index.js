function afterNYears(names, n) {
  for (let key of Object.keys(names)) {
    names[key] += Math.abs(n);
  }
  return names;
}

export default afterNYears;
