import React, { useState, useEffect } from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from 'axios';

const Add = () => {

  const [id, setId] = useState('')
  const [empName, setEmpName] = useState('')
  const [age, setAge] = useState('')
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState(0)

  let location = useNavigate()

  useEffect(() => {
    setId(uuid().slice(0, 4))
  }, [])

  const handleAddEmployee = async (e) => {
    // prevent refresh of page
    e.preventDefault()

    setId(uuid().slice(0, 4))

    const body = {
      id,
      empName,
      age,
      designation,
      salary
    }
    console.log(body);

    const result = await axios.post('http://localhost:8000/add-employee', body)
    alert(result.data.message);

    // to redirect
    location('/')
  }

  return (
    <div>
      <h1 className='text-center mt-5'>Add Employee Details</h1>
      <p className='ms-4 mt-4 p-4'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources. It ensures that HR efficiently manages each employee's payroll and disburses salaries on time. </p>
      <Row>
        <Col className='ms-5' md={5}>
          <img className='m-5' alt='img' src='https://cdn-icons-png.flaticon.com/512/3090/3090108.png' />
        </Col>

        <Col md={6}>
          <Form className='border border-3 p-5 rounded'>
            <Form.Group className="mb-3">
              <h3 className='text-center'>Add Your Details</h3>
              <Form.Label>Employee Name</Form.Label>
              <Form.Control type="text" placeholder="Enter employee name"
                //  value={empname} 
                onChange={(e) => setEmpName(e.target.value)} required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter employee age"
                // value={age} 
                onChange={(e) => setAge(e.target.value)} required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" placeholder="Enter employee designation"
                // value={designation} 
                onChange={(e) => setDesignation(e.target.value)} required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter employee salary"
                // value={salary} 
                onChange={(e) => setSalary(e.target.value)} required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I Agree" />
            </Form.Group>
            <Button variant="success" className='me-5' type="submit" onClick={(e) => handleAddEmployee(e)}>Add</Button> &nbsp;

            <Link to={'/'}><Button variant="dark" type="submit">Close</Button></Link>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Add