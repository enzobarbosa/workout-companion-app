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

function WorkoutListItem ({ submit, workout }) {
  const { dispatch } = useCart()
  const [formData, setFormData] = useState({
    series: '',
    repetitions: '',
    poids: ''
  })
  const addToCart = () => {
    const _workout = {
    ...workout,
    repetitions: formData.repetitions,
    series: formData.series,
    poids: formData.poids
    }
    dispatch({
    type: actionTypes.ADD_ITEM_TO_CART,
    data: _workout
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
            <Typography variant="body2">
            <p className='description'>{workout.workout["0"]}</p>
            <p className='description'>{workout.workout["1"]}</p>
            </Typography>
          </CardContent>
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

export default WorkoutListItem
