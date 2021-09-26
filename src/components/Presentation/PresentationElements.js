import styled from "styled-components";
import {RiFileDownloadLine, RiFileDownloadFill} from "react-icons/ri"
import {Link as LinkR} from 'react-router-dom'


export const PresentationContainer = styled.div `
    background: #CAFAFE;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    padding: 0 30px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background : linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`
export const PresentationBg = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #CAFAFE;
`

export const PresentationContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const PresentationH1 = styled.h1 `
    color: #fff;
    font-size: 48px;
    text-align: center;


    @media screen and (max-width : 768px){
        font-size: 40px;
    }
    
    @media screen and (max-width : 480px){
        font-size: 32px;
    }
`

export const PresentationP = styled.p `
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    margin-top: 24px;


    @media screen and (max-width : 768px){
        font-size: 24px;
    }
    
    @media screen and (max-width : 480px){
        font-size: 18px;
    }
`

export const PresentationBtnWrapper = styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction: column;
    align-items: center;
`
export const DownloadArrowB = styled(RiFileDownloadFill)`
    margin-left: 8px;
    font-size: 20px;

`
export const DownloadArrowW = styled(RiFileDownloadLine)`
    margin-left: 8px;
    font-size: 20px;
`
export const DownloadBtnLink = styled(LinkR)`
    border-radius: 50px;
    background : #FC4445;
    white-space: nowrap;
    color:  #fff;
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: transparent ;
        background: ${({primary}) => (primary ? '#FC4445' : '#97CAEF')};
    }
`

