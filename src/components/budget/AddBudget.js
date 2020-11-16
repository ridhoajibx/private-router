import React, { Component } from 'react';
import {Card} from 'reactstrap';
import './style.scss';

export class AddBudget extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        const {show} = this.props;
        return <div className="base-container" style={{
            position: 'absolute',
            zIndex:100,
          transform: show ? 'translate(0vh)' : 'translate(-100vh)',
          opacity: show ? '1' : '0'
        }}>
            <Card style={{'padding': '20px'}}>
            <form onSubmit={this.onSubmit}>
            <div className="title"><h1>Add Budget</h1></div>
            <div className="form">
               <div className="form-group">
               <label htmlFor="amount">Amount</label>
                    <input />
               </div>
            </div>
            </form>
            </Card>
            </div>
    }
}

export default AddBudget;


