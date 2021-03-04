import React from 'react';
import Layout from '../components/layout';

function blog({ posts }) {
  return (
    <Layout>
      <div>
        <h1>I am a blog</h1>

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

export async function getStaticProps() {
  const res = {
    data: [
      {
        id: '123',
        title: 'My first blog',
        author: 'Sonny',
      },
      {
        id: '456',
        title: 'Gems first blog',
        author: 'Gwen',
      },
    ],
  };
  const posts = res.data;

  return {
    props: {
      posts,
    },
  };
}

export default blog;
