import Link from 'next/link'

export default function TodoList() {
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
                <th>To be completed date</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Buy socks</td>
                <td>27 July, 2022</td>
                <td>24 July, 2022</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td>001</td>
                <td>Buy socks</td>
                <td>27 July, 2022</td>
                <td>24 July, 2022</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td>001</td>
                <td>Buy socks</td>
                <td>27 July, 2022</td>
                <td>24 July, 2022</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td>001</td>
                <td>Buy socks</td>
                <td>27 July, 2022</td>
                <td>24 July, 2022</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td>001</td>
                <td>Buy socks</td>
                <td>27 July, 2022</td>
                <td>24 July, 2022</td>
                <td>Edit</td>
              </tr>
            </tbody>
          </table>
      </div>
  )
}
