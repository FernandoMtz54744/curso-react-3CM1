import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import Welcome from '../pages/Welcome'


export default function WelcomeContainer() {

    const location = useLocation();
    const history = useHistory();
    const [form, setForm] = useState({})
    const [item, setItem] = useState({id:'', name:''});

    const [data, setData] = useState([
        {id: "001", name:"Fernando Mtz"},
        {id: "002", name:"Esmeralda God"},
        {id: "003", name:"Benjamin Camp"},
        {id: "004", name:"Juan Chavez"}
    ]);
    
    useEffect(() => {
        setForm(location.state.form);     
    }, [location])

    const onChange = (e)=>{
        setItem({...item, [e.target.name]:e.target.value});
        console.log(item);
    }

    const add = (e)=>{
        e.preventDefault();
        setData([...data, item]);
        setItem({id:'', name:''});
    }

    const remove = (idToRemove)=>{
        const newData = data.filter( item => item.id !== idToRemove);
        setData(newData);
    }

    const goBack = () => history.goBack();

    return (
        <Welcome form={form} goBack={goBack} data={data} item={item} onChange={onChange} add={add} remove={remove}/>
    )
}
