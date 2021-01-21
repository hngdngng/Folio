import React from "react";
import { AppBar, Container, Fab, Hidden, IconButton, List, ListItem, ListItemText, Toolbar } from "@material-ui/core";
import { Home, KeyboardArrowUp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import SideDrawer from "./SideDrawer";
import HideOnScroll from "./HideOnScroll";
import BackToTop from "./BackToTop";

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
        <>
            <HideOnScroll>
                <AppBar position="fixed">
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
            </HideOnScroll>
            <Toolbar id="back-to-top-anchor" />
            <BackToTop>
                <Fab color="secondary" size="large" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>
        </>
    );
}

export default Navbar;
