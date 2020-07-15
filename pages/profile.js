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
    Avatar,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox
} from '@material-ui/core';
import Header from './components/header'
import { useRouter } from 'next/router'
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const router = useRouter()
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="container">
      <Header/>

      <main>
      <Paper style={{ height: "120vh", backgroundColor: "#F5F5F5" }}>
        <Grid container alignItems="center" direction="column" style={{ padding: 10 }}>
            <Grid item style={{ marginTop: 80 }}>
                <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" style={{ width: 100, height: 100 }}/>
            </Grid>
            <Grid item style={{ marginTop: 20 }}>
                <Typography style={{ fontSize: 24 }}>JC Torreda</Typography>
            </Grid>
            <Grid item style={{ marginTop: 50, marginBottom: 50 }}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>General Questions</Typography>
                        <Typography className={classes.secondaryHeading}>Check the box based on the questions honestly</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container justify="center" alignContent="center">
                            <Grid item>
                                <List>
                                    {[0, 1, 2, 3].map((value) => {
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
                                            <ListItemText id={labelId} primary={`Question # ${value + 1}`} />
                                        </ListItem>
                                        );
                                    })}
                                </List>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    >
                    <Typography className={classes.heading}>Health Questions</Typography>
                    <Typography className={classes.secondaryHeading}>
                        Tick the boxes on what you're currently feeling
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container justify="center" alignContent="center">
                            <Grid item>
                                <List>
                                    {[0, 1, 2, 3].map((value) => {
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
                                            <ListItemText id={labelId} primary={`Question # ${value + 1}`} />
                                        </ListItem>
                                        );
                                    })}
                                </List>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    >
                    <Typography className={classes.heading}>More Questions</Typography>
                    <Typography className={classes.secondaryHeading}>
                        Description
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container justify="center" alignContent="center">
                            <Grid item>
                                <List>
                                    {[0, 1, 2, 3].map((value) => {
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
                                            <ListItemText id={labelId} primary={`Question # ${value + 1}`} />
                                        </ListItem>
                                        );
                                    })}
                                </List>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    >
                    <Typography className={classes.heading}>Personal data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container justify="center" alignItems="center" direction="column" style={{ marginBottom: 20 }}>
                            <Grid item>
                                <TextField label="Full Name" variant="outlined" style={{ width: 300, borderRadius: 15 }}/>
                            </Grid>
                            <Grid item style={{ marginTop: 30 }}>
                                <TextField label="Birthday" variant="outlined" style={{ width: 300, borderRadius: 15 }}/>
                            </Grid>
                            <Grid item style={{ marginTop: 30 }}>
                                <TextField label="Civil Status" variant="outlined" style={{ width: 300, borderRadius: 15 }}/>
                            </Grid>
                            <Grid item style={{ marginTop: 30 }}>
                                <TextField label="Occupation" variant="outlined" style={{ width: 300, borderRadius: 15 }}/>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item style={{ marginTop: 10 }}>
              <Button variant="contained" color="primary" style={{ width: 300, fontSize: 12, height: 50, borderRadius: 10 }} onClick={() => router.push("/homepage")}>
                Save
              </Button>
            </Grid>
            <Grid item style={{ marginTop: 10, marginBottom: 40 }}>
              <Button variant="contained" color="secondary" style={{ width: 300, fontSize: 12, height: 50, borderRadius: 10 }}>
                Cancel
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
