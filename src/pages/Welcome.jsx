import React from 'react'

export default function Welcome({form, goBack, data, item, onChange,add, remove}) {
    return (
      <div className="welcome-principal">
        <div className="text-center pt-5">
          <h2>Bienvenido {form.nombre}</h2>
        </div>

        <div className="text-center pb-5">
          <button onClick={goBack} className="btn btn-success">
            Volver
          </button>
        </div>

        <div className="container">
            <form onSubmit={add} className="form-welcome">
                <div className="row">
                    <div className="col-md-4 form-group">
                        <input onChange={onChange} value={item.id} type="text" id="id" name="id" className="form-control" placeholder="ID" required autoComplete="off"/>
                    </div>
                    
                    <div className="col-md-6 form-group">
                        <input onChange={onChange} value={item.name} type="text" id="name" name="name" className="form-control" placeholder="Nombre" required autoComplete="off"/>
                    </div>

                    <div className="text-center col-md-2">
                    <button type="submit" className="btn btn-success">Añadir</button>
                </div>
                </div>
                
            </form>
        </div>

        <div className="container">
          <table className="table table-welcome">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col" className="text-center"> Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td className="text-center"><button onClick={()=>remove(item.id)} className="btn btn-danger">x</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
