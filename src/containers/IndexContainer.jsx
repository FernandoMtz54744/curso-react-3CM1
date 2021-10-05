import React, { useState } from 'react'
import Index from '../pages/Index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';

function IndexContainer() {
    const [form, setForm] = useState({nombre:"", nacimiento:"", carrera:""});
    const history = useHistory();
    
    const onChange = (e)=>{
        setForm({...form, [e.target.id]:e.target.value});
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(form)
        history.push("/welcome", {form: form})
    }

    return (
        <Index form={form} onChange={onChange} onSubmit={onSubmit}></Index>
    )
}

export default IndexContainer
