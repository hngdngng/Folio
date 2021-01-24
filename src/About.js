import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  avatar: {
    overflow: "hidden",
    borderRadius: 20,
    boxShadow: "0 52px 74px rgba(0, 21, 64, .13)",
    maxWidth: "400px",
    margin: "0 auto 8em"
  },
img: {
  maxWidth: "100%",
  display: "block"
}
}));

function About(props) {
  const classes = useStyles();
  return (
    <Container fixed>
      <Grid container>
        <Grid className={classes.avatar} item md={6}>
          <img className={classes.img} src={process.env.PUBLIC_URL + "/img/HoangProfile.jpg"} alt="profile" />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h4">I'm Hoang, a med-device engineer turned full-stack developer.</Typography>
          <br></br>
          <Typography variant="body1">I spent the last 4.5 years working in the medical device industry across different areas of product development, customer research and innovation. In 2020, I got my certification in full stack development during quarantine from Georgia Tech.</Typography>
          <br></br>
          <Typography variant="h6">I'm now looking to transfer my technical skills from healthcare to building creative and interactive digital experiences as a developer.</Typography>
          <br></br>
          <Typography variant="body1">Outside of the office, you can find me hiking, trying new recipes or playing Monikers!</Typography>
          <br></br>
          <Typography variant="body1">Currently Reading: On Earth We're Briefly Gorgeous by Ocean Vuong</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About;