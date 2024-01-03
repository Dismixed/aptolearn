"use client"
import axios from "axios";
import Link from "next/link";
import {useEffect, useState} from "react";
import Header from "../../../components/Header";

export default function Page() {
    const [posts, setPosts] = useState([]);
    const [tag, setTag] = useState('all')
    const [filteredPosts, setFilteredPosts] = useState(posts)

    useEffect(() => {
        axios.get("http://localhost:3001/posts")
            .then((res) => {
                console.log(res.data)
                setPosts(res.data.posts)
                console.log(res.data[0])
                setFilteredPosts(res.data.posts)
            })
    }, [])

    const changeTag = (tag) => {
        setTag(tag)
        if (tag === 'all') {
            setFilteredPosts(posts)
        } else {
            const filtered = posts.filter((post) => post.tags.includes(tag))
            setFilteredPosts(filtered)
        }
    }
    return (
        <div className="bg-white">
            <Header />
            <div className="lg:px-24 md:px-12 pt-8 px-8">
                <h1 className="text-6xl font-semibold mt-8 lg:mt-0">Articles & News</h1>
                <div className="flex flex-col md:grid md:grid-cols-11 w-full mt-4">
                    <Link className="col-span-6 relative" href={`/blog/${posts[0].slug}`}>
                        {posts[0] ? <img src={posts[0].imageUrl} alt="" className="w-full h-full object-cover rounded-2xl"/> : <p>t</p>}
                    </Link>
                    <div className="col-span-5 md:ml-8 flex flex-col justify-center">
                        {posts[0] ? <h2 className="text-4xl lg:text-5xl font-semibold mt-4 lg:mt-0">{posts[0].title}</h2> : null}
                        <p className="text-2xl mt-2 lg:mt-4">Except gpgasgjhoasojgio jq gjoqigj qeooig qengoiqng q</p>
                        {posts[0] ? <Link href={`/blog/${posts[0].slug}`}>
                            <button className="lg:mt-8 mt-4 bg-blue-800 text-white px-8 py-4 text-lg rounded-full hover:bg-blue-900 transition-all">Read More</button>
                        </Link> : null}
                    </div>
                </div>
                <div className="flex md:flex-row flex-col md:items-center md:justify-between mt-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold">More Articles</h2>
                    <div className="flex md:flex-row md:items-center flex-col gap-4 lg:gap-4 mt-4 md:mt-0">
                        <button className={`${tag === "Updates" ? "bg-blue-800 text-white"
                            : "border border-blue-800 text-blue-900 hover:bg-blue-800 " +
                            "hover:text-white"} px-4 lg:min-w-[8rem] md:min-w-[6rem] py-2 lg:py-4 rounded-full text-md transition-all`}
                                onClick={() => changeTag("Updates")}>Updates</button>
                        <button className={`${tag === "Design" ? "bg-blue-800 text-white"
                            : "border border-blue-800 text-blue-900 hover:bg-blue-800 " +
                            "hover:text-white"} px-4 lg:min-w-[8rem] md:min-w-[6rem] py-2 lg:py-4 rounded-full text-md transition-all`}
                                onClick={() => changeTag("Design")}>Design</button>
                        <button className={`${tag === "Education" ? "bg-blue-800 text-white"
                            : "border border-blue-800 text-blue-900 hover:bg-blue-800 " +
                            "hover:text-white"} px-4 lg:min-w-[8rem] md:min-w-[6rem] py-2 lg:py-4 rounded-full text-md transition-all`}
                                onClick={() => changeTag("Education")}>Education</button>
                        <button className={`${tag === "all" ? "bg-blue-800 text-white"
                            : "border border-blue-800 text-blue-900 hover:bg-blue-800 " +
                            "hover:text-white"} px-4 lg:min-w-[8rem] md:min-w-[6rem] py-2 lg:py-4 rounded-full text-md transition-all`}
                                onClick={() => changeTag("all")}>All</button>
                    </div>
                </div>
                <div className={`md:grid ${filteredPosts.length <= 3 ? "lg:grid-rows-1" : "lg:grid-rows-2"} md:grid-cols-2 gap-4 md:gap-8 flex flex-col mt-8`}>
                    {filteredPosts.map((post) =>
                        <Link className="row-span-1 col-span-1 group flex flex-col pb-2" key={post.id} href={`/blog/${post.slug}`}>
                            <div className="flex flex-row items-center">
                                <div className="bg-blue-950 rounded-2xl w-1/2 lg:w-1/3 mr-4">
                                    <img className="rounded-2xl group-hover:scale-90 transition-all" loading={"lazy"} style={{objectFit: "contain"}} src={post.imageUrl} alt={post.title} />
                                </div>
                                <div className="flex flex-col lg:w-5/8">
                                    <div className="flex flex-col-reverse md:flex-col">
                                        <div className="flex flex-row items-center gap-4">
                                            {post.tags.map((tag) =>
                                                <div className="border mt-4 border-blue-800 group-hover:bg-blue-800 transition-all rounded-full py-2 px-4 w-min">
                                                    <h3 className="text-blue-950 transition-all group-hover:text-white text-md md:text-sm font-medium">{tag}</h3>
                                                </div>)}
                                        </div>
                                        <h2 className="text-2xl text-indigo-950 font-black mt-4">{post.title}</h2>
                                    </div>
                                    <p className="text-gray-600 text-lg font-light mt-2 md:hidden block">This is a test excerpt. The article is about how Aptolearn helps students.</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-lg font-light mt-2 md:block hidden">This is a test excerpt. The article is about how Aptolearn helps students.</p>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    )
}
