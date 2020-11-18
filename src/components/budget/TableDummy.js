import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [
    {
      dataField: "title",
      text: "Title",
      sort: true
    },
    {
      dataField: "cost",
      text: "Cost",
      sort: true,
    },
    {
      dataField: "repeat",
      text: "Repeat",
      sort: true,
    },
    {
      dataField: "startdate",
      text: "Start Date",
      sort: true,
    },
    {
      dataField: "limitdate",
      text: "Limit Date",
      sort: true,
    },
    {
      dataField: "action",
      text: "Action"
    }]

function TableDummy(props) {
    return (
        <div>
            <BootstrapTable keyField='title' data={props.expense} columns={columns}/>
        </div>
    )
}

export default TableDummy
