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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
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
  const [value, setValue] = React.useState(2);

  function createData(place, time, date) {
    return { place, time, date  };
  }
  
  const rows = [
    createData('Max Restaurant, SM Makati', "3:15pm", "July 04, 2020"),
    createData('Pancake House, SM North Edsa', "2:11pm", "June 29, 2020"),
    createData('BIR, Makatiy City', "4:45pm", "June 22, 2020"),
    createData('Hypermarket, SM North Edsa', "8:15am", "June 15, 2020"),
    createData('Yakimix, Trinoma', "9:25am", "June 03, 2020"),
    createData('Robinson`s Supermarket, Ayala', "3:47pm", "June 07, 2020"),
  ];

  return (
    <div className="container">
      <Header/>

      <main>
      <Paper style={{ height: "100vh", backgroundColor: "#F5F5F5" }}>
        <Grid container alignItems="center" direction="column" >
            <Grid item style={{ marginTop: 50 }}>
                <Typography variant="h4">Visit History</Typography>
            </Grid>
            <Grid item style={{ marginTop: 20, padding: 10 }}>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Place of Visit</TableCell>
                                <TableCell >Time</TableCell>
                                <TableCell >Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.place}
                                    </TableCell>
                                    <TableCell >{row.time}</TableCell>
                                    <TableCell >{row.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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
