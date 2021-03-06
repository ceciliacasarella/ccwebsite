import React from 'react'
import { SidebarContainer, Icon, CloseIcon , SideBtnWrap, SidebarWrapper, SidebarLink, SidebarRoute, SidebarMenu} from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle} >
            <Icon onClick = {toggle}>
                <CloseIcon /> 
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick = {toggle} to= "about">
                        ABOUT
                    </SidebarLink>

                    <SidebarLink onClick = {toggle} to= "discover">
                        STUDIES
                    </SidebarLink>
                    
                    <SidebarLink onClick = {toggle} to= "studies">
                        DISCOVER
                    </SidebarLink>
                    
                    <SidebarLink onClick = {toggle} to= "hireme">
                        HIRE ME                    
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contactme">Contact me</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>            
        
    )
}

export default Sidebar
