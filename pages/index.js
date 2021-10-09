import Head from 'next/head';
import PostList from '../components/PostList';
import { connectToDatabase } from '../lib/mongodb';

export async function getStaticProps(){
    const {db} = await connectToDatabase()

    const posts = await db.collection('posts').find({}).toArray()

    return {
        props: {
            posts: posts.map(post => ({
                _id: post._id.toString(),
                title: post.title,
                content: post.content,
                published: post.published,
                createdAt: post.createdAt
            }))
        },
        revalidate: 1
    }
}

export default function Home({ posts }) {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Browse posts generated in NextJs"/>
            </Head>
            <PostList posts={posts} />
        </>
    );
}

