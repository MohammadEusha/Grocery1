import React from 'react';

const ProductInfo = (props) => {
    const { name, price } = props.product
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="fw-bolder">{name}</td>
                        <td class="ps-4">1</td>
                        <td class="fw-bolder">{price}</td>
                    </tr>


                </tbody>
            </table>
        </div>
    );
};

export default ProductInfo;