function WorkoutResume ({ cart, total }) {
  return (
    <div>
      <h1>Votre entraînement</h1>
      <table>
        <thead>
          <th>Exercices</th>
          <th>Quantité</th>
        </thead>
        <tbody>
          {
                cart.map(item => {
                  return (
                    <tr key={item.exercice.id}>
                      <td>{item.exercice.name}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  )
                })
            }
        </tbody>
        <tfoot>
          <td>Total :</td>
          <td>{total}€</td>
        </tfoot>
      </table>
    </div>
  )
}

export default WorkoutResume
