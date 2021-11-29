import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import './Home.css'; 

function Home() {
    return (
        <Container>
            <Section className='background__image__1'
                title='Model S'
                description='Order Online for Touchless Delivery'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                
                

            />

            <Section

                title='Model Y'
                description='Order Online for Touchless Delivery'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'>    
<div className ='background__image__2'>
            
       </div>      
            </Section>

            
            <Section className='background__image__3'
                title='Model 3'
                description='Order Online for Touchless Delivery'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                        
            />

            <Section 
                title='Model X'
                description='Order Online for Touchless Delivery'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
        </Container>
    )
}

export default Home


// Styles the specific div. 
const Container = styled.div`
    height:100vh;
    

`


