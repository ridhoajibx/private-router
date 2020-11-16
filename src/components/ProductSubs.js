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






const ProductSubscription = (props) => {
    
    const {
        className
      } = props;
      const [modal, setModal] = useState(false);
      const [data, setData] = useState({}); //hooks
      const [APIProduct, setAPIProduct] = useState([]);
      const [ProductId, setProductId]= useState();
      const [productServices, setProductServices]= useState([]);
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
            
          {data.details}
        {productServices.length !== 0 ? productServices.ProductServices.map(services => <div> <button>{services.service_type}</button> <p>{services.cost}</p></div>) : console.log("kosong")
}
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