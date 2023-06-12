import React, { useEffect, useState } from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {

  const [id,setId] = useState('')
  const [empName,setEmpName] = useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation] = useState('')
  const [salary,setSalary] = useState(0)

  // get path parameter from url

  const params = useParams()
  // console.log(params.id);

  const location = useNavigate()

  // api call to get details of a particular employee from server

  const fetchEmployee = async() =>{
    const result = await axios.get('http://localhost:8000/get-an-employee/'+params.id)
    setId(result.data.employees.id);
    setEmpName(result.data.employees.empname);
    setAge(result.data.employees.age);
    setDesignation(result.data.employees.designation);
    setSalary(result.data.employees.salary);
  }

  const handleUpdate = async (e) =>{
    e.preventDefault()

    const body = {
      id,
      empName,
      age,
      designation,
      salary
    }

    // api call

    const result = await axios.post('http://localhost:8000/update-employee',body)
    alert(result.data.message)
    location('/')
    
  }

  useEffect(()=>{
    fetchEmployee()
  },[])

  return (
    <div>
      <h1 className='text-center mt-5'>Update Employee Details</h1>
      <p className='ms-4 mt-4 p-4'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources. It ensures that HR efficiently manages each employee's payroll and disburses salaries on time. </p>
      <Row>
        <Col className='ms-5' md={5}>
          <img className='m-5' alt='img' src='https://cdn-icons-png.flaticon.com/512/3090/3090108.png'/>
        </Col>

        <Col md={6}>
          <Form className='border border-3 p-5 rounded'>
            <Form.Group className="mb-3">
              <h3 className='text-center'>Update Your Details</h3>
              <Form.Label>Employee Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" value={empName} onChange={(e)=>setEmpName(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" value={age} onChange={(e)=>setAge(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" placeholder="Enter your designation" value={designation} onChange={(e)=>setDesignation(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter your salary" value={salary} onChange={(e)=>setSalary(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I Agree" />
            </Form.Group>
            <Button variant="success" type="submit" onClick={(e)=>handleUpdate(e)}>Update</Button>

            <Link to={'/'}><Button variant="dark" type="submit" className='ms-5'>Close</Button></Link>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Edit