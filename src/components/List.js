function List({ comboList }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Toppings</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {comboList.map(({ count, key, toppings }, index) => (
            <tr key={key}>
              <td>{index + 1}</td>
              <td>{toppings}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List;
