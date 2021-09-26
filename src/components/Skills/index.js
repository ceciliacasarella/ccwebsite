import React from 'react'
import { SkillsCard, SkillsContainer, SkillsH1, SkillsH2, SkillsIcon, SkillsP, SkillsWrapper } from './SkillsElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
const Skills = () => {
    return (
        <>
            <SkillsContainer id="hireme">
                <SkillsH1>Why hiring me? </SkillsH1>
                    <SkillsWrapper>
                        <SkillsCard>
                            <SkillsIcon src={Icon1}></SkillsIcon>
                            <SkillsH2>Java Programming</SkillsH2>
                            <SkillsP>JPA, Hibernate, STRUTS2 , Spring MVC</SkillsP>
                        </SkillsCard>
                        <SkillsCard>
                            <SkillsIcon src={Icon2}></SkillsIcon>
                            <SkillsH2>Data Science</SkillsH2>
                            <SkillsP>ML and DL algorithms</SkillsP>
                        </SkillsCard>
                        <SkillsCard>
                            <SkillsIcon src={Icon3}></SkillsIcon>
                            <SkillsH2>Web Development</SkillsH2>
                            <SkillsP>HTML, CSS, Javascript, Typescript, React/Redux</SkillsP>
                        </SkillsCard>
                        <SkillsCard>
                            <SkillsIcon src={Icon3}></SkillsIcon>
                            <SkillsH2>Web Development</SkillsH2>
                            <SkillsP>HTML, CSS, Javascript, Typescript, React/Redux</SkillsP>
                        </SkillsCard>                        
                        <SkillsCard>
                            <SkillsIcon src={Icon3}></SkillsIcon>
                            <SkillsH2>Web Development</SkillsH2>
                            <SkillsP>HTML, CSS, Javascript, Typescript, React/Redux</SkillsP>
                        </SkillsCard>
                        <SkillsCard>
                            <SkillsIcon src={Icon3}></SkillsIcon>
                            <SkillsH2>Web Development</SkillsH2>
                            <SkillsP>HTML, CSS, Javascript, Typescript, React/Redux</SkillsP>
                        </SkillsCard>
                    </SkillsWrapper>
                    
            </SkillsContainer>
            
        </>
    )
}

export default Skills