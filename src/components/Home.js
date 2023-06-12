import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Table from 'react-bootstrap/Table';
import { FaEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    const [allEmployees, setAllEmployees] = useState([])

    const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/get-all-employees')
        setAllEmployees(result.data.employees);
    }
    console.log(allEmployees);

    useEffect(() => {
        fetchData()
    }, [])

    // Delete function

    const handleDelete = async (id) =>{
        const result = await axios.delete('http://localhost:8000/delete-employee/'+id)
        alert(result.data.message);
        fetchData()
    }

    return (
        <div>
            <h1 className='text-center mt-5'>Employee Management System</h1>
            <p className='ms-4 mt-4 p-4'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources. It ensures that HR efficiently manages each employee's payroll and disburses salaries on time. An EMS securely stores and manages the personal and work-related details of employees. This makes it easier for the managers to store and access relevant data when needed.</p>

            <Link to={'/add'}>
                <Button className='btn btn-success ms-5'>Add  <FaUserPlus /></Button>
            </Link>


            <Table striped bordered hover variant="warning" style={{ margin: "30px", border: "2px solid" }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allEmployees?.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.empname}</td>
                                <td>{item.age}</td>
                                <td>{item.designation}</td>
                                <td>{item.salary}</td>
                                <td>
                                    <Link to={'/edit/'+item.id}>
                                        <Button><FaEdit /></Button>
                                    </Link>
                                    &nbsp;&nbsp;&nbsp;<Button onClick={(e)=>handleDelete(item.id)} className='btn btn-danger'><FaTrashAlt /></Button></td>
                            </tr>
                        ))

                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Home