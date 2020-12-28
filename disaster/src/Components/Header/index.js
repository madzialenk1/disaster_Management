import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FaUserInjured } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
   
   
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {

    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
   
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];


export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Home
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Survavial Skits
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Survavial Suppliers
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Help
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
             
               <FaUserInjured Size="10em" color="cornflowerblue"  /> 
               
          </Button>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>

               <FaUserMd Size="10em" color="cornflowerblue"  /> 
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Disaster Management 
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        Disaster Management web App designed to help the victims or the emergency cases to get in contact with rescue helpers quickly also to avoid huge damages in order to help the maximum peoples in short amount of time. This app contains three different pages each of these had specific functionality.
        </Typography>
        
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
           
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>

      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}