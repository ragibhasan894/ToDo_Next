import Link from 'next/link'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
}).required();

const axios = require('axios');

export default function AddTask() {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*"
      }
    };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row form-group">
                        <input {...register("title")} id="task-title" className="form-control" placeholder="Enter Task Name..." />
                        <span className="text-danger mb-2">{errors.title?.message}</span>
                        
                        <textarea {...register("description")} id="task-description" className="form-control" placeholder="Task Details..."></textarea>
                        <span className="text-danger mb-3">{errors.description?.message}</span>
                        
                        <button className='btn btn-success'>Save</button>
                    </div>
                </form>
            </div>        
        </div>
      )
    }
