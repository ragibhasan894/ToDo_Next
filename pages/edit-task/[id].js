import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

const axios = require('axios');

export default function EditTask() {
    const [task, setTask] = useState([]);
    
    const router = useRouter();
    const taskId = router.query.id;

    useEffect(function(){
      axios.get('http://localhost:8006/api/get-item/'+taskId)
        .then(res => {
            // console.log(res.data.data);
            setTask(JSON.parse(res.data.data));
        })
        .catch(err => {
            console.log('error in request', err);
        });
    }, []);

    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const updateItem = (e) => {
      e.preventDefault();

      const data = {};
      data.id = taskId;
      data.title = title;
      data.description = description;

      let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*"
          }
      };

      axios.put('http://localhost:8006/api/update-items/'+taskId, data, {axiosConfig})
          .then(res => {
              console.log(res.data);
              window.location = "/";
          })
          .catch(err => {
              console.log('error in request', err);
          });
    };
      
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
                        <input type="text" name="title" id="task-title" onChange={(e) => {setTitle(e.target.value)}} defaultValue={task?.title} className="form-control mb-4" placeholder="Enter Task Name..." />
    
                        <textarea name="description" id="task-description" onChange={(e) => {setDescription(e.target.value)}}  defaultValue={task?.description} className="form-control mb-4" placeholder="Task Details..."></textarea>
                        <button onClick={updateItem} className='btn btn-success'>Update</button>
                    </div>
                </form>
            </div>        
        </div>
      )
    }
