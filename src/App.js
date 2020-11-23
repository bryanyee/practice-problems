import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List'
import { buildCountsOfCombinations, getData, orderListOfCombinations } from './utilities'

// One of our restaurant clients wants to know which pizza topping combinations are the most popular. Using Ember, React, Angular, or Vue, write a throw-away app that will download orders directly from https://www.olo.com/pizzas.json and output the top 20 most frequently ordered pizza topping combinations. List the toppings for each popular pizza topping combination along with its rank and the number of times that combination has been ordered.
// For best results, focus on accuracy and brevity. Our estimate for this exercise is 30 minutes.

// get pizza combinations (start w/ hard-coded file)
// parse data to get the ordered list of combinations
//   handle different permutations of the same combinations
// render the top 20 combinations in order
//   list toppings, rank, and count
// replace hard-coded list with fetching the data

function App() {
  const [comboList, setComboList] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      const combos = buildCountsOfCombinations(data);
      const list = orderListOfCombinations(combos);
      setComboList(list);
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <List comboList={comboList}/>
      </header>
    </div>
  );
}

export default App;
