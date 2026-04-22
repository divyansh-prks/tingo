import React from 'react'

const Hero = () => {
  return (
    <div>


        <div className='badge'>
            What are form right now doing ? Use this tool 
        </div>

        <div>
            <h1 className='hero-title'>
            Magically Simplify accounting and taxes

            </h1>
            <p className='hero-subtitle'>This is the description that we want to add into the hero section which will know audience that what this product is about ? </p>

        </div>

        <div className='hero-cta'>
            <button className='btn'>Start free trial</button>
            <button className='btn-2'>Pricing</button>
        </div>
{/* /home/divyansh/Downloads/codehouse/frontend/typescriptManu/my-app/public/hero-ui-v6.webp */}

<div className='image'>
        <img className='orgImg' src="/hero-ui-v6.webp " alt="" />

</div>
    </div>
  )
}

export default Hero