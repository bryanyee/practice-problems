import data from './stubs/pizzas.json'

const getData = () => {
 return Promise.resolve(data);
}

// Store count of results in a map
// The key is the sorted, joined strings of the toppings
// The value is the count for that combo
const buildCountsOfCombinations = data => {
  const combos = {};

  data.forEach(({ toppings }) => {
    const sortedToppings = toppings.sort();
    const key = sortedToppings.join('-')
    if (combos[key] === undefined) {
      combos[key] = 0
    }
    combos[key] += 1
  })

  return combos
}

const orderListOfCombinations = (combos) => {
  const list = Object.keys(combos).map((key) => ({
    key,
    toppings: key.split('-'),
    count: combos[key],
  }));

  return list.sort((c1, c2) => {
    if (c1.count > c2.count) return -1;
    if (c1.count < c2.count) return 1;
    return 0;
  })
}

export {
  buildCountsOfCombinations,
  getData,
  orderListOfCombinations,
};
