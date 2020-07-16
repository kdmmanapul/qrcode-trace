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
} from '@material-ui/core';
import Header from './components/header'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Webcam from "react-webcam";
// import QrReader from 'react-qr-reader'
const QrReader = dynamic(
    () => import('react-qr-reader'),
    { ssr: false }
  )

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
  previewStyle: {
    height: 380,
    width: 320,
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const router = useRouter()
  const [value, setValue] = React.useState(1);
  const [QrDelay, setQrDelay] = React.useState(100);
  const [QrResult, setQrResult] = React.useState("Waiting");

  function handleScan(data) {
    setQrResult(data)
  }

  function handleError(err) {
    console.error(err)
  }

  return (
    <div className="container">
      <Header/>

      <main>
      <Paper style={{ height: "100vh", backgroundColor: "#F5F5F5" }}>
        <Grid container alignItems="center" direction="column" >
          <Grid item style={{ marginTop: 100 }}>
            {
              typeof window !== "undefined" ?
              <QrReader
                delay={QrDelay}
                // style={classes.previewStyle}
                style={{ height: 380, width: 320 }}
                onError={handleError}
                onScan={handleScan}
              />
              :
              null
            }
            {/* <Webcam height={400} width={350} screenshotFormat="image/jpeg"/> */}
          </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <Button variant="contained" color="secondary" style={{ width: 300, fontSize: 24, height: 50, borderRadius: 10 }}>
              <Typography>Visit: { QrResult } </Typography>
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
