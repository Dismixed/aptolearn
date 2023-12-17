import { LiaCheckCircleSolid } from 'react-icons/lia'
import Link from 'next/link'

export default function SuccessPage() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <LiaCheckCircleSolid className="text-9xl text-green-500" />
            <h1 className="text-6xl">Thank you!</h1>
            <p className="text-2xl mt-2 text-center">Your submission has been recieved. We'll make sure to keep in touch!</p>
            <Link href="/">
                <button className={`bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold py-4 px-6 rounded mt-4`}>
                    Go back home
                </button>
            </Link>
        </div>

    )
}
