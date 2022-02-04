// /* eslint-disable react/jsx-key */

import Link from 'next/link';
import Layout from '@/components/Layout';
import Post from '@/components/Post';
import { getPosts } from '@/lib/posts';

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <h1 className='text-3xl border-b-4 p-5'>
        Welcome to my Blog! This is just for learning puprposes. None of these
        blogs are real.
      </h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <Link href='/blog'>
        <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focuse:shadow-outline w-full'>
          All posts
        </a>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  };
}
