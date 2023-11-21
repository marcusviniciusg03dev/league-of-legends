import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface ChampionProps {
    championIndex: number
    name: string
    label: string
    type: string
    description: string
    bgImageSuffix: string
    heroImage: string
    callbacks: {
        handleNextChampion: any
        handlePrevChampion: any
    }
}

export default function Champion({ championIndex, name, label, type, description, bgImageSuffix, heroImage, callbacks }: ChampionProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 2000)

        return () => {
            clearTimeout(loadingTimeout);
            setLoading(true);
        }
    }, [championIndex])

    return (
        <React.Fragment>
            {loading ? (
                <div className="h-full w-full flex flex-col">
                    <span className="flex justify-center flex-1">
                        <h1 className="uppercase font-heading text-[clamp(100px,_24vw,_800px)] text-background-image bg-letter-2 bg-cover bg-no-repeat bg-[70%_100px]">
                            {name}
                        </h1>
                    </span>
                    <h2 className="text-4xl text-yellow-600 p-16">
                        {label}
                    </h2>
                </div>  
            ) : (
                <React.Fragment>
                    <Image
                        alt="vector"
                        src="/vectors/champion-vector-top.svg"
                        height={5}
                        width={8}
                        className="absolute top-16 right-16"
                    />
                    <Image
                        alt="vector"
                        src="/vectors/champion-vector-bottom.svg"
                        height={4}
                        width={6}
                        className="absolute bottom-16 right-16"
                    />
                    <div className="z-10 h-[80vh] w-[100%] bottom-0 right-0 left-0 bg-gradient-to-t from-black to-transparent absolute" />
                    <div
                        className={`h-full w-full flex-1 grid grid-cols-2 bg-cover bg-[50%_20%] bg-no-repeat`}
                        style={{ backgroundImage: `url("/images/${bgImageSuffix}.png")` }}>
                        <div className="flex flex-col justify-end h-full py-10 px-20 gap-2">
                            <div className="flex relative w-full h-full items-end justify-center bg-cover bg-no-repeat pb-5">
                                <img
                                    alt={name}
                                    src={heroImage}
                                    className="absolute max-h-[90%]"
                                />
                                <h2 className="z-10 absolute uppercase text-5xl font-heading font-thin justify-self-center mb-6">{type}</h2>
                            </div>
                            <div className="z-10 flex gap-3 text-yellow-600">
                                <button onClick={callbacks.handlePrevChampion} className="p-4 rounded-full border-2 border-[#2F2D2E]">
                                    <BsChevronLeft size={20} />
                                </button>
                                <button onClick={callbacks.handleNextChampion} className="p-4 rounded-full border-2 border-[#2F2D2E]">
                                    <BsChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="z-10 flex flex-col gap-5 pr-20 my-auto">
                            <h1 className="font-heading outline-font-2 text-9xl uppercase italic">{name}</h1>
                            <h3 className="text-[36px] font-semibold">{label}</h3>
                            <p className="text-[20px]">{description}</p>   
                        </div>
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}