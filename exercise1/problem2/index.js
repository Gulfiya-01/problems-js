function intWithinBounds(n, lower,upper) {
  if (!Number.isInteger(n)) {
    return false;
  }

  if (n <= lower || n >= upper) {
    return false;
  }

  return true;
}

export default intWithinBounds;
