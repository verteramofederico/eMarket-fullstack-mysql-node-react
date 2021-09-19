import React from "react";

function Categorias(props) {
  return (
    <section>
          
              <h5 className="m-0 font-weight-bold text-gray-800">
                Categorias en base de datos
              </h5>
            
    {props.categories.length === 0 ? (<h3>Cargando...</h3>
            ) : (                
                    props.categories.map((category, index) =>      
              <div key={index} className="card bg-dark text-white shadow">
                <div className="card-body" >{category.name}  ||  Total: {category.total}</div>
              </div>))
    }
    </section> 
  );
}

export default Categorias;
