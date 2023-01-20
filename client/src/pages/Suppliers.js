import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import  Axios  from 'axios';
import '../styles.css'

const Suppliers = () => {
  const [inventory, setInventory] = useState([])
  const [updateItem, setUpdateItem] = useState()
  
  const [supplierId, setsupplierId] = useState();
  const [supplierName, setsupplierName] = useState();
  const [supplierAddress, setsupplierAddress] = useState();
  const [supplierEmail, setsupplierEmail] = useState();
  const [contactNumber, setcontactNumber] = useState();

  const addItem = () => {
    Axios.post('http://localhost:5000/supplier/add', {
      supplierID: supplierId,
      supplierName: supplierName,
      supplierAddress: supplierAddress,
      supplierEmail: supplierEmail,
      supplierContactNumber: contactNumber
    })
    .then(() =>{
      alert(`${supplierId} ${supplierName} ${supplierAddress} ${supplierEmail} ${contactNumber}`)
      setInventory([...inventory,{ 
        supplierID: supplierId,
      supplierName: supplierName,
      supplierAddress: supplierAddress,
      supplierEmail: supplierEmail,
      supplierContactNumber: contactNumber}])
    })
    .catch((err) => {
      alert(err)
    });
    //insert rerouting to inventory
  }

  useEffect(() => {
      Axios.get('http://localhost:5000/supplier')
      .then((response)=>{
          setInventory(response.data)
      })
      .catch((err) =>{
          alert(err)
      })
  }, [])

  // const update = (id,supplierId,supplierName,supplierAddress) => {
  //   const newQuantity = prompt("Enter New Quantity");
  //   setUpdateItem()
  //   alert(id)
  //   Axios.put('http://localhost:5000/supplier/update/' + id,
  //     {
  //       supplierID: supplierId,
  //       supplierName: supplierName,
  //       supplierAddress: supplierAddress,
  //       contactNumber: newQuantity
  //     }
  //   ).then(() => {
  //     setInventory(inventory.map(item =>{
        

  //       return item._id === id 
  //       ? { 
  //         supplierID: supplierId,
  //         supplierName: supplierName,
  //         supplierAddress: supplierAddress,
  //         contactNumber: newQuantity
  //       } 
  //       : item
        
        
  //     }))
  //   })
  //   .catch()
    
  // }


  const deleteItem = (id) => {
    Axios.delete((`http://localhost:5000/supplier/delete/${id}`))
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
    <h1>Suppliers</h1>
      
    </header>
    <div  className='container justify-center'>
    <table  className="table table-design">
      <thead className="">
      </thead>
      <tbody className='d-flex flex-row '>
          <tr>
            <th>
              <label>Supplier ID:
                <input 
                  type="number" 
                  placeholder='supplier ID' 
                  onChange={(event) => {setsupplierId(event.target.value)}}
                />
              </label>
            </th>

            <td>
              <label>Supplier Name:
                <input 
                  type="text" 
                  placeholder='supplier Name' 
                  onChange={(event) => {setsupplierName(event.target.value)}}
                />
              </label>
            </td>

            <td>
            <label>Supplier Address:
              <input 
                type="text" 
                placeholder='supplierAddress' 
                onChange={(event) => {setsupplierAddress(event.target.value)}}
              />
            </label>
            </td>

            <td>
            <label>Supplier Email:
              <input 
                type="text" 
                placeholder='Supplier Email' 
                onChange={(event) => {setsupplierEmail(event.target.value)}}
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
             <button className='button-design' onClick={addItem}> Add </button>
            </td>
            <td>

            </td>
          </tr>
      </tbody>
    </table>
    <table className="table">
<thead className="thead-design">
  <tr>
    <th scope="col">Supplier ID</th>
    <th scope="col">Supplier Name</th>
    <th scope="col">Supplier Address</th>
    <th scope="col">Supplier Email </th>
    <th scope="col">Contact Number</th>
    <th scope="col">Delete</th>

  </tr>
</thead>
<tbody className='thead-design'>
{
          inventory.map((item) =>{
              return(
                  
                  <tr>
                      <th scope="row">{item.supplierID}</th>
                      <td>{item.supplierName}</td>
                      <td>{item.supplierAddress}</td>
                      <td>{item.supplierContactNumber}</td>
                      <td>{item.supplierEmail} </td>
                      <td ><IoIcons.IoIosTrash onClick={()=>{deleteItem(item._id)}}/></td>
                     {/* <td><GrIcons.GrUpdate onClick={() => { update(item._id,item.productID,item.productName,item.productAdsupplierAddress)}} /> </td>                     */}
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

export default Suppliers;
