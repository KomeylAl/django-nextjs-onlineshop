'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        'title' : 'صفحه اصلی',
        'link' : '/'
    },
    {
        'title' : 'فروشگاه',
        'link' : '/shop'
    },
    {
        'title' : 'دسته بندی ها',
        'link' : '/categories'
    },
    {
        'title' : 'درباره ما',
        'link' : '/about'
    },
    {
        'title' : 'تماس با ما',
        'link' : '/contact'
    },
]

const Navbar = () => {

    const pathName = usePathname()

    return (
        <div className='flex gap-6'>
            {
                links.map((link) => 
                <Link className={`${pathName === link.link ? 'text-rose-600' : 'text-gray-800'} font-semibold`}
                href={link.link}>
                    {link.title}
                </Link>)
            }
        </div>
    )
}

export default Navbar