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
    Modal,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import Header from './components/header'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import swal from 'sweetalert2';
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
  paper: {
		position: 'absolute',
		width: 400,

		padding: theme.spacing(2),
		outline: 'none',
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`
	},
}));

export default function HomePage() {
  const classes = useStyles();
  const router = useRouter()
  const [value, setValue] = React.useState(1);
  const [QrDelay, setQrDelay] = React.useState(100);
  const [QrResult, setQrResult] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  function handleScan(data) {
    setQrResult(data)
  }

  function handleError(err) {
    console.error(err)
  }

  function handleClose() {
    setOpenModal(false)
    swal.fire({
      position: 'center',
      type: 'success',
      title: "Successfully Checked In!",
      showConfirmButton: false,
      timer: 1500
    })
    router.push("/homepage")
  }

  function handleClose2() {
    setOpenModal(false)
    router.push("/homepage")
  }

  function handleOpen(){
    setOpenModal(true)
    setModalTitle(QrResult)
  }

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
          </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <Button disabled={ QrResult === null ? true : QrResult.length < 30 ? false : true} variant="contained" color="primary" style={{ width: 250, fontSize: 24, height: 50, borderRadius: 10 }} onClick={handleOpen}>
              <Typography>{ QrResult === null ? "Scan QR Code of Place" : QrResult.length < 30 ? `Visit: ${QrResult} ?` : "Scan QR Code of Place"  }</Typography>
            </Button>
          </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <Button disabled={ QrResult === null ? true : QrResult.length > 30 ? false : true} variant="contained" color="primary" style={{ width: 250, fontSize: 24, height: 50, borderRadius: 10 }} onClick={() => setOpenModal2(true)}>
              <Typography>{ QrResult === null ? "Scan QR Code of Person?" : QrResult.length > 30 ? `Scan: JC Torreda ?` : "Scan QR Code of Person?" }</Typography>
            </Button>
          </Grid>
        </Grid>

        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Paper className={classes.paper}>
            <Grid container justify="center" alignContent="center" direction="column" style={{ width: "100%" }}>
              <Grid item>
                <Typography variant="h6">{modalTitle}</Typography>
              </Grid>
              <Grid item style={{ marginTop: 10 }}>
                  <List>
                    {["Headache?", "Cough?", "Fever?", "Pneumonia?"].map((value) => {
                      const labelId = `checkbox-list-label-${value}`;

                      return (
                      <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                          <ListItemIcon>
                          <Checkbox
                              edge="start"
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ 'aria-labelledby': labelId }}
                          />
                          </ListItemIcon>
                          <ListItemText id={labelId} primary={value} />
                      </ListItem>
                      );
                    })}
                  </List>
              </Grid>
              <Grid item style={{ marginTop: 10 }}>
                <Button variant="contained" color="primary" style={{ width: 200, fontSize: 14, height: 50, borderRadius: 10 }} onClick={handleClose}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Modal>

        <Modal
          open={openModal2}
          onClose={handleClose2}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Paper className={classes.paper}>
            <Grid container alignItems="center" direction="column" >
              <Grid item style={{ marginTop: 50 }}>
                  <Typography variant="h4">Visit History of JC Torreda</Typography>
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
              <Grid item style={{ marginTop: 10 }}>
                <Button variant="contained" color="primary" style={{ width: 150, fontSize: 14, height: 50, borderRadius: 10 }} onClick={handleClose2}>
                  Ok, Done.
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Modal>
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
