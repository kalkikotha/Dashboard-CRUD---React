import React, { useState } from "react";
import { postUserData } from "./api"

function CreateUser() {
    let [name, setName] = useState("");
    let [age, setage] = useState("");
    let [city, setcity] = useState("");
    let [state, setState] = useState("");
    let userData = { name, age, city, state };

    async function addUser(e) {
        e.preventDefault();
        let User = await postUserData(userData)
            .then(() => {
                alert("User added successfully")
            });
        setName("");
        setage("");
        setcity("");
        setState("");
    }
    return (
        <div className="container">
            <h1>Create User</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" value={name} onChange={(e) => {
                        setName(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="text" className="form-control" id="age" value={age} onChange={(e) => {
                        setage(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" alue={city} onChange={(e) => {
                        setcity(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" className="form-control" id="state" value={state} onChange={(e) => {
                        setState(e.target.value);
                    }} />
                </div>
                <button type="submit" className="btn btn-success" onClick={(e) => addUser(e)}>Submit</button>
            </form>
        </div>


    );
}
export default CreateUser;