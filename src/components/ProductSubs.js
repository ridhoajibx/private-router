import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col,Container, CardBody,Card} from 'reactstrap';
// import {
//   FETCH_PRODUCT_REQUEST,
// } from './userTypes';
import axios from "axios";
<<<<<<< HEAD

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
=======

// export const fetchProductRequest = () => {
//   return {
//       type: FETCH_PRODUCT_REQUEST
//   }
// }





>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936

const ProductSubscription = (props) => {
    
    const {
        className
      } = props;
      const [modal, setModal] = useState(false);
      const [data, setData] = useState({}); //hooks
      const [APIProduct, setAPIProduct] = useState([]);
<<<<<<< HEAD
      
=======
      const [ProductId, setProductId]= useState();
      const [productServices, setProductServices]= useState([]);
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
      const handleShowmodal = (items) =>
       {
        
        let id;
        // if( items !== "" || items !== undefined ){
        //   console.log (true)
        // } else {
        //   console.log(false)
        // }
        if (items.name === 'Spotify') {
          id = 1;
          setProductId(1);
        } else if (items.name === 'Netflix') {
          id = 2;
          setProductId(2);
        } else if (items.name === 'Disney+') {
          id = 3;
          setProductId(3);
        } else {
          id = 4;
          setProductId(4);
        }
        productService(id)
    
          console.log ("ripqi",items.name) 
           setData(items)
           console.log("rio",data)
           setModal(!modal)

        } ;
      console.log(props, "cek props");
      
<<<<<<< HEAD
=======
      const productService = (id) => {
        console.log("masuk ke function product");
            // dispatch(fetchProductRequest)
            console.log("token",localStorage.getItem("jwtToken"));
            axios.get(`https://peaceful-gorge-77974.herokuapp.com/product/${id}`, {
             
            headers: {
                    'access_token': localStorage.getItem("jwtToken")
                }
            })
                .then(response => {
                    const productService = response.data;
                    console.log("ripqiganteng",productService);
                  setProductServices(productService);
                    // dispatch(fetchUsersSuccess(users))
                })
                .catch(error => {
                    const errorMsg = error.message
                    console.log(errorMsg);
                    // dispatch(fetchUsersFailure(errorMsg))
                })
        }
   productService()

>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
     const product = () => {
        console.log("masuk ke function product");
            // dispatch(fetchProductRequest)
            console.log("token",localStorage.getItem("jwtToken"));
            axios.get('https://peaceful-gorge-77974.herokuapp.com/product/all', {
<<<<<<< HEAD
               
=======
             
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
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
<<<<<<< HEAD



=======
    

    
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
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
<<<<<<< HEAD
            <br></br>
          {/* <h6> Next Payment : {data.}</h6>
          <h6> Duration : {data.Duration}</h6>
          <h6> Cost : {data.Cost}</h6> */}
          {data.details}
=======
            
          {data.details}
        {productServices.length !== 0 ? productServices.ProductServices.map(services => <div> <button>{services.service_type}</button> <p>{services.cost}</p></div>) : console.log("kosong")
}
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
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