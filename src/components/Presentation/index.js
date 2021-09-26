import React , {useState} from 'react'
import { PresentationBg, PresentationContainer, VideoBg ,
PresentationH1, PresentationP, PresentationBtnWrapper, DownloadArrowB, DownloadArrowW, PresentationContent,
DownloadBtnLink} from './PresentationElements'
import Video from '../../videos/video.mp4'
import Pdf from '../../documents/CeciliaCasarellaCV.pdf'

const PresentationSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <PresentationContainer>
            <PresentationBg>
                <VideoBg autoPlay loop muted src= {Video} type= 'video\mp4' ></VideoBg>
            </PresentationBg>   
            <PresentationContent>
                <PresentationH1>I am fond of everything concerning IT</PresentationH1>
                <PresentationP>Download my CV here</PresentationP>
                <PresentationBtnWrapper>
                    <DownloadBtnLink 
                    onMouseEnter = {onHover} 
                    onMouseLeave = {onHover}
                    to ={Pdf} target = "_blank" rel="noreferrer">
                        Download
                        {hover ? <DownloadArrowB /> : <DownloadArrowW />}
                    </DownloadBtnLink>

                </PresentationBtnWrapper>
            </PresentationContent>    
        </PresentationContainer>
    )
}

export default PresentationSection
