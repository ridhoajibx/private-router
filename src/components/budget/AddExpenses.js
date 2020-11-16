import React, { Component } from 'react';
import './style.scss';

export class AddExpenses extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        const {showExpense} = this.props;
        return <div className="base-container" style={{
            position: 'absolute',
            zIndex:100,
          transform: showExpense ? 'translate(0vh)' : 'translate(-100vh)',
          opacity: showExpense ? '1' : '0'
        }}>
            <form onSubmit={this.onSubmit}>
            <div className="title"><h1>Add Expenses</h1></div>
            <div className="form">
               <div className="form-group">
               <label htmlFor="amount">Amount</label>
                    <input />
               </div>
            </div>
            </form>
            </div>
    }
}

export default AddExpenses;
