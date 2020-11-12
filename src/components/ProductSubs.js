import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col,Container, CardBody,Card} from 'reactstrap';

const items = [
    {
        id: '1',
      src: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
      Next_Payment: 'June 29 2020',
      Duration:'Monthly',
      Cost: '149.000',
      altText: 'Slide 1',
      caption: 'NETFLIX'
    },
    {
        id: '2',
      src: 'https://www.logo.wine/a/logo/BT_Sport/BT_Sport-Logo.wine.svg',
      Next_Payment: 'June 29 2020',
      Duration:'Monthly',
      Cost: '149.000',
      altText: 'Slide 2',
      caption: 'BT SPORT'
    },
    {
        id: '3',
      src: 'https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg',
      Next_Payment: 'June 29 2020',
      Duration:'Monthly',
      Cost: '149.000',
      altText: 'Slide 3',
      caption: 'SPORTIFY'
    },
    {
        id: '4',
        src: 'https://www.logo.wine/a/logo/Disney%2B/Disney%2B-Logo.wine.svg',
        Next_Payment: 'June 29 2020',
        Duration:'Monthly',
        Cost: '149.000',
        altText: 'Slide 4',
        caption: 'DISNEY+'
    },
    {
        id: '5',
        src: 'https://www.logo.wine/a/logo/Google_Stadia/Google_Stadia-Logo.wine.svg',
        Next_Payment: 'June 29 2020',
        Duration:'Monthly',
        Cost: '149.000',
        altText: 'Slide 4',
        caption: 'STADIA'
    },
    {
        id: '6',
        src: 'https://www.logo.wine/a/logo/Viu_(streaming_media)/Viu_(streaming_media)-Logo.wine.svg',
        Next_Payment: 'June 29 2020',
        Duration:'Monthly',
        Cost: '149.000',
        altText: 'Slide 4',
        caption: 'VIU'
    }
  ];

const ProductSubscription = (props) => {
    
    const {
        className
      } = props;
      const [modal, setModal] = useState(false);
      const [data, setData] = useState({}); //hooks
      const handleShowmodal = (items) =>
       {
           console.log (items) 
           setData(items)
           console.log("rio",data)
           setModal(!modal)

        } ;
      console.log(props, "cek props");
    return (
        <div>
          
            <Container>
            
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1 style={{textAlign:'center'}}>PRODUCT</h1>
    <br></br>
    <Card>
           <CardBody>
            <Row>
        {items.map((image,i)=>
        <Col md={4}>
        <img alt="#" style={{backgroundColor:"black"}}  src={image.src} onClick={()=> handleShowmodal(image)}>
            </img> 
            <br></br>
            <br></br>
            <br></br>
        </Col>
        
            )}
            
       
      <Modal isOpen={modal} toggle = {() => setModal(false)} className={className}>
        <ModalHeader>{data.caption}</ModalHeader>
        <ModalBody>
            <img style={{backgroundColor:"black"}} src={data.src} ></img>
            <br></br>
          <h6> Next Payment : {data.Next_Payment}</h6>
          <h6> Duration : {data.Duration}</h6>
          <h6> Cost : {data.Cost}</h6>
          {data.description}
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={()=> setModal(false)}>Subscript</Button>
        </ModalFooter>
      </Modal>
      
      </Row>
      </CardBody>
      </Card>
      </Container>
      
    </div>

    );
}

export default ProductSubscription;
