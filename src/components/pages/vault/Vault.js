import React, {useState, useEffect} from 'react'
import './vault.css'
import axios from 'axios'
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator'
import {Link} from 'react-router-dom'
import {OverlayTrigger,Button,Popover} from 'react-bootstrap'
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter'

// import filterFactory, {textFilter} from 'react-bootstrap-table2-filter'





function Vault(props) { 
  
   const [data, setData] = useState([])
    useEffect(()=>{
      getData()
    },[]) 
    const getData = () =>{
      axios('https://jsonplaceholder.typicode.com/comments').then(res =>{
        console.log(res.data)
       setData(res.data)
      }
       )
   }

    
    const columns = [
      {
        dataField: "id",
        text: 'File',
        sort: true,
        headerAlign: 'center',
        align: 'center',
        width: "60",
        filter: textFilter()
        
        
      },
      {
        dataField: "email",
        text: 'Upload Date',
        sort: true,
        headerAlign: 'center',
        width: "60",
        filter: textFilter()
        
      },
      {
        dataField: "name",
        text: 'Is Currently Accessible',
        sort: true,
        align: 'center',
        headerAlign: 'center',
        width: "60",
        filter: textFilter()
      }]
   
     const options = {
      
       sizePerPageList:[{
     text: '5', value: 5
   },
   {color: '#7251B2' } ,
    {
     text: '10', value: 10
   }, {
     text: 'All', value: data.length
   } ]
  }
  
   const rowEvents = {
    onClick: (e, row, rowIndex) => {
    console.log('clicked')
    
    }
   }
   const popoverClick = (
    <Popover id="popover-trigger-click" title="Popover bottom" style={{backgroundColor: '#E2E8F0'}}>
      <div>
        <p>Only share inside the organization</p>
        <p>Allow access only for authorized devices</p>
        <p>Restrict access duration</p>
        <p>Restrict geo location access</p>
      </div>
    </Popover>
  );
 
    return (

        <div className='Vault'>
            <div className='headsvault'>
      <Link className='linkup' to='home'>Home</Link>
     <p className='vaultp'>File Vault</p>
           </div>
           
        <div className='table-style'>
        
       <BootstrapTable
           data={data}
           keyField='id'
            columns={columns}
             striped hover condensed 
             pagination={paginationFactory(options)}
              bordered={ false }
              rowEvents={ rowEvents } 
              filter={filterFactory()}
             />
             
            </div>
            
          
            <OverlayTrigger className='popover' trigger="click" placement="bottom" overlay={popoverClick}>
      <Button  style={{backgroundColor: "#E2E8F0", color: 'black',
      marginLeft: '118px',border: '0px solid'}}>Click here to see Applied Policies for selected files</Button>
      </OverlayTrigger>
            </div>
          )
       
         
           }   
             
        
        
    




export default Vault