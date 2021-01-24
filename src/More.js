import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(() => ({
  a1: {
    paddingRight: 10
  }
}));

function More(props) {
  const classes = useStyles();
  return (
    <Container fixed>
      <Grid container>
        {/* <Grid className={classes.avatar} item md={6}>
        </Grid> */}
        <Grid item md={6}>
          <Typography variant="h4">Let's connect.</Typography>
          <br></br>
          <a className={classes.a1} href="https://github.com/hngdngng" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
          <a className={classes.a1} href="https://www.linkedin.com/in/hoang-d-nguyen/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          <a className={classes.a1} href="mailto:hoang.d.nguyen@outlook.com" target="_blank" rel="noopener noreferrer"><MailIcon /></a>
        </Grid>
      </Grid>
    </Container>
  )
}

export default More;