import React from 'react'
import './policies.css'
import {Link}  from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

function Policies() {
   
    const settings = [{
        Applied_Policies_for_selected_files: "Only share inside the organization",
        id: 1
    },
    {
        Applied_Policies_for_selected_files: "Allow access only for authorized devices",
        id: 2
    },
    {
        Applied_Policies_for_selected_files: "Restrict access duration",
        id:3
    },
    {
        Applied_Policies_for_selected_files: "Restrict geo location access",
        id:4
    },
   ]
    const columns = [{
        dataField: 'Applied_Policies_for_selected_files',
        text: 'Applied Policies for selected files',
        style: {verticalAlign: 'middle',
        headerAlign: 'top'}
      }];
      const selectRow = {
        mode: "checkbox",
        clickToSelect: false,
        classes: "selection-row"
      };
      const rowEvents = {
        onClick: (e, row, rowIndex) => {
          console.log({ row, rowIndex });
        }
      };
      ;
      
    return (
        <div className='policies'>
            <div className='headspolicies'>
      <Link className='policieslink' to='home'>Home</Link>
     <p className='policiesp'> Organizational Policies</p>
           </div>
            <div className='policiescontainer'>
            <BootstrapTable
             keyField='id'
              data={settings}
              columns={columns}
              selectRow={selectRow}
              rowEvents={rowEvents}
              bordered={ false }
              
              
              />
              <p>How many times a file can be accessed</p>
              <p>How many simultaneous viewings</p>
            </div>
            
        </div>
    )
}

export default Policies
