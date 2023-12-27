import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#1D1D1F] flex flex-col text-black">
            <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-16 lg:px-16">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex items-center justify-center md:justify-start">
                        <Link href="/" className="flex items-center text-white transition-all hover:no-underline">
                            <div className="text-xl font-bold text-blue-500">Apto<span className="text-white">Learn</span></div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex border-t border-gray-700 flex-col md:flex-row justify-between items-center py-4 px-4 md:mx-12">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex items-center justify-center md:justify-start">
                        <Link href="/termsandconditions" className="text-white transition-all hover:no-underline hover:text-gray-200">Terms and Conditions</Link>
                        <Link href="/privacypolicy" className="ml-8 text-white transition-all hover:no-underline hover:text-gray-200">Privacy
                            Policy</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
                    <Link href="/" className="text-white transition-all hover:no-underline hover:text-gray-200">© 2023 AptoLearn</Link>
                </div>
            </div>
        </footer>
    )
}
