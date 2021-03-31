import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { getUserData, deleteUserbyId } from "./api"
function Users() {
    let [userData, setuserData] = useState([]);

    useEffect(async () => {
        let users = await getUserData();
        setuserData(...userData, users.data)
        console.log("Mounted");
        console.log(userData);
    }, []) // Did Mount

    useEffect(() => {
        return () => {
            console.log("unmounted")
        }
    }, []) // Un Mount

    useEffect(() => {
        console.log("Updated")
    }, [userData]) // Did update


    async function deleteUser(id) {
        await deleteUserbyId(id)
        alert("User deleted successfully");
    }

    return (
        <>

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/createuser" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create Users</Link>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    userData.map((user) => {
                                        return (
                                            <tr>
                                                <td>{user.name} </td>
                                                <td>{user.age}</td>
                                                <td>{user.city}</td>
                                                <td>{user.state}</td>

                                                <td>
                                                    <Link to={`/edituser/${user.id}`}>
                                                        <div><i className="fas fa-fw fa-user-edit"></i>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td>

                                                    <div className="inlineBlock btn" onClick={() => deleteUser(user.id)}><i className="fas fa-fw fa-trash"></i>
                                                    </div>
                                                </td>
                                            </tr>)
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Users;