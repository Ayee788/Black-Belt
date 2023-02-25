import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const [name, setName] = useState("")
    const [store, setStore] = useState("")
    const [open, setOpen] = useState()
    const {id} = useParams()
    const navigate = useNavigate()
    const [error, setError] = useState([])
    
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/store/${id}`)
            .then((res) =>{
                setName(res.data.name)
                setStore(res.data.store)
                setOpen(res.data.open)
            })
            .catch(err => console.log("Edit Page:", + err))
    }, [id])

    const handleSubmit = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/store/${id}`, {name, store, open})
            .then(res=>{
                navigate(`/viewOne/${res.data._id}`);
            })
            .catch(err =>{
                const errorList = err.response.data.errors
                const arrayErr = []
                for ( const errorKey in errorList){
                    arrayErr.push(errorList[errorKey].message)
                }
                setError(arrayErr)
            })
        } 

return (
    <div>
        <h1>Edit Store Finder</h1>
        <form onSubmit={handleSubmit}>
        <Link to="/">Go back Home</Link>
        <p>
            <label>Store Name</label>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
        </p>
        <p>
            <label>Store Number</label>
            <input type="text" name="company" value={store} onChange={e => setStore(e.target.value)}/>
        </p>    
        <p>
            <label>Open</label>
            <input type="checkbox" name="remote" checked={open} onChange={e => setOpen(e.target.checked)}/>
        </p>
    
        <button type="submit">Edit Store Details</button>
        </form>
            <div>
                {
                    error.map((eachError,i)=>{
                        return(
                            <p key={i}>{eachError}</p>
                        )
                    })
                }
            </div>
    </div>
)
}
    export default Edit