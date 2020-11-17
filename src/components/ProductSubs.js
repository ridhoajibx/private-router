import React, { useState, useEffect } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Col,
    Container,
    CardBody,
    Card
} from 'reactstrap';
import axios from "axios";

const ProductSubscription = (props) => {

    const {
        className
    } = props;
    const [modal, setModal] = useState(false);
    const [APIProduct, setAPIProduct] = useState([]);
    const [data, setData] = useState([])

    const handleShowmodal = (items) => {
        setData(items)
        setModal(!modal)
    }

    const product = () => {
        axios.get('https://peaceful-gorge-77974.herokuapp.com/product/all')
            .then(response => {
                const ProductData = response.data;
                setAPIProduct(ProductData);
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg);
            })
    }
    useEffect(() => {
        product()
    }, [])


    return (
        <div>
            <Container>
                <div className="mt-5 pt-4">
                    <h1 className="text-center mt-5">PRODUCT</h1>
                </div>
                <Card>
                    <CardBody>
                        <Row>
                            {APIProduct.map((items, i) =>
                                <Col key={i} md={4}>
                                    <Card>
                                        <CardBody>
                                            <img alt="#" style={{ backgroundColor: "#e8e8e8" }} src={items.icon} onClick={() => handleShowmodal(items)} />
                                        </CardBody>
                                    </Card>
                                </Col>
                            )}


                            <Modal isOpen={modal} toggle={() => setModal(false)} className={className}>
                                <ModalHeader>
                                    {data.name}
                                </ModalHeader>
                                <ModalBody>
                                    <div className="d-flex justify-content-center">
                                        <img className="img-thumbnail imgProduct" src={data.backdrop} alt='...' />
                                    </div>
                                    <div>
                                        {data.details}
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="success" onClick={(event) => setModal(false)}>Subscript</Button>
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