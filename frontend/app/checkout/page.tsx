'use client'

import {useState} from 'react';
import {useCart} from "@/utils/CartContext";
import axios from 'axios';
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

const CheckoutPage = () => {
    const { cart, sessionKey, getTotalPrice } = useCart();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const totalPrice = getTotalPrice();
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://localhost:8000/api/orders/', {
            total_price: totalPrice,
            name: name,
            phone: phone,
            address: address,
            session_key: sessionKey,
            items: cart
        });

        toast.success('سفارش شما با موفقیت ثبت شد')
        cart.length = 0
        localStorage.clear()
        router.push('/')
    }

    return (
        <div className='p-8'>
            <h1 className='text-3xl font-bold w-full h-full'>تسویه حساب</h1>
            <form onSubmit={handleSubmit} className='mt-5'>
                <div className='flex w-[50%] justify-between items-center mt-5'>
                    <label className='text-xl'>نام و نام خانوادگی</label>
                    <input className='p-3 ring-1 ring-gray-300 rounded-md w-96' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='flex w-[50%] justify-between items-center mt-5'>
                    <label className='text-xl'>تلفن همراه</label>
                    <input className='p-3 ring-1 ring-gray-300 rounded-md w-96' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='flex w-[50%] justify-between items-center mt-5'>
                    <label className='text-xl'>آدرس</label>
                    <input className='p-3 ring-1 ring-gray-300 rounded-md w-96' type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className='mt-5'>
                    <p className='text-lg'>مبلغ پرداختی: {getTotalPrice()} تومان</p>
                </div>
                <button className='mt-5 p-4 w-[50%] bg-amber-500 text-xl text-white rounded-md' type="submit">ثبت سفارش</button>
            </form>
        </div>
    );
};

export default CheckoutPage;