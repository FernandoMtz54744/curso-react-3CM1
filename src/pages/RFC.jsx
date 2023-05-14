import React from 'react'

export default function RFC({rfc, form, onChange, checkCensored}) {
    return (
        <div className="form-container d-flex justify-content-center form-rfc-container mt-5">
            <form action="" className="form-rfc">
                <h4>Ingrese sus datos</h4>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input value={form.nombre}  onChange={onChange} className="form-control"  type="text" name="nombre" autoComplete="nope" placeholder="Nombre"/>
                </div>
                <div className="form-group">
                    <label htmlFor="paterno">Apellido paterno:</label>
                    <input value={form.paterno}  onChange={onChange}  className="form-control" type="text" name="paterno" autoComplete="nope" placeholder="Paterno"/>
                </div>
                <div className="form-group">
                    <label htmlFor="materno">Apellido materno:</label>
                    <input value={form.materno}  onChange={onChange}  className="form-control" type="text" name="materno" autoComplete="nope" placeholder="Materno"/>
                </div>
                <div className="form-group">
                    <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
                    <input value={form.fechaNacimiento} onChange={onChange}   className="form-control" type="date" name="fechaNacimiento"/>
                </div>
            </form>

            <div className="text-rfc">
                <h2>{checkCensored(rfc)}</h2>
            </div>
        </div>
    )
}
