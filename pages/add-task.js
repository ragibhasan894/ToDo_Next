import Link from 'next/link'

export default function AddTask() {

    const saveItem = (e) => {
        e.preventDefault();
        const data = {};
        data.title = document.getElementById("task-title").value;
        data.description = document.getElementById("task-description").value;

        // console.log(data);

        const axios = require('axios');

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            }
        };

        // axios({
        //     method:'post',
        //     url:'api/save-items',
        //     baseURL: 'http://localhost:8000/',
        //     // data: data
        //    })
        //     .then(res => {
        //         console.log(res.data);
        //     })
        //     .catch(err => {
        //         console.log('error in request', err);
        //     });

        axios.post('http://localhost:8000/api/save-items', data, {axiosConfig})
            .then(res => {
                console.log(res.data);
                window.location = "/"
            })
            .catch(err => {
                console.log('error in request', err);
            });
    };
      
    return (
        <div className="container">
            <div className="todo-list-heading row m-3 border-bottom border-primary">
              <div className="col-sm-6 text-start text-primary">
                <h3># Add Item to List</h3>
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
                        <input name="title" id="task-title" className="form-control mb-4" placeholder="Enter Task Name..." />
    
                        <textarea name="description" id="task-description" className="form-control mb-4" placeholder="Task Details..."></textarea>
                        <button onClick={saveItem} className='btn btn-success'>Save</button>
                    </div>
                </form>
            </div>        
        </div>
      )
    }
