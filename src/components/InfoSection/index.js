import {React} from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, 
BtnWrap, ImgWrap, Img } from './InfoElements'
import { Button } from '../ButtonElement'

const InfoSection = ({lightBg, id, primary, buttonLabel, lightBgTl, imgStart, topline, lightText, headline, description, darkText,img, alt}) => {

    return (
        <>
            <InfoContainer lightBg = {lightBg} id= {id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine lightBgTl = {lightBgTl}>{topline}</TopLine>
                                <Heading lightText = {lightText}>{headline}</Heading>
                                <Subtitle darkText = {darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                    to='home'
                                    primary= {false} 
                                    dark = {true}
                                    smooth= {true}
                                    duration = {500}
                                    exact = "true"
                                    offset = {-80}
                                    spy = {true}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                    
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt = {alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
            
        </>
    )
}

export default InfoSection
