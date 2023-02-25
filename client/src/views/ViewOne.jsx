import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useNavigate, Link } from 'react-router-dom'

const ViewOne = (props) => {
    const [store, setStore] = useState("")
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/store/${id}`)
            .then((res) => {
                console.log(res.data)
                setStore(res.data)
                
            })
            .catch(err => console.log("This is our detail page:", + err))
    }, [id])


    return (
        <div>
            <Link to="/">Go back Home</Link>
            {store?
            <div>
                <h1>Store Finder</h1>
                <p>store name: {store.name}</p>
                <p>Store number: {store.store}</p>
                <p>open: {store.open ? "true" : "false"}</p>
            </div>:
            <h1>Loading...</h1>
            }
            <Link to={"/edit/" + id}>edit store details</Link>
        </div>
    )  
}
    export default ViewOne
