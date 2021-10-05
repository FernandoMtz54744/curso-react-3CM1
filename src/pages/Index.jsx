import React from 'react'
import imagen from "../images/cubism.jpg"

export default function Index({form, onChange, onSubmit}) {
    return (
        <div className="principal">
            <div className="containerForm">
                <h1>Formulario en React</h1>
                    <form className="formReact" onSubmit={onSubmit}>
                        <div className="imgContainer">
                            <img src={imagen} alt="imagen formulario"/>
                        </div>
                        <div className="inputsContainer">
                            <label htmlFor="nombre">Nombre</label>
                            <input onChange={onChange} value={form.nombre} type="text" id="nombre" name="nombre" className="form-control form-control-sm" autoComplete="off"/>
                            <label htmlFor="nacimiento">Nacimiento</label>
                            <input onChange={onChange} value={form.nacimiento} type="date" id="nacimiento" name="nacimiento"/>
                            <label htmlFor="carrera">Carrera</label>
                            <input onChange={onChange} value={form.carrera} type="tetx" id="carrera" name="carrera" className="form-control form-control-sm" autoComplete="off"/>
                            <input type="submit" className="btn btn-dark"/>
                        </div>
                    </form>
            </div>
        </div>
    )
}
