import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-row item-center justify-between p-2 pt-4 px-8 md:px-12">
            <div className="flex flex-row z-20 items-center">
                <Link href={"/"}>
                    <div className="text-2xl font-bold text-blue-600 group">Apto<span className="text-black transition-all group-hover:text-blue-600">Learn</span></div>
                </Link>
            </div>
            <nav className="flex flex-row z-20 items-center">
                <Link href={"/blog"} className="text-xl hover:text-blue-800 transition-all">
                    Blog
                </Link>
            </nav>
        </header>
    )
}
