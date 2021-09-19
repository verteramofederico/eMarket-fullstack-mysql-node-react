import {React, useState, useEffect} from 'react';

function UltimoProducto(){

    const [lastProduct, setLastProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
        .then((response) => response.json())
        .then((data) => {
            let totalProducts = data.products.length
            setLastProduct(data.products[totalProducts - 1])})
        }, []);


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado</h5>
                </div>
                {lastProduct.length === 0 ? (<h3>Cargando...</h3>
                ) : (   
                <div className="card-body">
                    <h4>{lastProduct.name}</h4>
                    <p>{lastProduct.categories.name}</p>
                    <p>{lastProduct.description}</p>             
                    <img src={lastProduct.imageUrl} alt="imagen product"/>
                    <a className="btn btn-danger" target="_blank" rel="noreferrer" rel="nofollow" href={lastProduct.detail}>Ver detalle producto</a>
                </div> ) }

            </div>
        </div>
    )
}

export default UltimoProducto;
