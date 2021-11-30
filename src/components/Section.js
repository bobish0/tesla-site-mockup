import React from 'react'
import styled from 'styled-components';
import './Section.css'
import Arrow from '../img/down-arrow.svg';
import Fade from 'react-reveal/Fade';

function Section(props) {
    

    return (
    
        //Importing resources from css-files. S.C. is having problems.
        <Wrap className='background__image__1'>

           
           <Fade bottom>  
       
            <ItemText>
                <h1>{props.title}</h1>

                <p>{props.description}</p>
            </ItemText>
              </Fade>
   

            

            <Buttons>

            <Fade bottom> 

            <ButtonGroup>     
                <LeftButton>
                    {props.leftBtnText}
                </LeftButton>
                
                <RightButton>
                {props.rightBtnText}
                </RightButton> 
            </ButtonGroup>

             </Fade>
            
            <DownArrow className = 'down__arrow'>
            <img src={Arrow}/>
            </DownArrow>
            
            </Buttons>
           

        </Wrap>

      


   

    )
}


export default Section


const Wrap = styled.div`

z-index:10;

width: 100vw; 
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display:flex;
flex-direction:column;
justify-content:space-between;
`;

const ItemText = styled.div`
padding-top: 15vh;
text-align:center;

`

const ButtonGroup =styled.div`
  display:flex;
  justify-content:center;
margin-bottom:30px;

@media (max-width:768px){
    flex-direction:column;
    align-items:center;
}

`

const LeftButton =styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size: 12px;
    cursor:pointer;
    margin:20px;
`
// inherits all from the LeftButton by having it as a value.
const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;

`

const DownArrow = styled.div`
animation: animateDown infinite 1.5s;
overflow-x: hidden;
`
// Wraps buttons and arrow, to save formatting. 
const Buttons = styled.div`

`