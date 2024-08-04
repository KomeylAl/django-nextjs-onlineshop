'use client'

import { useCart } from '@/utils/CartContext';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import {BiTrash} from "react-icons/bi";

const CartPage = () => {
    const { cart, removeFromCart } = useCart();
    const router = useRouter();

    const handleCheckout = () => {
        router.push('/checkout');
    };

    return (
        <div className='p-8'>
            <h1 className='text-3xl font-bold w-full h-full'>سبد خرید</h1>
            {cart.length === 0 ? (
                <div className='text-xl mt-5'>
                    <p>سبد خرید شما خالی است.</p>
                </div>
            ) : (
                <div className='w-full mt-5'>
                    {
                        cart.map(item => (
                            <div className='bg-gray-100 mb-5 ml-8 rounded-md shadow-md p-8 flex items-center justify-between'
                                 key={item.product.id}>
                                <Image className='rounded-md' src={item.product.imgUrl} width={60} height={20} alt={item.product.title}/>
                                <p className='text-xl'>{item.product.title}</p>
                                <input
                                    type="number"
                                    className='ring-1 ring-gray-300 rounded-md p-3'
                                    value={item.quantity}
                                />
                                <p>
                                    {item.product.price * item.quantity}
                                </p>
                                <button onClick={() => removeFromCart(item.product.id)}>
                                    <BiTrash size={30} className='text-red-600' />
                                </button>
                            </div>
                        ))
                    }
                </div>
            )}
            {cart.length === 0 ? (
                <div></div>
            ) : (
                <div>
                    <button className='bg-amber-500 p-4 rounded-md text-white' onClick={handleCheckout}>
                        ادامه برای تسویه حساب
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
