import React from "react";

function Categorias(props) {
  return (
    <section>
          
              <h5 className="m-0 font-weight-bold text-gray-800">
                Categorias en base de datos
              </h5>
            
    {props.categories.length == 0 ? (<h1>Cargando...</h1>
            ) : (                
                    props.categories.map(category =>      
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{category.name}  ||  Total: {category.total}</div>
              </div>))
    }
    </section> 
  );
}

export default Categorias;
