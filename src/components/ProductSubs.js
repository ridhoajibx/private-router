import React, { useState, useEffect } from 'react';
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
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
    const [data, setData] = useState({}); //hooks
    const [APIProduct, setAPIProduct] = useState([]);
    const [ProductId, setProductId] = useState();
    const [productServices, setProductServices] = useState([]);
    const [cost, setcost] = useState("");
    const [serviceId, setserviceId] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);;
    const handleShowmodal = (items) => {

        let id;
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
        setData(items)
        setModal(!modal)

    };

    const productService = (id) => {
        axios.get(`https://peaceful-gorge-77974.herokuapp.com/product/${id}`, {

            headers: {
                'access_token': localStorage.getItem("jwtToken")
            }
        })
            .then(response => {
                const productService = response.data;
                setProductServices(productService);
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg);
            })
    }
    productService()
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

    const Subscript = () => {
        axios.post(`https://peaceful-gorge-77974.herokuapp.com/product/${ProductId}/${serviceId}`,
            {
                headers: {
                    'access_token': localStorage.getItem("jwtToken")
                }
            })
            .then(response => {
                const ProductData = response.data;
                console.log(ProductData);
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg);
            })
    }
    Subscript()

    const toggle = () => setDropdownOpen(prevState => !prevState);

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
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                                            <DropdownToggle caret>
                                                Choose Services
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                {productServices.length !== 0 ? productServices.ProductServices.map(services =>
                                                    <DropdownItem onClick={() => { setcost(services.cost); setserviceId(services.id) }}> {services.service_type}</DropdownItem>) : console.log("kosong")
                                                }
                                                {console.log("id", serviceId)}
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                        {cost && <div>Cost: {cost}</div>}
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="success" onClick={() => { setModal(false); Subscript() }}>Subscript</Button>
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