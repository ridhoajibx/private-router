import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col,Container, CardBody,Card} from 'reactstrap';
// import {
//   FETCH_PRODUCT_REQUEST,
// } from './userTypes';
import axios from "axios";

// export const fetchProductRequest = () => {
//   return {
//       type: FETCH_PRODUCT_REQUEST
//   }
// }




// const items = [
//     {
//         id: '1',
//       src: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
//       Next_Payment: 'June 29 2020',
//       Duration:'Monthly',
//       Cost: '149.000',
//       altText: 'Slide 1',
//       caption: 'NETFLIX'
//     },
//     {
//         id: '2',
//       src: 'https://www.logo.wine/a/logo/BT_Sport/BT_Sport-Logo.wine.svg',
//       Next_Payment: 'June 29 2020',
//       Duration:'Monthly',
//       Cost: '149.000',
//       altText: 'Slide 2',
//       caption: 'BT SPORT'
//     },
//     {
//         id: '3',
//       src: 'https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg',
//       Next_Payment: 'June 29 2020',
//       Duration:'Monthly',
//       Cost: '149.000',
//       altText: 'Slide 3',
//       caption: 'SPORTIFY'
//     },
//     {
//         id: '4',
//         src: 'https://www.logo.wine/a/logo/Disney%2B/Disney%2B-Logo.wine.svg',
//         Next_Payment: 'June 29 2020',
//         Duration:'Monthly',
//         Cost: '149.000',
//         altText: 'Slide 4',
//         caption: 'DISNEY+'
//     },
//     {
//         id: '5',
//         src: 'https://www.logo.wine/a/logo/Google_Stadia/Google_Stadia-Logo.wine.svg',
//         Next_Payment: 'June 29 2020',
//         Duration:'Monthly',
//         Cost: '149.000',
//         altText: 'Slide 4',
//         caption: 'STADIA'
//     },
//     {
//         id: '6',
//         src: 'https://www.logo.wine/a/logo/Viu_(streaming_media)/Viu_(streaming_media)-Logo.wine.svg',
//         Next_Payment: 'June 29 2020',
//         Duration:'Monthly',
//         Cost: '149.000',
//         altText: 'Slide 4',
//         caption: 'VIU'
//     }
//   ];

const ProductSubscription = (props) => {
    
    const {
        className
      } = props;
      const [modal, setModal] = useState(false);
      const [data, setData] = useState({}); //hooks
      const [APIProduct, setAPIProduct] = useState([]);
      
      const handleShowmodal = (items) =>
       {
           console.log (items) 
           setData(items)
           console.log("rio",data)
           setModal(!modal)

        } ;
      console.log(props, "cek props");
      
     const product = () => {
        console.log("masuk ke function product");
            // dispatch(fetchProductRequest)
            console.log("token",localStorage.getItem("jwtToken"));
            axios.get('https://peaceful-gorge-77974.herokuapp.com/product/all', {
               
            headers: {
                    'access_token': localStorage.getItem("jwtToken")
                }
            })
                .then(response => {
                    const ProductData = response.data;
                    console.log(ProductData);
                    setAPIProduct(ProductData);
                    // dispatch(fetchUsersSuccess(users))
                })
                .catch(error => {
                    const errorMsg = error.message
                    console.log(errorMsg);
                    // dispatch(fetchUsersFailure(errorMsg))
                })
        }
    useEffect(() => {
      product()
    }, [])



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
        {APIProduct.map((items,i)=>
       
        <Col md={4}>
           <Card>
        <CardBody>
        <img alt="#" src={items.icon} onClick={()=> handleShowmodal(items)}>
            </img> 
            <br></br>
            <br></br>
            <br></br>
            </CardBody>
           </Card>
        </Col>
        
          
            )}
            
       
      <Modal isOpen={modal} toggle = {() => setModal(false)} className={className}>
        <ModalHeader>{data.name}</ModalHeader>
        <ModalBody>
            <img src={data.backdrop} alt='...'></img>
            <br></br>
          {/* <h6> Next Payment : {data.}</h6>
          <h6> Duration : {data.Duration}</h6>
          <h6> Cost : {data.Cost}</h6> */}
          {data.details}
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