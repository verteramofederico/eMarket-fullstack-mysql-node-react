import {React, useState, useEffect} from 'react';
import UltimoProducto from './UltimoProducto';
import Categorias from './Categorias';

function PanelDetalle(){
    const [categoriesInDB, setCategory] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3001/api/products")
        .then((response) => response.json())
        .then((data) => {setCategory(data.countByCategory)})
        }, []);

        console.log(categoriesInDB)

    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <UltimoProducto />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Categorias categories={categoriesInDB}/>

        </div>
    )
}

export default PanelDetalle;