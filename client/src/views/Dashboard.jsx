import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Dashboard = (props) => {
const [stores, setStores] = useState([]);
  // anonymous function is fat arrow formatting
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/store")
      .then((res) => setStores(res.data));
  }, []);

  const deleteOneSingleItem = (idx) => {
    axios.delete(`http://localhost:8000/api/store/${idx}`);
    setStores(stores.filter((item) => item._id !== idx));
  };
  return (
    <div>
      <h1>Store Finder</h1>
      <p>Find stores in your area!</p>
      <Link to={"/create"}>Create New Store</Link>
      <table>
        <thead>
          <tr>
            <th>Store</th>
            <th>number</th>
            <th>Open</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((item, idx) => (
            <tr key={idx}>
              <td>
                <Link to={`/viewOne/${item._id}`}>{item.name}</Link>
              </td>
              <td>{item.store}</td>
              <td>{item.open ? "true" : "false"}</td>
              <td>{item.open ? <button onClick={(e) => {deleteOneSingleItem(item._id)}}>Delete
              </button> : ""}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
