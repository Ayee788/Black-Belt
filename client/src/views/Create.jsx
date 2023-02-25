import {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

    const Create = () => {
        const [name, setName] = useState("")
        const [store, setStore] = useState("")
        const [open, setOpen] = useState()
        const navigate = useNavigate()
        const [error, setError] = useState([])
        
        const handleSubmit = e =>{
            e.preventDefault();
            axios.post(`http://localhost:8000/api/store`, {name, store, open})
                .then(res=>{
                    console.log(res.data)
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
            <h1>Store Finder</h1>
            <p>add a new store</p>
            <Link to="/">Go back Home</Link>
            <form onSubmit={handleSubmit}>
            <p>
                <label>Store Name</label>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
            </p>
            <p>
                <label>Store Number</label>
                <input type="text" name="store" value={store} onChange={e => setStore(e.target.value)}/>
            </p> 
            <p>
                <label>Open</label>
                <input type="checkbox" name="remote" checked={open} onChange={e => setOpen(e.target.checked)}/>
            </p>   
        
            <button type="submit">Add a new store</button>
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

    export default Create