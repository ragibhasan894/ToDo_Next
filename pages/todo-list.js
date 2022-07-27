import Link from 'next/link'
import React, { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  const axios = require('axios');

  axios.get('http://localhost:8000/api/get-items')
    .then(res => {
        // console.log(res.data.data);
        setTasks(JSON.parse(res.data.data));
        // console.log(tasks);
    })
    .catch(err => {
        console.log('error in request', err);
    });
  return (
    <div className="container-fluid">
        <div className="todo-list-heading row mt-3">
          <div className="col-sm-6 text-start text-primary">
            <h3># To-Do List</h3>
          </div>
          <div className="col-sm-6">
            <Link href="/add-task">
              <button className="btn btn-success float-end">Add New Item</button>
            </Link>
          </div>
        </div>

        <table className="table table-bordered todo-list-table">
            <thead className="bg-primary text-light">
              <tr>
                <th>#</th>
                <th>Task Name</th>
                <th>Details</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {tasks.map((task) => {
                return (
                  <tr>
                      <td>{task.id}</td>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>{task.created_at}</td>
                      <td>
                          <Link href="/delete-task">
                            <button className="btn btn-danger float-end"> Delete</button>
                          </Link>

                          <Link href={`/edit-task/${encodeURIComponent(task.id)}`}>
                            <button className="btn btn-info float-end"> Edit </button>
                          </Link>
                      </td>
                  </tr>
            )})}
              {/* <tr>
                <td>001</td>
                <td>Buy socks</td>
                <td>27 July, 2022</td>
                <td>24 July, 2022</td>
                <td>Edit</td>
              </tr> */}
            </tbody>
          </table>
      </div>
  )
}
