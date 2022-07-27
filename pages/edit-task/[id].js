import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

const axios = require('axios');

export default function EditTask() {
    const [task, setTask] = useState([]);
    
    const router = useRouter();
    const taskId = router.query.id;

    useEffect(function(){
      axios.get('http://localhost:8000/api/get-item/'+taskId)
        .then(res => {
            // console.log(res.data.data);
            setTask(JSON.parse(res.data.data));
        })
        .catch(err => {
            console.log('error in request', err);
        });
    }, []);

    const updateItem = (e) => {
      e.preventDefault();
      const data = {};
      data.id = taskId;
      data.title = document.getElementById("task-title").value;
      data.description = document.getElementById("task-description").value;

      let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*"
          }
      };

      axios.put('http://localhost:8000/api/update-items', data, {axiosConfig})
          .then(res => {
              console.log(res.data);
              window.location = "/"
          })
          .catch(err => {
              console.log('error in request', err);
          });
    };

    // const handleInputChange = (e) => {
    //   e.preventDefault();
    //   useEffect(function(){
    //     const formData = {};
    //     formData.id = taskId;
    //     formData.title = document.getElementById("task-title").value;
    //     formData.description = document.getElementById("task-description").value;
    //     setTask(formData);
    //   }, []);
    // };
      
    return (
        <div className="container">
            <div className="todo-list-heading row m-3 border-bottom border-primary">
              <div className="col-sm-6 text-start text-primary">
                <h3># Edit Item</h3>
              </div>
              <div className="col-sm-6">
                <Link href="/">
                  <button className="btn btn-success float-end">Back to List</button>
                </Link>
              </div>
            </div>
            
            <div className="col-sm-4 mx-auto mt-5">
                <form>
                    <div className="row form-group">
                        <input name="title" id="task-title" value={task?.title} className="form-control mb-4" placeholder="Enter Task Name..." />
    
                        <textarea name="description" id="task-description" value={task?.description} className="form-control mb-4" placeholder="Task Details..."></textarea>
                        <button onClick={updateItem} className='btn btn-success'>Update</button>
                    </div>
                </form>
            </div>        
        </div>
      )
    }
