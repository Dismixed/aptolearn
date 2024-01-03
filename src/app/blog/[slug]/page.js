import '../../blog.css'
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share";
import React from "react";
import Socials from "../../../../components/Socials";

async function getPost(slug) {
    const res = await fetch("http://localhost:3001/post/" + slug)
    return res.json()
}
export default async function Page({params}) {
    const post = await getPost(params.slug)

    if (!post) {
        console.log("gaga")
        return null
    }

    const content = `
<div class="blog-post">
        <h2 class="blog-title">Sample Blog Post Title</h2>
        <p>Welcome to my blog! This is a sample blog post content...</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat, quam non tincidunt porttitor, nisi est maximus velit, sit amet fermentum ipsum leo non turpis.</p>

        <img src="https://via.placeholder.com/400" alt="Sample Image">

        <h3>A Subheading</h3>

        <p>Curabitur et justo ac <strong>odio</strong> faucibus <em>aliquam</em> vel at justo. Suspendisse potenti.</p>

        <blockquote class="blog-quote">
            <p>"The only limit to our realization of tomorrow will be our doubts of today."</p>
            <cite>— Franklin D. Roosevelt</cite>
        </blockquote>

        <p>Donec nec urna sed nunc pellentesque varius sit amet et justo.</p>

        <h3>Another Subheading</h3>

        <p>Integer ac nisl sit amet metus gravida tincidunt.</p>

        <ul class="blog-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>

        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam efficitur ultricies ex, a dictum quam tincidunt non.</p>

        <p>Here's an ordered list:</p>
        <ol class="blog-ordered-list">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ol>

        <p>And some more <strong>bold</strong> and <em>italic</em> text for demonstration.</p>
</div>


    `


    return (
        <>
            <div className="px-24 py-24 bg-slate-50">
                <h1 className="text-5xl font-medium">{post.post.title}</h1>
                <p className="text-xl font-light mt-4">{post.post.excerpt}</p>
                <div className="flex flex-row items-center gap-4">
                    {post.post.tags.map((tag) =>
                        <div key={tag} className="border mt-4 border-black transition-all rounded-full py-2 px-4 w-min">
                            <h3 className="text-black text-md font-medium">{tag}</h3>
                        </div>)}
                </div>
                <img src={post.post.imageUrl} style={{objectFit: "contain"}} className="max-h-[50vw] mx-auto mt-8"/>
                <div className="h-0 border border-gray-200 w-full w-3/4 mx-auto mt-8" />
                <div className="mt-4 flex flex-row justify-between">
                    <div className="flex flex-col">
                        <p className="font-light text-lg">Published on:</p>
                        <p className="font-regular text-lg">January 20, 2023</p>
                    </div>
                    <Socials slug={params.slug} />
                </div>
                <article className="px-24 mt-16" id={"blog"} dangerouslySetInnerHTML={{ __html: content }}>
                </article>
                <h2 className="text-center text-5xl mt-20 font-medium">Related Posts</h2>
                <div className="grid grid-cols-3">

                </div>
            </div>
        </>
    )
}

