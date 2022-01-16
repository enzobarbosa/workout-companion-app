import TextInput from './TextInput'

function WorkoutForm ({ data, onChange }) {
  const handleChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <h2>Vos informations</h2>
      <TextInput
        name='firstName'
        label='Prénom'
        onChange={handleChange}
        value={data.firstname}
      />
      <TextInput
        name='lastName'
        label='Nom'
        onChange={handleChange}
        value={data.lastname}
      />
      <TextInput
        name='email'
        label='E-mail'
        onChange={handleChange}
        value={data.email}
      />
      <TextInput
        name='phone'
        label='Téléphone'
        onChange={handleChange}
        value={data.phone}
      />
      <TextInput
        name='address'
        label='Adresse'
        onChange={handleChange}
        value={data.address}
      />
    </div>
  )
}

export default WorkoutForm
