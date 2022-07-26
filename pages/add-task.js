import Link from 'next/link'

export default function AddTask() {
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
                    <input name="title" className="form-control mb-4" placeholder="Enter Task Name.." />

                    <button className='btn btn-success'>Save</button>
                </div>
            </form>
        </div>        
    </div>
  )
}
