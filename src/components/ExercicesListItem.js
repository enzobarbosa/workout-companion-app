import { React, useState } from 'react'
import { actionTypes, useCart } from '../contexts/CartContext'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material/';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './styles/ExerciceList.css'

function ExercicesListItem ({ submit, exercice }) {
  const { dispatch } = useCart()
  const [formData, setFormData] = useState({
    series: '',
    repetitions: '',
    poids: ''
  })
  const addToCart = () => {
    const _exercice = {
    ...exercice,
    repetitions: formData.repetitions,
    series: formData.series,
    poids: formData.poids
    }
    dispatch({
    type: actionTypes.ADD_ITEM_TO_CART,
    data: _exercice
    })
    }

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
    <div>
       <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '17ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <Container>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}
          style={{
            flex: '1',
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
        <Grid item xs={12} sm={4}>
        <ListItem>
        <Card
          style={{
            width: 250,
            boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
            backgroundColor: "#fafafa",
        }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h2 className='titre'>{exercice.name}</h2>
            </Typography>
            <Typography variant="body2">
            <p className='description'>{exercice.description}</p>
            </Typography>
            <TextField
              name="series"
              id="outlined-number"
              label="Nombre de séries"
              type="number"
              value={formData.series}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="repetitions"
              id="outlined-number"
              label="Nombre de répétitions"
              type="number"
              value={formData.repetitions}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="poids"
              id="outlined-number"
              label="Poids en kg"
              type="number"
              value={formData.poids}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </CardContent>
          <CardActions>
            <Button type="submit" size="small" onClick={addToCart}>Ajouter à l'entrainement</Button>
          </CardActions>
        </Card>
        </ListItem>
        </Grid>
      </Grid>
      </form>
    </Container>
    </Box>
  </div>
  )
}

export default ExercicesListItem
