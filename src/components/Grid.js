import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles(() => ({
    tile: {
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
        border: "none"
    }
}));

const PGrid = ({ github, image, index, role, summary, title, url }) => {
    const classes = useStyles();
    return (
        <div>
            <Container fixed >
                <Grid container className={`${classes.tile} tile${index + 1}`}>
                    <Grid item md={6}>
                        <a href={github} target="_blank" rel="noopener noreferrer"><img className="project-img" src={image} alt="app" /></a>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                            {role}
                        </Typography>
                        <Typography variant="h4">
                            {title}
                        </Typography>
                        <Typography variant="body1">
                            {summary}
                        </Typography>
                        <a href={github} target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="small" /></a>
                        {" "}
                        <a href={url} target="_blank" rel="noopener noreferrer"><LinkIcon fontSize="small" /></a>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default PGrid;