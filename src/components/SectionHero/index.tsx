"use client";
import Image from "next/image";
import { useRef, useEffect } from 'react';
import { GridContainer } from "../GridContainer";

import IcontFile from '@/assets/icon-file.svg';
import IconHand from '@/assets/icon-hand.svg';
import IconHand02 from '@/assets/icon-hand-02.svg';
import IconMockup from '@/assets/mockup.svg';
import gsap from 'gsap';

export function SectionHero(){
    const textHeroRef = useRef(null);
    const mockupLeftRef = useRef(null);
    const mockupRightRef = useRef(null);

    useEffect(() => {
        const textHero = textHeroRef.current;
        const mLeft = mockupLeftRef.current;
        const mRight = mockupRightRef.current;

        gsap.fromTo(textHero, {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out'
        })
        gsap.fromTo(mLeft, {
            rotate: 0
        }, {
            rotate: -10,
            duration: 1
        })
        gsap.fromTo(mRight, {
            rotate: 0
        }, {
            rotate: 10,
            duration: 1
        })
    }, []);

    return (
        <section className="relative w-full h-section-hero bg-hero bg-no-repeat bg-top bg-green-primary border-t border-t-green-border pt-16">
            <GridContainer className="flex flex-col items-center">
                <div className="w-full max-w-text-hero text-center opacity-0" ref={textHeroRef}>
                    <h3 className="text-md sm:text-lg md:text-text-lg lg:text-xl xl:text-xl text-green-actived mb-4">Novo curso focado em instagram</h3>
                    <h1 className="text-white text-sm sm:text-lg md:text-3xl/normal lg:text-5xl/normal xl:text-7xl/normal font-semibold mb-4">Destrave as suas habilidades</h1>
                    <div className="flex items-center justify-center gap-10">
                        <button className="flex items-center gap-2">
                            <Image 
                                src={IcontFile}
                                alt='Icon File'
                            />
                            <span className="text-white font-medium">Assinar lista de espera</span>
                        </button>
                        <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
                            Começar agora
                        </button>
                    </div>
                </div>
                <div className="relative w-full max-w-area-icons h-28 mt-4">
                    <Image 
                        src={IconHand}
                        alt="Icon Hand"
                        className="absolute left-0 bottom-0"
                    />
                    <Image 
                        src={IconHand02}
                        alt="Icon Hand"
                        className="absolute top-0 right-0"
                    />
                </div>
                <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
                    <Image 
                        src={IconMockup}
                        alt="Icon Mockup"
                        className="relative top-[1.1rem] left-[3.3rem]"
                        ref={mockupLeftRef}
                    />
                    <Image 
                        src={IconMockup}
                        alt="Icon Mockup"
                        className="relative top-[1.1rem] right-[3.3rem]"
                        ref={mockupRightRef}
                    />
                </div>
            </GridContainer>
        </section>
    )
}