import React from 'react';


function ProductsRow(props){
    return (
                <tr>
                    <td>{props.Title}</td>
                    <td>{props.Length}</td>
                    <td>{props.Rating}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.Awards}</td>
                </tr>
            )
    }
    
        

export default ProductsRow;