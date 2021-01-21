import React from "react";
import { AppBar, Container, Hidden, IconButton, List, ListItem, ListItemText, Toolbar } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles({
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    }
});

const navLinks = [
    { title: `about me`, path: `/about` },
    { title: `projects`, path: `/projects` },
]

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Container className={classes.navDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <Home fontSize="large" />
                    </IconButton>
                    <Hidden smDown>
                        <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                            {navLinks.map(({ title, path }) => (
                                <a href={path} key={title} className={classes.linkText}>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </a>
                            ))}
                        </List>
                    </Hidden>
                    <Hidden mdUp>
                        <SideDrawer navLinks={navLinks} />
                    </Hidden>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
