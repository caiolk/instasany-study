'use client';

import { useEffect, useRef } from "react";

import Image from "next/image"
import Mockup from '@/assets/mockup-main.png';

import Card01 from '@/assets/image-01.png'
import Card02 from '@/assets/image-02.png'
import Card03 from '@/assets/image-03.png'
import Card04 from '@/assets/image-04.png'
import Card05 from '@/assets/image-05.png'
import Card06 from '@/assets/image-06.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export function SectionCards() {
    const mockupRef = useRef(null);
    const titleRef = useRef(null);

    const sectionRef = useRef(null);
    const section = sectionRef.current;

    const card01ref = useRef(null);
    const card02ref = useRef(null);
    const card03ref = useRef(null);
    const card04ref = useRef(null);
    const card05ref = useRef(null);
    const card06ref = useRef(null);

    function animateCards(images:null[], position:number) {
        gsap.fromTo(images, {
            opacity: 0,
            x: position
        }, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: .1,
            scrollTrigger: {
                trigger: section,
                start: 'center center'
            }
        })
    }

    useEffect(() => {
        const mockupPhone = mockupRef.current;
        const title = titleRef.current;
  
        const img01 = card01ref.current;
        const img02 = card02ref.current;
        const img03 = card03ref.current;
        const img04 = card04ref.current;
        const img05 = card05ref.current;
        const img06 = card06ref.current;

        const leftImages  = [img01, img02, img03]
        const rightImages = [img04, img05, img06]
        
        animateCards(leftImages, 50);
        animateCards(rightImages, -50);
        
        gsap.fromTo(mockupPhone, {
            opacity: 0,
            scale: .5
        },{
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power4.out'
        })

        gsap.fromTo(title, {
            opacity: 0,
            y: 100
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: '65% center',
                end: '',
                markers: false
            }
        })
        
    }, [])
    return(
        <>
            <section className="w-full pb-20" ref={sectionRef}> 
                <Image
                    src={Mockup}
                    alt="Image Mockup Main"
                    className="sticky z-10 top-56 mx-auto -mt-[32rem] mb-16 opacity-0 "
                    ref={mockupRef}
                />
                <h2 className="text-center text-sm sm:text-lg md:text-3xl/normal lg:text-5xl/normal xl:text-7xl/normal font-semibold text-black mb-56 opacity-0" ref={titleRef}>
                    Faça 
                    <span className="px-3 text-green-title-cards">você</span> 
                    mesmo de casa
                </h2>
                <div className="relative w-full max-w-area-cards h-area-cards mx-auto">
                    <Image src={Card01} ref={card01ref} className="absolute top-8 left-44 opacity-0" alt="Image Card 01"/>
                    <Image src={Card02} ref={card02ref} className="absolute left-0 bottom-32 opacity-0" alt="Image Card 02"/>
                    <Image src={Card03} ref={card03ref} className="absolute bottom-0 left-80 opacity-0" alt="Image Card 03"/>
                    <Image src={Card04} ref={card04ref} className="absolute top-0 right-32 opacity-0" alt="Image Card 04"/>
                    <Image src={Card05} ref={card05ref} className="absolute right-0 bottom-28 opacity-0" alt="Image Card 05"/>
                    <Image src={Card06} ref={card06ref} className="absolute bottom-0 right-80 opacity-0" alt="Image Card 06"/>
                </div>
            </section>
        </>
    )
}