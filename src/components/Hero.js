import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextLoop from "react-text-loop";

const useStyles = makeStyles(() => ({
    hero: {
        padding: "0 30px",
        textAlign: "left",
        color: "black",
    },
    adj1: {
        color: "rgb(235, 210, 251)"
    },
    adj2: {
        color: "rgb(241, 201, 205)"
    },
    adj3: {
        color: "rgb(245, 197, 166)"
    }
}));

const Hero = () => {
    const classes = useStyles();
    return (
        <div className={classes.hero}>
            <Grid container>
                <Grid item md={6}>
                    <Typography variant="h3">Hi. I'm Hoang - {" "}
                        <TextLoop>
                            <span className={classes.adj1}>A Developer</span>
                            <span className={classes.adj2}>An Engineer</span>
                            <span className={classes.adj3}>A Creative</span>
                        </TextLoop>.</Typography>
                    <Typography variant="subtitle1">I'm a full-stack developer with an eye for creating beautiful UI.</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Hero;