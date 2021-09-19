import React from 'react';


function ProductsRow(props){
    return (
                <tr>
                    <td>{props.product.name}</td>
                    <td>{props.product.price}</td>
                    <td>{props.product.description}</td>
                    <td>{props.product.categories.name}</td>
                    <td>{props.product.brand === undefined ? ("n/a") : (
                        props.product.brand.name
                    )}
                    </td>
                    
                </tr>
            )
    }
    
        

export default ProductsRow;