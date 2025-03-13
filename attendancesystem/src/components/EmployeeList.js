import React, { useState } from "react";
import "./EmployeeList.css";

const EmployeeList = ({ employees, setEmployees }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ name: "", email: "", employeeId: "" });

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditData(employees[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = (index) => {
    const updatedEmployees = employees.map((employee, i) =>
      i === index ? editData : employee
    );
    setEmployees(updatedEmployees);
    setEditIndex(null);
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="employee-container">
      <h2>Employee List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    name="employeeId"
                    value={editData.employeeId}
                    onChange={handleChange}
                  />
                ) : (
                  employee.employeeId
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleChange}
                  />
                ) : (
                  employee.name
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                  />
                ) : (
                  employee.email
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <button className="save-btn" onClick={() => handleSave(index)}>Save</button>
                ) : (
                  <button className="edit-btn" onClick={() => handleEditClick(index)}>Edit</button>
                )}
                <button className="delete-btn" onClick={() => deleteEmployee(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;