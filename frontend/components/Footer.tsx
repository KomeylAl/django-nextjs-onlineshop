import { BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs"

const Footer = () => {
    return (
        <div className='bg-gray-900 w-full h-[400px] flex flex-col p-12 justify-center items-center gap-10'>
            <h2 className='text-white text-xl'>فروشگاه آنلاین لباس های زنانه و مردانه</h2>
            <div className='flex items-center gap-8'>
                <BsTelegram className='text-white' size={40}/>
                <BsInstagram className='text-white' size={40}/>
                <BsYoutube className='text-white' size={40}/>
            </div>
        </div>
    )
}

export default Footer