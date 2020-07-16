import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Grid, 
    Paper, 
    TextField, 
    Typography, 
    Divider, 
    Button, 
    BottomNavigation, 
    BottomNavigationAction,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,

} from '@material-ui/core';
import Header from './components/header'
import { useRouter } from 'next/router'
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(12),
    },
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const router = useRouter()
  const [value, setValue] = React.useState(1);

  return (
    <div className="container">
      <Header/>

      <main>
      <Paper style={{ height: "100vh", backgroundColor: "#F5F5F5" }}>
        <Grid container alignItems="center" direction="column" >
          <Grid item style={{ marginTop: 50 }}>
            <Button variant="contained" color="primary" style={{ width: 300, fontSize: 24, height: 150, borderRadius: 10 }} 
            onClick={() => router.push("/qrScanner")}
            >
              Check QR Code
            </Button>
          </Grid>
          <Grid item style={{ marginTop: 50 }}>
            <Button variant="contained" color="secondary" style={{ width: 300, fontSize: 24, height: 150, borderRadius: 10 }}>
              <Typography>Last Visited: Jollibee, SM North Edsa</Typography>
            </Button>
          </Grid>
        </Grid>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.stickToBottom}
        >
          <BottomNavigationAction label="Profile" icon={<RestoreIcon/>} onClick={() => router.push("/profile")} />
          <BottomNavigationAction label="Home" icon={<FavoriteIcon/>} onClick={() => router.push("/homepage")} />
          <BottomNavigationAction label="Visit History" icon={<LocationOnIcon/>} onClick={() => router.push("/history")} />
        </BottomNavigation>
      </Paper>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
