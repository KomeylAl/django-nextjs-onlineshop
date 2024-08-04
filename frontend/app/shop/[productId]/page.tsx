'use client'

import {useEffect, useState} from "react";
import {CategoryType, ProductType} from "@/utils/types";
import axios from "axios";
import Image from "next/image";
import {useCart} from "@/utils/CartContext";
import {toast} from "react-toastify";

interface ProductPageProps{
    params : {
        productId : number
    }
}
const ProductPage = ({ params } : ProductPageProps) => {

    const [product, setProduct] : ProductType = useState({})
    const [category, setCategory] : CategoryType = useState({})

    useEffect(() => {
        const getProduct = async (id) => {
            const response = await axios.get(`http://127.0.0.1:8000/api/product/${id}/`)
            setProduct(response.data)
        }
        getProduct(params.productId)
        const getCategory = async (id) => {
            const response = await axios.get(`http://127.0.0.1:8000/api/category/${id}/`)
            setCategory(response.data)
        }
        const categoryId = product.category
        getCategory(categoryId)
    }, [params.productId, product.category])

    if (!product) {
        return <div>در حال بارگیری</div>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        toast.success('محصول به سبد خرید اضافه شد');
    };

    return (
        <div className='w-full flex gap-6 p-10'>
            <Image src={product.imgUrl || '/images/shoe2.png'} alt={product.title} width={500} height={1200} />
            <div className='w-full flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>
                    {product.title}
                </h1>
                <p className=''>
                   توضیحات محصول:
                </p>
                <p className='text-xl'>
                    {product.description}
                </p>
                <p className='text-lg font-semibold'>
                    {product.price} تومان
                </p>
                <div className='w-full flex items-center gap-3 justify-between'>
                    <p className='text-lg'> دسته بندی: {category.title}</p>
                    <div
                        onClick={handleAddToCart}
                        className='w-[50%] bg-amber-400 text-white px-16 py-4 rounded-md text-xl text-center cursor-pointer'>
                        افزودن به سبد خرید
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage