import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Muscle.css'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material/';
import ListItem from '@mui/material/ListItem';


class MuscleListItem extends React.Component {
  render () {
    const { muscle } = this.props
    if (!muscle) {
      return <p>Pas de muscles</p>
    }
    return (
      <div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} key={muscle.id}><ListItem>
            <Card
              style={{
                maxWidth: 345,
                boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                backgroundColor: "#fafafa",
                marginTop: 0,
                marginLeft: 0,
            }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <h2 className='titre'>{muscle.name}</h2>
                </Typography>
                <Typography variant="body2">
                <p className='description'>{muscle.description}</p>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/muscle/${muscle._id}`}>Voir les exercices</Button>
              </CardActions>
            </Card>
            </ListItem>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default MuscleListItem

