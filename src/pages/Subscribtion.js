import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col,Card, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody} from 'reactstrap';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const items = [
    {
        id: '1',
      src: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
      description: '1231231241241',
      altText: 'Slide 1',
      caption: 'NETFLIX'
    },
    {
        id: '2',
      src: 'https://www.logo.wine/a/logo/BT_Sport/BT_Sport-Logo.wine.svg',
      description: 'dfgkljdfjkgjjdlfkgjdklfgj',
      altText: 'Slide 2',
      caption: 'BT SPORT'
    },
    {
        id: '3',
      src: 'https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg',
      description: 'dfgkljdfjkgjjdlfkgjdklfgje23423423',
      altText: 'Slide 3',
      caption: 'SPORTIFY'
    },
    {
        id: '4',
        src: 'https://www.logo.wine/a/logo/Disney%2B/Disney%2B-Logo.wine.svg',
        description: 'dfgkljdfjkgjjdlfkgjd243423423423',
        altText: 'Slide 4',
        caption: 'DISNEY+'
    },
    {
        id: '5',
        src: 'https://www.logo.wine/a/logo/Google_Stadia/Google_Stadia-Logo.wine.svg',
        description: 'dfgkljdfjkgjjdlfkgjdklfgj555555555555555',
        altText: 'Slide 4',
        caption: 'STADIA'
    },
    {
        id: '6',
        src: 'https://www.logo.wine/a/logo/Viu_(streaming_media)/Viu_(streaming_media)-Logo.wine.svg',
        description: 'dfgkljdfjkgjjdlfkgjdklfgj687987979',
        altText: 'Slide 4',
        caption: 'VIU'
    }
  ];

const Subscription = (props) => {
    
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
        <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={props.handleToggleSide}>
                {!props.toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Subscription</h4>
                <br></br>
                <br></br>
                <br></br>
            </span>
            <CardGroup>
      <Card>
        <CardBody>
        <h1 style={{textAlign:'center',color:'purple'}}>10</h1>
        <br></br>
        <h5 style={{textAlign:'center'}}>Total Active Subscription</h5>
       </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h1 style={{textAlign:'center',color:'purple'}}>4</h1>
          <br></br>
          <h5 style={{textAlign:'center',}}>Paid</h5>
        </CardBody>
      </Card>
      <Card>
       <CardBody>
       <h1 style={{textAlign:'center',color:'purple'}}>1</h1>
       <br></br>
       <h5 style={{textAlign:'center'}}>Pending</h5>
        </CardBody>
      </Card>
    </CardGroup>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
            <Row>
        {items.map((image,i)=>
        <Col md={4}>
        <img style={{backgroundColor:"black"}} src={image.src} onClick={()=> handleShowmodal(image)}>
            </img> 
            <br></br>
            <br></br>
        </Col>
            )}
       
      <Modal isOpen={modal} toggle = {() => setModal(false)} className={className}>
        <ModalHeader>{data.caption}</ModalHeader>
        <ModalBody>
            <img style={{backgroundColor:"black"}} src={data.src} ></img>
          {data.description}
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={()=> setModal(false)}>Subscript</Button>
        </ModalFooter>
      </Modal>
      </Row>
    </div>

    );
}

export default Subscription;
