import { delBasePath } from 'next/dist/next-server/lib/router/router';
import React from 'react';

function SinglePostPage({ post: { id, title }, post }) {
    return (
        <div>
            <h1>I am a post (id: {id})</h1>
            <h2>{title}</h2>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const post = {
        id: params.id,
        title: `This post is the special ${params.id} post`,
    };

    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    // a fancy await call
    const paths = ['/posts/123', '/posts/456', '/posts/789'];

    return {
        paths,
        fallback: false,
    };
}

export default SinglePostPage;
