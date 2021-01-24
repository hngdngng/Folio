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
    adj: {
        color: "black"
    }
}));

const Hero = () => {
    const classes = useStyles();
    return (
        <div className={classes.hero}>
            <Grid container>
                <Grid item md={6}>
                    <Typography variant="h3">Hi. I'm Hoang - {" "}
                        <TextLoop className={classes.adj}>
                            <span >A Developer</span>
                            <span>An Engineer</span>
                            <span>A Creative</span>
                        </TextLoop>.</Typography>
                    <Typography variant="subtitle1">I'm a full-stack developer with an eye for creating beautiful UI.</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Hero;