import Image from "next/image"

const Hero = () => {
    return (
        <div className='w-full'>
            <Image src='/images/hero.webp' alt="" width={2000} height={400}/>
        </div>
    )
}

export default Hero