import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div className="navigation">
            <div className="navigation-sub">
                <a href={`${process.env.PUBLIC_URL}/#/projects`} className="item">About</a>
                <a href={`${process.env.PUBLIC_URL}/`} className="item">Projects</a>
            </div>
        </div>
    );
}

export default Navbar;
