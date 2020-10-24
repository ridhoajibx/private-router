import React from 'react';
import { Card, Button, Container } from 'reactstrap';

const Footer2  = (props) => {
    const imageb ='https://i.ibb.co/XJ6Hyd2/Oreti.png'
    return (
        <div>
            <br></br>
        <Card style={{backgroundColor:'rgba(121, 113, 234, 1)',backgroundPosition: 'right',backgroundImage: `url(${imageb})`,backgroundRepeat: 'no-repeat',height:300}}>
        <br></br>
        <br></br>
        <Container>
        <h1 style={{color:"black",fontWeight:"bold"}}>So what are you waiting for?</h1>
      
        <br></br>
       
        <p>
        
          <Button >JOIN NOW</Button>
        </p>
        </Container>
      </Card>
      </div>
        );
      }

export default Footer2;