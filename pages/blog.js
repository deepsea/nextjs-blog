import Layout from '../components/layout';
import Link from "next/link";
import { Router, useRouter } from "next/router"

function blog({ posts }) {
    const router = useRouter();
    if(router.isFallback) {
        return <h2>Loading...</h2>
    }
    return (
    <Layout>
        <div>
            <h1>I am a blog</h1>

            {/* Router Example 1 */}
            {/* <Link href="/about">
                <a>Click to go to the about page</a>
            </Link> */}

            {/* Router Example 2 */}
            <button onClick={() => router.push("/about")}>Click to go to the about page</button>
        
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <h3>By {post.author}</h3>
          </div>
        ))}
      </div>
    </Layout>
  );
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
                    title: 'My first blog',
                    author: 'Sonny'
                },
                {
                    id: '456',
                    title: 'Gems first blog',
                    author: 'Gwen'
                }
            ]
        }
        const posts = res.data
    
        return {
            props: {
                posts,
    
            }
        }
    }

export default blog
