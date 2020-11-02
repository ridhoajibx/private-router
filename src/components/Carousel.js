import React, { useState } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Card, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
    {
        id: '1',
        src: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
        Next_Payment: 'June 29 2020',
        Duration: 'Monthly',
        Cost: '149.000',
        altText: 'Slide 1',
        caption: 'NETFLIX'
    },
    {
        id: '2',
        src: 'https://www.logo.wine/a/logo/BT_Sport/BT_Sport-Logo.wine.svg',
        Next_Payment: 'June 29 2020',
        Duration: 'Monthly',
        Cost: '149.000',
        altText: 'Slide 2',
        caption: 'BT SPORT'
    },
    {
        id: '3',
        src: 'https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg',
        Next_Payment: 'June 29 2020',
        Duration: 'Monthly',
        Cost: '149.000',
        altText: 'Slide 3',
        caption: 'SPORTIFY'
    },
    {
        id: '4',
        src: 'https://www.logo.wine/a/logo/Disney%2B/Disney%2B-Logo.wine.svg',
        Next_Payment: 'June 29 2020',
        Duration: 'Monthly',
        Cost: '149.000',
        altText: 'Slide 4',
        caption: 'DISNEY+'
    },
    {
        id: '5',
        src: 'https://www.logo.wine/a/logo/Google_Stadia/Google_Stadia-Logo.wine.svg',
        Next_Payment: 'June 29 2020',
        Duration: 'Monthly',
        Cost: '149.000',
        altText: 'Slide 4',
        caption: 'STADIA'
    },
    {
        id: '6',
        src: 'https://www.logo.wine/a/logo/Viu_(streaming_media)/Viu_(streaming_media)-Logo.wine.svg',
        Next_Payment: 'June 29 2020',
        Duration: 'Monthly',
        Cost: '149.000',
        altText: 'Slide 4',
        caption: 'VIU'
    }
];
const Carousel2 = (props) => {

    const {
        className
    } = props;
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({}); //hooks
    const handleShowmodal = (items) => {
        console.log(items)
        setData(items)
        console.log("rio", data)
        setModal(!modal)

    };
    console.log(props, "cek props");

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div>
            <Slider {...settings}>
                {items.map((image, i) =>
                    <div>
                        <Col>
                            <Card style={{ height: '40px' }}>
                                <Button className="p-0" onClick={() => handleShowmodal(image)}>
                                    <img style={{ backgroundColor: "black" }} src={image.src} />
                                </Button>
                            </Card>
                        </Col>
                    </div>
                )}
            </Slider>
            <Modal isOpen={modal} toggle={() => setModal(false)} className={className}>
                <ModalHeader>{data.caption}</ModalHeader>
                <ModalBody>
                    <img style={{ backgroundColor: "black" }} src={data.src} ></img>
                    <div className="mt-2">
                        {data.description}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => setModal(false)}>Subscript</Button>
                </ModalFooter>
            </Modal>
        </div>

    );
}

export default Carousel2;