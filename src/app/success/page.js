"use client"
import React from 'react'
import { LiaCheckCircleSolid } from 'react-icons/lia'
import Link from 'next/link'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    RedditShareButton,
} from "react-share";
import { EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon, RedditIcon } from 'react-share'

import Confetti from 'react-confetti'
import { useSearchParams } from 'next/navigation'

export default function SuccessPage() {
    const [width, setWidth] = React.useState(0)
    const [height, setHeight] = React.useState(0)

    const searchParams = useSearchParams()
    const code = searchParams.get('code')

    React.useEffect(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }, [])

    return (
        <div className="w-screen lg:h-screen flex flex-col justify-center items-center">
            <Confetti width={width} height={height}
                recycle={false} gravity={0.25} numberOfPieces={200}/>
            <LiaCheckCircleSolid className="text-9xl mt-12 md:mt-16 text-green-500" />
            <h1 className="md:text-6xl font-medium text-5xl">Thank you!</h1>
            <h2 className="text-2xl mt-2 text-center mx-4 md:mx-16 lg:mx-32">You are now part of the AptoLearn beta waitlist. To move up in line, share with a friend! <br/> We'll make sure to keep in touch!</h2>
            <p className="text-gray-500 mt-4">Share and refer with others to move up in line!</p>
            <div className="flex flex-row mt-2 justify-center items-center w-full gap-4">
                <FacebookShareButton url={`https://aptolearn.com?ref=${code}`} hashtag={"#AptoLearn"}>
                    <FacebookIcon className={"h-10 w-10 rounded-full"} />
                </FacebookShareButton>
                <TwitterShareButton url={`https://aptolearn.com?ref=${code}`} title={"Check out AptoLearn!"} hashtags={["#AptoLearn"]}>
                    <TwitterIcon className={"h-10 w-10 rounded-full"} />
                </TwitterShareButton>
                <RedditShareButton url={`https://aptolearn.com?ref=${code}`} title={"Check out AptoLearn!"}>
                    <RedditIcon className={"h-10 w-10 rounded-full"} />
                </RedditShareButton>
                <EmailShareButton url={`https://aptolearn.com?ref=${code}`} subject={"Check out AptoLearn!"}>
                    <EmailIcon className={"h-10 w-10 rounded-full"} />
                </EmailShareButton>
            </div>
            <div className="bg-gray-200 w-[80%] md:w-3/5 lg:w-1/2 mt-4 p-4 md:p-8 flex flex-col items-center">
                <div className="flex flex-row items-center">
                    <p className="text-gray-800">Referral link:</p>
                    <button className="ml-2 bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold py-1 px-2 rounded">
                        Copy
                    </button>
                </div>
                <p className="text-gray-500 mt-2 cursor-pointer text-center" onClick={() => {
                    navigator.clipboard.writeText(`https://aptolearn.com?ref=${code}`)
                }}>https://aptolearn.com?ref={code}</p>
            </div>
            <Link href="/">
                <button className={`bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold py-4 px-6 rounded mt-4`}>
                    Go back home
                </button>
            </Link>
        </div>

    )
}
