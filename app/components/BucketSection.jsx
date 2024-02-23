import React from 'react'
import Bucket from '../components/bucket/Bucket'


const BucketSection = () => {
    return (
        <section className='h-auto w-full  '>
            <div className='lg:mx-28 sm:mx-10 mx-4 mb-10'>
                <div className='flex justify-center'>
                <div className='mt-[80px]'>
                <div className='w-fit h-auto border-[1px] py-[4px] px-[12px] rounded-[99px] hero-top-button  relative my-box-shadow-bucket'>
                    <span className='font-normal text-[13px] text-[#fff]'>Talent Pool</span>
                </div>
            </div>
                </div>
                <h2 className='mt-[30px] text-[48px] font-medium text-[#fff] text-center leading-none w-auto mx-[300px]'>Team of amazing human resources products</h2>
                <p className='mt-[10px] text-center text-[#fff]  text-[18px] font-normal mx-[220px]'>It is a long established fact that a reader will be ipsum distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is tha</p>
                <div className='mt-[56px] flex justify-center '>
                    <div className='flex gap-[10px]'>
                        <span className='my-auto'>
                            <svg width="43" height="1" viewBox="0 0 43 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="42.5" y1="0.5" x2="0.5" y2="0.5" stroke="url(#paint0_linear_60_9)" />
                                <defs>
                                    <linearGradient id="paint0_linear_60_9" x1="42.5" y1="0" x2="0.5" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B191DD" />
                                        <stop offset="1" stopColor="#B191DD" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <div className='flex gap-[8px]'>
                           
                            <span className='text-[#B8B8B8] text-[14px] font-normal my-auto'>Cultivated talent pool</span>
                        </div>
                        <span className='my-auto'>
                            <svg width="43" height="1" viewBox="0 0 43 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="0.5" x2="42.5" y2="0.5" stroke="url(#paint0_linear_60_10)" />
                                <defs>
                                    <linearGradient id="paint0_linear_60_10" x1="0.5" y1="1" x2="42.5" y2="1" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B191DD" />
                                        <stop offset="1" stopColor="#B191DD" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='mt-[14px]  flex justify-center text-white '>
                    <div className='w-full h-[380px] bucket-main-style '>
                    <Bucket className=""/>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default BucketSection