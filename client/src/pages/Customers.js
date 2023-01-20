import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import  Axios  from 'axios';
import '../styles.css'

const Customers = () => {
  const [inventory, setInventory] = useState([])
  const [updateItem, setUpdateItem] = useState()
  
  const [customerId, setcustomerId] = useState();
  const [customerName, setcustomerName] = useState();
  const [customerAddress, setcustomerAddress] = useState();
  const [customerEmail, setcustomerEmail] = useState();
  const [contactNumber, setcontactNumber] = useState();

  const addItem = () => {
    Axios.post('http://localhost:5000/customer/add', {
      customerID: customerId,
      customerName: customerName,
      customerAddress: customerAddress,
      customerEmail: customerEmail,
      customerContactNumber: contactNumber
    })
    .then(() =>{
      alert(`${customerId} ${customerName} ${customerAddress} ${customerEmail} ${contactNumber}`)
      setInventory([...inventory,{ 
        customerID: customerId,
      customerName: customerName,
      customerAddress: customerAddress,
      customerEmail: customerEmail,
      customerContactNumber: contactNumber}])
    })
    .catch((err) => {
      alert(err)
    });
    //insert rerouting to inventory
  }

  useEffect(() => {
      Axios.get('http://localhost:5000/customer')
      .then((response)=>{
          setInventory(response.data)
      })
      .catch((err) =>{
          alert(err)
      })
  }, [])

  // const update = (id,customerId,customerName,customerAddress) => {
  //   const newQuantity = prompt("Enter New Quantity");
  //   setUpdateItem()
  //   alert(id)
  //   Axios.put('http://localhost:5000/customer/update/' + id,
  //     {
  //       customerID: customerId,
  //       customerName: customerName,
  //       customerAddress: customerAddress,
  //       contactNumber: newQuantity
  //     }
  //   ).then(() => {
  //     setInventory(inventory.map(item =>{
        

  //       return item._id === id 
  //       ? { 
  //         customerID: customerId,
  //         customerName: customerName,
  //         customerAddress: customerAddress,
  //         contactNumber: newQuantity
  //       } 
  //       : item
        
        
  //     }))
  //   })
  //   .catch()
    
  // }


  const deleteItem = (id) => {
    Axios.delete((`http://localhost:5000/customer/delete/${id}`))
    .then( () => {
      setInventory( 
        inventory.filter((item) => {
          return item._id !== id;
        })
      )
    }

    )
  }

  return (
  <div className='inventory-home container'>
    <header className='header'>
    <h1>Customers List</h1>
      
    </header>
    <div className='container justify-center'>
    <table  className="table table-design">
      <thead className="">
      </thead>
      <tbody className='d-flex flex-row '>
          <tr>
            <th className='align-items-center'>
              <label>customer ID:
                <input 
                  type="number" 
                  placeholder='customer ID' 
                  onChange={(event) => {setcustomerId(event.target.value)}}
                />
              </label>
            </th>

            <td>
              <label>customer Name:
                <input 
                  type="text" 
                  placeholder='Customer Name' 
                  onChange={(event) => {setcustomerName(event.target.value)}}
                />
              </label>
            </td>

            <td>
            <label>customer Address:
              <input 
                type="text" 
                placeholder='Customer Address' 
                onChange={(event) => {setcustomerAddress(event.target.value)}}
              />
            </label>
            </td>

            <td>
            <label>customer Email:
              <input 
                type="text" 
                placeholder='Customer Email' 
                onChange={(event) => {setcustomerEmail(event.target.value)}}
              />
            </label>
            </td>

            <td>
            <label>Contact Number:
            <input 
              type="number" 
              placeholder='Contact Number' 
              onChange={(event) => {setcontactNumber(event.target.value)}}
            />
            </label>
            </td>

            <td>
             <button className="button-design" onClick={addItem}> Add </button>
            </td>
            <td>

            </td>
          </tr>
      </tbody>
    </table>
    <table className="table">
<thead className="thead-design">
  <tr>
    <th scope="col">customer ID</th>
    <th scope="col">customer Name</th>
    <th scope="col">customer Address</th>
    <th scope="col">customer Email </th>
    <th scope="col">Contact Number</th>
    <th scope="col">Delete</th>

  </tr>
</thead>
<tbody className="thead-design">
{
          inventory.map((item) =>{
              return(
                  
                  <tr>
                      <th scope="row">{item.customerID}</th>
                      <td>{item.customerName}</td>
                      <td>{item.customerAddress}</td>
                      <td>{item.customerContactNumber}</td>
                      <td>{item.customerEmail} </td>
                      <td ><IoIcons.IoIosTrash onClick={()=>{deleteItem(item._id)}}/></td>
                     {/* <td><GrIcons.GrUpdate onClick={() => { update(item._id,item.productID,item.productName,item.productAdcustomerAddress)}} /> </td>                     */}
                  </tr>
                      
              )
          })
      }
</tbody>
</table>
      
     

    </div>
  </div>
);
};

export default Customers;
