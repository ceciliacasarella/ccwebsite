import {React, useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo , MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color: '#fff' }}>
            <Nav scrollNav= {scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick = {toggleHome}>
                        CC
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to ="about"
                            smooth= {true}
                            duration = {500}
                            exact = "true"
                            spy = {true}
                            >About</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to ="discover"
                            smooth= {true}
                            duration = {500}
                            exact = "true"
                            spy = {true}
                            >Studies</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to ="studies"
                            smooth= {true}
                            duration = {500}
                            exact = "true"
                            spy = {true}
                            >Discover</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to ="hireme"
                            smooth= {true}
                            duration = {500}
                            exact = "true"
                            spy = {true}
                            offset = {10}>Hire Me</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to ="/contactme">Contact Me</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>

    );
};

export default Navbar;
