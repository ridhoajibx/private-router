// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col,Card, CardGroup,
//   CardSubtitle, CardBody} from 'reactstrap';
// import { FaBars } from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";
// // import TableComponent from '../components/budget/TableComponent';

// const Subscription = (props) => {
    
    // const {
    //     className
    //   } = props;
    //   const [modal, setModal] = useState(false);
    //   const [data, setData] = useState({}); //hooks
    //   const handleShowmodal = (items) =>
    //    {
    //        console.log (items) 
    //        setData(items)
    //        console.log("rio",data)
    //        setModal(!modal)

    //     } ;
//       console.log(props, "cek props");
//     return (
    //     <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
    //         <span className="toggle-btn" onClick={props.handleToggleSide}>
    //             {!props.toggleSide ? <FaTimes /> : <FaBars />}
    //             <h4>BUDGET</h4>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //         </span>
    //         <CardGroup>
    //   <Card>
    //     <CardBody>
    //     <h1 style={{textAlign:'center',color:'purple'}}>
    //         10
    //     </h1>
    //     <br></br>
    //     <h5 style={{textAlign:'center'}}>INCOME</h5>
    //    </CardBody>
    //   </Card>
    //   <Card>
    //     <CardBody>
    //       <h1 style={{textAlign:'center',color:'purple'}}>
    //           4
    //       </h1>
    //       <br></br>
    //       <h5 style={{textAlign:'center',}}>BUDGET</h5>
    //     </CardBody>
    //   </Card>
    //   <Card>
    //    <CardBody>
    //    <h1 style={{textAlign:'center',color:'purple'}}>
    //        1
    //    </h1>
    //    <br></br>
    //    <h5 style={{textAlign:'center'}}>EXPENSES</h5>
    //     </CardBody>
    //   </Card>
    // </CardGroup>
    // <br></br>
    // <br></br>
    // <br></br>
    // <br></br>
    //         {/* <TableComponent /> */}
    // </div>

//     );
// }

// export Subscription;

import React, { Component } from 'react';
import { Card, CardGroup, CardBody} from 'reactstrap';
// import { FaBars } from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";
import TableDummy from '../components/budget/TableDummy';
import { AiOutlinePlus } from "react-icons/ai";
import AddBudget from '../components/budget/AddBudget';
import { connect } from 'react-redux';
import AddExpenses from '../components/budget/AddExpenses';

export class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: [{
                title: 'Nonton',
                cost: '$20',
                repeat: 'No',
                dueDate: '15/11/2020'
              },
              {
                title: 'Belanja',
                cost: '$100',
                repeat: 'Yes',
                dueDate: '15/11/2020'
              },
              {
                title: 'Traktir',
                cost: '$30',
                repeat: 'No',
                dueDate: '15/11/2020'
              },
              {
                title: 'Book',
                cost: '$30',
                repeat: 'No',
                dueDate: '15/11/2020'
              },
              {
                title: 'Jalan',
                cost: '$100',
                repeat: 'No',
                dueDate: '15/11/2020'
              },
              {
                title: 'Rental Mobil',
                cost: '$40',
                repeat: 'No',
                dueDate: '15/11/2020'
              }]
        };
    }
    render() {
        return (
            <div className={`content-wrapper`} >
              {this.props.global ? <div className="back-drop" onClick={this.props.handleOpen}></div> : null}
              {this.props.showExpense ? <div className="back-drop" onClick={this.props.handleExpense}></div> : null}
            <span className="toggle-btn" >
                <h4>BUDGET</h4>
                <br></br>
                <br></br>
                <br></br>
            </span>
            
            
            <CardGroup>
      <Card>
        <CardBody>
        <h1 style={{textAlign:'center',color:'purple'}}>
            $10.000,00
        </h1>
        <br></br>
        <h5 style={{textAlign:'center'}}>INCOME</h5>
       </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h1 style={{textAlign:'center',color:'purple'}}>
          $9.680,00
          </h1>
          <br></br>
          <h5 style={{textAlign:'center',}}>BUDGET</h5>
        </CardBody>
      </Card>
      <Card>
       <CardBody>
       <h1 style={{textAlign:'center',color:'purple'}}>
           $320,00
       </h1>
       <br></br>
       <h5 style={{textAlign:'center'}}>EXPENSES</h5>
        </CardBody>
      </Card>
    </CardGroup>
    <br/>
    <CardGroup>
      <Card>
        <CardBody className="text-center" style={{alignItems:'center'}}>
          <button className="btn btn-primary" onClick={this.props.handleOpen} >< AiOutlinePlus /> Add Budget</button>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="text-center" style={{alignItems:'center'}}>
          <button className="btn btn-primary" onClick={this.props.handleExpense}>< AiOutlinePlus /> Add Expenses</button>
        </CardBody>
      </Card>
    </CardGroup>

    <br/>
    
    <AddBudget show={this.props.global}/>
    <AddExpenses showExpense={this.props.showExpense}/>
            <Card style={{padding:'20px'}}>
            <span>
                <h4 style={{marginLeft:'10px', marginBottom: '15px'}}>History</h4>
            </span>
            {/* <TableComponent /> */}
            
            <TableDummy expense={this.state.expense}/>
            </Card>
    </div>
    // <>
    // </>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      global: state.global.show,
      showExpense: state.global.showExpense
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      handleOpen: () => dispatch({ type: 'SHOW' }),
      handleExpense: () => dispatch({type: 'SHOW_EXPENSE'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Budget);