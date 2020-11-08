import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col,Card, CardGroup,
  CardSubtitle, CardBody} from 'reactstrap';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
// import TableComponent from '../components/budget/TableComponent';

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
                <h4>BUDGET</h4>
                <br></br>
                <br></br>
                <br></br>
            </span>
            <CardGroup>
      <Card>
        <CardBody>
        <h1 style={{textAlign:'center',color:'purple'}}>
            10
        </h1>
        <br></br>
        <h5 style={{textAlign:'center'}}>INCOME</h5>
       </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h1 style={{textAlign:'center',color:'purple'}}>
              4
          </h1>
          <br></br>
          <h5 style={{textAlign:'center',}}>BUDGET</h5>
        </CardBody>
      </Card>
      <Card>
       <CardBody>
       <h1 style={{textAlign:'center',color:'purple'}}>
           1
       </h1>
       <br></br>
       <h5 style={{textAlign:'center'}}>EXPENSES</h5>
        </CardBody>
      </Card>
    </CardGroup>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
            {/* <TableComponent /> */}
    </div>

    );
}

export default Subscription;
