
const Report = () => {
    return(
      <>
        <div className= "form-group row padding">
        <label className="col-sm-1 col-form-label">Name:</label>
        <div className="col-sm-11">
        <input  type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Enter Name"/>
        </div>
        
        </div>
        <div className= "form-group row padding">
        <label className="col-sm-1 col-form-label">Contact Number:</label>
        <input  type="text" 
                className="form-control col-sm-11" 
                id="exampleFormControlInput1" 
                placeholder="Enter Contact Number"/>
        </div>
        <div className= "form-group row padding">
        <label className="col-sm-1 col-form-label">Email address</label>
        <input  type="text" 
                className="form-control col-sm-11" 
                id="exampleFormControlInput1" 
                placeholder="Enter Email:"/>
        </div>
        <div className="form-group row padding">
        <label className="col-sm-1 col-form-label">Enter Your Concerns:</label>
        <textarea class="form-control col-sm-10" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </>

             
    )

}

export default Report;