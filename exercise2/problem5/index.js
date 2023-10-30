function getBudgets(arr) {
  return arr.reduce((acc, item) => acc + item.budget, 0);
  // Your code
}

export default getBudgets;
