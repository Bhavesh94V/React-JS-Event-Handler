import React from 'react'

export default function ProductDisplay() {
    const products = [
        {
            id: '1',
            image: 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg',
            name: 'Bata',
            price: '$700',
            description: 'A pair of comfortable and stylish Bata shoes.'
        },
        {
            id: '2',
            image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnzoutfits-1598505.jpg&fm=jpg',
            name: 'Nike',
            price: '$90',
            description: 'Durable and high-performance Nike sneakers, perfect for everyday wear.'
        },

    ]

    return (
        <div>
            <h1>Product-List</h1><br /><br />
            {
                products.map((product) => {
                    return <>
                        <div key={product.id}>
                            <img src={product.image} alt="" style={{ width: '400px', height: '200px' }} />
                            <h2>Product : {product.name}</h2>
                            <h3>Price : {product.price}</h3>
                            <h4>Description : {product.description}</h4> <br /><br />
                        </div>
                    </>
                })
            }
        </div>
    )
}
