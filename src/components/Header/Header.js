import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
        <Link to="/">PAPA BEAR SUPPLY</Link>
        </div>
    );
};

export default Header;