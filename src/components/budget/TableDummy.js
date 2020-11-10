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
      dataField: "dueDate",
      text: "Due Date",
      sort: true,
    }]

function TableDummy(props) {
    return (
        <div>
            <BootstrapTable keyField='title' data={props.expense} columns={columns}/>
        </div>
    )
}

export default TableDummy
