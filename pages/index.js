import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, 
  Paper, 
  TextField, 
  Typography, 
  Divider, 
  Button
} from '@material-ui/core';
import { useRouter } from 'next/router'
import Header from './components/header'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const router = useRouter()

  return (
    <div className="container">
      <Header/>

      <main>
        <Paper style={{ padding: 50, height: "100vh", backgroundColor: "#F5F5F5" }}>
          <Grid container justify="center" alignItems="center" direction="column" style={{ marginTop: 50 }}>
            <Grid item>
              <img src="https://www.pccwsolutions.com/site/dist/images/solutions/banner-cloud-based-track-and-trac-platform.jpg" style={{ width: 300, marginBottom: 30 }}/>
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: 24, marginBottom: 10 }}>Login</Typography>
            </Grid>
            <Grid item>
              <TextField label="Username" style={{ width: 300, borderRadius: 15 }}/>
            </Grid>
            <Grid item style={{ marginTop: 30 }}>
              <TextField label="Password" style={{ width: 300, borderRadius: 15 }}/>
            </Grid>
            <Grid item style={{ marginTop: 30 }}>
              <Button variant="contained" color="primary" style={{ width: 300, fontSize: 12, height: 50, borderRadius: 10 }} onClick={() => router.push("/homepage")}>
                Login
              </Button>
            </Grid>
            <Grid item style={{ marginTop: 10 }}>
              <Button variant="contained" color="secondary" style={{ width: 300, fontSize: 12, height: 50, borderRadius: 10 }}>
                Don't have an account? Register.
              </Button>
            </Grid>
          </Grid>
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
  )
}
