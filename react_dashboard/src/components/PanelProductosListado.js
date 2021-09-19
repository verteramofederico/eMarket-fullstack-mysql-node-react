import {React, useState, useEffect} from 'react';
import ProductsRow from './ProductsRow';

function PanelProductosListado (){

    const [listadoProductos, setlistadoProductos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
        .then((response) => response.json())
        .then((data) => {
            setlistadoProductos(data.products)})
        }, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Descripcion</th>
                                <th>Categoria</th>
                                <th>Brand</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Descripcion</th>
                                <th>Categoria</th>
                                <th>Brand</th>
                            </tr>
                        </tfoot>
                        <tbody>                     
                            {
                            listadoProductos === 0 ? (<h3>Cargando</h3>) 
                                : (
                                listadoProductos.map( ( row , index) => {
                                    return <ProductsRow product={row} key={index}/>
                                }) 
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default PanelProductosListado;