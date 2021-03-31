import React, { useState, useContext, useEffect } from "react";
import { getUserbyId, updateUserbyId } from "./api"
function EditUser(props) {

    let [editName, setEditName] = useState("");
    let [editage, seteditage] = useState("");
    let [editcity, seteditcity] = useState("");
    let [editstate, seteditstate] = useState("");

    useEffect(async () => {
        let User = await getUserbyId(props.match.params.id);
        setEditName(User.data.name);
        seteditage(User.data.age);
        seteditcity(User.data.city);
        seteditstate(User.data.state);
    }, [])

    let userData = {
        name: editName, age: editage, city: editcity, state: editstate
    }

    async function updateUser(e) {
        e.preventDefault();
        let userData = {
            name: editName, age: editage, city: editcity, state: editstate
        }
        await updateUserbyId(props.match.params.id, userData);
        setEditName("");
        seteditage("");
        seteditcity("");
        seteditstate("");
    }


    return (
        <div className="container">
            <h1>Edit User</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" value={editName} onChange={(e) => {
                        setEditName(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="text" className="form-control" id="age" value={editage} onChange={(e) => {
                        seteditage(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" value={editcity} onChange={(e) => {
                        seteditcity(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" className="form-control" id="state" value={editstate} onChange={(e) => {
                        seteditstate(e.target.value);
                    }} />
                </div>
                <button type="submit" className="btn btn-success" onClick={(e) => updateUser(e)}>Update</button>
            </form>
        </div>
    );
}
export default EditUser;