import React, { Component } from 'react';
import {Card} from 'reactstrap';
import './style.scss';

export class AddExpenses extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        const {showExpense} = this.props;
        return <div className="base" style={{
            position: 'absolute',
            zIndex:100,
          transform: showExpense ? 'translate(0vh)' : 'translate(-100vh)',
          opacity: showExpense ? '1' : '0'
        }}>
            <Card style={{'padding': '20px'}}>
            <form onSubmit={this.onSubmit}>
            <div className="title"><h1>Add Expenses</h1></div>
            <div className="form">
               <div className="form-group">
                   <pre>
               <label htmlFor="amount">Title:</label>
               </pre>
                    <input />
               </div>
               <div className="form-group">
                   <pre>
               <label htmlFor="amount">Cost :  </label>
               </pre>
                    <input />
               </div>
               <div className="form-group">
               <pre>
               <label htmlFor="repeat">Repeat:  </label>
               </pre>
                    <select name="repeat" id="repeat">
                        <option value="">Daily</option>
                        <option value="">Weekly</option>
                        <option value="">Monthly</option>
                    </select>
               </div>
               <div className="form-group">
               <pre>
               <label htmlFor="amount">Start Date: </label>
               </pre>
                    <input type="date" />
               </div>
               <div className="form-group">
               <pre>
               <label htmlFor="amount">Limit Date: </label>
               </pre>
                    <input type="date" />
               </div>
            </div>
            </form>
            </Card>
            </div>
    }
}

export default AddExpenses;
