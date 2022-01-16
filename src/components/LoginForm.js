import { useState } from 'react'
import TextInput from './TextInput'

function LoginForm ({ submit, error }) {
  const [formData, setFormData] = useState({
    email: 'barbosaenzo@aol.com',
    password: 'zozoBMX17'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    // Annulation du comportement par défaut du navigateur (rechargement de la page)
    e.preventDefault()
    submit(formData)
  }

  return (
    <div class='container'>
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          name='email'
          type='email'
          label='Email'
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          name='password'
          type='password'
          label='Mot de passe'
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <input
          type='submit'
          value='Se Connecter'
        />
        {
            error && (
              <div>
                <h4>{JSON.stringify(error)}</h4>
              </div>
            )
        }
      </form>
    </div>
  )
}

export default LoginForm
