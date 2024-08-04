'use client'
import ProductTile from "./ProductTile"

import { useState, useEffect } from "react"
import axios from "axios"

const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try{
                const response = await axios.get('http://localhost:8000/api/product')
                setProducts(response.data)
            } catch(e) {
                console.error(e)
            }
        }
        getProducts()
    }, [])

    if (!products) {
        return <div>در حال بارگیری</div>
    }

    return (
        <div className='w-full px-20 flex justify-evenly items-center'>
            {
                products.map((product) => 
                    <ProductTile
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imgUrl={product.imgUrl || '/images/shoe2.png'}
                        price={product.price}
                    />
                )
            }
        </div>
    )
}

export default ProductList