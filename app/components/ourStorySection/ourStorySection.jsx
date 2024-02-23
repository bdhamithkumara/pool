"use client"
import React from 'react';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

const ourStorySection = () => {


    
    return (
        <section className='h-auto w-full bg-[#030413]  mb-[1500px]'>
            {/*<span className='flex justify-center make-mask'></span>*/}
            <div className='lg:mx-28 sm:mx-10 mx-4  pb-[50px]'>
                <div className='flex justify-center'>
                    <div className='mt-[80px]'>
                        <div className='w-fit h-auto border-[1px] py-[4px] px-[12px] rounded-[99px] hero-top-button ml-[16px] relative gradient-border-card-capsuel'>
                            <sup className="innerii" aria-hidden="true"></sup>
                            <span className='font-normal text-[13px] text-[#fff]'>Journey</span>
                        </div>
                    </div>
                </div>
                <h2 className='mt-[20px] text-[48px] font-medium our-story-text-color text-center leading-none w-auto mx-[320px]'>Our Story</h2>
                <div className='flex flex-col items-center mt-[38px]'>
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                        <p className=' text-center text-[#fff] text-[18px] font-normal w-[689px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" >
                    <p className='mt-[20px] text-center text-[#fff] text-[18px] font-normal w-[689px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" >
                    <p className='mt-[20px] text-center text-[#fff] text-[18px] font-normal w-[600px]'>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}

export default ourStorySection