import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function EditTask() {
    const [task, setTask] = useState([]);
    const router = useRouter();
    const taskId = router.query.id;

    const axios = require('axios');

    axios.get('http://localhost:8000/api/get-item/'+taskId)
        .then(res => {
            // console.log(res.data.data);
            setTask(JSON.parse(res.data.data));
        })
        .catch(err => {
            console.log('error in request', err);
        });
      
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
                        <input name="title" id="task-title" value={task.title} className="form-control mb-4" placeholder="Enter Task Name..." />
    
                        <textarea name="description" id="task-description" className="form-control mb-4" placeholder="Task Details..."></textarea>
                        <button className='btn btn-success'>Save</button>
                    </div>
                </form>
            </div>        
        </div>
      )
    }
