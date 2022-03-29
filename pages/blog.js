import { Router, useRouter } from 'next/router'

function BlogPage({ posts }) {
    const router = useRouter()
    if (router.isFallback) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <h1 className="text-3xl font-bold">I am a blog</h1>

            {/* Router Example 1 */}
            {/* <Link href="/about">
                <a>Click to go to the about page</a>
            </Link> */}

            {/* Router Example 2 */}
            <button
                className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg my-3"
                onClick={() => router.push('/about')}
            >
                Click to go to the about page
            </button>

            {posts.map((post) => (
                <div key={post.id}>
                    <h2 className="text-2xl my-5">{post.title}</h2>
                    <h3>By {post.author}</h3>
                </div>
            ))}
        </div>
    )
}

// function timeout(ms) {
// }
//     return new Promise((resolve) => setTimeout(resolve, ms));
//     console.log(ms)

// setTimeout(() => {
//     console.log('wiating');
// }, 3000)

// await(timeout(3000))

// const sleep = (milliseconds, apolloClient) => {
//     return (
//         new Promise((resolve, reject) =>{
//             setTimeout(() => {
//                 const request = apolloClient.query({
//                     query: XXXXXX,
//                     variables: {handle: "XXXXXX"}
//                 });
//                 resolve(request);
//             }, milliseconds)
//         });
//     )

// await sleep(3000, apolloClient.)

export async function getStaticProps() {
    const res = {
        data: [
            {
                id: '123',
                title: 'My first blog post',
                author: 'Sonny',
            },
            {
                id: '456',
                title: "Gwen's first blog post",
                author: 'Gwen',
            },
        ],
    }

    const posts = res.data

    return {
        props: {
            posts,
        },
    }
}

export default BlogPage
