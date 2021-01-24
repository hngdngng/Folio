import React from "react";
import { AppBar, Container, Fab, Hidden, List, ListItem, ListItemText, Toolbar, Typography } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import SideDrawer from "./SideDrawer";
import HideOnScroll from "./HideOnScroll";
import BackToTop from "./BackToTop";

const useStyles = makeStyles(() => ({
    appBar: {
        background: "transparent",
        boxShadow: "none"
    },
    navDisplayFlex: {
        display: "flex",
        justifyContent: "space-between"
    },
    linkText: {
        textDecoration: "none",
        textTransform: "uppercase",
        color: "black"
    },
    socialIcon: {
        padding: 10,
        color: "black"
    }
}));

const navLinks = [
    { title: "projects", path: `${process.env.PUBLIC_URL}/` },
    { title: "about", path: `${process.env.PUBLIC_URL}/#/about` },
    { title: "contact", path: `${process.env.PUBLIC_URL}/#/more` }
]

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <HideOnScroll>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Container className={classes.navDisplayFlex}>
                            <Typography variant="h1" noWrap>
                                Hoang.
                            </Typography>
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
        </div>
    );
}

export default Navbar;
