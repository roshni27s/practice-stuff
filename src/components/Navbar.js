import React from 'react'
import styled from 'styled-components'
import Img from '../assets/logo.svg'

const Navbar = () => {
  return (
    <NavbarContainer>
        <NavbarWrap>
            <Logo/>
            <Nav>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/">MARKET</NavLink>
                <NavLink to="/">TRADE</NavLink>
                <NavLink to="/">PRICING</NavLink>
                <NavLink to="/">DOWNLOAD</NavLink>
                <NavLink to="/">HELP</NavLink>
            </Nav>
            <Search>
                <SearchWrap>
                    <input type="text" placeholder='Symbol/Name'/>
                </SearchWrap>
            </Search>
            <ButtonContainer>
                <Button>
                    SIGN UP
                </Button>
                <Button>
                    LOGIN
                </Button>
            </ButtonContainer>
        </NavbarWrap>
    </NavbarContainer>
  )
}

export default Navbar

