import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import  Axios  from 'axios';
import '../styles.css'


const Inventory = () => {
    const [inventory, setInventory] = useState([])
    const [updateItem, setUpdateItem] = useState()
    
    const [productId, setProductId] = useState();
    const [productName, setProductName] = useState();
    const [productSummary, setProductSummary] = useState();
    const [totalQuantity, setTotalQuantity] = useState();

    const addItem = () => {
      Axios.post('http://localhost:5000/product/add', {
        productID: productId,
        productName: productName,
        productSummary: productSummary,
        totalQuantity: totalQuantity
      })
      .then(() =>{
        alert("Successfully Added New Entry")
        setInventory([...inventory,{ 
          productID: productId,
          productName: productName,
          productSummary: productSummary,
          totalQuantity: totalQuantity }])
      })
      .catch((err) => {
        alert(err)
      });
      //insert rerouting to inventory
    }

    useEffect(() => {
        Axios.get('http://localhost:5000/product')
        .then((response)=>{
            setInventory(response.data)
        })
        .catch((err) =>{
            alert(err)
        })
    }, [])

    const update = (id,productId,productName,productSummary) => {
      const newQuantity = prompt("Enter New Quantity");
      setUpdateItem()
      Axios.put('http://localhost:5000/product/update/' + id,
        {
          productID: productId,
          productName: productName,
          productSummary: productSummary,
          totalQuantity: newQuantity
        }
      ).then(() => {
        alert("Successfully Updated Entry")
        setInventory(inventory.map(item =>{
          return item._id === id 
          ? { 
            productID: productId,
            productName: productName,
            productSummary: productSummary,
            totalQuantity: newQuantity
          } 
          : item
          
          
        }));
      })
      .catch((err) =>{
        alert("Invalid data type entered")
    })
      
    }
  

    const deleteItem = (id) => {
      Axios.delete((`http://localhost:5000/product/delete/${id}`))
      .then( () => {
        alert("Successfully deleted entry")
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
      <h1>Inventory</h1>
        
      </header>
      <div className='container justify-center'>
      <table  className="table table-design">
        <thead className="thead-design">
        </thead>
        <tbody className='d-flex flex-row ' >
            <tr>
              <th>
                <label>Product ID:
                  <input 
                    type="number" 
                    placeholder='Product ID' 
                    onChange={(event) => {setProductId(event.target.value)}}
                  />
                </label>
              </th>

              <td>
                <label>Product Name:
                  <input 
                    type="text" 
                    placeholder='Product Name' 
                    onChange={(event) => {setProductName(event.target.value)}}
                  />
                </label>
              </td>
              <td>
              <label>Product Summary:
                <input 
                  type="text" 
                  placeholder='Product Summary' 
                  onChange={(event) => {setProductSummary(event.target.value)}}
                />
              </label>
              </td>
              <td>
              <label>Total Quantity:
              <input 
                type="number" 
                placeholder='' 
                onChange={(event) => {setTotalQuantity(event.target.value)}}
              />
              </label>
              </td>
              <td>
               <button className="button-design"  onClick={addItem}> Add </button>
              </td>
              <td>

              </td>
            </tr>
        </tbody>
      </table>
      <table className="table">
  <thead className="thead-design">
    <tr>
      <th scope="col">Product ID</th>
      <th scope="col">Product Name</th>
      <th scope="col">ProductSummary</th>
      <th scope="col">Total Quantity</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody className="thead-design">
  {
            inventory.map((item) =>{
                return(
                    
                    <tr>
                        <th scope="row">{item.productID}</th>
                        <td>{item.productName}</td>
                        <td>{item.productSummary}</td>
                        <td>
                          {item.totalQuantity}
                          
                          
                           
                        </td>
                        <td ><IoIcons.IoIosTrash onClick={()=>{deleteItem(item._id)}}/></td>
                        <td><GrIcons.GrUpdate onClick={() => { update(item._id,item.productID,item.productName,item.productSummary)}} /> </td>                    
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

export default Inventory;