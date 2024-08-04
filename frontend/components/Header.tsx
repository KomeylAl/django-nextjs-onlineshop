import { IoCartOutline } from "react-icons/io5"
import Navbar from "./Navbar"
import Link from "next/link"

const Header = () => {
    return (
        <div className='w-full px-10 py-4 shadow-md flex gap-16 items-center'>
            <div className='font-bold text-2xl'>
                فروشگاه آنلاین
            </div>
            <div className=''>
                <Navbar />
            </div>
            <Link href='/cart' className='mr-auto'>
                <IoCartOutline size={25} />
            </Link>
        </div>
    )
}

export default Header