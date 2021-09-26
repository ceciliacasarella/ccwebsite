import React from 'react'
import {FooterContainer, FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, FooterLinksItem, FooterLinkTitle, FooterLink} from '../Footer/FooterElements'
import { SocialIconLink, SocialMedia, SocialLogo,  SocialMediaWrap, WebsiteRights, SocialIcons  } from '../Footer/FooterElements'
import {FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItem>
                            <FooterLinkTitle>                            
                            About Me
                            </FooterLinkTitle>
                                <FooterLink to="/contactme">Contact Me</FooterLink>
                                <FooterLink to="about">Skills</FooterLink>
                        </FooterLinksItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>CC</SocialLogo>
                            <WebsiteRights>CC © {new Date().getFullYear()}
                             All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_black"
                                aria-label="Instagram">
                                    <FaInstagram></FaInstagram>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_black"
                                aria-label="LinkedIn">
                                    <FaLinkedin></FaLinkedin>
                                </SocialIconLink>
                                <SocialIconLink href="//www.twitter.com" target="_black"
                                aria-label="Twitter">
                                    <FaTwitter></FaTwitter>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
