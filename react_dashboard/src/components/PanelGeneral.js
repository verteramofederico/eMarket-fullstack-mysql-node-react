import {React, useState, useEffect} from 'react';
import SmallCard from './SmallCard';


let productsStatic = {
    title: 'Total de productos',
    color: 'primary', 
}
let usersStatic = {
    title:' Total de usuarios', 
    color:'success', 
}
let categoriesStatic = {
    title:'Total de categorias' ,
    color:'warning',
}

function PanelGeneral(){

    const [productsInDB, setProduct] = useState([]);
    const [usersInDB, setUser] = useState([]);
    const [categoriesInDB, setCategory] = useState([]);

    useEffect(() => {
		fetch("http://localhost:3001/api/products")
		.then((response) => response.json())
		.then((data) => {setProduct(data.products)})
		}, []);

    useEffect(() => {
        fetch("http://localhost:3001/api/users")
        .then((response) => response.json())
        .then((data) => {setUser(data.users)})
        }, []);

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
        .then((response) => response.json())
        .then((data) => {setCategory(data.countByCategory)})
        }, []);

    return (
    
        <div className="row">
            <SmallCard lenghtDB={productsInDB} data={productsStatic}/>
            <SmallCard lenghtDB={usersInDB} data={usersStatic}/>
            <SmallCard lenghtDB={categoriesInDB} data={categoriesStatic}/>
        </div>
    )
}

export default PanelGeneral;