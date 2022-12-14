import React from "react";
import { StyledNavLink } from "../../component-styles/NavBar/NavBar.style";
import { StyledLogin } from "../../component-styles/NavBar/Login.style"
import CoolNavLink from "./CoolNavLink"

function NavBar({className, currentUser, users, setCurrentUser, handleAddToUsers}){

    return(
        <div className={className}>
            <StyledNavLink to = "/" exact>{<CoolNavLink navLinkLabel={"Home"}/>}</StyledNavLink>
            <StyledNavLink to = "/movies">{<CoolNavLink navLinkLabel = {"Movies"}/>}</StyledNavLink>
            {currentUser? <StyledNavLink to = "/reviews">{<CoolNavLink navLinkLabel={"My Reviews"}/>} </StyledNavLink>: null}
            <StyledLogin users = {users} currentUser = {currentUser} setCurrentUser = {setCurrentUser} handleAddToUsers = {handleAddToUsers}/>
        </div>
    )
}

export default NavBar;