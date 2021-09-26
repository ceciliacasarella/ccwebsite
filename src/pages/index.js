import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PresentationSection from '../components/Presentation';
import InfoSection from '../components/InfoSection';
import InfoSectionVideo from '../components/InfoSectionVideo';
import { homeObjOne,homeObjTwo ,homeObjThree} from '../components/InfoSection/Data';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    } 

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle = {toggle}></Sidebar>
            <Navbar toggle = {toggle} ></Navbar>    
            <PresentationSection /> 
            <InfoSection {...homeObjOne}/>    
            <InfoSection {...homeObjTwo}/> 
            <InfoSectionVideo {...homeObjThree}/>   
            <Skills></Skills>     
            <Footer></Footer>
   
        </>
    )
}

export default Home;
