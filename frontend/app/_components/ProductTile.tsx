import Link from "next/link";

interface ProductProps{
    title : string,
    imgUrl : string,
    price : string,
    id : number
}

const ProductTile = ({ title, imgUrl, price, id } : ProductProps) => {

    return (
        <div className='flex flex-col gap-3 items-center'>
            <Link href={`/shop/${id}`}>
                <img src={imgUrl} alt={title} width={350} className='cursor-pointer'/>
            </Link>
            <p className='text-xl font-semibold'>{title}</p>
            <p className='font-semibold'>{price}</p>
        </div>
    )
}

export default ProductTile