import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getEmployee, editEmployee } from '../service/api '

const Edit = () => {
    const {id} = useParams();

    const [data, setData] = useState({
        name:'',
        email:'',
        age:'',
        mobile:'',
        address:'',
        work:'',
        description:''
    })

    const {name, email, age, mobile, address, work, description}= data

    const inputHandler =(event)=>{
    // console.log(event.target.value);
    const {name, value} = event.target;

        setData(preVal=>{
            return{
                ...preVal, 
                [name]:value
            }
        })
    }

    const submitHandler =async(e)=>{
        e.preventDefault()
        console.log('edited');
    }

  return (
    <div className='container'>
      <Link to='/'>Home</Link>
      <form>
          <div className='row'>
          <div className="md-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputEmail1">Name</label>
              <input type="text" name='name' value={data.name} onChange={inputHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name"/>
          </div>
          <div className="md-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1">Email Address</label>
              <input type="email" name='email' value={data.email} onChange={inputHandler} className="form-control" id="exampleInputPassword1" placeholder="Enter your Email"/>
          </div>
          <div className="md-3 col-lg-6 col-md-6 col- 12">
              <label for="exampleInputPassword1">Age</label>
              <input type="number" name='age' value={data.age} onChange={inputHandler} className="form-control" id="exampleInputPassword1" placeholder="Enter your Age"/>
          </div>
          <div className="md-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1">Mobile</label>
              <input type="number" name='mobile' value={data.mobile} onChange={inputHandler} className="form-control" id="exampleInputPassword1" placeholder="Enter your Mobile Number"/>
          </div>
          <div className="md-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1">Address</label>
              <input type="text" name='address' value={data.address} onChange={inputHandler} className="form-control" id="exampleInputPassword1" placeholder="Enter your address"/>
          </div>
          <div className="md-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1">Work</label>
              <input type="text" name='work' value={data.work} onChange={inputHandler} className="form-control" id="exampleInputPassword1" placeholder="Enter your work information"/>
          </div>
          <div className="md-3 col-lg-12 col-md-6 col-12">
              <label for="exampleInputPassword1">Description</label>
              <textarea type='text' name='description' value={data.description} onChange={inputHandler} className="form-control" cols='30' rows='5' placeholder="Describe yourself here"/>
          </div>
          <button type="submit" onClick={submitHandler} className="btn btn-primary mt-3">Submit</button> 
          </div>
      </form>
    </div>
  )
}

export default Edit;