import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbotron2 = (props) => {
    const imageb ='https://i.ibb.co/XJ6Hyd2/Oreti.png'
    return (
            <Jumbotron  style={{backgroundColor:'rgba(121, 113, 234, 1)',backgroundPosition: 'right',backgroundImage: `url(${imageb})`,backgroundRepeat: 'no-repeat',height:700}}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <h1 style={{color:"white",fontWeight:"bold"}}>Stress Free </h1>
        <h1 style={{color:"white",fontWeight:"bold"}}>Subscription </h1>
        <h1 style={{color:"white",fontWeight:"bold"}}>Manager.</h1>
        <br></br>
        <p>
          <Button gaya={true}>JOIN NOW</Button>
        </p>
      </Jumbotron>
    );
}

export default Jumbotron2;
