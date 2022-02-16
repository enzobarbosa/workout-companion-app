import './styles/WorkoutResume.css';

function WorkoutResume ({ cart, total }) {
  return (
    <div>
      <h1>Votre entraînement</h1>
      <table>
        <thead>
          <th>Exercices</th>
          <th>Quantité</th>
          <th>Séries</th>
          <th>Répétitions</th>
          <th>Poids</th>
        </thead>
        <tbody>
          {
                cart.map(item => {
                  return (
                    <tr key={item.exercice.id}>
                      <td>{item.exercice.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.exercice.series}</td>
                      <td>{item.exercice.repetitions}</td>
                      <td>{item.exercice.poids}kg</td>
                    </tr>
                  )
                })
            }
        </tbody>
        <tfoot>
          <td>Total :</td>
          <td>{total} exercices</td>
        </tfoot>
      </table>
    </div>
  )
}

export default WorkoutResume
