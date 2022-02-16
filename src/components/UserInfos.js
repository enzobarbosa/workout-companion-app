import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper, Avatar } from '@mui/material/';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const paperStyle={padding:20, height: '55vh', width: 280, margin:"20px auto"}
const avatarStyle={backgroundColor:'green'}

function UserInfos ({ logout }) {
  return (
    <Grid>
    <Paper elevation={10} style={paperStyle}>
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h2>Vous êtes connecté</h2>
        </Typography>
      </Grid>
      <Button onClick={logout} color='primary' variant='contained' fullWidth>Se déconnecter</Button>
    </Paper>
  </Grid>
  )
}

export default UserInfos
