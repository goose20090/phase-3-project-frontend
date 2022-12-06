import React from "react";
import { StyledNavLink } from "../component-styles/NavBar.style";

function NavBar({className}){
    return(
        <div className={className}>
            <StyledNavLink to = "/" exact activeStyle = {{background:"darkred"}}>Home</StyledNavLink>
            <StyledNavLink to = "/movies" activeStyle = {{background:"darkred"}}>Movies</StyledNavLink>
            <StyledNavLink to = "/users" exact activeStyle = {{background:"darkred"}}>Users</StyledNavLink>
        </div>
    )
}

export default NavBar;