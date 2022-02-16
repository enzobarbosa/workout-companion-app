import { useState } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper, Avatar } from '@mui/material/';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function RegisterForm ({ submit, error }) {
  // Stockage des données du formulaire
  const [formData, setformData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  })

  // Gestion de la saisie du formulaire
  const handleChange = (event) => {
    setformData({
      // Conserver les champs
      ...formData,
      // Champ modifié ou ajouté
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(formData)
  }

  const paperStyle={padding:20, height: '75vh', width: 280, margin:"20px auto"}
  const avatarStyle={backgroundColor:'red'}
  const fieldStyle={margin: "5px"}

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <h2>S'inscrire</h2>
            </Typography>
          </Grid>
          <TextField
            name="firstName"
            label="Prénom"
            placeholder='Entrez votre prénom'
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            variant="standard"
            style={fieldStyle}
          />
          <TextField
            name="lastName"
            label="Nom"
            placeholder='Entrez votre nom'
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            variant="standard"
            style={fieldStyle}
          />
          <TextField
            name="email"
            label="Email"
            placeholder='Entrez votre email'
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="standard"
            style={fieldStyle}
          />
          <TextField
            name="password"
            label="Mot de passe"
            placeholder='Votre mot de passe'
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="standard"
            style={fieldStyle}
          />
          <TextField
            name="phone"
            label="Téléphone"
            placeholder='Entrez votre téléphone'
            type="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="standard"
            style={fieldStyle}
          />
          <Button type='submit' color='primary' variant='contained' fullWidth>S'inscrire</Button>
        </Paper>
      </Grid>
    </form>
  )
}

export default RegisterForm
