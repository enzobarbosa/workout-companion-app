import { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Grid, Paper, Avatar } from '@mui/material/';
import Button from '@mui/material/Button'; 
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

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

  const paperStyle={padding:20, height: '55vh', width: 280, margin:"20px auto"}
  const avatarStyle={backgroundColor:'red'}
  const fieldStyle={margin: "10px"}

  return (
    <div class='container'>
      <form onSubmit={handleSubmit}>
        <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <h2>Se connecter</h2>
            </Typography>
          </Grid>
          <TextField
            name='email'
            type='email'
            label='Email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Entrez votre email'
            variant="standard"
            style={fieldStyle}
          />
          <TextField
            name='password'
            type='password'
            label='Mot de passe'
            value={formData.password}
            onChange={handleChange}
            placeholder='Votre mot de passe'
            variant="standard"
            style={fieldStyle}
          />
          <Button type='submit' color='primary' variant='contained' fullWidth>Se connecter</Button>
        </Paper>
      </Grid>
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
