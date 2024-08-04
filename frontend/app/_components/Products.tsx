import ProductList from "./ProductList"

const Products = () => {
    return (
        <div className='w-full flex flex-col gap-10 py-10 bg-gray-100'>
            <div className='flex flex-col items-center gap-3'>
                <h3 className='text-3xl font-semibold'>آخرین محصولات</h3>
                <p className='text-xl'>آخرین محصولات عرضه شده در سایت ما</p>
            </div>
        <ProductList />
        </div>
    )
}

export default Products