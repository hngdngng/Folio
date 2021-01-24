import React from "react";
import { Card, CardContent, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles(() => ({
    tile: {
        borderRadius: "20px",
        marginTop: 20,
        background: "linear-gradient(to right, #d9a7c7, #fffcdc)",
        padding: 20
    }
}));

const Tile = ({ github, image, index, role, summary, title, url }) => {
    const classes = useStyles();
    return (
        <div>
            <Container fixed >
                <Card className={classes.tile} elevation={3}>
                    <CardContent>
                        <Grid container>
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
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default Tile;